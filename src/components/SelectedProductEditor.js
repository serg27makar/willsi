import React from "react";
import {connect} from "react-redux";
import {actionSelectedProductToEdit, setActionAdminPanel} from "../action";
import AdminMainSite from "./adminPanel/AdminMainSite";

class SelectedProductEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: {}
        };
        this.updateProduct = this.updateProduct.bind(this);
    }

    componentDidMount() {
        if (this.props.item) {
            this.setState({
                item: this.props.item,
            })
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.item !== this.props.item) {
            this.setState({
                item: this.props.item,
            })
        }
    }

    updateProduct() {
        this.props.selectedProductToEditFunction({});
    }

    render() {
        return (
            <div>
                <AdminMainSite storeID={this.state.item.ProductStoreID} item={this.state.item} closeMainSite={this.updateProduct}/>
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
