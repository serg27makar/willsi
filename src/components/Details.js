import React from "react";
import {postSendEmail} from "../utilite/axiosConnect";
import {updateResult} from "../js/sharedFunctions";
import {connect} from "react-redux";
import {langCode} from "../access/lang/translaterJS";

class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            UserName: "",
            UserPhone: "",
            emailIsSent: false,
            warningUserName: false,
            warningUserPhone: false,
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
            const message = {
                UserName: this.state.UserName,
                UserPhone: this.state.UserPhone,
                subject: "afc"
            }
            postSendEmail(message, updateResult);
            this.setState({
                emailIsSent: true,
            })
        } else {
            this.setState({
                ...this.state,
                warningUserName: !this.state.UserName,
                warningUserPhone: !this.state.UserPhone,
            })
        }
    }

    renderDataForm() {
        if (this.state.emailIsSent) {
            return (
                <div className="sent-email-text text-16">{langCode(this.props.lang, "weHaveAcceptedYourApplication")}</div>
            )
        }
        return (
            <div className="form-request">
                <div className="form-request__row">
                    <label className="form-request__label">
                        <input className={"form-request__input text-14 " + (this.state.warningUserName ? "warning-input" : "")} type="text"
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
                        {this.state.warningUserName ? <div className="warning-text-empty-field text-16">{langCode(this.props.lang, "thisFieldCannotBeEmpty")}</div> : null}
                    </label>
                    <label className="form-request__label">
                        <input className={"form-request__input text-14 " + (this.state.warningUserPhone ? "warning-input" : "")} type="tel"
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
                        {this.state.warningUserPhone ? <div className="warning-text-empty-field text-16">{langCode(this.props.lang, "thisFieldCannotBeEmpty")}</div> : null}
                    </label>
                </div>
                <button className="form-request__button-send text-18" type="button" onClick={this.submitUserData}>{langCode(this.props.lang, "SubmitApplication")}</button>
            </div>
        )
    }

    render() {
        return (
            <div className="details">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-12">
                            <h2 className="details__title text-25 uppercase">{langCode(this.props.lang, "LearnMore")}</h2>
                            {this.renderDataForm()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function MapStateToProps(state) {
    return {
        lang: state.utiliteReducer.lang,
    }
}

export default connect(MapStateToProps)(Details);
