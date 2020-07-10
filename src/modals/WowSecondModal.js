import React from "react";

class WowSecondModal extends React.Component {
    render() {
        return(
            <div className="modal-envelope" id="modal-wowSecond">
                <div className="modal-envelope__close" data-izimodal-close="">
                    <svg className="icon icon-close ">
                        <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#close"/>
                    </svg>
                </div>
                <div className="modal-envelope__body">
                    <p className="modal-envelope__title title-36 uppercase bold">Ух Ты!</p>
                    <p className="modal-envelope__sub-light text-16 light">Вы первый человек, который дал нам ссылку<br/>на этот
                        сайт, скоро мы сним подружимся</p>
                    <p className="modal-envelope__sub-info text-16 bold">Кстате, посмотрите 63 вещи, которые<br/>соответсвуют Вам
                        больше чем на 90%</p>
                    <div className="modal-form__button-enter"><div className="button-enter button-main text-18 medium"
                                                                 >Посмотреть</div></div>
                </div>
            </div>

        );
    }
}
export default WowSecondModal;
