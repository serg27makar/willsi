import React from 'react';
import {Link} from "react-router-dom";
import ru from "../../access/lang/LangConstants";
import "../../access/css/headerFooter.css"
import {connect} from "react-redux";
import MobileEnvelope from "./MobileEnvelope";
import HeaderNavigation from "./HeaderNavigation";
import HeaderCabinet from "./HeaderCabinet";
import {
    actionDataRedirect,
    actionDataUpdate,
    actionEmail,
    actionPermission,
    actionUserID,
    actionUserName,
    actionUsersParameters,
    actionUserStore
} from "../../action";

const mobilButtonClose = "static/img/svg-sprites/symbol/sprite.svg#close";
const mobilButtonOpen = "static/img/svg-sprites/symbol/sprite.svg#menu";

//Todo refactor

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mobileOpen: "mobile-toggle",
            mobilButtonCloseOpen: mobilButtonOpen,
            page: "",
        };
        this.menuButton = this.menuButton.bind(this);
        this.logout = this.logout.bind(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.page !== this.props.page) {
            this.setState({
                ...this.state,
                page: this.props.page
            })
        }
    }

    logout() {
        this.props.dataRedirectFunction({
            accessR: true,
            to: "/",
        });
        localStorage.clear();
        this.props.userIDFunction("");
        this.props.userNameFunction("");
        this.props.emailFunction("");
        this.props.usersParametersFunction([]);
        this.props.permissionFunction("unknown");
        this.props.userStoreFunction([]);
        this.props.dataUpdateFunction(!this.props.update);
    }

    menuButton = () => {
        this.setState({
            ...this.state,
            mobileOpen: this.state.mobileOpen === "mobile-toggle" ? "mobile-toggle open" : "mobile-toggle",
            mobilButtonCloseOpen: this.state.mobilButtonCloseOpen === mobilButtonClose ? mobilButtonOpen : mobilButtonClose,
        })
    };

    render() {
        return (
            <header>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12">
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
                        <HeaderNavigation/>
                        <HeaderCabinet/>
                        <div className="header-btn-logout" onClick={this.logout}>
                            <svg className="icon">
                                <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#login"/>
                            </svg>
                            {ru.Exit}
                        </div>
                    </div>
                </div>
                <div className={this.state.mobileOpen}>
                    <MobileEnvelope/>
                </div>
            </header>
        )
    }
}

function MapStateToProps(state) {
    return {
        page: state.pageReducer.page,
        update: state.pageReducer.update,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        userIDFunction: (UserID) => {
            dispatch(actionUserID(UserID))
        },
        userNameFunction: (UserName) => {
            dispatch(actionUserName(UserName))
        },
        emailFunction: (Email) => {
            dispatch(actionEmail(Email))
        },
        usersParametersFunction: (UsersParameters) => {
            dispatch(actionUsersParameters(UsersParameters))
        },
        permissionFunction: (Permission) => {
            dispatch(actionPermission(Permission))
        },
        userStoreFunction: (UserStore) => {
            dispatch(actionUserStore(UserStore))
        },
        dataUpdateFunction: (update) => {
            dispatch(actionDataUpdate(update))
        },
        dataRedirectFunction: (dataRedirect) => {
            dispatch(actionDataRedirect(dataRedirect))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(Header);

