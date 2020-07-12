import React from 'react';
import {setActionAdminPanel} from "../action";
import {connect} from "react-redux";

class About extends React.Component {

    componentDidMount() {
        this.props.setActionAdminPanelFunction("About");
    }

    render() {
        return(
            <div className="content">
                <div className="welcome-about">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-12 col-lg-12">
                                <div className="welcome-about-env">
                                    <h1 className="welcome-about-env__title uppercase title-36 bold">Кто мы?</h1>
                                    <div className="welcome-about-env__text-blur text-18 light">
                                        <p className="welcome-about-env__text-info">Для того, чтобы платье, кардиган или
                                            другая часть гардероба смотрелась идеально -<br/>постарайтесь ввести
                                                максимально точные параметры Вашей чудесной фигуры!</p>
                                    </div>
                                    <div className="welcome-about-env__scroll-down">
                                        <svg className="icon icon-arrow-down ">
                                            <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#arrow-down"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="search-box about-search">
                    <p className="search-box__title text-18 uppercase">Мои параметры</p>
                    <div className="search-box__form-env">
                        <form className="form-env">
                            <div className="form-env__wrapper">
                                <input className="form-env__input text-18" type="text" name="growth"
                                       placeholder="Рост (см)"/>
                                    <input className="form-env__input text-18" type="text" name="shoulders"
                                           placeholder="Плечи (см)"/>
                                        <input className="form-env__input text-18" type="text" name="chest"
                                               placeholder="Грудь (см)"/>
                                            <input className="form-env__input text-18" type="text" name="waist"
                                                   placeholder="Талия (см)"/>
                                                <input className="form-env__input text-18" type="text" name="hips"
                                                       placeholder="Бедра (см)"/>
                            </div>
                            <button className="form-env__button-pickup text-18 button-main medium"
                                    type="button">Подобрать одежду
                            </button>
                        </form>
                    </div>
                </div>
                <div className="reviews">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-12 col-lg-12">
                                <h2 className="reviews__title title-36 uppercase">отзывы<span>довольных</span><span>клиентов</span>
                                </h2>
                            </div>
                            <div className="col-12 col-md-12 col-lg-12">
                                <div className="reviews-box">
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
                                                    Иванова</p><a className="column-box__link-mail"
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
                                <div className="reviews-box">
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
                                                    Иванова</p><a className="column-box__link-mail"
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
                                <div className="reviews-box">
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
                                                    Иванова</p><a className="column-box__link-mail"
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
                                <div className="reviews-box__button-more">
                                    <div className="button-more button-white text-14 medium uppercase">показать еще</div>
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

export default connect(MapStateToProps, mapDispatchToProps)(About);

