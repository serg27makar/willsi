import React from "react";
import ButtonMain from "../components/shared/ButtonMain";

class ProfileModal extends React.Component {
    render() {
        return(
            <div className="modal-envelope" id="modal-profile">
                <div className="modal-envelope__close" data-izimodal-close="">
                    <svg className="icon icon-close ">
                        <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#close"/>
                    </svg>
                </div>
                <div className="modal-envelope__body">
                    <p className="modal-envelope__title title-36 uppercase bold">по Вашему профилю еще нет параметров "мужчина"</p>
                    <p className="modal-envelope__sub-info text-16 light">Хотите добавить?</p>
                    <div className="modal-form__button-enter">
                        <ButtonMain btnClass={"button-enter button-main text-18 medium"} text={"Добавить"}/>
                    </div>
                </div>
            </div>

        );
    }
}
export default ProfileModal;
