import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-12 col-lg-4">
                            <div className="header-envelope">
                                <div className="header"><a className="header__logo admin-panel-hide" href="#">
                                    <picture className="logo">
                                        <source className="logo__source" srcSet="static/img/general/logo.webp"
                                                type="image/webp"/><img className="logo__source"
                                                                        src="static/img/general/logo.png" alt="logo"/>
                                    </picture>
                                </a>
                                    <p className="header__text light text-16 admin-panel-hide">Онлайн-<br/>примерочная</p>
                                </div>
                                <div className="header-mobile"><a className="header-mobile__basket-icon" href="#">
                                    <svg className="icon icon-shopping-bag ">
                                        <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#shopping-bag"/>
                                    </svg>
                                </a>
                                    <button className="header-mobile__bars-button" type="button">
                                        <svg className="icon icon-menu ">
                                            <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#menu"/>
                                        </svg>
                                    </button>
                                    <button className="header-mobile__close-button" type="button">
                                        <svg className="icon icon-close ">
                                            <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#close"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-5 hide-column">
                            <div className="header admin-panel-hide">
                                <div className="header__navigation-list">
                                    <ul className="navigation-list">
                                        <li className="navigation-list__item"><a className="navigation-list__link light text-16"
                                                                                 href="#">Главная</a></li>
                                        <li className="navigation-list__item"><a className="navigation-list__link light text-16"
                                                                                 href="#">Примерочная</a></li>
                                        <li className="navigation-list__item"><a className="navigation-list__link light text-16"
                                                                                 href="#">О нас</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-3 hide-column">
                            <div className="header">
                                <div className="header__user-list">
                                    <div className="user-list">
                                        <div className="user-list__icon">
                                            <svg className="icon icon-user ">
                                                <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#user"/>
                                            </svg>
                                        </div>
                                        <div className="user-list__column"><a className="user-list__link light text-16"
                                                                              data-iziModal-open="#modal-enter"
                                                                              href="#">Вход</a><a
                                            className="user-list__link light text-16" data-iziModal-open="#modal-registration"
                                            href="#">Регистрация</a></div>
                                    </div>
                                </div>
                                <a className="header__basket-icon" href="#">
                                    <svg className="icon icon-shopping-bag ">
                                        <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#shopping-bag"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mobile-toggle admin-panel-hide">
                    <div className="mobile-envelope">
                        <ul className="mobile-nav">
                            <li className="mobile-nav__item"><a className="mobile-nav__link light text-25" href="#">Главная</a>
                            </li>
                            <li className="mobile-nav__item"><a className="mobile-nav__link light text-25" href="#">О нас</a>
                            </li>
                            <li className="mobile-nav__item"><a className="mobile-nav__link light text-25"
                                                                href="#">Примерочная</a></li>
                        </ul>
                        <div className="mobile-user">
                            <div className="mobile-user__icon">
                                <svg className="icon icon-user ">
                                    <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#user"/>
                                </svg>
                            </div>
                            <div className="mobile-user__column"><a className="mobile-user__link light text-14"
                                                                    data-iziModal-open="#modal-enter" href="#">Вход</a><a
                                className="mobile-user__link light text-14" data-iziModal-open="#modal-registration"
                                href="#">Регистрация</a></div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;
