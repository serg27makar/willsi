import React from "react";
import {dataInputEnterModal} from "../access/temporaryConstants";
import ModalInput from "./modalComponents/ModalInput";
import ButtonMain from "../components/shared/ButtonMain";
import {validateEmail} from "../js/sharedFunctions";
import {postLogin} from "../utilite/axiosConnect";
import {
    actionDataRedirect,
    actionDataUpdate,
    actionEmail,
    actionOpenCatalog,
    actionOpenModal,
    actionPermission,
    actionPostpone,
    actionProductsThisStore,
    actionSearchParams,
    actionSelectedProductToEdit,
    actionSelectedStore,
    actionSelectedSubCatalogID,
    actionSetActionPostpone,
    actionSetStoreArr,
    actionUserID,
    actionUserName,
    actionUsersParameters,
    actionUserStore
} from "../action";
import {connect} from "react-redux";
import {langCode} from "../access/lang/translaterJS";

class EnterModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            errorItem: "",
            errorText: "",
            errorLogin: false,
        }
    }

    componentDidMount() {
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
    }

    changeModal = (modal) => {
        this.props.openModalFunction(modal);
    };

    dataOnChange = (data) => {
        data.stopPropagation();
        data.preventDefault();
        const name = data.target.name;
        const value = data.target.value;
        this.setState({
            ...this.state,
            [name]: value,
        })
    };

    result = (res) => {
        if (res === "find:0") {
            this.setState({
                ...this.state,
                errorLogin: true,
            })
            return;
        }
        if (res.isAxiosError) {
            console.log(res);
            return;
        }
        if (res) {
            this.props.userIDFunction(res.UserID);
            this.props.userNameFunction(res.UserName);
            this.props.emailFunction(res.Email);
            this.props.usersParametersFunction(res.UsersParameters);
            this.props.permissionFunction(res.Permission);
            this.props.userStoreFunction(res.UserStore);
            this.props.dataRedirectFunction({
                accessR: true,
                to: "/",
            });
        }
        this.changeModal("");
    };

    login = () => {
        const {email, password} = this.state;
        if (email && validateEmail(email) && password ) {
            const user = {
                Email: email,
                Password: password,
            };
            postLogin(user, this.result)
        } else {
            let errorItem = "";
            let errorText = "";
            if (!email) {
                errorItem = "email";
                errorText = langCode(this.props.lang, "enterYourEmail");
            } else if (!validateEmail(email)) {
                errorItem = "email";
                errorText = langCode(this.props.lang, "unidentifiedEmail");
            } else if (!password) {
                errorItem = "password";
                errorText = langCode(this.props.lang, "enterYourPassword");
            }
            this.setState({
                ...this.state,
                errorItem,
                errorText,
            })
        }
    };

    renderErrorLogin() {
        if (this.state.errorLogin)
        return (
            <span className="modal-input-error-text main-list__catalog-product text-16">{langCode(this.props.lang, "errorLogin")}</span>
        )
    }

    render() {
        return(
            <div className="modal-envelope" id="modal-enter">
                <div className="modal-envelope__close" onClick={() => {this.changeModal("")}}>
                    <svg className="icon icon-close ">
                        <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#close"/>
                    </svg>
                </div>
                <div className="modal-envelope__body">
                    <p className="modal-envelope__title title-36 uppercase bold">{langCode(this.props.lang, "SignIn")}</p>
                    <div className="modal-form">
                        {dataInputEnterModal && dataInputEnterModal.map((item, index) => {
                            return (
                                <ModalInput dataInput={item} key={index}
                                            dataValue={this.state}
                                            dataOnChange={this.dataOnChange}
                                            errorItem={this.state.errorItem}
                                            errorText={this.state.errorText}/>
                                            )
                        })}
                        <div className="modal-form__button-enter">
                            <ButtonMain btnClass={"button-enter button-main text-18 medium"} text={langCode(this.props.lang, "SignIn")} onClick={this.login}/>
                        </div>
                        {this.renderErrorLogin()}
                        <div className="modal-form__bottom-text text-16 light color-aqua">{langCode(this.props.lang, "DontHaveAccount")}
                            <div className="modal-form__bottom-link color-aqua" onClick={() => {this.changeModal("signUp")}}>{langCode(this.props.lang, "SignUp")}</div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

function MapStateToProps(state) {
    return {
        modal: state.modalReducer.modal,
        lang: state.utiliteReducer.lang,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        openModalFunction: (modal) => {
            dispatch(actionOpenModal(modal))
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
        dataRedirectFunction: (dataRedirect) => {
            dispatch(actionDataRedirect(dataRedirect))
        },

        postponeFunction: (Postpone) => {
            dispatch(actionPostpone(Postpone))
        },
        setActionPostponeFunction: (SetActionPostpone) => {
            dispatch(actionSetActionPostpone(SetActionPostpone))
        },
        dataUpdateFunction: (update) => {
            dispatch(actionDataUpdate(update))
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

export default connect(MapStateToProps, mapDispatchToProps)(EnterModal);
