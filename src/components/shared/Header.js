import React from 'react';
import {Link} from "react-router-dom";
import "../../access/css/headerFooter.css"
import {connect} from "react-redux";
import MobileEnvelope from "./MobileEnvelope";
import HeaderNavigation from "./HeaderNavigation";
import HeaderCabinet from "./HeaderCabinet";
import {
    actionDataRedirect,
    actionDataUpdate,
    actionEmail,
    actionOpenCatalog,
    actionOpenModal,
    actionPermission,
    actionPostpone,
    actionProductsThisStore,
    actionSelectedProductToEdit,
    actionSelectedStore,
    actionSelectedSubCatalogID,
    actionSetActionPostpone,
    actionSetStoreArr,
    actionUserID,
    actionUserName,
    actionUsersParameters,
    actionUserStore
} from "../../action";
import HeaderAdmin from "./HeaderAdmin";
import {langCode} from "../../access/lang/translaterJS";
import LangDropDown from "../dropdowns/LangDropDown";

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
            pts: 0,
        };
        this.menuButton = this.menuButton.bind(this);
        this.logout = this.logout.bind(this);
        this.mobileMenuClose = this.mobileMenuClose.bind(this);
        this.helpModal = this.helpModal.bind(this);
        this.calcPostpone = this.calcPostpone.bind(this);
    }

    componentDidMount() {
        if (this.props.Postpone) {
            this.calcPostpone();
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.page !== this.props.page) {
            this.setState({
                ...this.state,
                page: this.props.page
            })
        }
        if ((prevProps.SetActionPostpone !== this.props.SetActionPostpone ||
            prevProps.Postpone !== this.props.Postpone) && this.props.Postpone) {
            this.calcPostpone();
        }
    }

    calcPostpone() {
        this.setState({
            ...this.state,
            pts: this.props.Postpone.length || 0,
        })
    }

    logout() {
        this.mobileMenuClose();
        localStorage.clear();
        this.props.userIDFunction("");
        this.props.userNameFunction("");
        this.props.emailFunction("");
        this.props.usersParametersFunction([]);
        this.props.permissionFunction("unknown");
        this.props.userStoreFunction([]);
        this.props.dataUpdateFunction(!this.props.update);
        this.props.setActionPostponeFunction(!this.props.SetActionPostpone);
        this.props.postponeFunction([]);
        this.props.selectedStoreFunction({});
        this.props.setStoreArrFunction([]);
        this.props.productsThisStoreFunction([]);
        this.props.selectedSubCatalogIDFunction("");
        this.props.openCatalogFunction("");
        this.props.selectedProductToEditFunction({});
        this.props.dataRedirectFunction({
            accessR: true,
            to: "/",
        });
    }

    menuButton() {
        this.setState({
            ...this.state,
            mobileOpen: this.state.mobileOpen === "mobile-toggle" ? "mobile-toggle open" : "mobile-toggle",
            mobilButtonCloseOpen: this.state.mobilButtonCloseOpen === mobilButtonClose ? mobilButtonOpen : mobilButtonClose,
        })
    };

    mobileMenuClose() {
        this.setState({
            ...this.state,
            mobileOpen: "mobile-toggle",
            mobilButtonCloseOpen: mobilButtonOpen,
        })
    }

    renderRedRing() {
        if (this.state.pts) {
            return (
                <div className="red-ring-delayed-mobil">{this.state.pts}</div>
            )
        }
        return null;
    }

    helpModal() {
        this.props.openModalFunction("helpModal");
    }

    render() {
        if (this.props.Permission === "primaryAdmin") {
            return (
                <HeaderAdmin logout={this.logout}/>
            )
        }
        return (
            <header>
                <div className="container">
                    <div className="row align-items-center">
                        <LangDropDown/>
                        <div className="col-12">
                            <div className="header-envelope">
                                <div className="header">
                                    <Link to={"/"} onClick={this.mobileMenuClose}>
                                        <picture>
                                            <img className="logo__source" src="static/img/general/logo.png" alt="logo"/>
                                        </picture>
                                    </Link>
                                    <p className="header__text light text-16">{langCode(this.props.lang, "online")}<br/>{langCode(this.props.lang,"dressingRoom")}</p>
                                </div>
                                <div className="header-mobile">
                                    <Link to={"/postpone"} onClick={this.mobileMenuClose}>
                                        <div className="header-mobile__basket-icon">
                                            <svg className="icon">
                                                <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#shopping-bag"/>
                                            </svg>
                                            {this.renderRedRing()}
                                        </div>
                                    </Link>
                                    <button className="header-mobile__bars-button" type="button" onClick={this.menuButton}>
                                        <svg className="icon">
                                            <use xlinkHref={this.state.mobilButtonCloseOpen}/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <HeaderNavigation/>
                        <div className=" hide-column">
                            <HeaderCabinet/>
                        </div>
                        <div className=" hide-column">
                            <div className="help-button navigation-list__link light text-16" onClick={this.helpModal}>{langCode(this.props.lang,"help")}</div>
                        </div>
                        <div className="header-btn-logout hide-column" onClick={this.logout}>
                            <svg className="icon">
                                <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#login"/>
                            </svg>
                            {langCode(this.props.lang, "Exit")}
                        </div>
                    </div>
                </div>
                <div className={this.state.mobileOpen}>
                    <MobileEnvelope mobileMenuClose={this.mobileMenuClose}/>
                </div>
            </header>
        )
    }
}

function MapStateToProps(state) {
    return {
        page: state.pageReducer.page,
        update: state.pageReducer.update,
        Postpone: state.userReducer.Postpone,
        SetActionPostpone: state.userReducer.SetActionPostpone,
        Permission: state.userReducer.Permission,
        lang: state.utiliteReducer.lang,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        postponeFunction: (Postpone) => {
            dispatch(actionPostpone(Postpone))
        },
        setActionPostponeFunction: (SetActionPostpone) => {
            dispatch(actionSetActionPostpone(SetActionPostpone))
        },
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
        openModalFunction: (modal) => {
            dispatch(actionOpenModal(modal))
        },
        selectedSubCatalogIDFunction: (selectedSubCatalogID) => {
            dispatch(actionSelectedSubCatalogID(selectedSubCatalogID))
        },
        openCatalogFunction: (catalog) => {
            dispatch(actionOpenCatalog(catalog))
        },
        setStoreArrFunction: (StoreArr) => {
            dispatch(actionSetStoreArr(StoreArr))
        },
        productsThisStoreFunction: (productsThisStore) => {
            dispatch(actionProductsThisStore(productsThisStore))
        },
        selectedStoreFunction: (selectedStore) => {
            dispatch(actionSelectedStore(selectedStore))
        },
        selectedProductToEditFunction: (SelectedProductToEdit) => {
            dispatch(actionSelectedProductToEdit(SelectedProductToEdit))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(Header);

