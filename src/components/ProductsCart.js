import React from "react";
import ru from "../access/lang/LangConstants";
import "../access/css/cart.css"
import ButtonPostpone from "./shared/ButtonPostpone";

class ProductsCart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    renderCart = (item, index) => {
        return (
            <div className={this.props.compilation ? "compilation-deferred-goods" : "deferred-goods"} key={index}>
                <div className="card-box">
                    <div className="card-box__picture" >
                        <picture className="picture">
                            <img className="picture__source" src={item.imgUrl} alt={item.imgAlt}/>
                        </picture>
                        <div className="card-box__circle" style={{backgroundImage: "url('static/img/content/circle-40.png')"}}/>
                        {this.renderPostpone(item)}
                    </div>
                    <div className="card-box__product-name text-18 bold uppercase">{item.brand}</div>
                    <p className="card-box__product-info text-14 light">{item.productName}</p>
                    <p className="card-box__product-quantity text-18 bold color-aqua uppercase">{item.price}</p>
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

    renderPagination = () => {
        return (
            <div className="row">
                <div className="col-12">
                    <ul className="pagination">
                        <li className="pagination__item">
                            <div className="pagination__link text-16 active" >1</div>
                        </li>
                        <li className="pagination__item">
                            <div className="pagination__link text-16">2</div>
                        </li>
                        <li className="pagination__item">
                            <div className="pagination__link text-16">3</div>
                        </li>
                        <li className="pagination__item">
                            <div className="pagination__link page-linkNext"  aria-label="Next">
                                <svg className="icon icon-arrow-small ">
                                    <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#arrow-small"/>
                                </svg>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    };

    render() {
        return (
            <div>
                <div className={this.props.compilation ? "compilation-row footer-row-wrap" : "row-wrap"}>
                    {this.props.products && this.props.products.map((item, index) => {
                        return this.renderCart(item, index)
                    })}
                </div>
                {this.props.compilation ? null : this.renderPagination()}
            </div>

        )
    }
}

export default ProductsCart;
