import React from "react";
import LangCat from "../../access/lang/CatalogLangConstants";
import {
    actionDefineCatalog,
    actionProductsThisStore,
    actionSelectedStore,
    actionShopEditParams,
    actionShopEditParamsAction,
} from "../../action";
import {connect} from "react-redux";
import ToggleButton from "../shared/ToggleButton";
import {showHiddenCatalogData, showHiddenSubCatalogData} from "../../js/dataUpdateFunctions";
import {dropdownListArr} from "../../access/temporaryConstants";
import {langCode} from "../../access/lang/translaterJS";

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
            activeSubToggle: {},
            activeToggleAction: false,
        }
        this.countProducts = this.countProducts.bind(this);
        this.chooseSubCatalog = this.chooseSubCatalog.bind(this);
        this.addProduct = this.addProduct.bind(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if ((prevProps.productsThisStore !== this.props.productsThisStore) ||
            (prevProps.dropdownList !== this.props.dropdownList) ||
            (prevProps.refresh !== this.props.refresh) ||
            (prevProps.selectedStore.storeAdmin !== this.props.selectedStore.storeAdmin)) {
            this.clearToggles();
        }
        if (prevProps.clearOpenCatalogs !== this.props.clearOpenCatalogs) {
            this.setState({...this.state, selectedSubCatalog: -1, openIndex: -1})
        }
        if (prevState.activeToggleAction !== this.state.activeToggleAction) {
            this.fillInToggle();
        }
    }

    clearToggles() {
        let activeToggle = {};
        let activeSubToggle = {};
        this.props.dropdownList.map((item) => {
            item.dropdownItems.map((subItem) => {
                return activeSubToggle = {
                    ...activeSubToggle,
                    [subItem]: false,
                }
            })
            return activeToggle = {
                ...activeToggle,
                [item.dropdownTitle]: false,
            }
        })
        this.setState({
            ...this.state,
            activeToggle,
            activeSubToggle,
            activeToggleAction: !this.state.activeToggleAction,
        });
    }

    fillInToggle() {
        let activeToggle = this.state.activeToggle;
        let activeSubToggle = this.state.activeSubToggle;
        this.props.productsThisStore.map((item) => {
            if (!item.storeAdmin) {
                activeToggle = {
                    ...activeToggle,
                    [item.topCatalog]: !item.storeAdmin,
                }
                activeSubToggle = {
                    ...activeSubToggle,
                    [item.subCatalog]: !item.storeAdmin,
                }
            }
            return activeToggle;
        })
        this.setState({...this.state, activeToggle, activeSubToggle})
    }

    chooseSubCatalog(listItem, listIndex) {
        const shopEditParams = [];
        let defineCatalog = {}
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

        if (this.state.selectedSubCatalog !== listIndex && this.state.openIndex !== -1) {
            defineCatalog = {
                topCatalog: dropdownListArr[this.state.openIndex].dropdownTitle,
                subCatalog: listItem
            }
        }
        this.props.defineCatalogFunction(defineCatalog)
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

    hiddenProductsToCatalog(e, topCatalog) {
        e.preventDefault();
        e.stopPropagation();
        const activeToggle = this.state.activeToggle;
        this.setState({
            ...this.state,
            activeToggle: {
                ...this.state.activeToggle,
                [topCatalog]: !this.state.activeToggle[topCatalog],
            }
        })
        this.props.productsThisStoreFunction([]);
        showHiddenCatalogData(this.props.selectedStore._id, topCatalog , "storeAdmin", activeToggle[topCatalog], this.addProduct);
        if (!this.state.activeToggle[topCatalog]) {
            const selectedStore = {...this.props.selectedStore, storeAdmin: !this.state.activeToggle[topCatalog]}
            this.props.selectedStoreFunction(selectedStore);
        }

    }

    hiddenProductsToSubCatalog(e, subCatalog) {
        e.preventDefault();
        e.stopPropagation();
        const activeSubToggle = this.state.activeSubToggle;
        this.setState({
            ...this.state,
            activeSubToggle: {
                ...this.state.activeSubToggle,
                [subCatalog]: !this.state.activeSubToggle[subCatalog],
            }
        })
        this.props.productsThisStoreFunction([]);
        showHiddenSubCatalogData(this.props.selectedStore._id, subCatalog , "storeAdmin", activeSubToggle[subCatalog], this.addProduct);
        if (!this.state.activeSubToggle[subCatalog]) {
            const selectedStore = {...this.props.selectedStore, storeAdmin: !this.state.activeSubToggle[subCatalog]}
            this.props.selectedStoreFunction(selectedStore);
        }

    }

    renderListItem = (listItem, listIndex) => {
        if (listIndex === 0) return null
        return (
            <li className="dropdown-list__item catalog-opened" key={listIndex} onClick={() => {this.chooseSubCatalog(listItem, listIndex)}}>
                <div className="catalog-top-toggle-btn">
                    <ToggleButton active={this.state.activeSubToggle[listItem]} onClick={(e) => {this.hiddenProductsToSubCatalog(e, listItem)}}/>
                </div>
                <div className={"dropdown-list__link padding-left text-14 " + (this.state.selectedSubCatalog === listIndex ? "catalog-opened" : "light")}>{LangCat[listItem]}</div>
                <div className="count-products-sub text-12">{this.countProducts(listItem)}</div>
            </li>
        )
    };

    renderCatalogProduct = (item, index) => {
        return (
            <div className="catalog-product" key={index}>
                <div className="catalog-top-toggle-btn">
                    <ToggleButton active={this.state.activeToggle[item.dropdownTitle]} onClick={(e) => {this.hiddenProductsToCatalog(e, item.dropdownTitle)}}/>
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
                    <p className="main-list__title uppercase bold text-22">{langCode(this.props.lang, "ProductCategories")}</p>
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
        clearOpenCatalogs: state.utiliteReducer.clearOpenCatalogs,
        lang: state.utiliteReducer.lang,
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
        selectedStoreFunction: (selectedStore) => {
            dispatch(actionSelectedStore(selectedStore))
        },
        productsThisStoreFunction: (productsThisStore) => {
            dispatch(actionProductsThisStore(productsThisStore))
        },
        defineCatalogFunction: (defineCatalog) => {
            dispatch(actionDefineCatalog(defineCatalog))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(MainListCatalogProducts);
