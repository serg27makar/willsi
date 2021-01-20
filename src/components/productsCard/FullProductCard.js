import React from "react";
import "../../access/css/cart.css"
import {
    actionDataRedirect,
    actionProductID,
    actionSearchItemNew,
    actionSearchItemParams,
} from "../../action";
import {connect} from "react-redux";
import CircleLevel from "../shared/CircleLevel";
import {isEmptyObject, miDateFormatNumber, miDateFormatParser, validPostpone} from "../../js/sharedFunctions";
import PostponeButton from "./PostponeButton";
import {langCode} from "../../access/lang/translaterJS";

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
        this.isNew = this.isNew.bind(this);
        this.filterNew = this.filterNew.bind(this);
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

    isNew(date) {
        date = new Date(miDateFormatParser(date));
        const currentDate = new Date();
        return miDateFormatNumber(date) + 14 >= miDateFormatNumber(currentDate);
    }

    currency(number) {
        return number + " " + langCode(this.props.lang, "grn");
    }

    filterManufacturer(itemValue) {
        itemValue = String(itemValue).toUpperCase()
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
        const item = {catalogName: "ManufacturerSearch", itemValue: itemValue };
        this.props.searchItemParamsFunction(item);
    }

    filterNew(e) {
        e.preventDefault();
        e.stopPropagation();
        if (this.props.searchItemNew) {
            this.props.searchItemNewFunction(0);
        } else {
            const currentDate = new Date();
            const findDate = miDateFormatNumber(currentDate) - 14;
            this.props.searchItemNewFunction(findDate);
        }
    }

    renderNew(item) {
        if (item.registrationDate && this.isNew(item.registrationDate)) {
            return (
                <div className="new-icon-marker" onClick={this.filterNew}/>
            )
        }

    }

    renderPostpone = (item) => {
        if (item.postpone || validPostpone(this.props.Postpone, item._id)) {
            return (
                <div className="card-box__circle-overflow">
                    <div className="card-box__circle-blue">
                        <svg className="icon icon-shopping-bag ">
                            <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#shopping-bag"/>
                        </svg>
                        <span className="card-box__circle-text text-12 uppercase bold">{langCode(this.props.lang, "Delayed")}</span>
                    </div>
                </div>
            )
        }
        return null;
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
                        {this.renderNew(item)}
                        <CircleLevel catalog={this.props.catalog} level={item.Parameters.compatibility || item.compatibility} SizeStandard={item.Parameters.SizeStandard}/>
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
        searchItemNew: state.catalogReducer.searchItemNew,
        lang: state.utiliteReducer.lang,
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
        searchItemNewFunction: (searchItemNew) => {
            dispatch(actionSearchItemNew(searchItemNew))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(FullProductCard);
