import React from "react";
import ru from "../../access/lang/LangConstants";
import {connect} from "react-redux";
import {actionSelectedProductToEdit, actionShopEditParams} from "../../action";

class AddButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.addProduct = this.addProduct.bind(this);
    }

    addProduct() {
        this.props.selectedProductToEditFunction({});
        this.props.shopEditParamsFunction([]);
        this.props.addProduct(false);
    }

    render() {
        return (
            <div className={"add-cart-block " + (this.props.lastItem ? "last-item" : "")}>
                <div className="add-cart-btn" onClick={this.addProduct}>+</div>
                <div className="add-cart-text uppercase" id="blink">{ru.addProduct}</div>
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
        shopEditParamsFunction: (ShopEditParams) => {
            dispatch(actionShopEditParams(ShopEditParams))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(AddButton);
