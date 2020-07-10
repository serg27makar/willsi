import React from "react";

class RegistrationModal extends React.Component {
    render() {
        return(
            <div className="modal-envelope" id="modal-registration">
                <div className="modal-envelope__close" data-izimodal-close="">
                    <svg className="icon icon-close ">
                        <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#close"/>
                    </svg>
                </div>
                <div className="modal-envelope__body">
                    <p className="modal-envelope__title title-36 uppercase bold">Регистрация</p>
                    <form className="modal-form" action="#" method="post" name="modalRegistration[]">
                        <label className="modal-form__label">
                            <input className="modal-form__input text-18 light" type="text" name="name" placeholder="Имя"/>
                            <svg className="icon icon-user ">
                                <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#user"/>
                            </svg>
                        </label>
                        <label className="modal-form__label">
                            <input className="modal-form__input text-18 light" type="mail" name="email"
                                   placeholder="Электронная почта"/>
                            <svg className="icon icon-email ">
                                <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#email"/>
                            </svg>
                        </label>
                        <label className="modal-form__label">
                            <input className="modal-form__input text-18 light" type="password" name="password"
                                   placeholder="Пароль"/>
                            <svg className="icon icon-key ">
                                <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#key"/>
                            </svg>
                        </label>
                        <label className="modal-form__label">
                            <input className="modal-form__input text-18 light" type="password" name="password"
                                   placeholder="Повторите пароль"/>
                            <svg className="icon icon-key ">
                                <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#key"/>
                            </svg>
                        </label>
                        <div className="modal-form__button-enter">
                            <button className="button-enter button-main text-18 medium" type="button">Зарегестрироваться
                            </button>
                        </div>
                        <p className="modal-form__bottom-text text-16 light color-aqua">Еще нет аккаунта?<div
                            className="modal-form__bottom-link color-aqua" >Войти</div></p>
                        <div className="modal-form__social-list">
                            <div className="modal-form__social-link icon-fb"  style={{backgroundImage: "url('static/img/content/icon-fb.png')"}}/>
                            <div className="modal-form__social-link icon-instagram"
                            style={{backgroundImage: "url('static/img/content/icon-instagram.png')"}}/></div>
                    </form>
                </div>
            </div>

        );
    }
}
export default RegistrationModal;
