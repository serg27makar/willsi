import React from "react";

class Details extends React.Component {
    render() {
        return (
            <div className="details">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-12">
                            <h2 className="details__title text-25 uppercase">Узнать детальнее условия
                                сотрудничества</h2>
                            <div className="details__form-request">
                                <form className="form-request" action="#" method="post">
                                    <div className="form-request__row">
                                        <label className="form-request__label">
                                            <input className="form-request__input text-14" type="text"
                                                   placeholder="Имя"/><span className="form-request__icon">
                          <svg className="icon icon-user ">
                            <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#user"/>
                          </svg></span>
                                        </label>
                                        <label className="form-request__label">
                                            <input className="form-request__input text-14" type="tel"
                                                   placeholder="Телефон"/><span className="form-request__icon">
                          <svg className="icon icon-phone ">
                            <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#phone"/>
                          </svg></span>
                                        </label>
                                    </div>
                                    <button className="form-request__button-send text-18" type="button">Оставить
                                        заявку
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Details;
