import React from 'react';

class Data extends React.Component {

    render() {
        return(
            <div className="content">
                <div className="welcome-data">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-12 col-lg-12">
                                <div className="welcome-data-env">
                                    <h1 className="welcome-data-env__title uppercase title-36 bold">Вы готовы?</h1>
                                    <p className="welcome-data-env__text text-16 light">Для того чтобы платье, кардиган
                                        или другая часть гардероба<br/>смотрелась идеально - постарайтесь ввести
                                            максимально точные<br/>параметры вашей чудесной фигуры :)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="recalculate-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-12 col-lg-12">
                                <form className="recalculate-envelope" action="#" method="post">
                                    <p className="recalculate-envelope__title text-18 uppercase bold color-aqua">Кого
                                        измеряем</p>
                                    <div className="recalculate-envelope__box-tags">
                                        <div className="box-tags">
                                            <button className="box-tags__item tags-active" type="button"><span
                                                className="box-tags__text text-18 medium">Женщина</span>
                                                <svg className="icon icon-pen ">
                                                    <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#pen"/>
                                                </svg>
                                            </button>
                                            <input className="box-tags__input-radio" type="radio" name="woman" checked hidden/>
                                                <button className="box-tags__item" type="button"><span
                                                    className="box-tags__text text-18 medium">Мужчина</span>
                                                    <svg className="icon icon-pen ">
                                                        <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#pen"/>
                                                    </svg>
                                                </button>
                                                <input className="box-tags__input-radio" type="radio" name="man" hidden/>
                                                    <button className="box-tags__item" type="button"><span
                                                        className="box-tags__text text-18 medium">Ребенок</span>
                                                        <svg className="icon icon-pen ">
                                                            <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#pen"/>
                                                        </svg>
                                                    </button>
                                                    <input className="box-tags__input-radio" type="radio" name="child" hidden/>
                                        </div>
                                    </div>
                                    <p className="recalculate-envelope__sub-info text-22 light">Как назовем эти
                                        параметры?</p>
                                    <div className="recalculate-envelope__bottom-info">
                                        <input className="recalculate-envelope__input-data text-18 light"
                                               placeholder="Юлия Иванова"/>
                                            <button className="recalculate-envelope__button-next text-16 medium"
                                                    data-iziModal-open="#modal-profile" type="button">Далее
                                            </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <form className="recalculate" action="#" method="post">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-12 col-lg-12">
                                <div className="recalculate-box">
                                    <div className="recalculate-box__row">
                                        <div className="recalculate-box__column-left">
                                            <div className="recalculate-box__picture">
                                                <picture className="picture">
                                                    <source className="picture__source"
                                                            srcSet="static/img/content/data-1.webp" type="image/webp"/>
                                                        <img className="picture__source"
                                                             src="static/img/content/data-1.png" alt="data-item"/>
                                                </picture>
                                            </div>
                                        </div>
                                        <div className="recalculate-box__column-right">
                                            <div className="recalculate-box__flex-col">
                                                <p className="recalculate-box__title title-36 bold uppercase">Начнем с
                                                    роста</p>
                                                <p className="recalculate-box__paragraph text-22 light">Измеряем свой
                                                    рост и<br/>записываем число вот в это<br/>окошко:</p>
                                                <input className="recalculate-box__input-data text-18 light"
                                                       name="growth" placeholder="150 см"/>
                                                    <p className="recalculate-box__number text-115 bold">01</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ellipse-right"/>
                                </div>
                                <div className="recalculate-box">
                                    <div className="recalculate-box__row row-reverse">
                                        <div className="recalculate-box__column-left">
                                            <div className="recalculate-box__picture">
                                                <picture className="picture">
                                                    <source className="picture__source"
                                                            srcSet="static/img/content/data-2.webp" type="image/webp"/>
                                                        <img className="picture__source"
                                                             src="static/img/content/data-2.png" alt="data-item"/>
                                                </picture>
                                            </div>
                                        </div>
                                        <div className="recalculate-box__column-right">
                                            <div className="recalculate-box__flex-col">
                                                <p className="recalculate-box__title title-36 bold uppercase">Обхват
                                                    плеч</p>
                                                <p className="recalculate-box__paragraph text-22 light">Записываем
                                                    результат<br/>и идем дальше!</p>
                                                <input className="recalculate-box__input-data text-18 light"
                                                       name="shoulders" placeholder="150 см"/>
                                                    <p className="recalculate-box__number text-115 bold">02</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ellipse-left"/>
                                </div>
                                <div className="recalculate-box">
                                    <div className="recalculate-box__row">
                                        <div className="recalculate-box__column-left">
                                            <div className="recalculate-box__picture">
                                                <picture className="picture">
                                                    <source className="picture__source"
                                                            srcSet="static/img/content/data-3.webp" type="image/webp"/>
                                                        <img className="picture__source"
                                                             src="static/img/content/data-3.png" alt="data-item"/>
                                                </picture>
                                            </div>
                                        </div>
                                        <div className="recalculate-box__column-right">
                                            <div className="recalculate-box__flex-col">
                                                <p className="recalculate-box__title title-36 bold uppercase">Обхват
                                                    груди</p>
                                                <p className="recalculate-box__paragraph text-22 light">Ходят слухи, что
                                                    если измерять<br/>слишком долго, то может прийти<br/>мужчина</p>
                                                <input className="recalculate-box__input-data text-18 light"
                                                       name="chest" placeholder="150 см"/>
                                                    <p className="recalculate-box__number text-115 bold">03</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ellipse-right"/>
                                </div>
                                <div className="recalculate-box">
                                    <div className="recalculate-box__row row-reverse">
                                        <div className="recalculate-box__column-left">
                                            <div className="recalculate-box__picture">
                                                <picture className="picture">
                                                    <source className="picture__source"
                                                            srcSet="static/img/content/data-4.webp" type="image/webp"/>
                                                        <img className="picture__source"
                                                             src="static/img/content/data-4.png" alt="data-item"/>
                                                </picture>
                                            </div>
                                        </div>
                                        <div className="recalculate-box__column-right">
                                            <div className="recalculate-box__flex-col">
                                                <p className="recalculate-box__title title-36 bold uppercase">Обхват
                                                    талии</p>
                                                <p className="recalculate-box__paragraph text-22 light">Лучше измерять
                                                    талию в самом<br/>узком месте</p>
                                                <input className="recalculate-box__input-data text-18 light"
                                                       name="waist" placeholder="150 см"/>
                                                    <p className="recalculate-box__number text-115 bold">04</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ellipse-left"/>
                                </div>
                                <div className="recalculate-box">
                                    <div className="recalculate-box__row">
                                        <div className="recalculate-box__column-left">
                                            <div className="recalculate-box__picture">
                                                <picture className="picture">
                                                    <source className="picture__source"
                                                            srcSet="static/img/content/data-5.webp" type="image/webp"/>
                                                        <img className="picture__source"
                                                             src="static/img/content/data-5.png" alt="data-item"/>
                                                </picture>
                                            </div>
                                        </div>
                                        <div className="recalculate-box__column-right">
                                            <div className="recalculate-box__flex-col">
                                                <p className="recalculate-box__title title-36 bold uppercase">Обхват в
                                                    бедрах</p>
                                                <p className="recalculate-box__paragraph text-22 light">Ходят слухи, что
                                                    если измерять<br/>слишком долго, то может прийти<br/>мужчина</p>
                                                <input className="recalculate-box__input-data text-18 light" name="hips"
                                                       placeholder="150 см"/>
                                                    <p className="recalculate-box__number text-115 bold">05</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-12 col-lg-12">
                                <button className="recalculate__button text-22 medium button-main"
                                        type="button">Посчитать
                                </button>
                            </div>
                            <div className="col-12 col-md-12 col-lg-12">
                                <p className="recalculate__bottom-title title-36 uppercase color-aqua bold">ура, вы
                                    восхитительны!</p>
                                <p className="recalculate__bottom-paragraph text-16 light">Просто, неправда ли? А теперь
                                    настапо время волшебства. Сейчас<br/>подберем для вас идеально-подходящие вещи :)</p>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Data;

