import React from "react";
import ModalInput from "./modalComponents/ModalInput";
import ButtonMain from "../components/shared/ButtonMain";
import {dataInputRegistrationModal} from "../access/temporaryConstants";
import {validateEmail} from "../js/sharedFunctions";
import {setActionServerPost} from "../utilite/axiosConnect";
import {actionOpenModal} from "../action";
import {connect} from "react-redux";

class RegistrationModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        }
    }

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
        console.log("res", res);
    };

    registration = () => {
        const {name, email, password, confirmPassword} = this.state;
        if (name.length >= 3 && email && validateEmail(email) &&
            password && confirmPassword && password === confirmPassword) {
            const user = {
                name,
                email,
                password,
                confirmPassword
            };
            setActionServerPost("register", user, this.result)
        }
    };

    render() {
        return(
            <div className="modal-envelope" id="modal-registration">
                <div className="modal-envelope__close" onClick={this.closeLincModal}>
                    <svg className="icon icon-close ">
                        <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#close"/>
                    </svg>
                </div>
                <div className="modal-envelope__body">
                    <p className="modal-envelope__title title-36 uppercase bold">Регистрация</p>
                    <div className="modal-form">
                        {dataInputRegistrationModal && dataInputRegistrationModal.map((item, index) => {
                            return (
                                <ModalInput dataInput={item} key={index} dataOnChange={this.dataOnChange}/>
                            )
                        })}
                        <div className="modal-form__button-enter">
                            <ButtonMain btnClass={"button-enter button-main text-18 medium"} text={"Зарегестрироваться"} onClick={this.registration}/>
                        </div>
                        <div className="modal-form__bottom-text text-16 light color-aqua">Еще нет аккаунта?
                            <div className="modal-form__bottom-link color-aqua" >Войти</div>
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
    }
}
const mapDispatchToProps = dispatch => {
    return {
        openModalFunction: (modal) => {
            dispatch(actionOpenModal(modal))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(RegistrationModal);
