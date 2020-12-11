import React from "react";
import "../../access/css/cart.css"
import {
    actionDataRedirect,
    actionPostpone,
    actionProductID,
    actionSearchItemParams,
    actionSetActionPostpone
} from "../../action";
import {connect} from "react-redux";
import {isEmptyObject} from "../../js/sharedFunctions";

class AdminProductsCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }

    detailsParameters(item) {
        if (typeof item === "object") {
            return item.Price;
        }
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

    renderCart = (item, index) => {
        return (
            <div className={this.props.compilation ? "compilation-deferred-goods" : "deferred-goods"} key={index}>
                <div className="card-box">
                    <div className="card-box__picture">
                        <picture className="picture">
                            <img className="picture__source" src={item.Photo1} alt={item.ProdName}/>
                        </picture>
                    </div>
                    <div className="card-box__product-name text-18 bold uppercase" onClick={() => {this.filterManufacturer(item.Manufacturer)}}>{item.Manufacturer}</div>
                    <p className="card-box__product-info text-14 light">{item.ProdName}</p>
                    <p className="card-box__product-quantity text-18 bold color-aqua uppercase">{this.detailsParameters(item.Parameters)}</p>
                </div>
            </div>
        )
    };

    render() {
        return (
                <div className={this.props.compilation ? "compilation-row footer-row-wrap" : "row-wrap"}>
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

export default connect(MapStateToProps, mapDispatchToProps)(AdminProductsCard);
