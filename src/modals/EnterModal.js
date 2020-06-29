import React from "react";

class EnterModal extends React.Component {
    render() {
        return(
            <div className="modal-envelope" id="modal-enter">
                <div className="modal-envelope__close" data-izimodal-close="">
                    <svg className="icon icon-close ">
                        <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#close"/>
                    </svg>
                </div>
                <div className="modal-envelope__body">
                    <p className="modal-envelope__title title-36 uppercase bold">Вход</p>
                    <form className="modal-form" action="#" method="post" name="modalEnter[]">
                        <label className="modal-form__label">
                            <input className="modal-form__input text-18 light" type="password" name="email"
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
                        <div className="modal-form__button-enter">
                            <button className="button-enter button-main text-18 medium" type="button">Войти</button>
                        </div>
                        <p className="modal-form__bottom-text text-16 light color-aqua">Еще нет аккаунта?<a
                            className="modal-form__bottom-link color-aqua" href="#">Регистрация</a></p>
                    </form>
                </div>
            </div>

        );
    }
}
export default EnterModal;
