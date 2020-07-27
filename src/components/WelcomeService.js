import React from "react";

class WelcomeService extends React.Component {
    render() {
        return (
            <div className="welcome-service">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <h1 className="welcome-service__title uppercase title-36 bold">Добавить магазин</h1>
                            <div className="welcome-service__form-shop">
                                <form className="form-shop" action="#" method="post">
                                    <div className="form-shop__row">
                                        <label className="form-shop__label">
                                            <input className="form-shop__input text-14" type="text"
                                                   placeholder="Имя"/>
                                        </label>
                                        <label className="form-shop__label">
                                            <input className="form-shop__input text-14" type="text"
                                                   placeholder="Ссылка на магазин"/>
                                        </label>
                                    </div>
                                    <textarea className="form-shop__textarea text-14"/>
                                    <div className="form-shop__row justify-content-center"><div
                                        className="form-shop__button-enter text-16" ><span
                                        className="form-shop__button-text">Войти с помощью</span><span
                                        className="form-shop__icon-instagram"/></div>
                                        <button className="form-shop__button-save text-16" type="button">Сохранить
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WelcomeService;
