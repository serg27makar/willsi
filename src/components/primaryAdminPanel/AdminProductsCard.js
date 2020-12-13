import React from "react";
import "../../access/css/cart.css"
import {
    actionDataRedirect,
    actionProductID,
} from "../../action";
import {connect} from "react-redux";

class AdminProductsCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }

    renderCart = (item, index) => {
        return (
            <div className="deferred-goods" key={index}>
                <div className="card-box">
                    <div className="card-box__picture">
                        <picture className="picture">
                            <img className="picture__source" src={item.Photo1} alt={item.ProdName}/>
                        </picture>
                    </div>
                    <div className="card-box__product-name text-18 bold uppercase">{item.Manufacturer}</div>
                    <p className="card-box__product-info text-14 light">{item.ProdName}</p>
                </div>
            </div>
        )
    };

    render() {
        return (
                <div className="row-wrap">
                    {this.props.products && this.props.products.map((item, index) => {
                        return this.renderCart(item, index)
                    })}
                </div>

        )
    }
}

function MapStateToProps(state) {
    return {
        UserID: state.userReducer.UserID,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        dataRedirectFunction: (dataRedirect) => {
            dispatch(actionDataRedirect(dataRedirect))
        },
        productIDFunction: (ProductID) => {
            dispatch(actionProductID(ProductID))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(AdminProductsCard);
