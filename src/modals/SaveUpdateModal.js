import React from "react";
import ButtonMain from "../components/shared/ButtonMain";
import {validateEmail} from "../js/sharedFunctions";
import {getUserData, postUpdate} from "../utilite/axiosConnect";
import {
    actionEmail,
    actionOpenModal,
    actionUserID,
    actionUserName,
    actionUsersParameters,
    actionUserUpdate
} from "../action";
import {connect} from "react-redux";
import ru from "../access/lang/LangConstants";

class SaveUpdateModal extends React.Component {

    closeLincModal = () => {
        this.props.openModalFunction("");
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
            this.props.userNameFunction(res.UserName);
            this.props.emailFunction(res.Email);
            this.props.usersParametersFunction(res.UsersParameters);
        }
        this.closeLincModal();
    };

    updateResult = () => {
        getUserData(this.result);
    };

    Save = () => {
        const {UserName, Email, UsersParameters} = this.props.UserUpdate;
        if (Email && validateEmail(Email)) {
            // const Parameters = UsersParameters[0].Parameters;
            // UsersParameters.splice(0, 1,  {
            //     UserName: UserName,
            //     Parameters: Parameters,
            // });
            const user = {
                UserName,
                Email,
                UsersParameters,
                UserID: this.props.UserID,
            };
            postUpdate(user, this.updateResult);
            this.props.UserUpdateFunction({});
        }
    };

    Cancel = () => {
        this.closeLincModal();
    };

    render() {
        return(
            <div className="modal-envelope" id="modal-save-update">
                <div className="modal-envelope__close" onClick={this.closeLincModal}>
                    <svg className="icon icon-close ">
                        <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#close"/>
                    </svg>
                </div>
                <div className="modal-envelope__body">
                    <p className="modal-envelope__title title-36 uppercase bold">{ru.SaveChange}</p>
                    <div className="modal-form">
                        <div className="modal-form__button-enter">
                            <ButtonMain btnClass={"button-enter button-main text-18 medium"}
                                        text={ru.Save} onClick={this.Save}/>
                            <ButtonMain btnClass={"button-enter button-white text-18 medium"}
                                        text={ru.Cancel} onClick={this.Cancel}/>
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
        UserUpdate: state.userReducer.UserUpdate,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        openModalFunction: (modal) => {
            dispatch(actionOpenModal(modal))
        },
        UserUpdateFunction: (UserUpdate) => {
            dispatch(actionUserUpdate(UserUpdate))
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
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(SaveUpdateModal);
