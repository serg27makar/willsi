import React from 'react';

class Postpone extends React.Component {

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
                                            <h1 className="breadcrumbs__title title-30 bold uppercase">Отложенные
                                                товары</h1>
                                        </div>
                                        <nav className="breadcrumbs"><a className="breadcrumbs__link light text-14"
                                                                        href="#">Главная</a><a
                                            className="breadcrumbs__link light text-14 active" href="#">Отложенные
                                            товары</a></nav>
                                    </div>
                                    <div className="breadcrumbs__column"><a className="breadcrumbs__share" href="#">
                                        <svg className="icon icon-share ">
                                            <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#share"/>
                                        </svg>
                                    </a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="catalog-top-env">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-12 col-lg-2">
                                <div className="catalog-top">
                                    <div className="catalog-top__dropdown-info">
                                        <div className="catalog-top__button-drop"><a
                                            className="catalog-top__button-text text-16 bold uppercase" href="#">Мои</a><span
                                            className="catalog-top__button-icon">
                        <svg className="icon icon-arrow-small ">
                          <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#arrow-small"/>
                        </svg></span></div>
                                        <div className="dropdown-info">
                                            <p className="dropdown-info__item"><a
                                                className="dropdown-info__link text-16 bold uppercase" href="#">Мужа</a>
                                            </p>
                                            <p className="dropdown-info__item"><a
                                                className="dropdown-info__link text-16 bold uppercase" href="#">Сына</a>
                                            </p>
                                            <p className="dropdown-info__item">
                                                <a className="dropdown-info__link icon-plus" href="#"/>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-12 col-lg-10">
                                <div className="catalog-top">
                                    <div className="catalog-top__list-object">
                                        <ul className="list-object">
                                            <li className="list-object__item text-16 bold">
                                                <p className="list-object__text">Рост -</p><span
                                                className="list-object__text-value color-aqua">175 см</span>
                                            </li>
                                            <li className="list-object__item text-16 bold">
                                                <p className="list-object__text">Обхват плечь -</p><span
                                                className="list-object__text-value color-aqua">60 см</span>
                                            </li>
                                            <li className="list-object__item text-16 bold">
                                                <p className="list-object__text">Обхват груди -</p><span
                                                className="list-object__text-value color-aqua">90 см</span>
                                            </li>
                                            <li className="list-object__item text-16 bold">
                                                <p className="list-object__text">Обхват талии -</p><span
                                                className="list-object__text-value color-aqua">65 см</span>
                                            </li>
                                            <li className="list-object__item text-16 bold">
                                                <p className="list-object__text">Обхват бедер -</p><span
                                                className="list-object__text-value color-aqua">91 см</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="catalog-middle">
                    <div className="container">
                        <div className="row align-items-start">
                            <div className="col-12 col-md-12 col-lg-3">
                                <sidebar className="catalog-sidebar">
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
                                                    <li className="dropdown-list__item"><a
                                                        className="dropdown-list__link text-14 light" href="#">Женская
                                                        бижутерия</a></li>
                                                    <li className="dropdown-list__item"><a
                                                        className="dropdown-list__link text-14 light" href="#">Очки</a>
                                                    </li>
                                                    <li className="dropdown-list__item"><a
                                                        className="dropdown-list__link text-14 light"
                                                        href="#">Брелоки</a></li>
                                                    <li className="dropdown-list__item"><a
                                                        className="dropdown-list__link text-14 light"
                                                        href="#">Воротники</a></li>
                                                    <li className="dropdown-list__item"><a
                                                        className="dropdown-list__link text-14 light" href="#">Головные
                                                        уборы</a></li>
                                                    <li className="dropdown-list__item"><a
                                                        className="dropdown-list__link text-14 light" href="#">Для
                                                        волос</a></li>
                                                    <li className="dropdown-list__item"><a
                                                        className="dropdown-list__link text-14 light" href="#">Зонты</a>
                                                    </li>
                                                    <li className="dropdown-list__item"><a
                                                        className="dropdown-list__link text-14 light"
                                                        href="#">Косметички</a></li>
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
                                                    <li className="dropdown-list__item"><a
                                                        className="dropdown-list__link text-14 light" href="#">Женская
                                                        бижутерия</a></li>
                                                    <li className="dropdown-list__item"><a
                                                        className="dropdown-list__link text-14 light" href="#">Очки</a>
                                                    </li>
                                                    <li className="dropdown-list__item"><a
                                                        className="dropdown-list__link text-14 light"
                                                        href="#">Брелоки</a></li>
                                                    <li className="dropdown-list__item"><a
                                                        className="dropdown-list__link text-14 light"
                                                        href="#">Воротники</a></li>
                                                    <li className="dropdown-list__item"><a
                                                        className="dropdown-list__link text-14 light" href="#">Головные
                                                        уборы</a></li>
                                                    <li className="dropdown-list__item"><a
                                                        className="dropdown-list__link text-14 light" href="#">Для
                                                        волос</a></li>
                                                    <li className="dropdown-list__item"><a
                                                        className="dropdown-list__link text-14 light" href="#">Зонты</a>
                                                    </li>
                                                    <li className="dropdown-list__item"><a
                                                        className="dropdown-list__link text-14 light"
                                                        href="#">Косметички</a></li>
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
                                                    <li className="dropdown-list__item"><a
                                                        className="dropdown-list__link text-14 light" href="#">Женская
                                                        бижутерия</a></li>
                                                    <li className="dropdown-list__item"><a
                                                        className="dropdown-list__link text-14 light" href="#">Очки</a>
                                                    </li>
                                                    <li className="dropdown-list__item"><a
                                                        className="dropdown-list__link text-14 light"
                                                        href="#">Брелоки</a></li>
                                                    <li className="dropdown-list__item"><a
                                                        className="dropdown-list__link text-14 light"
                                                        href="#">Воротники</a></li>
                                                    <li className="dropdown-list__item"><a
                                                        className="dropdown-list__link text-14 light" href="#">Головные
                                                        уборы</a></li>
                                                    <li className="dropdown-list__item"><a
                                                        className="dropdown-list__link text-14 light" href="#">Для
                                                        волос</a></li>
                                                    <li className="dropdown-list__item"><a
                                                        className="dropdown-list__link text-14 light" href="#">Зонты</a>
                                                    </li>
                                                    <li className="dropdown-list__item"><a
                                                        className="dropdown-list__link text-14 light"
                                                        href="#">Косметички</a></li>
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
                                                    <li className="dropdown-list__item"><a
                                                        className="dropdown-list__link text-14 light" href="#">Женская
                                                        бижутерия</a></li>
                                                    <li className="dropdown-list__item"><a
                                                        className="dropdown-list__link text-14 light" href="#">Очки</a>
                                                    </li>
                                                    <li className="dropdown-list__item"><a
                                                        className="dropdown-list__link text-14 light"
                                                        href="#">Брелоки</a></li>
                                                    <li className="dropdown-list__item"><a
                                                        className="dropdown-list__link text-14 light"
                                                        href="#">Воротники</a></li>
                                                    <li className="dropdown-list__item"><a
                                                        className="dropdown-list__link text-14 light" href="#">Головные
                                                        уборы</a></li>
                                                    <li className="dropdown-list__item"><a
                                                        className="dropdown-list__link text-14 light" href="#">Для
                                                        волос</a></li>
                                                    <li className="dropdown-list__item"><a
                                                        className="dropdown-list__link text-14 light" href="#">Зонты</a>
                                                    </li>
                                                    <li className="dropdown-list__item"><a
                                                        className="dropdown-list__link text-14 light"
                                                        href="#">Косметички</a></li>
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
                                                    <li className="dropdown-list__item"><a
                                                        className="dropdown-list__link text-14 light" href="#">Женская
                                                        бижутерия</a></li>
                                                    <li className="dropdown-list__item"><a
                                                        className="dropdown-list__link text-14 light" href="#">Очки</a>
                                                    </li>
                                                    <li className="dropdown-list__item"><a
                                                        className="dropdown-list__link text-14 light"
                                                        href="#">Брелоки</a></li>
                                                    <li className="dropdown-list__item"><a
                                                        className="dropdown-list__link text-14 light"
                                                        href="#">Воротники</a></li>
                                                    <li className="dropdown-list__item"><a
                                                        className="dropdown-list__link text-14 light" href="#">Головные
                                                        уборы</a></li>
                                                    <li className="dropdown-list__item"><a
                                                        className="dropdown-list__link text-14 light" href="#">Для
                                                        волос</a></li>
                                                    <li className="dropdown-list__item"><a
                                                        className="dropdown-list__link text-14 light" href="#">Зонты</a>
                                                    </li>
                                                    <li className="dropdown-list__item"><a
                                                        className="dropdown-list__link text-14 light"
                                                        href="#">Косметички</a></li>
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
                                </sidebar>
                            </div>
                            <div className="col-12 col-md-12 col-lg-9">
                                <div className="row">
                                    <div className="col-12 col-md-12 col-lg-4"><a
                                        className="catalog-middle__product-all text-16 bold uppercase" href="#">Показать
                                        товары</a></div>
                                    <div className="col-12 col-md-12 col-lg-4">
                                        <div className="catalog-middle__for-me">
                                            <ul className="for-me">
                                                <li className="for-me__button-drop"><a
                                                    className="for-me__button-text text-16 bold uppercase" href="#">Для
                                                    меня</a><span className="for-me__button-icon">
                            <svg className="icon icon-arrow-small ">
                              <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#arrow-small"/>
                            </svg></span>
                                                    <ul className="dropdown-info-list">
                                                        <li className="dropdown-info-list__item"><a
                                                            className="dropdown-info-list__link text-16 bold uppercase"
                                                            href="#">Мужа</a></li>
                                                        <li className="dropdown-info-list__item"><a
                                                            className="dropdown-info-list__link text-16 bold uppercase"
                                                            href="#">Сына</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-content-center">
                                    <div className="col-12 col-md-12 col-lg-4">
                                        <div className="card-box"><a className="card-box__picture" href="#">
                                            <picture className="picture">
                                                <source className="picture__source"
                                                        srcSet="static/img/content/product-item.webp" type="image/webp"/>
                                                    <img className="picture__source"
                                                         src="static/img/content/product-item.png" alt="product"/>
                                            </picture>
                                            <div className="card-box__circle"
                                                 style={{backgroundImage: "url('static/img/content/circle-40.png')"}}/>
                                            <div className="card-box__circle-overflow">
                                                <div className="card-box__circle-blue">
                                                    <svg className="icon icon-shopping-bag ">
                                                        <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#shopping-bag"/>
                                                    </svg>
                                                    <span
                                                        className="card-box__circle-text text-12 uppercase bold">Отложенно</span>
                                                </div>
                                            </div>
                                        </a><a className="card-box__product-name text-18 bold uppercase"
                                               href="#">bailmain</a>
                                            <p className="card-box__product-info text-14 light">Женская блузка</p>
                                            <p className="card-box__product-quantity text-18 bold color-aqua uppercase">599
                                                грн</p>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-12 col-lg-4">
                                        <div className="card-box"><a className="card-box__picture" href="#">
                                            <picture className="picture">
                                                <source className="picture__source"
                                                        srcSet="static/img/content/product-item.webp" type="image/webp"/>
                                                    <img className="picture__source"
                                                         src="static/img/content/product-item.png" alt="product"/>
                                            </picture>
                                            <div className="card-box__circle" style={{backgroundImage: "url('static/img/content/circle-40.png')"}}/>
                                            <div className="card-box__circle-overflow">
                                                <div className="card-box__circle-blue">
                                                    <svg className="icon icon-shopping-bag ">
                                                        <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#shopping-bag"/>
                                                    </svg>
                                                    <span
                                                        className="card-box__circle-text text-12 uppercase bold">Отложенно</span>
                                                </div>
                                            </div>
                                        </a><a className="card-box__product-name text-18 bold uppercase"
                                               href="#">bailmain</a>
                                            <p className="card-box__product-info text-14 light">Женская блузка</p>
                                            <p className="card-box__product-quantity text-18 bold color-aqua uppercase">599
                                                грн</p>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-12 col-lg-4">
                                        <div className="card-box"><a className="card-box__picture" href="#">
                                            <picture className="picture">
                                                <source className="picture__source"
                                                        srcSet="static/img/content/product-item.webp" type="image/webp"/>
                                                    <img className="picture__source"
                                                         src="static/img/content/product-item.png" alt="product"/>
                                            </picture>
                                            <div className="card-box__circle"
                                                 style={{backgroundImage: "url('static/img/content/circle-40.png')"}}/>
                                            <div className="card-box__circle-overflow">
                                                <div className="card-box__circle-blue">
                                                    <svg className="icon icon-shopping-bag ">
                                                        <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#shopping-bag"/>
                                                    </svg>
                                                    <span
                                                        className="card-box__circle-text text-12 uppercase bold">Отложенно</span>
                                                </div>
                                            </div>
                                        </a><a className="card-box__product-name text-18 bold uppercase"
                                               href="#">bailmain</a>
                                            <p className="card-box__product-info text-14 light">Женская блузка</p>
                                            <p className="card-box__product-quantity text-18 bold color-aqua uppercase">599
                                                грн</p>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-12 col-lg-4">
                                        <div className="card-box"><a className="card-box__picture" href="#">
                                            <picture className="picture">
                                                <source className="picture__source"
                                                        srcSet="static/img/content/product-item.webp" type="image/webp"/>
                                                    <img className="picture__source"
                                                         src="static/img/content/product-item.png" alt="product"/>
                                            </picture>
                                            <div className="card-box__circle"
                                                 style={{backgroundImage: "url('static/img/content/circle-40.png')"}}/>
                                            <div className="card-box__circle-overflow">
                                                <div className="card-box__circle-blue">
                                                    <svg className="icon icon-shopping-bag ">
                                                        <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#shopping-bag"/>
                                                    </svg>
                                                    <span
                                                        className="card-box__circle-text text-12 uppercase bold">Отложенно</span>
                                                </div>
                                            </div>
                                        </a><a className="card-box__product-name text-18 bold uppercase"
                                               href="#">bailmain</a>
                                            <p className="card-box__product-info text-14 light">Женская блузка</p>
                                            <p className="card-box__product-quantity text-18 bold color-aqua uppercase">599
                                                грн</p>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-12 col-lg-4">
                                        <div className="card-box"><a className="card-box__picture" href="#">
                                            <picture className="picture">
                                                <source className="picture__source"
                                                        srcSet="static/img/content/product-item.webp" type="image/webp"/>
                                                    <img className="picture__source"
                                                         src="static/img/content/product-item.png" alt="product"/>
                                            </picture>
                                            <div className="card-box__circle" style={{backgroundImage: "url('static/img/content/circle-40.png')"}}/>
                                            <div className="card-box__circle-overflow">
                                                <div className="card-box__circle-blue">
                                                    <svg className="icon icon-shopping-bag ">
                                                        <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#shopping-bag"/>
                                                    </svg>
                                                    <span
                                                        className="card-box__circle-text text-12 uppercase bold">Отложенно</span>
                                                </div>
                                            </div>
                                        </a><a className="card-box__product-name text-18 bold uppercase"
                                               href="#">bailmain</a>
                                            <p className="card-box__product-info text-14 light">Женская блузка</p>
                                            <p className="card-box__product-quantity text-18 bold color-aqua uppercase">599
                                                грн</p>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-12 col-lg-4">
                                        <div className="card-box"><a className="card-box__picture" href="#">
                                            <picture className="picture">
                                                <source className="picture__source"
                                                        srcSet="static/img/content/product-item.webp" type="image/webp"/>
                                                    <img className="picture__source"
                                                         src="static/img/content/product-item.png" alt="product"/>
                                            </picture>
                                            <div className="card-box__circle" style={{backgroundImage: "url('static/img/content/circle-40.png')"}}/>
                                            <div className="card-box__circle-overflow">
                                                <div className="card-box__circle-blue">
                                                    <svg className="icon icon-shopping-bag ">
                                                        <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#shopping-bag"/>
                                                    </svg>
                                                    <span
                                                        className="card-box__circle-text text-12 uppercase bold">Отложенно</span>
                                                </div>
                                            </div>
                                        </a><a className="card-box__product-name text-18 bold uppercase"
                                               href="#">bailmain</a>
                                            <p className="card-box__product-info text-14 light">Женская блузка</p>
                                            <p className="card-box__product-quantity text-18 bold color-aqua uppercase">599
                                                грн</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 col-md-12 col-lg-12">
                                        <ul className="pagination">
                                            <li className="pagination__item"><a
                                                className="pagination__link text-16 active" href="#">1</a></li>
                                            <li className="pagination__item"><a className="pagination__link text-16"
                                                                                href="#">2</a></li>
                                            <li className="pagination__item"><a className="pagination__link text-16"
                                                                                href="#">3</a></li>
                                            <li className="pagination__item"><a
                                                className="pagination__link page-linkNext" href="#" aria-label="Next">
                                                <svg className="icon icon-arrow-small ">
                                                    <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#arrow-small"/>
                                                </svg>
                                            </a></li>
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

export default Postpone;

