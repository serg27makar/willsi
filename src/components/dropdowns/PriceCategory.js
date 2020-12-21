import React from "react";
import {actionSearchItemPrice} from "../../action";
import {connect} from "react-redux";
import ru from "../../access/lang/LangConstants";
import SliderInput from "./SliderInput";

class PriceCategory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: "",
            price: {
                priceFrom: 0,
                priceTo: 10000,
            }
        };
        this.closeOpen = this.closeOpen.bind(this);
        this.setPriceData = this.setPriceData.bind(this);
        this.replacePrice = this.replacePrice.bind(this);
    }

    closeOpen() {
        this.setState({
            ...this.state,
            open: this.state.open === "" ?
                "open" : "",
        })
    };

    replacePrice() {
        this.props.searchItemPriceFunction(this.state.price)
    }

    setPriceData(data) {
        this.setState({
            ...this.state,
            price: {
                ...this.state.price,
                priceFrom: data.priceFrom,
                priceTo: data.priceTo,
            }
        })
    }

    render() {
        return (
            <div className="catalog-sidebar__item">
                <div className="catalog-wrapper text-18 medium" onClick={this.closeOpen}>
                    <span className="catalog-wrapper__name">{ru[this.props.item.catalogName]}</span>
                    <svg className="icon icon-arrow-small ">
                        <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#arrow-small"/>
                    </svg>
                </div>
                <div className={"catalog__category-list " + this.state.open}>
                    <div className="category-list">
                        <SliderInput setPriceData={this.setPriceData} replacePrice={this.replacePrice}/>
                    </div>
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
        searchItemPriceFunction: (searchItemPrice) => {
            dispatch(actionSearchItemPrice(searchItemPrice))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(PriceCategory);
