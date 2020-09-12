import React from "react";
import ru from "../../access/lang/LangConstants";
import LangCat from "../../access/lang/CatalogLangConstants";

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
            productsThisStore: [],
        }
    }

    componentDidMount() {
        this.setState({
            productsThisStore: this.props.productsThisStore,
        })
    }

    renderListItem = (listItem, listIndex) => {
        return (
            <li className="dropdown-list__item" key={listIndex}>
                <div className="dropdown-list__link text-14 light" >{LangCat[listItem]}</div>
                <div className="count-products-sub">{this.countProducts(listItem)}</div>
            </li>
        )
    };

    closeOpen = (index) => {
        this.setState({
            ...this.state,
            openIndex: this.state.openIndex === index ? -1 : index,
        })
    };

    countProducts(title) {
        let i = 0;
        this.props.productsThisStore.map((item, index) => {
            if (item.topCatalog === title) {
                i++
            }
            if (item.subCatalog === title) {
                i++
            }
            return index;
        });
        return i;
    }

    renderCatalogProduct = (item, index) => {
        return (
            <div className="catalog-product" key={index}>
                <button className={this.state.openIndex === index ? this.state.active : this.state.passive} type="button" onClick={() => {this.closeOpen(index)}}>
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
                    {/*<label className="main-list__label">*/}
                    {/*    <input className="main-list__input-search text-14 italic" type="text" placeholder="Поиск..."/>*/}
                    {/*    <button className="main-list__button-search">*/}
                    {/*        <svg className="icon icon-search ">*/}
                    {/*            <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#search"/>*/}
                    {/*        </svg>*/}
                    {/*    </button>*/}
                    {/*</label>*/}
                    <div className="main-list__catalog-product">
                        {this.props.catalogProducts && this.props.catalogProducts.map((item, index) => {
                            return this.renderCatalogProduct(item, index)
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default MainListCatalogProducts;
