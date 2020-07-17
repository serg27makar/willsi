import React from "react";

class WowFirstModal extends React.Component {
    render() {
        return(
            <div className="modal-envelope" id="modal-wowFirst">
                <div className="modal-envelope__close" data-izimodal-close="">
                    <svg className="icon icon-close ">
                        <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#close"/>
                    </svg>
                </div>
                <div className="modal-envelope__body">
                    <p className="modal-envelope__title title-36 uppercase bold">Ух Ты!</p>
                    <p className="modal-envelope__sub-info text-16 bold">По Вашим параметрам есть 63 кофты,<br/>которые сидят
                        лучше</p>
                    <div className="modal-form__button-enter"><div className="button-enter button-main text-18 medium"
                                                                 data-iziModal-open="#modal-wowSecond">Посмотреть</div></div>
                </div>
            </div>

        );
    }
}
export default WowFirstModal;