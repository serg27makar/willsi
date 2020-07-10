import React from "react";

class LinkModal extends React.Component {
    render() {
        return(
            <div className="modal-envelope" id="modal-link">
                <div className="modal-envelope__close" data-izimodal-close="">
                    <svg className="icon icon-close ">
                        <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#close"/>
                    </svg>
                </div>
                <div className="modal-envelope__body">
                    <p className="modal-envelope__title title-36 uppercase bold">проверить соответсвие товарa с другого
                        сайта</p>
                    <p className="modal-envelope__sub-info text-16 bold">Ссылка на товар</p>
                    <form className="modal-form" action="#" method="post" name="modalLink[]">
                        <label className="modal-form__label">
                            <input className="modal-form__input input-link text-18 light" type="text" name="link-product"
                                   placeholder="ссылка на товар"/>
                        </label>
                        <div className="modal-form__button-enter">
                            <button className="button-enter button-main text-18 medium" type="button"
                                    data-iziModal-open="#modal-wowFirst">Принять
                            </button>
                        </div>
                        <p className="modal-form__bottom-clear text-16 light"><div className="modal-form__bottom-link color-aqua"
                                                                                 >Очистить</div></p>
                    </form>
                </div>
            </div>

        );
    }
}
export default LinkModal;
