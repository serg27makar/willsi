import React from "react";
import {connect} from "react-redux";
import {actionSelectedProductToEdit, actionToggleHiddenUpdate} from "../action";
import AddButton from "./adminPanel/AddButton";
import ToggleButton from "./shared/ToggleButton";
import {showHiddenDataSet, showHiddenItemData} from "../js/dataUpdateFunctions";
import {langCode} from "../access/lang/translaterJS";

const searchItemName = [
    "Manufacturer", "ProdName", "ProductCode"
]
class ProductEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Manufacturer: "",
            ProdName: "",
            ProductCode: "",
            list: [],
            allStoreAdminToggle: false,
            listActive: false,
        };
        this.dataOnChange = this.dataOnChange.bind(this);
        this.searchItem = this.searchItem.bind(this);
        this.storeAdminToggle = this.storeAdminToggle.bind(this);
        this.updateAllDate = this.updateAllDate.bind(this);
    }

    componentDidMount() {
        if (this.props.list) this.fillList();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.list !== this.props.list) this.fillList();
        if (prevState.listActive !== this.state.listActive) this.fillAllStoreAdmin();
    }

    fillList() {
        this.setState({
            ...this.state,
            list: this.props.list,
            listActive: !this.state.listActive,
        })
    }

    fillAllStoreAdmin() {
        let allStoreAdminToggle = false;
        this.state.list.map((item) => {
            if (!item.storeAdmin) {
                allStoreAdminToggle = true;
            }
            return allStoreAdminToggle;
        })
        this.setState({
            ...this.state,
            allStoreAdminToggle,
        })
    }

    selectedProductToEdit(item) {
        this.props.selectedProductToEditFunction(item);
    }

    dataOnChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.searchItem(name, value)
    }

    searchItem(name, value) {
        const list = [];
        this.props.list.map(item => {
            if (item[name].toUpperCase().indexOf(value.toUpperCase()) !== -1) {
                list.push(item);
            }
            return list;
        })
        let clearData = this.state;
        clearData = {
            ...clearData,
            Manufacturer: "",
            ProdName: "",
            ProductCode: "",
        }
        this.setState({
            ...clearData,
            [name]: value,
            list,
        })
    }

    updateAllDate() {
        setTimeout(() => {
            this.props.toggleHiddenUpdateFunction(!this.props.toggleHiddenUpdate);
        }, 300)
    }

    storeAdminToggle(e, item) {
        e.preventDefault();
        e.stopPropagation();
        showHiddenItemData(item.ProductStoreID, item._id, "storeAdmin", !item.storeAdmin, this.updateAllDate);
        let list = this.state.list;
        this.state.list.map((product, index) => {
            if (item._id === product._id) {
                list[index].storeAdmin = !item.storeAdmin
            }
            return list;
        })
        this.setState({
            ...this.state,
            list,
            listActive: !this.state.listActive,
        })
    }

    storeAdminAllToggle(e) {
        e.preventDefault();
        e.stopPropagation();

        let allStoreAdminArr = [];
        this.state.list.map((item) => {
            item = {...item, storeAdmin: this.state.allStoreAdminToggle}
            allStoreAdminArr.push(item);
            return allStoreAdminArr;
        })
        showHiddenDataSet(this.state.list[0].ProductStoreID, allStoreAdminArr, "storeAdmin", this.state.allStoreAdminToggle, this.updateAllDate);
        this.setState({
            ...this.state,
            list: allStoreAdminArr,
            allStoreAdminToggle: !this.state.allStoreAdminToggle,
            listActive: !this.state.listActive,
        })
    }

    renderListEditor(item, index) {
        return (
            <div className="stroke-descriptor-wrapper" key={index} onClick={() => {this.selectedProductToEdit(item)}}>
                <div className="stroke-descriptor-toggle-btn">
                    <ToggleButton active={!item.storeAdmin} onClick={(e) => {this.storeAdminToggle(e, item)}}/>
                </div>
                <div className="stroke-descriptor-number text-12">{index + 1}</div>
                <div className="stroke-descriptor-manufacturer text-12">{item.Manufacturer}</div>
                <div className="stroke-descriptor-name text-12">{item.ProdName}</div>
                <div className="stroke-descriptor-code text-12">{item.ProductCode}</div>
            </div>
        )
    }

    renderSearchInput(item, index) {
        return (
            <div className="stroke-descriptor-manufacturer" key={index}>
                <label className="search-label">
                    <input className="search-input text-12 light"
                           type={"text"}
                           name={item}
                           value={this.state[item]}
                           onChange={this.dataOnChange}
                    />
                </label>
            </div>
        )
    }

    renderSearchBlock() {
        return (
            <div className="stroke-descriptor-wrapper">
                <div className="stroke-descriptor-toggle-btn">
                    <ToggleButton active={this.state.allStoreAdminToggle} onClick={(e) => {this.storeAdminAllToggle(e)}}/>
                </div>
                {searchItemName.map((item, index) => {
                    return this.renderSearchInput(item, index);
                })}
                <svg className="search-label icon">
                    <use xlinkHref={"static/img/svg-sprites/symbol/sprite.svg#search"}/>
                </svg>
            </div>
        )
    }

    render() {
        return (
            <div>
                <div className="stroke-descriptor-wrapper">
                    <div className="stroke-descriptor-number text-12"> № </div>
                    <div className="stroke-descriptor-manufacturer text-12">{langCode(this.props.lang, "Manufacturer")}</div>
                    <div className="stroke-descriptor-name text-12">{langCode(this.props.lang, "ProdName")}</div>
                    <div className="stroke-descriptor-code text-12">{langCode(this.props.lang, "ProductCode")}</div>
                </div>
                {this.renderSearchBlock()}
                {this.state.list && this.state.list.map((item, index) => {
                    return this.renderListEditor(item, index);
                })}
                <AddButton lastItem={true} addProduct={this.props.addProduct}/>
            </div>
        )
    }
}

function MapStateToProps(state) {
    return {
        toggleHiddenUpdate: state.utiliteReducer.toggleHiddenUpdate,
        lang: state.utiliteReducer.lang,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        selectedProductToEditFunction: (SelectedProductToEdit) => {
            dispatch(actionSelectedProductToEdit(SelectedProductToEdit))
        },
        toggleHiddenUpdateFunction: (toggleHiddenUpdate) => {
            dispatch(actionToggleHiddenUpdate(toggleHiddenUpdate))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(ProductEditor);
