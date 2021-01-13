import React from 'react';
import {connect} from "react-redux";
import AdminMainSite from "../../components/adminPanel/AdminMainSite";
import ProductEditor from "../../components/ProductEditor";
import SelectedProductEditor from "../../components/SelectedProductEditor";
import {isEmptyObject} from "../../js/sharedFunctions";
import AddButton from "./AddButton";

class MainScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAddBtn: true,
        };
        this.addProduct = this.addProduct.bind(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.addButton !== this.props.addButton) {
            this.addProduct(true)
        }
    }

    addProduct(isAddBtn) {
        this.setState({
            ...this.state,
            isAddBtn,
        })
    }

    renderMain() {
        if (!isEmptyObject(this.props.SelectedProductToEdit)) {
            return (
                <SelectedProductEditor item={this.props.SelectedProductToEdit} addProduct={this.addProduct}/>
            )
        } else if (this.props.ShopEditParams && this.props.ShopEditParams.length > 0) {
            return (
                <ProductEditor list={this.props.ShopEditParams} addProduct={this.addProduct}/>
            )
        } else if (this.state.isAddBtn) {
            return(
                <AddButton addProduct={this.addProduct}/>
            )
        } else {
            return (
                <AdminMainSite storeID={this.props.selectedStore && this.props.selectedStore._id} addProduct={this.addProduct} catalogs={this.props.defineCatalog}/>
            )
        }
    }

    render() {
        return(
            <div className="main-admin__main-envelope">
                {this.renderMain()}
            </div>
        )
    }
}

function MapStateToProps(state) {
    return {
        ShopEditParams: state.productReducer.ShopEditParams,
        ShopEditParamsAction: state.productReducer.ShopEditParamsAction,
        SelectedProductToEdit: state.productReducer.SelectedProductToEdit,
        selectedStore: state.storeReducer.selectedStore,
        defineCatalog: state.catalogReducer.defineCatalog,
    }
}

const mapDispatchToProps = dispatch => {
    return {}
};

export default connect(MapStateToProps, mapDispatchToProps)(MainScreen);

