import React from "react";
import {actionOpenModal, actionSelectedStore, actionSetStoreArr} from "../../action";
import {connect} from "react-redux";
import {isEmptyObject} from "../../js/sharedFunctions";
import ToggleButton from "../shared/ToggleButton";
import {showHiddenAllStoreData} from "../../js/dataUpdateFunctions";
import {getStoreData} from "../../utilite/axiosConnect";

class StoreDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameStore: "",
            open: "",
            StoreArr: [],
            firstLoad: true,
            activeToggle: true,
        };
        this.changeItem = this.changeItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.closeOpen = this.closeOpen.bind(this);
        this.hiddenAllProducts = this.hiddenAllProducts.bind(this);
        this.clearData = this.clearData.bind(this);
    }

    componentDidMount() {}

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.StoreArr !== this.props.StoreArr && this.props.StoreArr.length > 0) {
            if (isEmptyObject(this.props.selectedStore)) {
                this.props.selectedStoreFunction(this.props.StoreArr[0])
            }
            this.setState({
                ...this.state,
                StoreArr: this.props.StoreArr,
            })
        }
        if (!isEmptyObject(this.props.selectedStore) && this.state.nameStore !== this.props.selectedStore.nameStore) {
            this.setState({
                ...this.state,
                nameStore: this.props.selectedStore.nameStore,
                activeToggle: this.props.selectedStore.storeAdmin
            })
        }
        if (prevState.activeToggle !== this.state.activeToggle) {
            getStoreData(this.storeData);
        }
    }

    closeOpen() {
        this.setState({
            ...this.state,
            open: this.state.open === "" ? "open" : "",
        })
    };

    changeItem(item) {
        this.closeOpen();
        this.props.selectedStoreFunction(item);
    }

    addItem() {
        this.closeOpen();
        this.props.openModalFunction("addServiceModal");
    }

    hiddenAllProducts(e) {
        e.stopPropagation();
        e.preventDefault();
        this.setState({
            ...this.state,
            activeToggle: !this.state.activeToggle,
        })
        showHiddenAllStoreData(this.props.selectedStore._id, "storeAdmin", this.state.activeToggle, this.clearData);
    }

    clearData() {
        this.props.clearData(true);
    }

    storeData(res) {
        if (res && res.length > 0) {
            this.props.setStoreArrFunction(res);
        }
    }

    renderItem = (item, index) => {
        if (this.props.selectedStore._id !== item._id)
        return (
            <div className="dropdown-info__item" key={index} onClick={() => {this.changeItem(item)}}>
                <div className="border-line" />
                <div className="dropdown-info__link text-16 bold uppercase">{item.nameStore}</div>
            </div>
        )
    };

    render() {
        return (
            <div className="select-fitting-user">
                <div className="catalog-top__dropdown-info">
                    <div className="catalog-top__button-toggle-btn">
                        <ToggleButton active={this.state.activeToggle} onClick={this.hiddenAllProducts}/>
                    </div>
                    <div className="catalog-top__button-drop" onClick={this.closeOpen}>
                        <div className="catalog-top__button-text text-16 bold uppercase margin-left">{this.state.nameStore}</div>
                        <span className="catalog-top__button-icon">
                            <svg className="icon icon-arrow-small ">
                              <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#arrow-small"/>
                            </svg>
                        </span>
                    </div>
                    <div className={"dropdown-info " + this.state.open}>
                        {this.state.StoreArr && this.state.StoreArr.map((item, index) => {
                            return this.renderItem(item, index);
                        })}
                        <div className="dropdown-info__item" onClick={this.addItem} hidden={this.props.hidden}>
                            <div className="dropdown-info__link icon-plus"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function MapStateToProps(state) {
    return {
        StoreArr: state.storeReducer.StoreArr,
        addStore: state.storeReducer.addStore,
        selectedStore: state.storeReducer.selectedStore,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        openModalFunction: (modal) => {
            dispatch(actionOpenModal(modal))
        },
        selectedStoreFunction: (selectedStore) => {
            dispatch(actionSelectedStore(selectedStore))
        },
        setStoreArrFunction: (StoreArr) => {
            dispatch(actionSetStoreArr(StoreArr))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(StoreDropdown);
