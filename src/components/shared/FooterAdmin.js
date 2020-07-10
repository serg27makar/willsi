import React from 'react';

class FooterAdmin extends React.Component {
    render() {
        if (window.location.pathname !== "/admin-panel") {
            return null;
        }
        return (
            <footer>
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-12 col-lg-7 offset-lg-5">
                            <div className="footer">
                                <div className="footer__list-info">
                                    <ul className="list-info">
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
                                        <li className="list-info__item"><div className="list-info__link light text-16"
                                                                           >Политика конфедициальности</div></li>
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

export default FooterAdmin;
