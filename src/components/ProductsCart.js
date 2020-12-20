import React from "react";
import ru from "../access/lang/LangConstants";
import "../access/css/cart.css"
import ButtonPostpone from "./shared/ButtonPostpone";
import {
    actionDataRedirect,
    actionPostpone,
    actionProductID,
    actionSearchItemParams,
    actionSetActionPostpone
} from "../action";
import {connect} from "react-redux";
import CircleLevel from "./shared/CircleLevel";
import {postUpdate} from "../utilite/axiosConnect";
import {isEmptyObject, updateResult, validPostpone} from "../js/sharedFunctions";
import ButtonMain from "./shared/ButtonMain";

class ProductsCart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            _id: "",
            postpone: false,
        };
        this.openCard = this.openCard.bind(this);
        this.addPostpone = this.addPostpone.bind(this);
        this.updateData = this.updateData.bind(this);
    }

    openCard(productID) {
        this.props.productIDFunction(productID);
        this.props.dataRedirectFunction({
            accessR: true,
            to: "/cart",
        })
    }

    detailsParameters(item) {
        if (typeof item === "object") {
            return item.Price;
        }
    }

    addPostpone(item) {
        const Postpone = this.props.Postpone || [];
        const thing = {
            product: item._id,
            parameter: item.Parameters._id,
            compatibility: item.Parameters.compatibility,
        };
        Postpone.push(thing);
        this.updateData(Postpone);
    }

    updateData(Postpone) {
        const user = {
            UserID: this.props.UserID,
            Postpone,
        };
        this.props.setActionPostponeFunction(!this.props.SetActionPostpone);
        this.props.postponeFunction(Postpone);
        postUpdate(user, updateResult);
    }

    filterManufacturer(itemValue) {
        const searchItemParams = this.props.searchItemParams;
        if (!isEmptyObject(searchItemParams)) {
            const index = searchItemParams.itemValue.indexOf(itemValue);
            if (index !== -1) {
                searchItemParams.itemValue.splice(index, 1);
            } else {
                searchItemParams.itemValue.push(itemValue);
            }
            itemValue = searchItemParams.itemValue;
        } else {
            itemValue = [itemValue];
        }
        const item = {catalogName: "Manufacturer", itemValue: itemValue };
        this.props.searchItemParamsFunction(item);
    }

    removePostpone(item) {
        const Postpone = this.props.Postpone;
        Postpone.map((itemPostpone, index) => {
            if (itemPostpone.product === item._id) {
                Postpone.splice(index, 1);
            }
            return Postpone;
        });
        this.updateData(Postpone);
    }

    renderCart = (item, index) => {
        return (
            <div className={this.props.compilation ? "compilation-deferred-goods" : "deferred-goods"} key={index}>
                <div className="card-box">
                    <div className="card-box__picture" onClick={() => {this.openCard(item._id)}}>
                        <picture className="picture">
                            <img className="picture__source" src={item.Photo1} alt={item.ProdName}/>
                        </picture>
                        <CircleLevel catalog={this.props.catalog} level={item.Parameters.compatibility || item.compatibility}/>
                        {this.renderPostpone(item)}
                    </div>
                    <div className="card-box__product-name text-18 bold uppercase" onClick={() => {this.filterManufacturer(item.Manufacturer)}}>{item.Manufacturer}</div>
                    <p className="card-box__product-info text-14 light">{item.ProdName}</p>
                    <p className="card-box__product-quantity text-18 bold color-aqua uppercase">{this.detailsParameters(item.Parameters)}</p>
                    {this.renderButton(item)}
                </div>
            </div>
        )
    };

    renderPostpone = (item) => {
        if (item.postpone || validPostpone(this.props.Postpone, item._id)) {
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
        if (item.postpone || validPostpone(this.props.Postpone, item._id)) {
            return (
                <div className="card-box__button-postpone">
                    <ButtonMain btnClass={"button-main remove-postpone text-18 uppercase medium"}
                                text={ru.removeItem} onClick={() => {this.removePostpone(item)}}/>
                </div>
            )
        } else {
            return (
                <div className="card-box__button-postpone">
                    <ButtonPostpone  onClick={() => {this.addPostpone(item)}}/>
                </div>
            )
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
    return {
        UserID: state.userReducer.UserID,
        Postpone: state.userReducer.Postpone,
        SetActionPostpone: state.userReducer.SetActionPostpone,
        searchItemParams: state.catalogReducer.searchItemParams,
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
        postponeFunction: (Postpone) => {
            dispatch(actionPostpone(Postpone))
        },
        setActionPostponeFunction: (SetActionPostpone) => {
            dispatch(actionSetActionPostpone(SetActionPostpone))
        },
        searchItemParamsFunction: (searchItemParams) => {
            dispatch(actionSearchItemParams(searchItemParams))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(ProductsCart);
