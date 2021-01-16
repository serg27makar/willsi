import ru from "../../access/lang/LangConstants";
import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import Authentication from "./Authentication";
import {
    actionDataRedirect,
    actionDataUpdate,
    actionEmail, actionOpenCatalog,
    actionOpenModal,
    actionPermission,
    actionPostpone, actionProductsThisStore,
    actionSearchParams, actionSelectedProductToEdit, actionSelectedStore, actionSelectedSubCatalogID,
    actionSetActionPostpone, actionSetStoreArr,
    actionUserID,
    actionUserName,
    actionUsersParameters,
    actionUserStore
} from "../../action";

class MobileEnvelope extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAdminPanel: false,
            UserName: "",
            pts: 0,
        }
        this.mobileMenuClose = this.mobileMenuClose.bind(this);
        this.helpModal = this.helpModal.bind(this);
        this.logout = this.logout.bind(this);
    }

    componentDidMount() {}

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.Permission !== this.props.Permission) {
            this.setState({
                isAdminPanel: this.props.Permission === "storeAdmin"
            })
        }
        if (prevState.UserName !== this.props.UserName) {
            this.setState({
                UserName: this.props.UserName,
            })
        }
        if ((prevProps.SetActionPostpone !== this.props.SetActionPostpone ||
            prevProps.Postpone !== this.props.Postpone) && this.props.Postpone) {
            this.setState({
                ...this.state,
                pts: this.props.Postpone.length || 0,
            })
        }
    }

    mobileMenuClose() {
        this.props.mobileMenuClose();
    };

    logout() {
        this.props.mobileMenuClose();
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

    helpModal() {
        this.props.openModalFunction("helpModal");
    }

    renderPartnerLink() {
        if (this.props.page === "AdminPanel") {
            return null;
        }
        if (this.state.isAdminPanel) {
            return (
                <Link className="mobile-nav__link light text-25" to={"/admin-panel"} onClick={this.mobileMenuClose}>{ru.StoreAdminLogin}</Link>
            )
        } else {
            return (
                <Link className="mobile-nav__link light text-25" to={"/seller-service"} onClick={this.mobileMenuClose}>{ru.Partners}</Link>
            )
        }
    }

    render() {
        return (
            <div className="mobile-envelope">
                <ul>
                    <li className="mobile-nav__item">
                        <Link className="mobile-nav__link light text-25" to={"/"} onClick={this.mobileMenuClose}>{ru.Home}</Link>

                    </li>
                    <li className="mobile-nav__item">
                        <Link className="mobile-nav__link light text-25" to={"/catalog"} onClick={this.mobileMenuClose}>{ru.DressingRoom}</Link>
                    </li>
                    <li className="mobile-nav__item">
                        <Link className="mobile-nav__link light text-25" to={"/about"} onClick={this.mobileMenuClose}>{ru.About}</Link>
                    </li>
                    <li className="mobile-nav__item">
                        {this.renderPartnerLink()}
                    </li>
                    <li className="mobile-nav__item">
                        <Authentication onClick={this.mobileMenuClose}/>
                    </li>
                </ul>
                <div className="header-btn-logout light text-25" onClick={this.logout}>
                    <div className="help-button mobile-nav__link light text-25" onClick={this.helpModal}>{ru.help}</div>
                </div>
                <div className="header-btn-logout light text-25" onClick={this.logout}>
                    <svg className="icon">
                        <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#login"/>
                    </svg>
                    {ru.Exit}
                </div>
            </div>
        )
    }
}
function MapStateToProps(state) {
    return {
        page: state.pageReducer.page,
        Permission: state.userReducer.Permission,
        UserName: state.userReducer.UserName,
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
        searchParamsFunction: (SearchParams) => {
            dispatch(actionSearchParams(SearchParams))
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

export default connect(MapStateToProps, mapDispatchToProps)(MobileEnvelope);
