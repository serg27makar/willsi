import React from "react";
import {connect} from "react-redux";
import {actionSelectedProductToEdit} from "../action";
import AdminMainSite from "./adminPanel/AdminMainSite";

class SelectedProductEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: {}
        };
        this.updateProduct = this.updateProduct.bind(this);
    }

    updateProduct() {
        this.props.selectedProductToEditFunction({});
        this.props.addProduct(true);
    }

    render() {
        return (
            <div>
                <AdminMainSite storeID={this.props.item.ProductStoreID} item={this.props.item} addProduct={this.updateProduct}/>
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

export default connect(MapStateToProps, mapDispatchToProps)(SelectedProductEditor);
