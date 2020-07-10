import React from 'react';

class Homepage extends React.Component {
    state = {
        muve: "fade-right",
        animate: "welcome-main-env"
    };
    componentDidMount() {}

    render() {
        return(
            <div className="content">
                <div className="welcome-main">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-12 col-lg-7">
                                <div className={this.state.animate} data-aos={this.state.muve}>
                                    <h1 className="welcome-main-env__title uppercase title-36 bold">
                                        <span className="welcome-main-env__title-name">Willsi -</span>
                                        <br className="welcome-main-env__br"/><span className="welcome-main-env__title-value">Подбор вещей</span>
                                    </h1>
                                    <p className="welcome-main-env__paragraph-text text-16 light">Это стартап, который
                                        использует умные алгоритмы подбора вещей<br/>под персональные параметры тела конкретного
                                        человека.<br/>Подбери идеально-сидящую одежду лично себе.</p>
                                    <div className="welcome-main-env__button-list">
                                        <div className="welcome-main-env__button-item"><div className="button-main text-16"
                                                                                          >В примерочную</div></div>
                                        <div className="welcome-main-env__button-item"><div className="button-white text-16"
                                                                                          >Стать партнером</div></div>
                                    </div>
                                    <div className="welcome-main-env__our-services">
                                        <p className="welcome-main-env__our-services-text text-16 light">Нашим сервисом за
                                            последних<br/>30 дней воспользовалось<span
                                                className="welcome-main-env__our-services-box text-18 medium">524</span><span
                                                className="welcome-main-env__our-services-client">клиента</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="search-box main-search">
                    <p className="search-box__title text-18 uppercase">Хочешь посмотреть, какая одежда из нашей примерочной
                        подойдет идеально тебе?</p>
                    <div className="search-box__form-env">
                        <form className="form-env">
                            <div className="form-env__wrapper">
                                <input className="form-env__input text-18" type="text" name="growth" placeholder="Рост (см)"/>
                                <input className="form-env__input text-18" type="text" name="shoulders"
                                       placeholder="Плечи (см)"/>
                                <input className="form-env__input text-18" type="text" name="chest"
                                       placeholder="Грудь (см)"/>
                                <input className="form-env__input text-18" type="text" name="waist"
                                       placeholder="Талия (см)"/>
                                <input className="form-env__input text-18" type="text" name="hips"
                                       placeholder="Бедра (см)"/>
                            </div>
                            <button className="form-env__button-pickup text-18 button-main medium" type="button">Подобрать
                                одежду
                            </button>
                        </form>
                    </div>
                </div>
                <div className="startup">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-12 col-lg-12">
                                <h2 className="startup__title title-36 uppercase">Почему наш стартап набирает популярность?</h2>
                            </div>
                        </div>
                        <div className="row align-items-start justify-content-center">
                            <div className="col-12 col-md-12 col-lg-4">
                                <div className="startup-box" data-aos="fade-right" data-aos-offset="300"
                                     data-aos-duration="1000">
                                    <div className="startup-box__icon">
                                        <svg className="icon icon-note ">
                                            <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#note"/>
                                        </svg>
                                    </div>
                                    <div className="startup-box__column">
                                        <p className="startup-box__title text-18 bold uppercase">Причина 1</p>
                                        <p className="startup-box__paragraph text-14 light">Запатентированная технология анализа
                                            и подбора одежды по персональным параметрам нашего клиента</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-12 col-lg-4">
                                <div className="startup-box" data-aos="fade-up" data-aos-offset="300" data-aos-duration="1000">
                                    <div className="startup-box__icon">
                                        <svg className="icon icon-fashion ">
                                            <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#fashion"/>
                                        </svg>
                                    </div>
                                    <div className="startup-box__column">
                                        <p className="startup-box__title text-18 bold uppercase">Причина 2</p>
                                        <p className="startup-box__paragraph text-14 light">Постоянно растущий объем одежды в
                                            нашей примерочной</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-12 col-lg-4">
                                <div className="startup-box" data-aos="fade-left" data-aos-offset="300"
                                     data-aos-duration="1000">
                                    <div className="startup-box__icon">
                                        <svg className="icon icon-percentage ">
                                            <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#percentage"/>
                                        </svg>
                                    </div>
                                    <div className="startup-box__column">
                                        <p className="startup-box__title text-18 bold uppercase">Причина 3</p>
                                        <p className="startup-box__paragraph text-14 light">Интересные предложения для клиентов
                                            (акции, призы)</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-12 col-lg-4">
                                <div className="startup-box" data-aos="fade-right" data-aos-offset="300"
                                     data-aos-duration="1000">
                                    <div className="startup-box__icon">
                                        <svg className="icon icon-bell ">
                                            <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#bell"/>
                                        </svg>
                                    </div>
                                    <div className="startup-box__column">
                                        <p className="startup-box__title text-18 bold uppercase">Причина 4</p>
                                        <p className="startup-box__paragraph text-14 light">Оповещение о новинках примерочной,
                                            которые идеально подойдут клиентам, согласно их персональных параметров</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-12 col-lg-4">
                                <div className="startup-box" data-aos="fade-up" data-aos-offset="300" data-aos-duration="1000">
                                    <div className="startup-box__icon">
                                        <svg className="icon icon-shopping ">
                                            <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#shopping"/>
                                        </svg>
                                    </div>
                                    <div className="startup-box__column">
                                        <p className="startup-box__title text-18 bold uppercase">Причина 5</p>
                                        <p className="startup-box__paragraph text-14 light">Возможность продавать собственные
                                            товары (от 1-й вещи 1-го размера)</p>
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
                                    <p className="indicator-env__mobile-info text-14 light italic color-aqua">С помощью этого
                                        индикатора Вы сможете подобрать максимасльно подходящие для Вас вещи!</p>
                                    <div className="indicator-env__mobile-picture">
                                        <picture className="mobile-picture">
                                            <source className="mobile-picture__source" srcSet="static/img/content/circle.webp"
                                                    type="image/webp"/><img className="mobile-picture__source"
                                                                            src="static/img/content/circle.png" alt="circle"/>
                                        </picture>
                                    </div>
                                </div>
                                <div className="indicator-env" data-aos="fade-left" data-aos-offset="300"
                                     data-aos-duration="1000">
                                    <p className="indicator-env__paragraph text-14 light italic">Обращайте внимение на вещи, с
                                        "коефициентом подходящести" более 70 из 100. Остальные вещи, скорее всего будут на вас
                                        сидеть не на столько идеально!</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-12 col-lg-4">
                                <div className="indicator-env" data-aos="fade-up" data-aos-offset="300"
                                     data-aos-duration="1000">
                                    <div className="indicator-env__picture">
                                        <picture className="picture">
                                            <source className="picture__source" srcSet="static/img/content/slidebars.webp"
                                                    type="image/webp"/><img className="picture__source"
                                                                            src="static/img/content/slidebars.png"
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
                                        рекомендуем рассмотреть и купить, все что ниже - рекомендуем дополнительно уточнить все
                                        параметры у продавца</p>
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
                                            <source className="picture__source" srcSet="static/img/content/window-screen.webp"
                                                    type="image/webp"/><img className="picture__source"
                                                                            src="static/img/content/window-screen.png"
                                                                            alt="window-screen"/>
                                        </picture>
                                        <p className="indicator-bottom__text text-14 light italic color-aqua">С помощью этого
                                            индикатора Вы сможете подобрать максимасльно подходящие для Вас вещи!</p>
                                    </div>
                                    <div className="indicator-bottom__mobile-picture">
                                        <picture className="mobile-picture">
                                            <source className="mobile-picture__source"
                                                    srcSet="static/img/content/window-screen-mobile.webp" type="image/webp"/><img
                                            className="mobile-picture__source"
                                            src="static/img/content/window-screen-mobile.png" alt="window-screen"/>
                                        </picture>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="steps">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-12 col-lg-12">
                                <h2 className="steps__title title-36 uppercase">всего 3 шага на пути к идеальным вещам</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-12 col-lg-4" data-aos="fade-right" data-aos-offset="300"
                                 data-aos-duration="1000">
                                <div className="steps-box">
                                    <div className="steps-box__picture">
                                        <picture className="picture">
                                            <source className="picture__source" srcSet="static/img/content/step-1.webp"
                                                    type="image/webp"/><img className="picture__source"
                                                                            src="static/img/content/step-1.png" alt="steps"/>
                                        </picture>
                                        <p className="steps-box__number"><span
                                            className="steps-box__number-item text-25 bold">01</span></p>
                                    </div>
                                    <div className="steps-box__bottom-info text-18 bold uppercase" >перейти в
                                        примерочную</div>
                                </div>
                            </div>
                            <div className="col-12 col-md-12 col-lg-4" data-aos="fade-up" data-aos-offset="300"
                                 data-aos-duration="1000">
                                <div className="steps-box">
                                    <div className="steps-box__picture">
                                        <picture className="picture">
                                            <source className="picture__source" srcSet="static/img/content/step-2.webp"
                                                    type="image/webp"/><img className="picture__source"
                                                                            src="static/img/content/step-2.png" alt="steps"/>
                                        </picture>
                                        <p className="steps-box__number"><span
                                            className="steps-box__number-item text-25 bold">02</span></p>
                                    </div>
                                    <div className="steps-box__bottom-info text-18 bold uppercase" >ввести свои
                                        параметры</div>
                                </div>
                            </div>
                            <div className="col-12 col-md-12 col-lg-4" data-aos="fade-left" data-aos-offset="300"
                                 data-aos-duration="1000">
                                <div className="steps-box">
                                    <div className="steps-box__picture">
                                        <picture className="picture">
                                            <source className="picture__source" srcSet="static/img/content/step-3.webp"
                                                    type="image/webp"/><img className="picture__source"
                                                                            src="static/img/content/step-3.png" alt="steps"/>
                                        </picture>
                                        <p className="steps-box__number"><span
                                            className="steps-box__number-item text-25 bold">03</span></p>
                                    </div>
                                    <div className="steps-box__bottom-info text-18 bold uppercase" >результат готов!</div>
                                </div>
                            </div>
                            <div className="col-12 col-md-12 col-lg-12"><div
                                className="steps-box__button-dressing button-main text-18" >В примерочную</div></div>
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
                                <p className="description-bg__paragraph text-14">Любишь покупать вещи через интернет не только
                                    себе, но и своей половинке или детям - укажи в своем аккаунте несколько профилей и получай
                                    персональные предложения по каждому.</p>
                                <div className="description-env">
                                    <div className="description-env__icon">
                                        <svg className="icon icon-warning ">
                                            <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#warning"/>
                                        </svg>
                                    </div>
                                    <p className="description-env__top-info text-22 bold uppercase">ВАЖНО!</p>
                                </div>
                                <p className="description-bg__paragraph text-14">Наша примерочная не принимает оплаты и не
                                    осуществляет доставку товаров. Наша задача показать клиенту идеально-подходящую одежду
                                    (согласно персональных параметров тела) и подсказать место, где можно её приобрести.</p>
                                <p className="description-bg__paragraph text-14">Каждый раз начинайте покупки одежды с нашей
                                    примерочной Willsi и получайте товар, который подходит именно Вам.</p>
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
                                     data-aos-duration="1000"><div className="partners-env__picture"  target="_blank">
                                    <picture className="picture">
                                        <source className="picture__source" srcSet="static/img/content/partner-1.webp"
                                                type="image/webp"/><img className="picture__source"
                                                                        src="static/img/content/partner-1.png" alt="partner"/>
                                    </picture>
                                </div></div>
                            </div>
                            <div className="col-6 col-md-6 col-lg-3">
                                <div className="partners-env" data-aos="fade-right" data-aos-offset="300"
                                     data-aos-duration="1000"><div className="partners-env__picture"  target="_blank">
                                    <picture className="picture">
                                        <source className="picture__source" srcSet="static/img/content/partner-2.webp"
                                                type="image/webp"/><img className="picture__source"
                                                                        src="static/img/content/partner-2.png" alt="partner"/>
                                    </picture>
                                </div></div>
                            </div>
                            <div className="col-6 col-md-6 col-lg-3">
                                <div className="partners-env" data-aos="fade-left" data-aos-offset="300"
                                     data-aos-duration="1000"><div className="partners-env__picture"  target="_blank">
                                    <picture className="picture">
                                        <source className="picture__source" srcSet="static/img/content/partner-3.webp"
                                                type="image/webp"/><img className="picture__source"
                                                                        src="static/img/content/partner-3.png" alt="partner"/>
                                    </picture>
                                </div></div>
                            </div>
                            <div className="col-6 col-md-6 col-lg-3">
                                <div className="partners-env" data-aos="fade-left" data-aos-offset="300"
                                     data-aos-duration="1000"><div className="partners-env__picture"  target="_blank">
                                    <picture className="picture">
                                        <source className="picture__source" srcSet="static/img/content/partner-4.webp"
                                                type="image/webp"/><img className="picture__source"
                                                                        src="static/img/content/partner-4.png" alt="partner"/>
                                    </picture>
                                </div></div>
                            </div>
                            <div className="col-6 col-md-6 col-lg-3">
                                <div className="partners-env" data-aos="fade-right" data-aos-offset="300"
                                     data-aos-duration="1000"><div className="partners-env__picture"  target="_blank">
                                    <picture className="picture">
                                        <source className="picture__source" srcSet="static/img/content/partner-1.webp"
                                                type="image/webp"/><img className="picture__source"
                                                                        src="static/img/content/partner-1.png" alt="partner"/>
                                    </picture>
                                </div></div>
                            </div>
                            <div className="col-6 col-md-6 col-lg-3">
                                <div className="partners-env" data-aos="fade-right" data-aos-offset="300"
                                     data-aos-duration="1000"><div className="partners-env__picture"  target="_blank">
                                    <picture className="picture">
                                        <source className="picture__source" srcSet="static/img/content/partner-2.webp"
                                                type="image/webp"/><img className="picture__source"
                                                                        src="static/img/content/partner-2.png" alt="partner"/>
                                    </picture>
                                </div></div>
                            </div>
                            <div className="col-6 col-md-6 col-lg-3">
                                <div className="partners-env" data-aos="fade-left" data-aos-offset="300"
                                     data-aos-duration="1000"><div className="partners-env__picture"  target="_blank">
                                    <picture className="picture">
                                        <source className="picture__source" srcSet="static/img/content/partner-3.webp"
                                                type="image/webp"/><img className="picture__source"
                                                                        src="static/img/content/partner-3.png" alt="partner"/>
                                    </picture>
                                </div></div>
                            </div>
                            <div className="col-6 col-md-6 col-lg-3">
                                <div className="partners-env" data-aos="fade-left" data-aos-offset="300"
                                     data-aos-duration="1000"><div className="partners-env__picture"  target="_blank">
                                    <picture className="picture">
                                        <source className="picture__source" srcSet="static/img/content/partner-4.webp"
                                                type="image/webp"/><img className="picture__source"
                                                                        src="static/img/content/partner-4.png" alt="partner"/>
                                    </picture>
                                </div></div>
                            </div>
                            <div className="col-12 col-md-12 col-lg-12">
                                <div className="partners-env"><div className="partners-env__button button-main text-16" >Стать
                                    партнером</div></div>
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
                                            <source className="picture__source" srcSet="static/img/content/reviews-user.webp"
                                                    type="image/webp"/><img className="picture__source"
                                                                            src="static/img/contents/reviews-user.png"
                                                                            alt="partner"/>
                                        </picture>
                                    </div>
                                    <div className="reviews-box__column-box">
                                        <div className="column-box">
                                            <div className="column-box__top">
                                                <p className="column-box__name text-18 bold uppercase">Анастасия Иванова</p><a
                                                className="column-box__link-mail text-18"
                                                href="mailto:alinanova@annushka.org">alinanova@annushka.org</a>
                                            </div>
                                            <p className="column-box__paragraph text-14 light italic">Повседневная практика
                                                показывает, что начало повседневной работы по формированию позиции позволяет
                                                выполнять важные задания по разработке системы обучения кадров, соответствует
                                                насущным потребностям. Идейные соображения высшего порядка, а также сложившаяся
                                                структура организации играет важную роль в формировании системы обучения кадров,
                                                соответствует насущным потребностям.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="reviews-box" data-aos="fade-left" data-aos-offset="300"
                                     data-aos-duration="1000">
                                    <div className="reviews-box__picture">
                                        <picture className="picture">
                                            <source className="picture__source" srcSet="static/img/content/reviews-user.webp"
                                                    type="image/webp"/><img className="picture__source"
                                                                            src="static/img/contents/reviews-user.png"
                                                                            alt="partner"/>
                                        </picture>
                                    </div>
                                    <div className="reviews-box__column-box">
                                        <div className="column-box">
                                            <div className="column-box__top">
                                                <p className="column-box__name text-18 bold uppercase">Анастасия Иванова</p><a
                                                className="column-box__link-mail text-18"
                                                href="mailto:alinanova@annushka.org">alinanova@annushka.org</a>
                                            </div>
                                            <p className="column-box__paragraph text-14 light italic">Повседневная практика
                                                показывает, что начало повседневной работы по формированию позиции позволяет
                                                выполнять важные задания по разработке системы обучения кадров, соответствует
                                                насущным потребностям. Идейные соображения высшего порядка, а также сложившаяся
                                                структура организации играет важную роль в формировании системы обучения кадров,
                                                соответствует насущным потребностям.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="reviews-box" data-aos="fade-right" data-aos-offset="300"
                                     data-aos-duration="1000">
                                    <div className="reviews-box__picture">
                                        <picture className="picture">
                                            <source className="picture__source" srcSet="static/img/content/reviews-user.webp"
                                                    type="image/webp"/><img className="picture__source"
                                                                            src="static/img/contents/reviews-user.png"
                                                                            alt="partner"/>
                                        </picture>
                                    </div>
                                    <div className="reviews-box__column-box">
                                        <div className="column-box">
                                            <div className="column-box__top">
                                                <p className="column-box__name text-18 bold uppercase">Анастасия Иванова</p><a
                                                className="column-box__link-mail text-18"
                                                href="mailto:alinanova@annushka.org">alinanova@annushka.org</a>
                                            </div>
                                            <p className="column-box__paragraph text-14 light italic">Повседневная практика
                                                показывает, что начало повседневной работы по формированию позиции позволяет
                                                выполнять важные задания по разработке системы обучения кадров, соответствует
                                                насущным потребностям. Идейные соображения высшего порядка, а также сложившаяся
                                                структура организации играет важную роль в формировании системы обучения кадров,
                                                соответствует насущным потребностям.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-12 col-lg-12">
                                <div className="reviews-box__button-more"><div
                                    className="button-more button-white medium text-14 uppercase" >показать еще</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Homepage;

