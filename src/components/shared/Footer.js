import React from 'react';
import "../../access/css/headerFooter.css"
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {langCode} from "../../access/lang/translaterJS";

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: ""
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.page !== this.props.page) {
            this.setState({
                ...this.state,
                page: this.props.page
            })
        }
    }

    render() {
        if (this.props.Permission === "primaryAdmin") {
            return (
                <footer/>
            )
        }
        return (
            <footer>
                <div className="container">
                    <div className="footer-row-wrap align-items-center">
                        <div className="col-12">
                            <div className="footer">
                                <div className="footer__logo" >
                                    <picture className="logo">
                                        <img className="logo__source" src="static/img/general/logo.png" alt="logo"/>
                                    </picture>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="footer">
                                <Link className="navigation-list__link light text-16" to={"/tariff-plans"}>
                                    <div className="header__plan">
                                        <div className="header__plan-picture">
                                            <picture className="plan-picture">
                                                <img className="plan-picture__source" src="static/img/content/trial.png" alt="trial"/>
                                            </picture>
                                        </div>
                                        <div className="header__plan-column">
                                            <p className="text-14 bold">{langCode(this.props.lang, "TrialPlan")}</p>
                                            <div className="header__plan-change text-14 light" >{langCode(this.props.lang, "Edit")}</div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="footer">
                                <div className="footer__list-info">
                                    <ul className="list-info">
                                        <li className="list-info__item">
                                            <div className="list-info__link light text-16" >{langCode(this.props.lang, "online")}
                                            <br/>{langCode(this.props.lang, "dressingRoom")}</div>
                                        </li>
                                        <li className="list-info__item">
                                            <a className="list-info__link light text-16" href="mailto:help@willsi.org">
                                                <svg className="icon icon-email">
                                                    <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#email"/>
                                                </svg>
                                                <span className="list-info__text">{langCode(this.props.lang, "willsiEmail")}</span>
                                            </a>
                                        </li>
                                        <li className="list-info__item">
                                            <a className="list-info__link light text-16" href="tel:+380986789898">
                                                <svg className="icon icon-phone ">
                                                    <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#phone"/>
                                                </svg>
                                                <span className="list-info__text">{langCode(this.props.lang, "willsiPhone")}</span>
                                            </a>
                                        </li>
                                        <li className="list-info__item">
                                            <div className="list-info__link light text-16" >{langCode(this.props.lang, "PrivacyPolicy")}</div>
                                        </li>
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

function MapStateToProps(state) {
    return {
        page: state.pageReducer.page,
        Permission: state.userReducer.Permission,
        lang: state.utiliteReducer.lang,
    }
}

export default connect(MapStateToProps)(Footer);

