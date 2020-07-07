import React from 'react';
import ru from "../../access/lang/LangConstants";

class HeaderAdmin extends React.Component {
    render() {
        if (window.location.pathname !== "/admin-panel") {
            return null;
        }
        return (
            <header>
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-12">
                            <div className="header-envelope">
                                <div className="header">
                                    <a className="header__logo" href="#">
                                        <picture>
                                            <source className="logo__source" srcSet="static/img/general/logo.webp" type="image/webp"/>
                                            <img className="logo__source" src="static/img/general/logo.png" alt="logo"/>
                                        </picture>
                                    </a>
                                <p className="header__text light text-16">{ru.online}<br/>{ru.dressingRoom}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-8">
                            <div className="header__right-list">
                                <div className="header__plan">
                                    <div className="header__plan-picture">
                                        <picture className="plan-picture">
                                            <source className="plan-picture__source" srcSet="static/img/content/trial.png" type="image/webp"/>
                                            <img className="plan-picture__source" src="static/img/content/trial.png" alt="picture"/>
                                        </picture>
                                    </div>
                                    <div className="header__plan-column">
                                        <p className="text-14 bold">{ru.TrialPlan}</p>
                                        <a className="header__plan-change text-14 light" href="#">{ru.Edit}</a>
                                    </div>
                                </div>
                                <a className="header__enter-cabinet text-14 light" href="#">{ru.CustomerLogin}</a>
                                <p className="header__enter-name text-14 bold">Юлия Иванова<a
                                    className="header__button-cabinet" href="#">
                                    <svg className="icon icon-login ">
                                        <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#login"/>
                                    </svg>
                                </a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default HeaderAdmin;
