import React from "react";
import ButtonMain from "./shared/ButtonMain";
import {Redirect} from "react-router-dom";
import {getAllUsers} from "../utilite/axiosConnect";
import {connect} from "react-redux";
import {langCode} from "../access/lang/translaterJS";

class WelcomeMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            redirectTo: "",
            usersQuantity: 0,
        };
        this.wrapperRef = React.createRef();
        this.usersQuantity = this.usersQuantity.bind(this);
    }

    componentDidMount() {
        setTimeout(() => {
            const wrapper = this.wrapperRef.current;
            if (wrapper && wrapper.classList) {
                wrapper.classList.toggle("show-welcome-main");
            }
        }, 300);
        getAllUsers(this.usersQuantity);
    }

    usersQuantity(data) {
        if (data) {
            this.setState({
                ...this.state,
                usersQuantity: data.size,
            })
        }
    }

    redirect(item) {
        this.setState({
            redirect: true,
            redirectTo: item,
        })
    }

    renderUsersQuantity() {
        const uQ = Number(this.state.usersQuantity) || 0;
        return (
            <span className="welcome-main-env__our-services-box text-18 medium">{uQ + 1014}</span>
        )
    }

    render() {
        if (this.state.redirect) {
            return(
                <Redirect to={this.state.redirectTo}/>
            )
        }
        return (
            <div className="welcome-main">
                <div className="container">
                    <div className="row">
                        <div ref={this.wrapperRef} className="col-12 welcome-main-env">
                            <h1 className="welcome-main-env__title uppercase title-36 bold">
                                <span className="welcome-main-env__title-name">{langCode(this.props.lang, "Willsi")}</span>
                                <br className="welcome-main-env__br"/>
                                <span className="welcome-main-env__title-value">{langCode(this.props.lang, "SelectionOfThings")}</span>
                            </h1>
                            <p className="welcome-main-env__paragraph-text text-16 light">{langCode(this.props.lang, "HomepageFirstTextBlock1")}
                                <br/>{langCode(this.props.lang, "HomepageFirstTextBlock2")}
                                <br/>{langCode(this.props.lang, "HomepageFirstTextBlock3")}
                            </p>
                            <div className="welcome-main-env__button-list">
                                <ButtonMain btnClass="button-main text-16" text={langCode(this.props.lang, "toDressingRoom")} onClick={() => {this.redirect("/catalog")}}/>
                                <ButtonMain btnClass="button-white text-16" text={langCode(this.props.lang, "becomePartner")} onClick={() => {this.redirect("/seller-service")}}/>
                            </div>
                            <div className="welcome-main-env__our-services">
                                <p className="welcome-main-env__our-services-text text-16 light">{langCode(this.props.lang, "OurService")}
                                    <br/>{langCode(this.props.lang, "TookAdvantage")}
                                    {this.renderUsersQuantity()}
                                    <span className="welcome-main-env__our-services-client">{langCode(this.props.lang, "client")}</span>
                                </p>
                            </div>
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

export default connect(MapStateToProps)(WelcomeMain);

