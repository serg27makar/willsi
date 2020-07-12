import React from 'react';
import {setActionAdminPanel} from "../action";
import {connect} from "react-redux";

class ServiceBlue extends React.Component {

    componentDidMount() {
        this.props.setActionAdminPanelFunction("ServiceBlue");
    }

    render() {
        return(
            <div className="content">
                <div className="welcome-service">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <h1 className="welcome-service__title uppercase title-36 bold">Добавить магазин</h1>
                                <div className="welcome-service__form-shop">
                                    <form className="form-shop" action="#" method="post">
                                        <div className="form-shop__row">
                                            <label className="form-shop__label">
                                                <input className="form-shop__input text-14" type="text"
                                                       placeholder="Имя"/>
                                            </label>
                                            <label className="form-shop__label">
                                                <input className="form-shop__input text-14" type="text"
                                                       placeholder="Ссылка на магазин"/>
                                            </label>
                                        </div>
                                        <textarea className="form-shop__textarea text-14"/>
                                        <div className="form-shop__row justify-content-center"><div
                                            className="form-shop__button-enter text-16" ><span
                                            className="form-shop__button-text">Войти с помощью</span><span
                                            className="form-shop__icon-instagram"/></div>
                                            <button className="form-shop__button-save text-16" type="button">Сохранить
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sale-box steps-red">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-12">
                                <h2 className="sale-box__title title-36 uppercase">Если Вы продаете вещи - мы Вам будем
                                    полезны</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-12 col-lg-4">
                                <div className="steps-box">
                                    <div className="steps-box__picture">
                                        <picture className="picture">
                                            <source className="picture__source" srcSet="static/img/content/sale-1.webp"
                                                    type="image/webp"/><img className="picture__source"
                                                                           src="static/img/content/sale-1.png"
                                                                           alt="steps"/>
                                        </picture>
                                        <p className="steps-box__number"><span
                                            className="steps-box__number-item text-25 bold">01</span></p>
                                    </div>
                                    <div className="steps-box__bottom-info text-18 bold uppercase" >Продаешь через
                                        instagram</div>
                                </div>
                            </div>
                            <div className="col-12 col-md-12 col-lg-4">
                                <div className="steps-box">
                                    <div className="steps-box__picture">
                                        <picture className="picture">
                                            <source className="picture__source" srcSet="static/img/content/sale-2.webp"
                                                    type="image/webp"/><img className="picture__source"
                                                                           src="static/img/content/sale-2.png"
                                                                           alt="steps"/>
                                        </picture>
                                        <p className="steps-box__number"><span
                                            className="steps-box__number-item text-25 bold">02</span></p>
                                    </div>
                                    <div className="steps-box__bottom-info text-18 bold uppercase" >Продаешь через
                                        свой сайт</div>
                                </div>
                            </div>
                            <div className="col-12 col-md-12 col-lg-4">
                                <div className="steps-box">
                                    <div className="steps-box__picture">
                                        <picture className="picture">
                                            <source className="picture__source" srcSet="static/img/content/sale-3.webp"
                                                    type="image/webp"/><img className="picture__source"
                                                                           src="static/img/content/sale-3.png"
                                                                           alt="steps"/>
                                        </picture>
                                        <p className="steps-box__number"><span
                                            className="steps-box__number-item text-25 bold">03</span></p>
                                    </div>
                                    <div className="steps-box__bottom-info text-18 bold uppercase" >перейти в
                                        примерочную</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="whom-startup">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-12">
                                <h2 className="whom-startup__title uppercase title-36">для кого нужен наш стартап?</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-8 col-12">
                                <p className="whom-startup__paragraph text-14">
                                    Вы продаете классную одежду, но при этом получаете возвраты по причине некорректного
                                    размера? Наш стартап - то, что Вам нужно!
                                    Оставьте КОРРЕКТНУЮ информацию о параметрах продаваемой Вами одежды,
                                    и получайте новых клиентов.
                                </p>
                                <p className="whom-startup__paragraph text-14">У Вас свой интернет магазин или продаете
                                    вещи в ИНСТАГРАММ? тогда Наше предложение точно для Вас! Получите доступ к
                                    быстрорастущей платформе продаж, где клиенты ищут и покупают одежду по
                                    принципиально-новому подходу. Оставьте Ваше имя и номер телефона и наш менеджер
                                    свяжется с Вами в ближайшее время.</p>
                            </div>
                            <div className="col-lg-4 col-12">
                                <div className="whom-startup__picture">
                                    <picture className="picture">
                                        <source className="picture__source"
                                                srcSet="static/img/content/startup-item.webp" type="image/webp"/><img
                                            className="picture__source" src="static/img/content/startup-item.png"
                                            alt="steps"/>
                                    </picture>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="details">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-12">
                                <h2 className="details__title text-25 uppercase">Узнать детальнее условия
                                    сотрудничества</h2>
                                <div className="details__form-request">
                                    <form className="form-request" action="#" method="post">
                                        <div className="form-request__row">
                                            <label className="form-request__label">
                                                <input className="form-request__input text-14" type="text"
                                                       placeholder="Имя"/><span className="form-request__icon">
                          <svg className="icon icon-user ">
                            <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#user"/>
                          </svg></span>
                                            </label>
                                            <label className="form-request__label">
                                                <input className="form-request__input text-14" type="tel"
                                                       placeholder="Телефон"/><span className="form-request__icon">
                          <svg className="icon icon-phone ">
                            <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#phone"/>
                          </svg></span>
                                            </label>
                                        </div>
                                        <button className="form-request__button-send text-18" type="button">Оставить
                                            заявку
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="startup startup-red">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-12 col-lg-12">
                                <h2 className="startup__title title-36 uppercase">Почему наш стартап набирает
                                    популярность?</h2>
                            </div>
                        </div>
                        <div className="row align-items-start justify-content-center">
                            <div className="col-12 col-md-12 col-lg-4">
                                <div className="startup-box">
                                    <div className="startup-box__icon">
                                        <svg className="icon icon-diagram ">
                                            <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#diagram"/>
                                        </svg>
                                    </div>
                                    <div className="startup-box__column">
                                        <p className="startup-box__title text-18 bold uppercase">Причина 1</p>
                                        <p className="startup-box__paragraph text-14 light">Постоянно растущая аудитория
                                            покупателей</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-12 col-lg-4">
                                <div className="startup-box">
                                    <div className="startup-box__icon">
                                        <svg className="icon icon-note ">
                                            <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#note"/>
                                        </svg>
                                    </div>
                                    <div className="startup-box__column">
                                        <p className="startup-box__title text-18 bold uppercase">Причина 2</p>
                                        <p className="startup-box__paragraph text-14 light">Бесплатное пользование
                                            примерочной для покупателей и продавцов*</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-12 col-lg-4">
                                <div className="startup-box">
                                    <div className="startup-box__icon">
                                        <svg className="icon icon-payment-method ">
                                            <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#payment-method"/>
                                        </svg>
                                    </div>
                                    <div className="startup-box__column">
                                        <p className="startup-box__title text-18 bold uppercase">Причина 3</p>
                                        <p className="startup-box__paragraph text-14 light">Не нужно платить примерочной
                                            за проданные товары клиентам, которых Вы нашли через наш стартап</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-12 col-lg-4">
                                <div className="startup-box">
                                    <div className="startup-box__icon">
                                        <svg className="icon icon-percentage ">
                                            <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#percentage"/>
                                        </svg>
                                    </div>
                                    <div className="startup-box__column">
                                        <p className="startup-box__title text-18 bold uppercase">Причина 4</p>
                                        <p className="startup-box__paragraph text-14 light">Возможность предлагать
                                            клиентам акции, скидки, призы</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-12 col-lg-4">
                                <div className="startup-box">
                                    <div className="startup-box__icon">
                                        <svg className="icon icon-bell ">
                                            <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#bell"/>
                                        </svg>
                                    </div>
                                    <div className="startup-box__column">
                                        <p className="startup-box__title text-18 bold uppercase">Причина 5</p>
                                        <p className="startup-box__paragraph text-14 light">Автоматическое оповещения
                                            клиентов, которым идеально подходит Ваша одежда, которую Вы только что
                                            "вывешали в примерочною Willsi"</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-12 col-lg-4">
                                <div className="startup-box">
                                    <div className="startup-box__icon">
                                        <svg className="icon icon-fashion ">
                                            <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#fashion"/>
                                        </svg>
                                    </div>
                                    <div className="startup-box__column">
                                        <p className="startup-box__title text-18 bold uppercase">Причина 6</p>
                                        <p className="startup-box__paragraph text-14 light">Возможность продавать свои
                                            вещи (от 1-й единицы)</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-12 col-lg-4">
                                <div className="startup-box">
                                    <div className="startup-box__icon">
                                        <svg className="icon icon-shopping ">
                                            <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#shopping"/>
                                        </svg>
                                    </div>
                                    <div className="startup-box__column">
                                        <p className="startup-box__title text-18 bold uppercase">Причина 7</p>
                                        <p className="startup-box__paragraph text-14 light">Возможность заказать
                                            персональную примерочную на свой сайт (услуга на стадии разработки)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="indicator">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-12 col-lg-4">
                                <div className="indicator-env" data-aos="fade-up" data-aos-offset="300"
                                     data-aos-duration="1000">
                                    <p className="indicator-env__mobile-info text-14 light italic color-aqua">С помощью
                                        этого индикатора Вы сможете подобрать максимасльно подходящие для Вас вещи!</p>
                                    <div className="indicator-env__mobile-picture">
                                        <picture className="mobile-picture">
                                            <source className="mobile-picture__source"
                                                    srcSet="static/img/content/circle.webp" type="image/webp"/><img
                                                className="mobile-picture__source" src="static/img/content/circle.png"
                                                alt="circle"/>
                                        </picture>
                                    </div>
                                </div>
                                <div className="indicator-env" data-aos="fade-left" data-aos-offset="300"
                                     data-aos-duration="1000">
                                    <p className="indicator-env__paragraph text-14 light italic">Обращайте внимение на
                                        вещи, с "коефициентом подходящести" более 70 из 100. Остальные вещи, скорее
                                        всего будут на вас сидеть не на столько идеально!</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-12 col-lg-4">
                                <div className="indicator-env" data-aos="fade-up" data-aos-offset="300"
                                     data-aos-duration="1000">
                                    <div className="indicator-env__picture">
                                        <picture className="picture">
                                            <source className="picture__source"
                                                    srcSet="static/img/content/slidebars.webp" type="image/webp"/><img
                                                className="picture__source" src="static/img/content/slidebars.png"
                                                alt="slidebars"/>
                                        </picture>
                                        <span className="indicator-env__number-start text-14">0</span><span
                                        className="indicator-env__number-end text-14">100</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-12 col-lg-4">
                                <div className="indicator-env" data-aos="fade-right" data-aos-offset="300"
                                     data-aos-duration="1000">
                                    <p className="indicator-env__paragraph text-14 light italic color-aqua">Все что выше
                                        рекомендуем рассмотреть и купить, все что ниже - рекомендуем дополнительно
                                        уточнить все параметры у продавца</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-12 col-lg-10 offset-lg-1">
                                <div className="indicator-bottom" data-aos="fade-up" data-aos-offset="600"
                                     data-aos-duration="1000">
                                    <div className="indicator-bottom__picture">
                                        <picture className="picture">
                                            <source className="picture__source"
                                                    srcSet="static/img/content/window-screen.webp" type="image/webp"/>
                                                <img className="picture__source"
                                                     src="static/img/content/window-screen.png" alt="window-screen"/>
                                        </picture>
                                        <p className="indicator-bottom__text text-14 light italic color-aqua">С помощью
                                            этого индикатора Вы сможете подобрать максимасльно подходящие для Вас
                                            вещи!</p>
                                    </div>
                                    <div className="indicator-bottom__mobile-picture">
                                        <picture className="mobile-picture">
                                            <source className="mobile-picture__source"
                                                    srcSet="static/img/content/window-screen-mobile.webp"
                                                    type="image/webp"/><img className="mobile-picture__source"
                                                                           src="static/img/content/window-screen-mobile.png"
                                                                           alt="window-screen"/>
                                        </picture>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="steps steps-red">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-12 col-lg-12">
                                <h2 className="steps__title title-36 uppercase">всего 3 шага на пути к идеальным
                                    вещам</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-12 col-lg-4">
                                <div className="steps-box">
                                    <div className="steps-box__picture">
                                        <picture className="picture">
                                            <source className="picture__source" srcSet="static/img/content/step-1.webp"
                                                    type="image/webp"/><img className="picture__source"
                                                                           src="static/img/content/step-1.png"
                                                                           alt="steps"/>
                                        </picture>
                                        <p className="steps-box__number"><span
                                            className="steps-box__number-item text-25 bold">01</span></p>
                                    </div>
                                    <div className="steps-box__bottom-info text-18 bold uppercase" >перейти в
                                        примерочную</div>
                                </div>
                            </div>
                            <div className="col-12 col-md-12 col-lg-4">
                                <div className="steps-box">
                                    <div className="steps-box__picture">
                                        <picture className="picture">
                                            <source className="picture__source" srcSet="static/img/content/step-2.webp"
                                                    type="image/webp"/><img className="picture__source"
                                                                           src="static/img/content/step-2.png"
                                                                           alt="steps"/>
                                        </picture>
                                        <p className="steps-box__number"><span
                                            className="steps-box__number-item text-25 bold">02</span></p>
                                    </div>
                                    <div className="steps-box__bottom-info text-18 bold uppercase" >ввести свои
                                        параметры</div>
                                </div>
                            </div>
                            <div className="col-12 col-md-12 col-lg-4">
                                <div className="steps-box">
                                    <div className="steps-box__picture">
                                        <picture className="picture">
                                            <source className="picture__source" srcSet="static/img/content/step-3.webp"
                                                    type="image/webp"/><img className="picture__source"
                                                                           src="static/img/content/step-3.png"
                                                                           alt="steps"/>
                                        </picture>
                                        <p className="steps-box__number"><span
                                            className="steps-box__number-item text-25 bold">03</span></p>
                                    </div>
                                    <div className="steps-box__bottom-info text-18 bold uppercase" >результат
                                        готов!</div>
                                </div>
                            </div>
                            <div className="col-12 col-md-12 col-lg-12"><div
                                className="steps-box__button-dressing button-main text-18" >В примерочную</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="description-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-12 col-lg-12">
                                <div className="description-env">
                                    <div className="description-env__icon">
                                        <svg className="icon icon-idea ">
                                            <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#idea"/>
                                        </svg>
                                    </div>
                                    <p className="description-env__top-info text-22 bold uppercase">Подсказка</p>
                                </div>
                                <p className="description-bg__paragraph text-14">Любишь покупать вещи через интернет не
                                    только себе, но и своей половинке или детям - укажи в своем аккаунте несколько
                                    профилей и получай персональные предложения по каждому.</p>
                                <div className="description-env">
                                    <div className="description-env__icon">
                                        <svg className="icon icon-warning ">
                                            <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#warning"/>
                                        </svg>
                                    </div>
                                    <p className="description-env__top-info text-22 bold uppercase">ВАЖНО!</p>
                                </div>
                                <p className="description-bg__paragraph text-14">Наша примерочная не принимает оплаты и
                                    не осуществляет доставку товаров. Наша задача показать клиенту идеально-подходящую
                                    одежду (согласно персональных параметров тела) и подсказать место, где можно её
                                    приобрести.</p>
                                <p className="description-bg__paragraph text-14">Каждый раз начинайте покупки одежды с
                                    нашей примерочной Willsi и получайте товар, который подходит именно Вам.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="partners">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-12 col-lg-12">
                                <h2 className="partners__title title-36 uppercase">наши партнеры</h2>
                            </div>
                        </div>
                        <div className="row align-items-start justify-content-center">
                            <div className="col-6 col-md-6 col-lg-3">
                                <div className="partners-env" data-aos="fade-right" data-aos-offset="300"
                                     data-aos-duration="1000"><div className="partners-env__picture"
                                                                 target="_blank">
                                    <picture className="picture">
                                        <source className="picture__source" srcSet="static/img/content/partner-1.webp"
                                                type="image/webp"/><img className="picture__source"
                                                                       src="static/img/content/partner-1.png"
                                                                       alt="partner"/>
                                    </picture>
                                </div></div>
                            </div>
                            <div className="col-6 col-md-6 col-lg-3">
                                <div className="partners-env" data-aos="fade-right" data-aos-offset="300"
                                     data-aos-duration="1000"><div className="partners-env__picture"
                                                                 target="_blank">
                                    <picture className="picture">
                                        <source className="picture__source" srcSet="static/img/content/partner-2.webp"
                                                type="image/webp"/><img className="picture__source"
                                                                       src="static/img/content/partner-2.png"
                                                                       alt="partner"/>
                                    </picture>
                                </div></div>
                            </div>
                            <div className="col-6 col-md-6 col-lg-3">
                                <div className="partners-env" data-aos="fade-left" data-aos-offset="300"
                                     data-aos-duration="1000"><div className="partners-env__picture"
                                                                 target="_blank">
                                    <picture className="picture">
                                        <source className="picture__source" srcSet="static/img/content/partner-3.webp"
                                                type="image/webp"/><img className="picture__source"
                                                                       src="static/img/content/partner-3.png"
                                                                       alt="partner"/>
                                    </picture>
                                </div></div>
                            </div>
                            <div className="col-6 col-md-6 col-lg-3">
                                <div className="partners-env" data-aos="fade-left" data-aos-offset="300"
                                     data-aos-duration="1000"><div className="partners-env__picture"
                                                                 target="_blank">
                                    <picture className="picture">
                                        <source className="picture__source" srcSet="static/img/content/partner-4.webp"
                                                type="image/webp"/><img className="picture__source"
                                                                       src="static/img/content/partner-4.png"
                                                                       alt="partner"/>
                                    </picture>
                                </div></div>
                            </div>
                            <div className="col-6 col-md-6 col-lg-3">
                                <div className="partners-env" data-aos="fade-right" data-aos-offset="300"
                                     data-aos-duration="1000"><div className="partners-env__picture"
                                                                 target="_blank">
                                    <picture className="picture">
                                        <source className="picture__source" srcSet="static/img/content/partner-1.webp"
                                                type="image/webp"/><img className="picture__source"
                                                                       src="static/img/content/partner-1.png"
                                                                       alt="partner"/>
                                    </picture>
                                </div></div>
                            </div>
                            <div className="col-6 col-md-6 col-lg-3">
                                <div className="partners-env" data-aos="fade-right" data-aos-offset="300"
                                     data-aos-duration="1000"><div className="partners-env__picture"
                                                                 target="_blank">
                                    <picture className="picture">
                                        <source className="picture__source" srcSet="static/img/content/partner-2.webp"
                                                type="image/webp"/><img className="picture__source"
                                                                       src="static/img/content/partner-2.png"
                                                                       alt="partner"/>
                                    </picture>
                                </div></div>
                            </div>
                            <div className="col-6 col-md-6 col-lg-3">
                                <div className="partners-env" data-aos="fade-left" data-aos-offset="300"
                                     data-aos-duration="1000"><div className="partners-env__picture"
                                                                 target="_blank">
                                    <picture className="picture">
                                        <source className="picture__source" srcSet="static/img/content/partner-3.webp"
                                                type="image/webp"/><img className="picture__source"
                                                                       src="static/img/content/partner-3.png"
                                                                       alt="partner"/>
                                    </picture>
                                </div></div>
                            </div>
                            <div className="col-6 col-md-6 col-lg-3">
                                <div className="partners-env" data-aos="fade-left" data-aos-offset="300"
                                     data-aos-duration="1000"><div className="partners-env__picture"
                                                                 target="_blank">
                                    <picture className="picture">
                                        <source className="picture__source" srcSet="static/img/content/partner-4.webp"
                                                type="image/webp"/><img className="picture__source"
                                                                       src="static/img/content/partner-4.png"
                                                                       alt="partner"/>
                                    </picture>
                                </div></div>
                            </div>
                            <div className="col-12 col-md-12 col-lg-12">
                                <div className="partners-env"><div className="partners-env__button button-main text-16"
                                                                 >Стать партнером</div></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="reviews">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-12 col-lg-12">
                                <h2 className="reviews__title title-36 uppercase">отзывы клиентов</h2>
                            </div>
                            <div className="col-12 col-md-12 col-lg-12">
                                <div className="reviews-box" data-aos="fade-right" data-aos-offset="300"
                                     data-aos-duration="1000">
                                    <div className="reviews-box__picture">
                                        <picture className="picture">
                                            <source className="picture__source"
                                                    srcSet="static/img/content/reviews-user.webp" type="image/webp"/><img
                                                className="picture__source" src="static/img/contents/reviews-user.png"
                                                alt="partner"/>
                                        </picture>
                                    </div>
                                    <div className="reviews-box__column-box">
                                        <div className="column-box">
                                            <div className="column-box__top">
                                                <p className="column-box__name text-18 bold uppercase">Анастасия
                                                    Иванова</p><a className="column-box__link-mail text-18"
                                                                  href="mailto:alinanova@annushka.org">alinanova@annushka.org</a>
                                            </div>
                                            <p className="column-box__paragraph text-14 light italic">Повседневная
                                                практика показывает, что начало повседневной работы по формированию
                                                позиции позволяет выполнять важные задания по разработке системы
                                                обучения кадров, соответствует насущным потребностям. Идейные
                                                соображения высшего порядка, а также сложившаяся структура организации
                                                играет важную роль в формировании системы обучения кадров, соответствует
                                                насущным потребностям.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="reviews-box" data-aos="fade-left" data-aos-offset="300"
                                     data-aos-duration="1000">
                                    <div className="reviews-box__picture">
                                        <picture className="picture">
                                            <source className="picture__source"
                                                    srcSet="static/img/content/reviews-user.webp" type="image/webp"/><img
                                                className="picture__source" src="static/img/contents/reviews-user.png"
                                                alt="partner"/>
                                        </picture>
                                    </div>
                                    <div className="reviews-box__column-box">
                                        <div className="column-box">
                                            <div className="column-box__top">
                                                <p className="column-box__name text-18 bold uppercase">Анастасия
                                                    Иванова</p><a className="column-box__link-mail text-18"
                                                                  href="mailto:alinanova@annushka.org">alinanova@annushka.org</a>
                                            </div>
                                            <p className="column-box__paragraph text-14 light italic">Повседневная
                                                практика показывает, что начало повседневной работы по формированию
                                                позиции позволяет выполнять важные задания по разработке системы
                                                обучения кадров, соответствует насущным потребностям. Идейные
                                                соображения высшего порядка, а также сложившаяся структура организации
                                                играет важную роль в формировании системы обучения кадров, соответствует
                                                насущным потребностям.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="reviews-box" data-aos="fade-right" data-aos-offset="300"
                                     data-aos-duration="1000">
                                    <div className="reviews-box__picture">
                                        <picture className="picture">
                                            <source className="picture__source"
                                                    srcSet="static/img/content/reviews-user.webp" type="image/webp"/><img
                                                className="picture__source" src="static/img/contents/reviews-user.png"
                                                alt="partner"/>
                                        </picture>
                                    </div>
                                    <div className="reviews-box__column-box">
                                        <div className="column-box">
                                            <div className="column-box__top">
                                                <p className="column-box__name text-18 bold uppercase">Анастасия
                                                    Иванова</p><a className="column-box__link-mail text-18"
                                                                  href="mailto:alinanova@annushka.org">alinanova@annushka.org</a>
                                            </div>
                                            <p className="column-box__paragraph text-14 light italic">Повседневная
                                                практика показывает, что начало повседневной работы по формированию
                                                позиции позволяет выполнять важные задания по разработке системы
                                                обучения кадров, соответствует насущным потребностям. Идейные
                                                соображения высшего порядка, а также сложившаяся структура организации
                                                играет важную роль в формировании системы обучения кадров, соответствует
                                                насущным потребностям.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-12 col-lg-12">
                                <div className="reviews-box__button-more"><div
                                    className="button-more button-white medium text-14 uppercase" >показать
                                    еще</div></div>
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

export default connect(MapStateToProps, mapDispatchToProps)(ServiceBlue);
