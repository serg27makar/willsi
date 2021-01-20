import React from "react";
import ModalInput from "./modalComponents/ModalInput";
import ButtonMain from "../components/shared/ButtonMain";
import {dataInputRegistrationModal} from "../access/temporaryConstants";
import {validateEmail} from "../js/sharedFunctions";
import {postCheckEmail, postRegister, postUpdate} from "../utilite/axiosConnect";
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
    actionUserStore,
} from "../action";
import {connect} from "react-redux";
import {langCode} from "../access/lang/translaterJS";

class RegistrationModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            errorItem: "",
            errorText: "",
        };
    }

    componentDidMount() {
        if (this.props.UsersParameters && this.props.UsersParameters.length && this.props.UsersParameters[0].UserName) {
            this.setState({
                ...this.state,
                name: this.props.UsersParameters[0].UserName,
            })
        }
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
        if (res) {
            this.props.userIDFunction(res);
            this.props.userNameFunction(this.state.name);
            this.props.emailFunction(this.state.email);
        }
        this.redirectToHomepage();
        this.changeModal("");
    };

    updateResult = () => {
        const id = localStorage.UserId;
        this.props.userIDFunction(id);
        this.props.userNameFunction(this.state.name);
        this.props.emailFunction(this.state.email);
        this.redirectToHomepage();
        this.changeModal("");
    };

    redirectToHomepage() {
        this.props.dataRedirectFunction({
            accessR: true,
            to: "/",
        });
    }

    registration = () => {
        const {name, email, password, confirmPassword} = this.state;
        if (name && email && validateEmail(email) &&
            password && confirmPassword && password === confirmPassword) {
            let user = {
                UserName: name,
                Email: email,
                Password: password,
                Permission: "buyer",
            };
            this.props.permissionFunction("buyer");

            postCheckEmail({Email: email}, (data) => {
                if (data && data.result) {
                    if (this.props.UserID && this.props.UserID !== "undefined") {
                        user = {...user, UserID: this.props.UserID};
                        postUpdate(user, this.updateResult);
                    } else {
                        postRegister(user, this.result);
                    }
                } else {
                    this.setState({
                        ...this.state,
                        errorItem: "email",
                        errorText: langCode(this.props.lang, "thisEmailIsAlreadyRegistered"),
                    })
                }
            });
        } else {
            let errorItem = "";
            let errorText = "";
            if (!name) {
                errorItem = "name";
                errorText = langCode(this.props.lang, "enterYourName");
            } else if (!email) {
                errorItem = "email";
                errorText = langCode(this.props.lang, "enterYourEmail");
            } else if (!validateEmail(email)) {
                errorItem = "email";
                errorText = langCode(this.props.lang, "unidentifiedEmail");
            } else if (!password) {
                errorItem = "password";
                errorText = langCode(this.props.lang, "enterYourPassword");
            } else if (!confirmPassword) {
                errorItem = "confirmPassword";
                errorText = langCode(this.props.lang, "enterYourConfirmPassword");
            } else if (password !== confirmPassword) {
                errorItem = "confirmPassword";
                errorText = langCode(this.props.lang, "inconsistencyConfirmPassword");
            }
            this.setState({
                ...this.state,
                errorItem,
                errorText,
            })
        }
    };

    render() {
        return(
            <div className="modal-envelope" id="modal-registration">
                <div className="modal-envelope__close" onClick={() => {this.changeModal("")}}>
                    <svg className="icon icon-close ">
                        <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#close"/>
                    </svg>
                </div>
                <div className="modal-envelope__body">
                    <p className="modal-envelope__title title-36 uppercase bold">{langCode(this.props.lang, "SignUp")}</p>
                    <div className="modal-form">
                        {dataInputRegistrationModal && dataInputRegistrationModal.map((item, index) => {
                            return (
                                <ModalInput dataInput={item} key={index}
                                            dataValue={this.state}
                                            dataOnChange={this.dataOnChange}
                                            errorItem={this.state.errorItem}
                                            errorText={this.state.errorText}/>
                                            )
                        })}
                        <div className="modal-form__button-enter">
                            <ButtonMain btnClass={"button-enter button-main text-18 medium"} text={langCode(this.props.lang, "SignUp")} onClick={this.registration}/>
                        </div>
                        <div className="modal-form__bottom-text text-16 light color-aqua">{langCode(this.props.lang, "HaveAccount")}
                            <div className="modal-form__bottom-link color-aqua" onClick={() => {this.changeModal("signIn")}}>{langCode(this.props.lang, "SignIn")}</div>
                        </div>
                        {/*<div className="modal-form__social-list">*/}
                        {/*    <div className="modal-form__social-link icon-fb"  style={{backgroundImage: "url('static/img/content/icon-fb.png')"}}/>*/}
                        {/*    <div className="modal-form__social-link icon-instagram" style={{backgroundImage: "url('static/img/content/icon-instagram.png')"}}/>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        );
    }
}

function MapStateToProps(state) {
    return {
        modal: state.modalReducer.modal,
        UserID: state.userReducer.UserID,
        UsersParameters: state.userReducer.UsersParameters,
        lang: state.utiliteReducer.lang,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        openModalFunction: (modal) => {
            dispatch(actionOpenModal(modal))
        },
        userNameFunction: (UserName) => {
            dispatch(actionUserName(UserName))
        },
        userIDFunction: (UserID) => {
            dispatch(actionUserID(UserID))
        },
        emailFunction: (Email) => {
            dispatch(actionEmail(Email))
        },
        permissionFunction: (Permission) => {
            dispatch(actionPermission(Permission))
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
        usersParametersFunction: (UsersParameters) => {
            dispatch(actionUsersParameters(UsersParameters))
        },
        userStoreFunction: (UserStore) => {
            dispatch(actionUserStore(UserStore))
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

export default connect(MapStateToProps, mapDispatchToProps)(RegistrationModal);
