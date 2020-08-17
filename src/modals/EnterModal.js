import React from "react";
import {dataInputEnterModal} from "../access/temporaryConstants";
import ModalInput from "./modalComponents/ModalInput";
import ButtonMain from "../components/shared/ButtonMain";
import {validateEmail} from "../js/sharedFunctions";
import {postLogin} from "../utilite/axiosConnect";
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

class EnterModal extends React.Component {

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
        if (res === "find:0") {
            console.log(res);
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
        }
        this.changeModal();
    };

    login = () => {
        const {email, password} = this.state;
        if (email && validateEmail(email) && password ) {
            const user = {
                Email: email,
                Password: password,
            };
            postLogin(user, this.result)
        }
    };

    render() {
        return(
            <div className="modal-envelope" id="modal-enter">
                <div className="modal-envelope__close" onClick={this.changeModal}>
                    <svg className="icon icon-close ">
                        <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#close"/>
                    </svg>
                </div>
                <div className="modal-envelope__body">
                    <p className="modal-envelope__title title-36 uppercase bold">{ru.SignIn}</p>
                    <div className="modal-form">
                        {dataInputEnterModal && dataInputEnterModal.map((item, index) => {
                            return (
                                <ModalInput dataInput={item} key={index} dataOnChange={this.dataOnChange}/>
                            )
                        })}
                        <div className="modal-form__button-enter">
                            <ButtonMain btnClass={"button-enter button-main text-18 medium"} text={ru.SignIn} onClick={this.login}/>
                        </div>
                        <div className="modal-form__bottom-text text-16 light color-aqua">{ru.DontHaveAccount}
                            <div className="modal-form__bottom-link color-aqua" onClick={() => {this.changeModal("signUp")}}>{ru.SignUp}</div>
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
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(EnterModal);
