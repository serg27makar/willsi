import React from "react";
import ru from "../../access/lang/LangConstants";
import LangCat from "../../access/lang/CatalogLangConstants";
import {
    actionShopEditParams,
    actionShopEditParamsAction,
} from "../../action";
import {connect} from "react-redux";
import ToggleButton from "../shared/ToggleButton";
import {showHiddenCatalogData} from "../../js/dataUpdateFunctions";

class MainListCatalogProducts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            catalogProducts: [],
            open: "dropdown-list open",
            close: "dropdown-list",
            active: "catalog-button catalog-opened",
            passive: "catalog-button",
            openIndex: -1,
            selectedSubCatalog: -1,
            activeToggle: {},
        }
        this.countProducts = this.countProducts.bind(this);
        this.chooseSubCatalog = this.chooseSubCatalog.bind(this);
        this.addProduct = this.addProduct.bind(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.dropdownList !== this.props.dropdownList) {
            let activeToggle = {};
            this.props.dropdownList.map((item) => {
                return activeToggle = {
                    ...activeToggle,
                    [item.dropdownTitle]: false,
                }
            })
            this.setState({...this.state, activeToggle})
        }
        if (prevProps.productsThisStore !== this.props.productsThisStore) {
            let activeToggle = this.state.activeToggle;
            this.props.productsThisStore.map((item) => {
                if (!item.storeAdmin) {
                    activeToggle = {
                        ...activeToggle,
                        [item.topCatalog]: true,
                    }
                }
            })
            this.setState({...this.state, activeToggle})
        }
    }

    chooseSubCatalog(listItem, listIndex) {
        const shopEditParams = [];
        if (this.state.selectedSubCatalog !== listIndex) {
            this.props.productsThisStore.map((item, index) => {
                if (item.subCatalog === listItem) {
                    shopEditParams.push(item);
                }
                return index;
            });
        }
        this.setState({
            selectedSubCatalog: this.state.selectedSubCatalog === listIndex ? -1 : listIndex,
        });
        this.props.shopEditParamsFunction(shopEditParams);
        this.props.shopEditParamsActionFunction(!this.props.ShopEditParamsAction);
        this.props.addProduct();
    }

    closeOpen = (index) => {
        this.setState({
            ...this.state,
            openIndex: this.state.openIndex === index ? -1 : index,
        })
    };

    countProducts(title) {
        let i = 0;
        this.props.productsThisStore.map((item, index) => {
            if (item.topCatalog === title) i++
            if (item.subCatalog === title) i++
            return index;
        });
        return i;
    }

    addProduct() {
        this.props.addProduct(true);
    }

    hiddenProductsToCatalog(topCatalog) {
        this.setState({
            ...this.state,
            activeToggle: {
                ...this.state.activeToggle,
                [topCatalog]: !this.state.activeToggle[topCatalog],
            }
        })
        showHiddenCatalogData(this.props.selectedStore._id, topCatalog , "storeAdmin", this.state.activeToggle[topCatalog], this.addProduct)
    }

    renderListItem = (listItem, listIndex) => {
        return (
            <li className="dropdown-list__item catalog-opened" key={listIndex} onClick={() => {this.chooseSubCatalog(listItem, listIndex)}}>
                <div className={this.state.selectedSubCatalog === listIndex ? "dropdown-list__link catalog-opened text-14" : "dropdown-list__link text-14 light"}>{LangCat[listItem]}</div>
                <div className="count-products-sub text-12">{this.countProducts(listItem)}</div>
            </li>
        )
    };

    renderCatalogProduct = (item, index) => {
        return (
            <div className="catalog-product" key={index}>
                <div className="catalog-top-toggle-btn">
                    <ToggleButton active={this.state.activeToggle[item.dropdownTitle]} onClick={() => {this.hiddenProductsToCatalog(item.dropdownTitle)}}/>
                </div>
                <button className={"padding-left " + (this.state.openIndex === index ? this.state.active : this.state.passive)} type="button" onClick={() => {this.closeOpen(index)}}>
                    <span className="catalog-button__text text-16 light">{LangCat[item.dropdownTitle]}</span>
                    <div className="count-products">{this.countProducts(item.dropdownTitle)}</div>
                    <svg className="icon ">
                        <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#arrow-small"/>
                    </svg>
                </button>
                <ul className={this.state.openIndex === index ? this.state.open : this.state.close}>
                    {item.dropdownItems && item.dropdownItems.map((listItem, listIndex) => {
                        return this.renderListItem(listItem, listIndex);
                    })}
                </ul>
            </div>
        )
    };

    render() {
        return (
            <div className="sidebar__main-list scrollbar">
                <div className="main-list">
                    <p className="main-list__title uppercase bold text-22">{ru.ProductCategories}</p>
                    <div className="main-list__catalog-product">
                        {this.props.dropdownList && this.props.dropdownList.map((item, index) => {
                            return this.renderCatalogProduct(item, index)
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

function MapStateToProps(state) {
    return {
        selectedStore: state.storeReducer.selectedStore,
        ShopEditParamsAction: state.productReducer.ShopEditParamsAction,
        productsThisStore: state.productReducer.productsThisStore,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        shopEditParamsFunction: (ShopEditParams) => {
            dispatch(actionShopEditParams(ShopEditParams))
        },
        shopEditParamsActionFunction: (ShopEditParamsAction) => {
            dispatch(actionShopEditParamsAction(ShopEditParamsAction))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(MainListCatalogProducts);
