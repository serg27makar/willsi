import React from 'react';
import "./../access/css/cart.css";
import {setActionAdminPanel} from "../action";
import {connect} from "react-redux";
import Carousel from "../components/Carousel";
import CatalogTopEnvironment from "../components/CatalogTopEnvironment";
import ru from "../access/lang/LangConstants";
import ParametersEditor from "../components/ParametersEditor";

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
            <Carousel slidersArr={slidersArr}/>
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
                <ParametersEditor/>

                <CatalogTopEnvironment/>
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

