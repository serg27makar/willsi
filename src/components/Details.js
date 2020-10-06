import React from "react";
import ru from "../access/lang/LangConstants";
import {postSendEmail} from "../utilite/axiosConnect";
import {updateResult} from "../js/sharedFunctions";

class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            UserName: "",
            UserPhone: "",
        };
        this.onChange = this.onChange.bind(this);
        this.submitUserData = this.submitUserData.bind(this);
    }

    onChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value,
        });
    }

    submitUserData() {
        if (this.state.UserName && this.state.UserPhone) {
            postSendEmail(this.state, updateResult);
        }
    }

    render() {
        return (
            <div className="details">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-12">
                            <h2 className="details__title text-25 uppercase">{ru.LearnMore}</h2>
                            <div className="form-request">
                                <div className="form-request__row">
                                    <label className="form-request__label">
                                        <input className="form-request__input text-14" type="text"
                                               name="UserName"
                                               placeholder="Имя"
                                               value={this.state.UserName || ""}
                                               onChange={this.onChange}
                                        />
                                        <span className="form-request__icon">
                                            <svg className="icon icon-user ">
                                                <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#user"/>
                                            </svg>
                                        </span>
                                    </label>
                                    <label className="form-request__label">
                                        <input className="form-request__input text-14" type="tel"
                                               name="UserPhone"
                                               placeholder="Телефон"
                                               value={this.state.UserPhone || ""}
                                               onChange={this.onChange}
                                        />
                                        <span className="form-request__icon">
                                            <svg className="icon icon-phone ">
                                                <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#phone"/>
                                            </svg>
                                        </span>
                                    </label>
                                </div>
                                <button className="form-request__button-send text-18" type="button" onClick={this.submitUserData}>{ru.SubmitApplication}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Details;
