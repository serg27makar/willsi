import React from 'react';
import "./../access/css/cart.css";
import {setActionAdminPanel} from "../action";
import {connect} from "react-redux";
import Carousel from "../components/Carousel";

const slidersArr = [
    {
        imgUrl: "static/img/content/slider-main.jpg",
        dataMagnifySrc: "static/img/content/slider-main.jpg",
        alt: "slider",
    },
    {
        imgUrl: "static/img/content/slider-main.jpg",
        dataMagnifySrc: "static/img/content/slider-main.jpg",
        alt: "slider",
    },
    {
        imgUrl: "static/img/content/slider-main.jpg",
        dataMagnifySrc: "static/img/content/slider-main.jpg",
        alt: "slider",
    },
];

const groupSliders = [
    {
        imgUrl: "static/img/content/thumbs-1.webp",
        alt: "slider",
    },
    {
        imgUrl: "static/img/content/thumbs-2.webp",
        alt: "slider",
    },
    {
        imgUrl: "static/img/content/thumbs-3.webp",
        alt: "slider",
    },
];

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sliders: [],
            groupSlide: [],
        };
    }

    componentDidMount() {
        this.fillSliders(slidersArr, groupSliders);
        this.props.setActionAdminPanelFunction("Cart");
    }

    fillSliders = (sliders, groupSlide) => {
        this.setState({
            ...this.state,
            sliders: sliders,
            groupSlide: groupSlide
        })
    };

    renderSlide = () => {
        return (
            <Carousel/>
            )
    };

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
                                            <h1 className="breadcrumbs__title title-30 bold uppercase">Женская одежда</h1>
                                        </div>
                                        <nav className="breadcrumbs">
                                            <div className="breadcrumbs__link light text-14" >Каталог</div>
                                            <div className="breadcrumbs__link light text-14" >Одежда</div>
                                            <div className="breadcrumbs__link light text-14" >Женская одежда</div>
                                            <div className="breadcrumbs__link light text-14 active" >Красная рубашка</div>
                                        </nav>
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
                <form className="parameters-top" action="#" method="post" name="parameters[]">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-12 col-lg-12">
                                <div className="parameters">
                                    <div className="parameters__row">
                                        <div className="parameters__column-left">
                                            <p className="parameters__info-text text-16 uppercase bold">Доступные<br/>Параметры
                                            </p>
                                        </div>
                                        <div className="parameters__column-right">
                                            <div className="parameters__tags-list">
                                                <div className="tags-list">
                                                    <button className="tags-list__item tags-active checked"
                                                            type="button"><span
                                                        className="tags-list__text text-18 medium">Мои</span>
                                                        <svg className="icon icon-pen ">
                                                            <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#pen"/>
                                                        </svg>
                                                    </button>
                                                    <input className="tags-list__input-radio" type="radio" name="my" defaultChecked={true} hidden/>
                                                    <button className="tags-list__item" type="button">
                                                        <span className="tags-list__text text-18 medium">Мужа</span>
                                                        <svg className="icon icon-pen ">
                                                            <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#pen"/>
                                                        </svg>
                                                    </button>
                                                    <input className="tags-list__input-radio" type="radio" name="husband" hidden/>
                                                    <button className="tags-list__item" type="button">
                                                        <span className="tags-list__text text-18 medium">Сына</span>
                                                        <svg className="icon icon-pen ">
                                                            <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#pen"/>
                                                        </svg>
                                                    </button>
                                                    <input className="tags-list__input-radio" type="radio" name="son" hidden/>
                                                    <div className="tags-list__link-plus" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="parameters">
                                    <div className="parameters__row">
                                        <div className="parameters__column-left">
                                            <p className="parameters__info-text text-16 uppercase bold">Измените<br/>Параметры
                                            </p>
                                        </div>
                                        <div className="parameters__column-right">
                                            <div className="parameters__tags-list">
                                                <div className="tags-list">
                                                    <input className="tags-list__input text-18 light" name="growth" placeholder="Рост 175 см"/>
                                                    <input className="tags-list__input text-18 light" name="shoulders" placeholder="Плечи 60 см"/>
                                                    <input className="tags-list__input text-18 light" name="growth" placeholder="Рост 90 см"/>
                                                    <input className="tags-list__input text-18 light" name="waist" placeholder="Талия 65 см"/>
                                                    <input className="tags-list__input text-18 light" name="hips" placeholder="Бедра 91 см"/>
                                                    <button
                                                        className="tags-list__button-save text-14 medium"
                                                        type="button">Сохранить
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <div className="catalog-top-env">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-12 col-lg-2">
                                <div className="catalog-top">
                                    <div className="catalog-top__dropdown-info">
                                        <div className="catalog-top__button-drop">
                                            <div className="catalog-top__button-text text-16 bold uppercase" >Мои</div>
                                            <span className="catalog-top__button-icon">
                                                <svg className="icon icon-arrow-small ">
                                                  <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#arrow-small"/>
                                                </svg>
                                            </span>
                                        </div>
                                        <div className="dropdown-info">
                                            <div className="dropdown-info__item">
                                                <div className="dropdown-info__link text-16 bold uppercase" >Мужа</div>
                                            </div>
                                            <div className="dropdown-info__item">
                                                <div className="dropdown-info__link text-16 bold uppercase" >Сына</div>
                                            </div>
                                            <div className="dropdown-info__item">
                                                <div className="dropdown-info__link icon-plus" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-12 col-lg-10">
                                <div className="catalog-top">
                                    <div className="catalog-top__list-object">
                                        <ul className="list-object">
                                            <li className="list-object__item text-16 bold">
                                                <p className="list-object__text">Рост -</p>
                                                <span className="list-object__text-value color-aqua">175 см</span>
                                            </li>
                                            <li className="list-object__item text-16 bold">
                                                <p className="list-object__text">Обхват плечь -</p>
                                                <span className="list-object__text-value color-aqua">60 см</span>
                                            </li>
                                            <li className="list-object__item text-16 bold">
                                                <p className="list-object__text">Обхват груди -</p>
                                                <span className="list-object__text-value color-aqua">90 см</span>
                                            </li>
                                            <li className="list-object__item text-16 bold">
                                                <p className="list-object__text">Обхват талии -</p>
                                                <span className="list-object__text-value color-aqua">65 см</span>
                                            </li>
                                            <li className="list-object__item text-16 bold">
                                                <p className="list-object__text">Обхват бедер -</p>
                                                <span className="list-object__text-value color-aqua">91 см</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cart-info">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-12 col-lg-5">
                                {this.renderSlide()}
                                <div className="cart-slider__circle" style={{backgroundImage: "url('static/img/content/circle-good.png')"}}/>
                            </div>
                            <div className="col-12 col-md-12 col-lg-7">
                                <div className="card-description">
                                    <div className="card-description__top-info">
                                        <p className="card-description__title text-22 bold uppercase">Bailmain</p>
                                        <p className="card-description__article-mobile text-14 light">Арт 02936</p>
                                        <div className="card-description__link-model text-14 uppercase" >3d модель</div>
                                    </div>
                                    <p className="card-description__article text-14 light">Арт 02936</p>
                                    <p className="card-description__paragraph text-14 light">Повседневная практика
                                        показывает, что начало повседневной работы по формированию позиции позволяет
                                        выполнять важные задания по разработке системы обучения кадров, соответствует
                                        насущным потребностям. Идейные соображения высшего порядка, а также сложившаяся
                                        структура организации играет важную роль в формировании системы обучения кадров,
                                        соответствует насущным потребностям.</p>
                                    <p className="card-description__paragraph text-14 light">С другой стороны
                                        консультация с широким активом позволяет оценить значение соответствующий
                                        условий активизации.</p>
                                    <div className="card-description__color-box">
                                        <div className="color-box">
                                            <p className="color-box__text text-16 uppercase bold">Цвета</p>
                                            <ul className="color-box__list">
                                                <li className="color-box__item color-red"/>
                                                <li className="color-box__item color-blue"/>
                                                <li className="color-box__item color-green"/>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card-description__button-bottom">
                                        <p className="card-description__quantity text-22 color-aqua uppercase medium">555 грн</p>
                                        <div className="button-postpone" >
                                            <span className="button-postpone__text text-16 medium">Отложить</span>
                                            <svg className="icon icon-shopping-bag ">
                                                <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#shopping-bag"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cart-tabs">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-12 col-lg-12">
                                <div className="tabs-wrapper">
                                    <div className="tabs-wrapper__top-button">
                                        <button className="tabs-wrapper__button text-20 tabs-active uppercase medium"
                                                data-tabs="1" type="button"><span
                                            className="tabs-wrapper__text">Состав</span></button>
                                        <button className="tabs-wrapper__button text-20 uppercase medium" data-tabs="2"
                                                type="button"><span
                                            className="tabs-wrapper__text">Параметры модели</span></button>
                                        <button className="tabs-wrapper__button text-20 uppercase medium" data-tabs="3"
                                                type="button"><span
                                            className="tabs-wrapper__text">Инструкция по уходу</span></button>
                                        <button className="tabs-wrapper__button text-20 uppercase medium" data-tabs="4"
                                                type="button"><span
                                            className="tabs-wrapper__text">Оплата и доставка</span></button>
                                    </div>
                                    <div className="tabs-wrapper__content-info">
                                        <div className="tabs-wrapper__show-tabs" id="1">
                                            <p className="tabs-wrapper__paragraph text-14 light">Повседневная практика
                                                показывает, что начало повседневной работы по формированию позиции
                                                позволяет выполнять важные задания по разработке системы обучения
                                                кадров, соответствует насущным потребностям. Идейные соображения высшего
                                                порядка, а также сложившаяся структура организации играет важную роль в
                                                формировании системы обучения кадров, соответствует насущным
                                                потребностям.</p>
                                            <p className="tabs-wrapper__paragraph text-14 light">С другой стороны
                                                консультация с широким активом позволяет оценить значение
                                                соответствующий условий активизации.</p>
                                            <p className="tabs-wrapper__paragraph text-14 light">Повседневная практика
                                                показывает, что начало повседневной работы по формированию позиции
                                                позволяет выполнять важные задания по разработке системы обучения
                                                кадров, соответствует насущным потребностям. Идейные соображения высшего
                                                порядка, а также сложившаяся структура организации играет важную роль в
                                                формировании системы обучения кадров, соответствует насущным
                                                потребностям.</p>
                                            <p className="tabs-wrapper__paragraph text-14 light">С другой стороны
                                                консультация с широким активом позволяет оценить значение
                                                соответствующий условий активизации.</p>
                                        </div>
                                        <div className="tabs-wrapper__show-tabs" id="2">
                                            <p className="tabs-wrapper__paragraph text-14 light">Повседневная практика
                                                показывает, что начало повседневной работы по формированию позиции
                                                позволяет выполнять важные задания по разработке системы обучения
                                                кадров, соответствует насущным потребностям. Идейные соображения высшего
                                                порядка, а также сложившаяся структура организации играет важную роль в
                                                формировании системы обучения кадров, соответствует насущным
                                                потребностям.</p>
                                            <p className="tabs-wrapper__paragraph text-14 light">С другой стороны
                                                консультация с широким активом позволяет оценить значение
                                                соответствующий условий активизации.</p>
                                            <p className="tabs-wrapper__paragraph text-14 light">Повседневная практика
                                                показывает, что начало повседневной работы по формированию позиции
                                                позволяет выполнять важные задания по разработке системы обучения
                                                кадров, соответствует насущным потребностям. Идейные соображения высшего
                                                порядка, а также сложившаяся структура организации играет важную роль в
                                                формировании системы обучения кадров, соответствует насущным
                                                потребностям.</p>
                                            <p className="tabs-wrapper__paragraph text-14 light">С другой стороны
                                                консультация с широким активом позволяет оценить значение
                                                соответствующий условий активизации.</p>
                                        </div>
                                        <div className="tabs-wrapper__show-tabs" id="3">
                                            <p className="tabs-wrapper__paragraph text-14 light">Повседневная практика
                                                показывает, что начало повседневной работы по формированию позиции
                                                позволяет выполнять важные задания по разработке системы обучения
                                                кадров, соответствует насущным потребностям. Идейные соображения высшего
                                                порядка, а также сложившаяся структура организации играет важную роль в
                                                формировании системы обучения кадров, соответствует насущным
                                                потребностям.</p>
                                            <p className="tabs-wrapper__paragraph text-14 light">С другой стороны
                                                консультация с широким активом позволяет оценить значение
                                                соответствующий условий активизации.</p>
                                            <p className="tabs-wrapper__paragraph text-14 light">Повседневная практика
                                                показывает, что начало повседневной работы по формированию позиции
                                                позволяет выполнять важные задания по разработке системы обучения
                                                кадров, соответствует насущным потребностям. Идейные соображения высшего
                                                порядка, а также сложившаяся структура организации играет важную роль в
                                                формировании системы обучения кадров, соответствует насущным
                                                потребностям.</p>
                                            <p className="tabs-wrapper__paragraph text-14 light">С другой стороны
                                                консультация с широким активом позволяет оценить значение
                                                соответствующий условий активизации.</p>
                                        </div>
                                        <div className="tabs-wrapper__show-tabs" id="4">
                                            <p className="tabs-wrapper__paragraph text-14 light">Повседневная практика
                                                показывает, что начало повседневной работы по формированию позиции
                                                позволяет выполнять важные задания по разработке системы обучения
                                                кадров, соответствует насущным потребностям. Идейные соображения высшего
                                                порядка, а также сложившаяся структура организации играет важную роль в
                                                формировании системы обучения кадров, соответствует насущным
                                                потребностям.</p>
                                            <p className="tabs-wrapper__paragraph text-14 light">С другой стороны
                                                консультация с широким активом позволяет оценить значение
                                                соответствующий условий активизации.</p>
                                            <p className="tabs-wrapper__paragraph text-14 light">Повседневная практика
                                                показывает, что начало повседневной работы по формированию позиции
                                                позволяет выполнять важные задания по разработке системы обучения
                                                кадров, соответствует насущным потребностям. Идейные соображения высшего
                                                порядка, а также сложившаяся структура организации играет важную роль в
                                                формировании системы обучения кадров, соответствует насущным
                                                потребностям.</p>
                                            <p className="tabs-wrapper__paragraph text-14 light">С другой стороны
                                                консультация с широким активом позволяет оценить значение
                                                соответствующий условий активизации.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ideal-product">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-12 col-lg-12">
                                <h2 className="ideal-product__title title-36 uppercase">еще несколько
                                    идеально-подходящих вещей</h2>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-12 col-lg-12">
                                <div className="card-slider swiper-container">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div className="card-box"><div className="card-box__picture" >
                                                <picture className="picture">
                                                    <source className="picture__source"
                                                            srcSet="static/img/content/product-item.webp"
                                                            type="image/webp"/>
                                                    <img className="picture__source"
                                                         src="static/img/content/product-item.png"
                                                         alt="product"/>
                                                </picture>
                                                <div className="card-box__circle"
                                                     style={{backgroundImage: "url('static/img/content/circle-very-bad.png')"}}/>
                                            </div><div className="card-box__product-name text-18 bold uppercase"
                                                   >bailmain</div>
                                                <p className="card-box__product-info text-14 light">Женская блузка</p>
                                                <p className="card-box__product-quantity text-18 bold color-aqua uppercase">599
                                                    грн</p>
                                                <div className="card-box__button-postpone"><div
                                                    className="button-postpone" ><span
                                                    className="button-postpone__text text-16 medium">Отложить</span>
                                                    <svg className="icon icon-shopping-bag ">
                                                        <use
                                                            xlinkHref="static/img/svg-sprites/symbol/sprite.svg#shopping-bag"/>
                                                    </svg>
                                                </div></div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="card-box"><div className="card-box__picture" >
                                                <picture className="picture">
                                                    <source className="picture__source"
                                                            srcSet="static/img/content/product-item.webp"
                                                            type="image/webp"/>
                                                    <img className="picture__source"
                                                         src="static/img/content/product-item.png"
                                                         alt="product"/>
                                                </picture>
                                                <div className="card-box__circle"
                                                     style={{backgroundImage: "url('static/img/content/circle-bad.png')"}}/>
                                            </div><div className="card-box__product-name text-18 bold uppercase"
                                                   >bailmain</div>
                                                <p className="card-box__product-info text-14 light">Женская блузка</p>
                                                <p className="card-box__product-quantity text-18 bold color-aqua uppercase">599 грн</p>
                                                <div className="card-box__button-postpone">
                                                    <div className="button-postpone" >
                                                        <span className="button-postpone__text text-16 medium">Отложить</span>
                                                        <svg className="icon icon-shopping-bag ">
                                                            <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#shopping-bag"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="card-box"><div className="card-box__picture" >
                                                <picture className="picture">
                                                    <source className="picture__source"
                                                            srcSet="static/img/content/product-item.webp"
                                                            type="image/webp"/>
                                                            <img className="picture__source"
                                                                 src="static/img/content/product-item.png"
                                                                 alt="product"/>
                                                </picture>
                                                <div className="card-box__circle"
                                                     style={{backgroundImage: "url('static/img/content/circle-soso.png')"}}/>
                                            </div><div className="card-box__product-name text-18 bold uppercase"
                                                   >bailmain</div>
                                                <p className="card-box__product-info text-14 light">Женская блузка</p>
                                                <p className="card-box__product-quantity text-18 bold color-aqua uppercase">599
                                                    грн</p>
                                                <div className="card-box__button-postpone"><div
                                                    className="button-postpone" ><span
                                                    className="button-postpone__text text-16 medium">Отложить</span>
                                                    <svg className="icon icon-shopping-bag ">
                                                        <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#shopping-bag"/>
                                                    </svg>
                                                </div></div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="card-box"><div className="card-box__picture" >
                                                <picture className="picture">
                                                    <source className="picture__source"
                                                            srcSet="static/img/content/product-item.webp"
                                                            type="image/webp"/><img className="picture__source"
                                                                                   src="static/img/content/product-item.png"
                                                                                   alt="product"/>
                                                </picture>
                                                <div className="card-box__circle"
                                                     style={{backgroundImage: "url('static/img/content/circle-good.png')"}}/>
                                            </div><div className="card-box__product-name text-18 bold uppercase"
                                                   >bailmain</div>
                                                <p className="card-box__product-info text-14 light">Женская блузка</p>
                                                <p className="card-box__product-quantity text-18 bold color-aqua uppercase">599 грн</p>
                                                <div className="card-box__button-postpone"><div
                                                    className="button-postpone" ><span
                                                    className="button-postpone__text text-16 medium">Отложить</span>
                                                    <svg className="icon icon-shopping-bag ">
                                                        <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#shopping-bag"/>
                                                    </svg>
                                                </div></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-button-next">
                                    <div className="btn-next">
                                        <svg className="icon icon-arrow-small ">
                                            <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#arrow-small"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className="swiper-button-prev">
                                    <div className="btn-prev">
                                        <svg className="icon icon-arrow-small ">
                                            <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#arrow-small"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-12">
                            <button className="button-refresh text-14 medium button-white" type="button">Обновить
                                продукт
                            </button>
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

export default connect(MapStateToProps, mapDispatchToProps)(Cart);

