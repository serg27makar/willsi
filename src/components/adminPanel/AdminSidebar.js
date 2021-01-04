import MainListCatalogProducts from "./MainListCatalogProducts";
import React from "react";
import StoreDropdown from "./StoreDropdown";
import {connect} from "react-redux";
import {dropdownListArr} from "../../access/temporaryConstants";
import {isEmptyObject} from "../../js/sharedFunctions";
import {getProductDataToId} from "../../utilite/axiosConnect";
import {actionProductsThisStore, actionSelectedProductToEdit, actionShopEditParams} from "../../action";

class AdminSidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            refresh: false
        };
        this.productsData = this.productsData.bind(this);
        this.clearData = this.clearData.bind(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.selectedStore !== this.props.selectedStore && !isEmptyObject(this.props.selectedStore)) {
            getProductDataToId(this.props.selectedStore._id, this.productsData);
            this.props.shopEditParamsFunction([]);
            this.clearData();

        }
        if (prevProps.SelectedProductToEdit !== this.props.SelectedProductToEdit && !isEmptyObject(this.props.SelectedProductToEdit)) {
            getProductDataToId(this.props.selectedStore._id, this.productsData);
            this.props.shopEditParamsFunction([]);
        }
        if (prevState.refresh !== this.state.refresh) {
            getProductDataToId(this.props.selectedStore._id, this.productsData);
        }
    }

    clearData(refresh = false) {
        if (refresh) {
            this.setState({
                ...this.state,
                refresh: !this.state.refresh
            })
        }
        this.props.selectedProductToEditFunction({});
        this.props.addProduct(!this.props.addButton);
    }

    productsData(data = []) {
        this.props.productsThisStoreFunction(data)
    }

    render() {
        return (
            <div className="main-admin__sidebar sidebar">
                <div className="sidebar__button-list">
                    <StoreDropdown clearData={this.clearData}/>
                </div>
                <MainListCatalogProducts dropdownList={dropdownListArr} addProduct={this.clearData}/>
            </div>
        )
    }
}

function MapStateToProps(state) {
    return {
        StoreArr: state.storeReducer.StoreArr,
        selectedStore: state.storeReducer.selectedStore,
        SelectedProductToEdit: state.productReducer.SelectedProductToEdit,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        selectedProductToEditFunction: (SelectedProductToEdit) => {
            dispatch(actionSelectedProductToEdit(SelectedProductToEdit))
        },
        shopEditParamsFunction: (ShopEditParams) => {
            dispatch(actionShopEditParams(ShopEditParams))
        },
        productsThisStoreFunction: (productsThisStore) => {
            dispatch(actionProductsThisStore(productsThisStore))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(AdminSidebar);
