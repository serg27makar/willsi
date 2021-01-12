import React from "react";
import ModalInput from "./modalComponents/ModalInput";
import ButtonMain from "../components/shared/ButtonMain";
import {dataInputRegistrationModal} from "../access/temporaryConstants";
import {validateEmail} from "../js/sharedFunctions";
import {postCheckEmail, postRegister, postUpdate} from "../utilite/axiosConnect";
import {
    actionDataRedirect,
    actionEmail,
    actionOpenModal,
    actionPermission,
    actionUserID,
    actionUserName,
} from "../action";
import {connect} from "react-redux";
import ru from "../access/lang/LangConstants";

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
                        errorText: ru.thisEmailIsAlreadyRegistered,
                    })
                }
            });
        } else {
            let errorItem = "";
            let errorText = "";
            if (!name) {
                errorItem = "name";
                errorText = ru.enterYourName;
            } else if (!email) {
                errorItem = "email";
                errorText = ru.enterYourEmail;
            } else if (!validateEmail(email)) {
                errorItem = "email";
                errorText = ru.unidentifiedEmail;
            } else if (!password) {
                errorItem = "password";
                errorText = ru.enterYourPassword;
            } else if (!confirmPassword) {
                errorItem = "confirmPassword";
                errorText = ru.enterYourConfirmPassword;
            } else if (password !== confirmPassword) {
                errorItem = "confirmPassword";
                errorText = ru.inconsistencyConfirmPassword;
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
                    <p className="modal-envelope__title title-36 uppercase bold">{ru.SignUp}</p>
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
                            <ButtonMain btnClass={"button-enter button-main text-18 medium"} text={ru.SignUp} onClick={this.registration}/>
                        </div>
                        <div className="modal-form__bottom-text text-16 light color-aqua">{ru.HaveAccount}
                            <div className="modal-form__bottom-link color-aqua" onClick={() => {this.changeModal("signIn")}}>{ru.SignIn}</div>
                        </div>
                        <div className="modal-form__social-list">
                            <div className="modal-form__social-link icon-fb"  style={{backgroundImage: "url('static/img/content/icon-fb.png')"}}/>
                            <div className="modal-form__social-link icon-instagram" style={{backgroundImage: "url('static/img/content/icon-instagram.png')"}}/>
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
        UserID: state.userReducer.UserID,
        UsersParameters: state.userReducer.UsersParameters,
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
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(RegistrationModal);
