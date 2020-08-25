import React from "react";
import ru from "../../access/lang/LangConstants";

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
        }
    }

    renderListItem = (listItem, listIndex) => {
        return (
            <li className="dropdown-list__item" key={listIndex}>
                <div className="dropdown-list__link text-14 light" >{listItem}</div>
            </li>
        )
    };

    closeOpen = (index) => {
        this.setState({
            ...this.state,
            openIndex: this.state.openIndex === index ? -1 : index,
        })
    };

    renderCatalogProduct = (item, index) => {
        return (
            <div className="catalog-product" key={index}>
                <button className={this.state.openIndex === index ? this.state.active : this.state.passive} type="button" onClick={() => {this.closeOpen(index)}}>
                    <span className="catalog-button__text text-16 light">{item.dropdownTitle}</span>
                    <svg className="icon icon-arrow-small ">
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
                    <label className="main-list__label">
                        <input className="main-list__input-search text-14 italic" type="text" placeholder="Поиск..."/>
                        <button className="main-list__button-search">
                            <svg className="icon icon-search ">
                                <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#search"/>
                            </svg>
                        </button>
                    </label>
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
