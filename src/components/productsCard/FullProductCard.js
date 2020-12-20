import React from "react";
import ru from "../../access/lang/LangConstants";
import "../../access/css/cart.css"
import {
    actionDataRedirect,
    actionProductID,
    actionSearchItemParams,
} from "../../action";
import {connect} from "react-redux";
import CircleLevel from "../shared/CircleLevel";
import {isEmptyObject, validPostpone} from "../../js/sharedFunctions";
import PostponeButton from "./PostponeButton";

class FullProductCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            _id: "",
            postpone: false,
        };
        this.openCard = this.openCard.bind(this);
        this.detailsParameters = this.detailsParameters.bind(this);
        this.filterManufacturer = this.filterManufacturer.bind(this);
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
            return this.currency(item.Price);
        }
    }

    currency(number) {
        return number + " грн."
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

    render() {
        const item = this.props.item;
        return (
            <div className={this.props.compilation ? "compilation-deferred-goods" : "deferred-goods"}>
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
                    <PostponeButton item={item}/>
                </div>
            </div>
        )
    }
}

function MapStateToProps(state) {
    return {
        Postpone: state.userReducer.Postpone,
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
        searchItemParamsFunction: (searchItemParams) => {
            dispatch(actionSearchItemParams(searchItemParams))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(FullProductCard);
