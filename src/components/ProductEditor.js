import React from "react";
import {connect} from "react-redux";
import ru from "../access/lang/LangConstants";
import {actionSelectedProductToEdit} from "../action";
import AddButton from "./adminPanel/AddButton";

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
        };
        this.dataOnChange = this.dataOnChange.bind(this);
        this.searchItem = this.searchItem.bind(this);
    }

    componentDidMount() {
        if (this.props.list) this.fillList();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.list !== this.props.list) this.fillList();
    }

    fillList() {
        this.setState({
            ...this.state,
            list: this.props.list,
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

    renderListEditor(item, index) {
        return (
            <div className="stroke-descriptor-wrapper" key={index} onClick={() => {this.selectedProductToEdit(item)}}>
                <div className="stroke-descriptor-number text-14">{index + 1}</div>
                <div className="stroke-descriptor-manufacturer text-14">{item.Manufacturer}</div>
                <div className="stroke-descriptor-name text-14">{item.ProdName}</div>
                <div className="stroke-descriptor-code text-14">{item.ProductCode}</div>
            </div>
        )
    }

    renderSearchInput(item, index) {
        return (
            <div className="stroke-descriptor-manufacturer" key={index}>
                <label className="search-label">
                    <input className="search-input text-14 light"
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
                <div className="stroke-descriptor-number text-14"/>
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
                    <div className="stroke-descriptor-number text-14"> № </div>
                    <div className="stroke-descriptor-manufacturer text-14">{ru.Manufacturer}</div>
                    <div className="stroke-descriptor-name text-14">{ru.ProdName}</div>
                    <div className="stroke-descriptor-code text-14">{ru.ProductCode}</div>
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
    return {}
}
const mapDispatchToProps = dispatch => {
    return {
        selectedProductToEditFunction: (SelectedProductToEdit) => {
            dispatch(actionSelectedProductToEdit(SelectedProductToEdit))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(ProductEditor);
