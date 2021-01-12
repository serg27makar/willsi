import React from "react";
import ModalInput from "./modalComponents/ModalInput";
import ButtonMain from "../components/shared/ButtonMain";
import {dataInputRegistrationStoreAdminModal} from "../access/temporaryConstants";
import {validateEmail} from "../js/sharedFunctions";
import {postRegister, postUpdate} from "../utilite/axiosConnect";
import {
    actionEmail,
    actionOpenModal,
    actionPermission,
    actionUserID,
    actionUserName,
} from "../action";
import {connect} from "react-redux";
import ru from "../access/lang/LangConstants";

class RegistrationStoreAdministrator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            phone: "",
            password: "",
            confirmPassword: "",
            dataInputSet: [],
        };
        this.cancelChange = this.cancelChange.bind(this);
        this.closeAlert = this.closeAlert.bind(this);
        this.saveChange = this.saveChange.bind(this);
    }

    componentDidMount() {
        this.setState({
            ...this.state,
            name: this.props.UserName,
            email: this.props.Email,
        });
        const dataInputSet = [];
        dataInputRegistrationStoreAdminModal.map((item) => {
            if ((this.props.UserName && this.props.Email) &&
                (item.name === "name" || item.name === "email" ||
                    item.name === "password" || item.name === "confirmPassword" )) {
            //    do nothing
            } else {
                dataInputSet.push(item)
            }
            return dataInputSet;
        })
        this.setState({...this.state, dataInputSet});
    }

    changeModal = (modal) => {
        this.props.openModalFunction(modal);
    };

    dataOnChange = (e) => {
        e.stopPropagation();
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
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
        this.changeModal("addServiceModal");
    };

    updateResult = () => {
        const id = localStorage.UserId;
        this.props.userIDFunction(id);
        this.props.userNameFunction(this.state.name);
        this.props.emailFunction(this.state.email);
        this.changeModal("addServiceModal");
    };

    registration = () => {
        const {name, email, password, confirmPassword, phone} = this.state;
        let user = this.userData();
        if (this.props.UserID) {
            if (name.length >= 3 && email && validateEmail(email) && phone) {
                user = {...user, UserID: this.props.UserID};
                postUpdate(user, this.updateResult);
            } else {
                this.openAlert(true);
            }
        } else {
            if (name.length >= 3 && email && validateEmail(email) && phone &&
                password && confirmPassword && password === confirmPassword) {
                user = {...user, Password: password};
                postRegister(user, this.result);
            } else {
                this.openAlert(true);
            }
        }
    };

    saveChange() {
        let user = this.userData();
        if (user.UserName.length >= 3 && user.Email && validateEmail(user.Email) && user.Phone) {
            user = {...user, UserID: this.props.UserID};
            postUpdate(user, this.updateResult);
            this.closeAlert();
        } else {
            this.openAlert(true);
        }
    }

    cancelChange() {
        this.setState({
            ...this.state,
            name: this.props.UserName,
            email: this.props.Email,
        });
    }

    userData() {
        const {name, email, phone} = this.state;
        const user = {
            UserName: name,
            Email: email,
            Phone: phone,
            Permission: "storeAdmin",
        };
        this.props.permissionFunction("storeAdmin");
        return user;
    }

    openAlert(alertMod= false) {
        this.setState({
            ...this.state,
            alertMod,
        })
    }

    renderAlert() {
        if (this.state.alertMod) {
            return(
                <div className="modal-envelope" id="modal-changed">
                    <div className="modal-envelope__body">
                        <p className="modal-envelope__title title-36 bold">{ru.enterAnyDetails}</p>
                        <div className="modal-form__button-enter">
                            <ButtonMain btnClass={"button-enter button-white text-18 uppercase medium"} text={ru.understandably} onClick={this.openAlert}/>
                        </div>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }

    render() {
        return(
            <div className="modal-envelope" id="modal-registration-admin">
                <div className="modal-envelope__close" onClick={() => {this.changeModal("")}}>
                    <svg className="icon icon-close ">
                        <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#close"/>
                    </svg>
                </div>
                <div className="modal-envelope__body">
                    <p className="modal-envelope__title title-36 uppercase bold">{ru.AdminSignUp}</p>
                    <div className="modal-form">
                        {this.state.dataInputSet && this.state.dataInputSet.map((item, index) => {
                            return (
                                <ModalInput dataInput={item} key={index} dataValue={this.state} dataOnChange={this.dataOnChange}/>
                            )
                        })}
                        <div className="modal-form__button-enter">
                            <ButtonMain btnClass={"button-enter button-main text-18 medium"} text={ru.SignUp} onClick={this.registration}/>
                        </div>
                        <div className="modal-form__social-list">
                            <div className="modal-form__social-link icon-fb"  style={{backgroundImage: "url('static/img/content/icon-fb.png')"}}/>
                            <div className="modal-form__social-link icon-instagram" style={{backgroundImage: "url('static/img/content/icon-instagram.png')"}}/>
                        </div>
                    </div>
                </div>
                {this.renderAlert()}
            </div>
        );
    }
}

function MapStateToProps(state) {
    return {
        modal: state.modalReducer.modal,
        UserID: state.userReducer.UserID,
        UserName: state.userReducer.UserName,
        Email: state.userReducer.Email,
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
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(RegistrationStoreAdministrator);
