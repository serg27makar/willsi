import React from "react";
import ModalInput from "./modalComponents/ModalInput";
import ButtonMain from "../components/shared/ButtonMain";
import {dataInputRegistrationModal, dataInputRegistrationStoreAdminModal} from "../access/temporaryConstants";
import {validateEmail} from "../js/sharedFunctions";
import {postRegister, postUpdate} from "../utilite/axiosConnect";
import {
    actionEmail,
    actionOpenModal,
    actionPermission,
    actionUserID,
    actionUserName,
    actionUsersParameters
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
        };
        this.usersParameters = [
            {
                UserName: '',
                Parameters: [],
            }
        ];
    }

    changeModal = (modal = "") => {
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
            this.props.usersParametersFunction(this.usersParameters);
        }
        this.changeModal("addServiceModal");
    };

    registration = () => {
        const {name, email, password, confirmPassword, phone} = this.state;
        this.usersParameters = [
            {
                UserName: name,
                Parameters: [],
            }
        ];
        if (name.length >= 3 && email && validateEmail(email) &&
            password && confirmPassword && password === confirmPassword && phone) {
            let user = {
                UserName: name,
                Email: email,
                Phone: phone,
                Password: password,
                Permission: "buyer",
                UsersParameters: this.props.UsersParameters &&
                this.props.UsersParameters.length > 0 ? this.props.UsersParameters : this.usersParameters,
            };
            this.props.permissionFunction("buyer");
            if (this.props.UserID) {
                user = {...user, UserID: this.props.UserID};
                postUpdate(user, this.result);
            } else {
                postRegister(user, this.result);
            }
        }
    };

    render() {
        return(
            <div className="modal-envelope" id="modal-registration-admin">
                <div className="modal-envelope__close" onClick={this.changeModal}>
                    <svg className="icon icon-close ">
                        <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#close"/>
                    </svg>
                </div>
                <div className="modal-envelope__body">
                    <p className="modal-envelope__title title-36 uppercase bold">{ru.AdminSignUp}</p>
                    <div className="modal-form">
                        {dataInputRegistrationStoreAdminModal && dataInputRegistrationStoreAdminModal.map((item, index) => {
                            return (
                                <ModalInput dataInput={item} key={index} dataOnChange={this.dataOnChange}/>
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
        usersParametersFunction: (UsersParameters) => {
            dispatch(actionUsersParameters(UsersParameters))
        },
        permissionFunction: (Permission) => {
            dispatch(actionPermission(Permission))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(RegistrationStoreAdministrator);