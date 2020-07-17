import React from 'react';
import { Link } from "react-router-dom";
import ru from "../../access/lang/LangConstants";
import "../../access/css/headerFooter.css"
import {connect} from "react-redux";

const mobilButtonClose = "static/img/svg-sprites/symbol/sprite.svg#close";
const mobilButtonOpen = "static/img/svg-sprites/symbol/sprite.svg#menu";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mobileOpen: "mobile-toggle",
            mobilButtonCloseOpen: mobilButtonOpen,
            page: ""
        };
        this.menuButton = this.menuButton.bind(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.page !== this.props.page) {
            this.setState({
                ...this.state,
                page: this.props.page
            })
        }
    }

    menuButton = () => {
        this.setState({
            ...this.state,
            mobileOpen: this.state.mobileOpen === "mobile-toggle" ? "mobile-toggle open" : "mobile-toggle",
            mobilButtonCloseOpen: this.state.mobilButtonCloseOpen === mobilButtonClose ? mobilButtonOpen : mobilButtonClose,
        })
    };

    render() {
        if (this.props.page === "AdminPanel") {
            return null;
        }
        return (
            <header>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-12">
                            <div className="header-envelope">
                                <div className="header">
                                    <Link to={"/"}>
                                        <picture>
                                            <source className="logo__source" srcSet="static/img/general/logo.webp" type="image/webp"/>
                                            <img className="logo__source" src="static/img/general/logo.png" alt="logo"/>
                                        </picture>
                                    </Link>
                                    <p className="header__text light text-16">{ru.online}<br/>{ru.dressingRoom}</p>
                                </div>
                                <div className="header-mobile">
                                    <div className="header-mobile__basket-icon">
                                        <svg className="icon">
                                            <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#shopping-bag"/>
                                        </svg>
                                    </div>
                                    <button className="header-mobile__bars-button" type="button" onClick={this.menuButton}>
                                        <svg className="icon">
                                            <use xlinkHref={this.state.mobilButtonCloseOpen}/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-5 hide-column">
                            <div className="header">
                                <div className="header__navigation-list">
                                    <ul className="navigation-list">
                                        <li className="navigation-list__item">
                                            <Link className="navigation-list__link light text-16" to={"/"}>{ru.Home}</Link>
                                        </li>
                                        <li className="navigation-list__item">
                                            {/*Todo data if not params*/}
                                            <Link className="navigation-list__link light text-16" to={"/catalog"}>{ru.DressingRoom}</Link>
                                        </li>
                                        <li className="navigation-list__item">
                                            <Link className="navigation-list__link light text-16" to={"/about"}>{ru.About}</Link>
                                        </li>
                                        <li className="navigation-list__item">
                                            <Link className="navigation-list__link light text-16" to={"/service-red"}>{ru.Partners}</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-3 hide-column">
                            <div className="header">
                                <div className="header__user-list">
                                    <div className="user-list">
                                        <div className="user-list__icon">
                                            <svg className="icon">
                                                <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#user"/>
                                            </svg>
                                        </div>
                                        <div className="user-list__column">
                                            <div className="user-list__link light text-16" >{ru.SignIn}</div>
                                            <div className="user-list__link light text-16" >{ru.SignUp}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="header__basket-icon" >
                                    <li className="navigation-list__item">
                                        <Link className="navigation-list__link light text-16" to={"/postpone"}>
                                            <div className="red-ring-delayed">3</div>
                                            {ru.Delayed}
                                        </Link>
                                    </li>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={this.state.mobileOpen}>
                    <div className="mobile-envelope">
                        <ul>
                            <li className="mobile-nav__item">
                                <div className="mobile-nav__link light text-25" >{ru.Home}</div>
                            </li>
                            <li className="mobile-nav__item">
                                <div className="mobile-nav__link light text-25" >{ru.About}</div>
                            </li>
                            <li className="mobile-nav__item">
                                <div className="mobile-nav__link light text-25" >{ru.DressingRoom}</div>
                            </li>
                        </ul>
                        <div className="mobile-user">
                            <div className="mobile-user__icon">
                                <svg className="icon">
                                    <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#user"/>
                                </svg>
                            </div>
                            <div className="mobile-user__column">
                                <div className="mobile-user__link light text-14" >{ru.SignIn}</div>
                                <div className="mobile-user__link light text-14" >{ru.SignUp}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

function MapStateToProps(state) {
    return {
        page: state.pageReducer.page,
    }
}

export default connect(MapStateToProps)(Header);
