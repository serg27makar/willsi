import React from "react";
import ru from "../access/lang/LangConstants";
import "../access/css/cart.css"
import ButtonPostpone from "./shared/ButtonPostpone";
import {actionDataRedirect, actionProductID} from "../action";
import {connect} from "react-redux";

class ProductsCart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
        this.openCard = this.openCard.bind(this);
    }

    openCard(productID) {
        this.props.productIDFunction(productID);
        this.props.dataRedirectFunction({
            accessR: true,
            to: "/cart",
        })
    }

    renderCart = (item, index) => {
        return (
            <div className={this.props.compilation ? "compilation-deferred-goods" : "deferred-goods"} key={index}>
                <div className="card-box">
                    <div className="card-box__picture" onClick={() => {this.openCard(item._id)}}>
                        <picture className="picture">
                            <img className="picture__source" src={item.Photo1} alt={item.ProdName}/>
                        </picture>
                        <div className="card-box__circle" style={{backgroundImage: "url('static/img/content/circle-40.png')"}}/>
                        {this.renderPostpone(item)}
                    </div>
                    <div className="card-box__product-name text-18 bold uppercase">{item.Manufacturer}</div>
                    <p className="card-box__product-info text-14 light">{item.ProdName}</p>
                    <p className="card-box__product-quantity text-18 bold color-aqua uppercase">{item.Price}</p>
                    {this.renderButton(item)}
                </div>
            </div>
        )
    };

    renderPostpone = (item) => {
        if (item.postpone) {
            return (
                <div className="card-box__circle-overflow">
                    <div className="card-box__circle-blue">
                        <svg className="icon icon-shopping-bag ">
                            <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#shopping-bag"/>
                        </svg>
                        <span className="card-box__circle-text text-12 uppercase bold">{ru.Delayed}</span>
                    </div>
                </div>
            )
        } else {
            return null;
        }
    };

    renderButton = (item) => {
        if (!item.postpone) {
            return (
                <div className="card-box__button-postpone">
                   <ButtonPostpone/>
                </div>
            )
        } else {
            return null;
        }
    };

    render() {
        return (
            <div>
                <div className={this.props.compilation ? "compilation-row footer-row-wrap" : "row-wrap"}>
                    {this.props.products && this.props.products.map((item, index) => {
                        return this.renderCart(item, index)
                    })}
                </div>
            </div>

        )
    }
}

function MapStateToProps(state) {
    return {}
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

export default connect(MapStateToProps, mapDispatchToProps)(ProductsCart);
