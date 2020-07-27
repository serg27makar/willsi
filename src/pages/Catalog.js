import React from 'react';
import {setActionAdminPanel} from "../action";
import {connect} from "react-redux";
import CatalogTopEnvironment from "../components/CatalogTopEnvironment";

class Catalog extends React.Component {

    componentDidMount() {
        this.props.setActionAdminPanelFunction("Catalog");
    }

    render() {
        return(
            <div className="content">
                <div className="breadcrumbs-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-12 col-lg-12">
                                <div className="breadcrumbs__row">
                                    <div className="breadcrumb__column">
                                        <div className="breadcrumbs">
                                            <h1 className="breadcrumbs__title title-30 bold uppercase">Женская
                                                одежда</h1>
                                        </div>
                                        <nav className="breadcrumbs"><div className="breadcrumbs__link light text-14"
                                                                        >Каталог</div><div
                                            className="breadcrumbs__link light text-14" >Одежда</div><div
                                            className="breadcrumbs__link light text-14 active" >Женская
                                            одежда</div></nav>
                                    </div>
                                    <div className="breadcrumbs__column"><div className="breadcrumbs__share" >
                                        <svg className="icon icon-share ">
                                            <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#share"/>
                                        </svg>
                                    </div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <CatalogTopEnvironment/>
                <div className="catalog-middle">
                    <div className="container">
                        <div className="row align-items-start">
                            <div className="col-12 col-md-12 col-lg-3"><div
                                className="catalog-middle__product-all text-16 bold uppercase" >Показать
                                товары</div>
                                <div className="catalog-sidebar">
                                    <div className="catalog-sidebar__item">
                                        <div className="catalog-envelope text-18 medium"><span
                                            className="catalog-envelope__name">Каталог</span></div>
                                        <div className="catalog-body">
                                            <div className="catalog-product">
                                                <button className="catalog-button" type="button"><span
                                                    className="catalog-button__text text-16 light">Одежда</span>
                                                    <svg className="icon icon-arrow-small ">
                                                        <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#arrow-small"/>
                                                    </svg>
                                                </button>
                                                <ul className="dropdown-list">
                                                    <li className="dropdown-list__item"><div
                                                        className="dropdown-list__link text-14 light" >Женская
                                                        бижутерия</div></li>
                                                    <li className="dropdown-list__item"><div
                                                        className="dropdown-list__link text-14 light" >Очки</div>
                                                    </li>
                                                    <li className="dropdown-list__item"><div
                                                        className="dropdown-list__link text-14 light"
                                                        >Брелоки</div></li>
                                                    <li className="dropdown-list__item"><div
                                                        className="dropdown-list__link text-14 light"
                                                        >Воротники</div></li>
                                                    <li className="dropdown-list__item"><div
                                                        className="dropdown-list__link text-14 light" >Головные
                                                        уборы</div></li>
                                                    <li className="dropdown-list__item"><div
                                                        className="dropdown-list__link text-14 light" >Для
                                                        волос</div></li>
                                                    <li className="dropdown-list__item"><div
                                                        className="dropdown-list__link text-14 light" >Зонты</div>
                                                    </li>
                                                    <li className="dropdown-list__item"><div
                                                        className="dropdown-list__link text-14 light"
                                                        >Косметички</div></li>
                                                </ul>
                                            </div>
                                            <div className="catalog-product">
                                                <button className="catalog-button" type="button"><span
                                                    className="catalog-button__text text-16 light">Белье</span>
                                                    <svg className="icon icon-arrow-small ">
                                                        <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#arrow-small"/>
                                                    </svg>
                                                </button>
                                                <ul className="dropdown-list">
                                                    <li className="dropdown-list__item"><div
                                                        className="dropdown-list__link text-14 light" >Женская
                                                        бижутерия</div></li>
                                                    <li className="dropdown-list__item"><div
                                                        className="dropdown-list__link text-14 light" >Очки</div>
                                                    </li>
                                                    <li className="dropdown-list__item"><div
                                                        className="dropdown-list__link text-14 light"
                                                        >Брелоки</div></li>
                                                    <li className="dropdown-list__item"><div
                                                        className="dropdown-list__link text-14 light"
                                                        >Воротники</div></li>
                                                    <li className="dropdown-list__item"><div
                                                        className="dropdown-list__link text-14 light" >Головные
                                                        уборы</div></li>
                                                    <li className="dropdown-list__item"><div
                                                        className="dropdown-list__link text-14 light" >Для
                                                        волос</div></li>
                                                    <li className="dropdown-list__item"><div
                                                        className="dropdown-list__link text-14 light" >Зонты</div>
                                                    </li>
                                                    <li className="dropdown-list__item"><div
                                                        className="dropdown-list__link text-14 light"
                                                        >Косметички</div></li>
                                                </ul>
                                            </div>
                                            <div className="catalog-product">
                                                <button className="catalog-button" type="button"><span
                                                    className="catalog-button__text text-16 light">Для пляжа</span>
                                                    <svg className="icon icon-arrow-small ">
                                                        <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#arrow-small"/>
                                                    </svg>
                                                </button>
                                                <ul className="dropdown-list">
                                                    <li className="dropdown-list__item"><div
                                                        className="dropdown-list__link text-14 light" >Женская
                                                        бижутерия</div></li>
                                                    <li className="dropdown-list__item"><div
                                                        className="dropdown-list__link text-14 light" >Очки</div>
                                                    </li>
                                                    <li className="dropdown-list__item"><div
                                                        className="dropdown-list__link text-14 light"
                                                        >Брелоки</div></li>
                                                    <li className="dropdown-list__item"><div
                                                        className="dropdown-list__link text-14 light"
                                                        >Воротники</div></li>
                                                    <li className="dropdown-list__item"><div
                                                        className="dropdown-list__link text-14 light" >Головные
                                                        уборы</div></li>
                                                    <li className="dropdown-list__item"><div
                                                        className="dropdown-list__link text-14 light" >Для
                                                        волос</div></li>
                                                    <li className="dropdown-list__item"><div
                                                        className="dropdown-list__link text-14 light" >Зонты</div>
                                                    </li>
                                                    <li className="dropdown-list__item"><div
                                                        className="dropdown-list__link text-14 light"
                                                        >Косметички</div></li>
                                                </ul>
                                            </div>
                                            <div className="catalog-product">
                                                <button className="catalog-button" type="button"><span
                                                    className="catalog-button__text text-16 light">Обувь</span>
                                                    <svg className="icon icon-arrow-small ">
                                                        <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#arrow-small"/>
                                                    </svg>
                                                </button>
                                                <ul className="dropdown-list">
                                                    <li className="dropdown-list__item"><div
                                                        className="dropdown-list__link text-14 light" >Женская
                                                        бижутерия</div></li>
                                                    <li className="dropdown-list__item"><div
                                                        className="dropdown-list__link text-14 light" >Очки</div>
                                                    </li>
                                                    <li className="dropdown-list__item"><div
                                                        className="dropdown-list__link text-14 light"
                                                        >Брелоки</div></li>
                                                    <li className="dropdown-list__item"><div
                                                        className="dropdown-list__link text-14 light"
                                                        >Воротники</div></li>
                                                    <li className="dropdown-list__item"><div
                                                        className="dropdown-list__link text-14 light" >Головные
                                                        уборы</div></li>
                                                    <li className="dropdown-list__item"><div
                                                        className="dropdown-list__link text-14 light" >Для
                                                        волос</div></li>
                                                    <li className="dropdown-list__item"><div
                                                        className="dropdown-list__link text-14 light" >Зонты</div>
                                                    </li>
                                                    <li className="dropdown-list__item"><div
                                                        className="dropdown-list__link text-14 light"
                                                        >Косметички</div></li>
                                                </ul>
                                            </div>
                                            <div className="catalog-product">
                                                <button className="catalog-button" type="button"><span
                                                    className="catalog-button__text text-16 light">Аксессуары</span>
                                                    <svg className="icon icon-arrow-small ">
                                                        <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#arrow-small"/>
                                                    </svg>
                                                </button>
                                                <ul className="dropdown-list">
                                                    <li className="dropdown-list__item"><div
                                                        className="dropdown-list__link text-14 light" >Женская
                                                        бижутерия</div></li>
                                                    <li className="dropdown-list__item"><div
                                                        className="dropdown-list__link text-14 light" >Очки</div>
                                                    </li>
                                                    <li className="dropdown-list__item"><div
                                                        className="dropdown-list__link text-14 light"
                                                        >Брелоки</div></li>
                                                    <li className="dropdown-list__item"><div
                                                        className="dropdown-list__link text-14 light"
                                                        >Воротники</div></li>
                                                    <li className="dropdown-list__item"><div
                                                        className="dropdown-list__link text-14 light" >Головные
                                                        уборы</div></li>
                                                    <li className="dropdown-list__item"><div
                                                        className="dropdown-list__link text-14 light" >Для
                                                        волос</div></li>
                                                    <li className="dropdown-list__item"><div
                                                        className="dropdown-list__link text-14 light" >Зонты</div>
                                                    </li>
                                                    <li className="dropdown-list__item"><div
                                                        className="dropdown-list__link text-14 light"
                                                        >Косметички</div></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="catalog-sidebar__item">
                                        <div className="catalog-wrapper text-18 medium"><span
                                            className="catalog-wrapper__name">Бренд</span>
                                            <svg className="icon icon-arrow-small ">
                                                <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#arrow-small"/>
                                            </svg>
                                        </div>
                                        <div className="catalog__category-list">
                                            <form className="category-list" action="#" method="post">
                                                <input className="category-list__input" type="checkbox" id="checkbox1"/>
                                                    <label className="category-list__label text-14 light"
                                                           htmlFor="checkbox1">Puma</label>
                                                    <input className="category-list__input" type="checkbox"
                                                           id="checkbox2"/>
                                                        <label className="category-list__label text-14 light"
                                                               htmlFor="checkbox2">Nike</label>
                                                        <input className="category-list__input" type="checkbox"
                                                               id="checkbox3"/>
                                                            <label className="category-list__label text-14 light"
                                                                   htmlFor="checkbox3">Adidas</label>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="catalog-sidebar__item">
                                        <div className="catalog-wrapper text-18 medium"><span
                                            className="catalog-wrapper__name">Цвет</span>
                                            <svg className="icon icon-arrow-small ">
                                                <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#arrow-small"/>
                                            </svg>
                                        </div>
                                        <div className="catalog__category-list">
                                            <form className="category-list" action="#" method="post">
                                                <input className="category-list__input" type="checkbox" id="checkbox4"/>
                                                    <label className="category-list__label text-14 light"
                                                           htmlFor="checkbox4">Черный</label>
                                                    <input className="category-list__input" type="checkbox"
                                                           id="checkbox5"/>
                                                        <label className="category-list__label text-14 light"
                                                               htmlFor="checkbox5">Красный</label>
                                                        <input className="category-list__input" type="checkbox"
                                                               id="checkbox6"/>
                                                            <label className="category-list__label text-14 light"
                                                                   htmlFor="checkbox6">Синий</label>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="catalog-sidebar__item">
                                        <div className="catalog-wrapper text-18 medium"><span
                                            className="catalog-wrapper__name">Размер</span>
                                            <svg className="icon icon-arrow-small ">
                                                <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#arrow-small"/>
                                            </svg>
                                        </div>
                                        <div className="catalog__category-list">
                                            <form className="category-list" action="#" method="post">
                                                <input className="category-list__input" type="checkbox" id="checkbox7"/>
                                                    <label className="category-list__label text-14 light"
                                                           htmlFor="checkbox7">S</label>
                                                    <input className="category-list__input" type="checkbox"
                                                           id="checkbox8"/>
                                                        <label className="category-list__label text-14 light"
                                                               htmlFor="checkbox8">M</label>
                                                        <input className="category-list__input" type="checkbox"
                                                               id="checkbox9"/>
                                                            <label className="category-list__label text-14 light"
                                                                   htmlFor="checkbox9">XL</label>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="catalog-sidebar__item">
                                        <div className="catalog-wrapper text-18 medium"><span
                                            className="catalog-wrapper__name">Дополнительно</span>
                                            <svg className="icon icon-arrow-small ">
                                                <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#arrow-small"/>
                                            </svg>
                                        </div>
                                        <div className="catalog__category-list">
                                            <form className="category-list" action="#" method="post">
                                                <input className="category-list__input" type="checkbox" id="checkbox10"/>
                                                    <label className="category-list__label text-14 light"
                                                           htmlFor="checkbox10">S</label>
                                                    <input className="category-list__input" type="checkbox"
                                                           id="checkbox11"/>
                                                        <label className="category-list__label text-14 light"
                                                               htmlFor="checkbox11">M</label>
                                                        <input className="category-list__input" type="checkbox"
                                                               id="checkbox12"/>
                                                            <label className="category-list__label text-14 light"
                                                                   htmlFor="checkbox12">XL</label>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-12 col-lg-9">
                                <div className="catalog-middle__for-me">
                                    <ul className="for-me">
                                        <li className="for-me__button-drop"><div
                                            className="for-me__button-text text-16 bold uppercase" >Для меня</div><span
                                            className="for-me__button-icon">
                        <svg className="icon icon-arrow-small ">
                          <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#arrow-small"/>
                        </svg></span>
                                            <ul className="dropdown-info-list">
                                                <li className="dropdown-info-list__item"><div
                                                    className="dropdown-info-list__link text-16 bold uppercase"
                                                    >Мужа</div></li>
                                                <li className="dropdown-info-list__item"><div
                                                    className="dropdown-info-list__link text-16 bold uppercase"
                                                    >Сына</div></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div className="row justify-content-center">
                                    <div className="col-12 col-md-12 col-lg-4">
                                        <div className="card-box"><div className="card-box__picture" >
                                            <picture className="picture">
                                                <source className="picture__source"
                                                        srcSet="static/img/content/product-item.webp" type="image/webp"/>
                                                    <img className="picture__source"
                                                         src="static/img/content/product-item.png" alt="product"/>
                                            </picture>
                                            <div className="card-box__circle" style={{backgroundImage: "url('static/img/content/circle-40.png')"}}/>
                                        </div><div className="card-box__product-name text-18 bold uppercase"
                                               >bailmain</div>
                                            <p className="card-box__product-info text-14 light">Женская блузка</p>
                                            <p className="card-box__product-quantity text-18 bold color-aqua uppercase">599
                                                грн</p>
                                            <div className="card-box__button-postpone"><div className="button-postpone"
                                                                                          ><span
                                                className="button-postpone__text text-16 medium">Отложить</span>
                                                <svg className="icon icon-shopping-bag ">
                                                    <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#shopping-bag"/>
                                                </svg>
                                            </div></div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-12 col-lg-4">
                                        <div className="card-box"><div className="card-box__picture" >
                                            <picture className="picture">
                                                <source className="picture__source"
                                                        srcSet="static/img/content/product-item.webp" type="image/webp"/>
                                                    <img className="picture__source"
                                                         src="static/img/content/product-item.png" alt="product"/>
                                            </picture>
                                            <div className="card-box__circle" style={{backgroundImage: "url('static/img/content/circle-40.png')"}}/>
                                        </div><div className="card-box__product-name text-18 bold uppercase"
                                               >bailmain</div>
                                            <p className="card-box__product-info text-14 light">Женская блузка</p>
                                            <p className="card-box__product-quantity text-18 bold color-aqua uppercase">599
                                                грн</p>
                                            <div className="card-box__button-postpone"><div className="button-postpone"
                                                                                          ><span
                                                className="button-postpone__text text-16 medium">Отложить</span>
                                                <svg className="icon icon-shopping-bag ">
                                                    <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#shopping-bag"/>
                                                </svg>
                                            </div></div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-12 col-lg-4">
                                        <div className="card-box"><div className="card-box__picture" >
                                            <picture className="picture">
                                                <source className="picture__source"
                                                        srcSet="static/img/content/product-item.webp" type="image/webp"/>
                                                    <img className="picture__source"
                                                         src="static/img/content/product-item.png" alt="product"/>
                                            </picture>
                                            <div className="card-box__circle" style={{backgroundImage: "url('static/img/content/circle-40.png')"}}/>
                                        </div><div className="card-box__product-name text-18 bold uppercase"
                                               >bailmain</div>
                                            <p className="card-box__product-info text-14 light">Женская блузка</p>
                                            <p className="card-box__product-quantity text-18 bold color-aqua uppercase">599
                                                грн</p>
                                            <div className="card-box__button-postpone"><div className="button-postpone"
                                                                                          ><span
                                                className="button-postpone__text text-16 bold">Отложить</span>
                                                <svg className="icon icon-shopping-bag ">
                                                    <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#shopping-bag"/>
                                                </svg>
                                            </div></div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-12 col-lg-4">
                                        <div className="card-box"><div className="card-box__picture" >
                                            <picture className="picture">
                                                <source className="picture__source"
                                                        srcSet="static/img/content/product-item.webp" type="image/webp"/>
                                                    <img className="picture__source"
                                                         src="static/img/content/product-item.png" alt="product"/>
                                            </picture>
                                            <div className="card-box__circle" style={{backgroundImage: "url('static/img/content/circle-40.png')"}}/>
                                        </div><div className="card-box__product-name text-18 bold uppercase"
                                               >bailmain</div>
                                            <p className="card-box__product-info text-14 light">Женская блузка</p>
                                            <p className="card-box__product-quantity text-18 bold color-aqua uppercase">599
                                                грн</p>
                                            <div className="card-box__button-postpone"><div className="button-postpone"
                                                                                          ><span
                                                className="button-postpone__text text-16 medium">Отложить</span>
                                                <svg className="icon icon-shopping-bag ">
                                                    <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#shopping-bag"/>
                                                </svg>
                                            </div></div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-12 col-lg-4">
                                        <div className="card-box"><div className="card-box__picture" >
                                            <picture className="picture">
                                                <source className="picture__source"
                                                        srcSet="static/img/content/product-item.webp" type="image/webp"/>
                                                    <img className="picture__source"
                                                         src="static/img/content/product-item.png" alt="product"/>
                                            </picture>
                                            <div className="card-box__circle" style={{backgroundImage: "url('static/img/content/circle-40.png')"}}/>
                                        </div><div className="card-box__product-name text-18 bold uppercase"
                                               >bailmain</div>
                                            <p className="card-box__product-info text-14 light">Женская блузка</p>
                                            <p className="card-box__product-quantity text-18 bold color-aqua uppercase">599
                                                грн</p>
                                            <div className="card-box__button-postpone"><div className="button-postpone"
                                                                                          ><span
                                                className="button-postpone__text text-16 medium">Отложить</span>
                                                <svg className="icon icon-shopping-bag ">
                                                    <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#shopping-bag"/>
                                                </svg>
                                            </div></div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-12 col-lg-4">
                                        <div className="card-box"><div className="card-box__picture" >
                                            <picture className="picture">
                                                <source className="picture__source"
                                                        srcSet="static/img/content/product-item.webp" type="image/webp"/>
                                                    <img className="picture__source"
                                                         src="static/img/content/product-item.png" alt="product"/>
                                            </picture>
                                            <div className="card-box__circle" style={{backgroundImage: "url('static/img/content/circle-40.png')"}}/>
                                        </div><div className="card-box__product-name text-18 bold uppercase"
                                               >bailmain</div>
                                            <p className="card-box__product-info text-14 light">Женская блузка</p>
                                            <p className="card-box__product-quantity text-18 bold color-aqua uppercase">599
                                                грн</p>
                                            <div className="card-box__button-postpone"><div className="button-postpone"
                                                                                          ><span
                                                className="button-postpone__text text-16 medium">Отложить</span>
                                                <svg className="icon icon-shopping-bag ">
                                                    <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#shopping-bag"/>
                                                </svg>
                                            </div></div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-12 col-lg-4">
                                        <div className="card-box"><div className="card-box__picture" >
                                            <picture className="picture">
                                                <source className="picture__source"
                                                        srcSet="static/img/content/product-item.webp" type="image/webp"/>
                                                    <img className="picture__source"
                                                         src="static/img/content/product-item.png" alt="product"/>
                                            </picture>
                                            <div className="card-box__circle" style={{backgroundImage: "url('static/img/content/circle-40.png')"}}/>
                                        </div><div className="card-box__product-name text-18 bold uppercase"
                                               >bailmain</div>
                                            <p className="card-box__product-info text-14 light">Женская блузка</p>
                                            <p className="card-box__product-quantity text-18 bold color-aqua uppercase">599
                                                грн</p>
                                            <div className="card-box__button-postpone"><div className="button-postpone"
                                                                                          ><span
                                                className="button-postpone__text text-16 medium">Отложить</span>
                                                <svg className="icon icon-shopping-bag ">
                                                    <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#shopping-bag"/>
                                                </svg>
                                            </div></div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-12 col-lg-4">
                                        <div className="card-box"><div className="card-box__picture" >
                                            <picture className="picture">
                                                <source className="picture__source"
                                                        srcSet="static/img/content/product-item.webp" type="image/webp"/>
                                                    <img className="picture__source"
                                                         src="static/img/content/product-item.png" alt="product"/>
                                            </picture>
                                            <div className="card-box__circle" style={{backgroundImage: "url('static/img/content/circle-40.png')"}}/>
                                        </div><div className="card-box__product-name text-18 bold uppercase"
                                               >bailmain</div>
                                            <p className="card-box__product-info text-14 light">Женская блузка</p>
                                            <p className="card-box__product-quantity text-18 bold color-aqua uppercase">599
                                                грн</p>
                                            <div className="card-box__button-postpone"><div className="button-postpone"
                                                                                          ><span
                                                className="button-postpone__text text-16 medium">Отложить</span>
                                                <svg className="icon icon-shopping-bag ">
                                                    <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#shopping-bag"/>
                                                </svg>
                                            </div></div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-12 col-lg-4">
                                        <div className="card-box"><div className="card-box__picture" >
                                            <picture className="picture">
                                                <source className="picture__source"
                                                        srcSet="static/img/content/product-item.webp" type="image/webp"/>
                                                    <img className="picture__source"
                                                         src="static/img/content/product-item.png" alt="product"/>
                                            </picture>
                                            <div className="card-box__circle" style={{backgroundImage: "url('static/img/content/circle-40.png')"}}/>
                                        </div><div className="card-box__product-name text-18 bold uppercase"
                                               >bailmain</div>
                                            <p className="card-box__product-info text-14 light">Женская блузка</p>
                                            <p className="card-box__product-quantity text-18 bold color-aqua uppercase">599
                                                грн</p>
                                            <div className="card-box__button-postpone"><div className="button-postpone"
                                                                                          ><span
                                                className="button-postpone__text text-16 medium">Отложить</span>
                                                <svg className="icon icon-shopping-bag ">
                                                    <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#shopping-bag"/>
                                                </svg>
                                            </div></div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-12 col-lg-4">
                                        <div className="card-box"><div className="card-box__picture" >
                                            <picture className="picture">
                                                <source className="picture__source"
                                                        srcSet="static/img/content/product-item.webp" type="image/webp"/>
                                                    <img className="picture__source"
                                                         src="static/img/content/product-item.png" alt="product"/>
                                            </picture>
                                            <div className="card-box__circle" style={{backgroundImage: "url('static/img/content/circle-40.png')"}}/>
                                        </div><div className="card-box__product-name text-18 bold uppercase"
                                               >bailmain</div>
                                            <p className="card-box__product-info text-14 light">Женская блузка</p>
                                            <p className="card-box__product-quantity text-18 bold color-aqua uppercase">599
                                                грн</p>
                                            <div className="card-box__button-postpone"><div className="button-postpone"
                                                                                          ><span
                                                className="button-postpone__text text-16 medium">Отложить</span>
                                                <svg className="icon icon-shopping-bag ">
                                                    <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#shopping-bag"/>
                                                </svg>
                                            </div></div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-12 col-lg-4">
                                        <div className="card-box"><div className="card-box__picture" >
                                            <picture className="picture">
                                                <source className="picture__source"
                                                        srcSet="static/img/content/product-item.webp" type="image/webp"/>
                                                    <img className="picture__source"
                                                         src="static/img/content/product-item.png" alt="product"/>
                                            </picture>
                                            <div className="card-box__circle" style={{backgroundImage: "url('static/img/content/circle-40.png')"}}/>
                                        </div><div className="card-box__product-name text-18 bold uppercase"
                                               >bailmain</div>
                                            <p className="card-box__product-info text-14 light">Женская блузка</p>
                                            <p className="card-box__product-quantity text-18 bold color-aqua uppercase">599
                                                грн</p>
                                            <div className="card-box__button-postpone"><div className="button-postpone"
                                                                                          ><span
                                                className="button-postpone__text text-16 medium">Отложить</span>
                                                <svg className="icon icon-shopping-bag ">
                                                    <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#shopping-bag"/>
                                                </svg>
                                            </div></div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-12 col-lg-4">
                                        <div className="card-box"><div className="card-box__picture" >
                                            <picture className="picture">
                                                <source className="picture__source"
                                                        srcSet="static/img/content/product-item.webp" type="image/webp"/>
                                                    <img className="picture__source"
                                                         src="static/img/content/product-item.png" alt="product"/>
                                            </picture>
                                            <div className="card-box__circle" style={{backgroundImage: "url('static/img/content/circle-40.png')"}}/>
                                        </div><div className="card-box__product-name text-18 bold uppercase"
                                               >bailmain</div>
                                            <p className="card-box__product-info text-14 light">Женская блузка</p>
                                            <p className="card-box__product-quantity text-18 bold color-aqua uppercase">599
                                                грн</p>
                                            <div className="card-box__button-postpone"><div className="button-postpone"
                                                                                          ><span
                                                className="button-postpone__text text-16 medium">Отложить</span>
                                                <svg className="icon icon-shopping-bag ">
                                                    <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#shopping-bag"/>
                                                </svg>
                                            </div></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 col-md-12 col-lg-12">
                                        <ul className="pagination">
                                            <li className="pagination__item"><div
                                                className="pagination__link text-16 active" >1</div></li>
                                            <li className="pagination__item"><div className="pagination__link text-16"
                                                                                >2</div></li>
                                            <li className="pagination__item"><div className="pagination__link text-16"
                                                                                >3</div></li>
                                            <li className="pagination__item"><div
                                                className="pagination__link page-linkNext"  aria-label="Next">
                                                <svg className="icon icon-arrow-small ">
                                                    <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#arrow-small"/>
                                                </svg>
                                            </div></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function MapStateToProps(state) {
    return {
        page: state.pageReducer.page,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        setActionAdminPanelFunction: (page) => {
            dispatch(setActionAdminPanel(page))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(Catalog);

