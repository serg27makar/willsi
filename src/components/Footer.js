import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-12 col-lg-2">
                            <div className="footer"><a className="footer__logo" href="#">
                                <picture className="logo">
                                    <source className="logo__source" srcSet="static/img/general/logo.webp" type="image/webp"/>
                                    <img className="logo__source" src="static/img/general/logo.png" alt="logo"/>
                                </picture>
                            </a></div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-10">
                            <div className="footer">
                                <div className="footer__list-info">
                                    <ul className="list-info">
                                        <li className="list-info__item"><a className="list-info__link light text-16" href="#">Онлайн-<br/>примерочная</a>
                                        </li>
                                        <li className="list-info__item"><a className="list-info__link light text-16"
                                                                           href="mailto:help@willsi.org">
                                            <svg className="icon icon-email ">
                                                <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#email"/>
                                            </svg>
                                            <span className="list-info__text">help@willsi.org</span></a></li>
                                        <li className="list-info__item"><a className="list-info__link light text-16"
                                                                           href="tel:+380986789898">
                                            <svg className="icon icon-phone ">
                                                <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#phone"/>
                                            </svg>
                                            <span className="list-info__text">+ 38 (098) 678 89 89</span></a></li>
                                        <li className="list-info__item"><a className="list-info__link light text-16" href="#">Политика
                                            конфедициальности</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;
