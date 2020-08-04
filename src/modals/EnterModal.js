import React from "react";
import {dataInputEnterModal} from "../access/temporaryConstants";
import ModalInput from "./modalComponents/ModalInput";
import ButtonMain from "../components/shared/ButtonMain";
import {validateEmail} from "../js/sharedFunctions";
import {setActionServerPost} from "../utilite/axiosConnect";

class EnterModal extends React.Component {

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

    login = () => {
        const {email, password} = this.state;
        if (email && validateEmail(email) && password ) {
            const user = {
                email,
                password,
            };
            setActionServerPost("register", user, this.result)
        }
    };

    render() {
        return(
            <div className="modal-envelope" id="modal-enter">
                <div className="modal-envelope__close">
                    <svg className="icon icon-close ">
                        <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#close"/>
                    </svg>
                </div>
                <div className="modal-envelope__body">
                    <p className="modal-envelope__title title-36 uppercase bold">Вход</p>
                    <form className="modal-form" action="#" method="post" name="modalEnter[]">
                        {dataInputEnterModal && dataInputEnterModal.map((item, index) => {
                            return (
                                <ModalInput dataInput={item} key={index} dataOnChange={this.dataOnChange}/>
                            )
                        })}
                        <div className="modal-form__button-enter">
                            <ButtonMain btnClass={"button-enter button-main text-18 medium"} text={"Войти"} onClick={this.login}/>
                        </div>
                        <div className="modal-form__bottom-text text-16 light color-aqua">Еще нет аккаунта?
                            <div className="modal-form__bottom-link color-aqua" >Регистрация</div>
                        </div>
                    </form>
                </div>
            </div>

        );
    }
}

export default EnterModal;
