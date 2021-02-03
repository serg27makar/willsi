import React from "react";
import {Redirect} from "react-router-dom";
import {handlePageUp} from "../js/visualEffects";
import {connect} from "react-redux";
import {actionAddUser, actionHeaderUser, actionOpenModal} from "../action";
import {langCode} from "../access/lang/translaterJS";
import {isValidStartParams} from "../js/sharedFunctions";

class RecalculateFooter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
        };
        this.redirect = this.redirect.bind(this);
        this.continueFillIn = this.continueFillIn.bind(this);
    }
    redirect() {
        this.props.addUserFunction(false);
        handlePageUp();
        this.setState({
            redirect: true,
        })
    };

    continueFillIn() {
        if (!this.props.HeaderUser) {
            this.props.headerUserFunction(this.props.UsersParameters.length - 1);
        }
        this.props.openModalFunction("recalculateModal");
    }

    render() {
        if (this.state.redirect) {
            return (
                <Redirect to={"/catalog"}/>
            )
        }
        if (this.props.disabled) return null;
        if (this.props.UsersParameters && this.props.UsersParameters.length && isValidStartParams(this.props.UsersParameters, this.props.UsersParameters.length - 1)) {
            return (
                <div className="col-12 recalculate-footer">
                    <div className="col-12">
                        <button className="recalculate__button text-22 medium button-main"
                                onClick={this.redirect}>{langCode(this.props.lang, "Count")}</button>
                    </div>
                    <div className="col-12">
                        <p className="recalculate__bottom-title title-36 uppercase color-aqua bold">{langCode(this.props.lang, "YouAreAmazing")}</p>
                        <p className="recalculate__bottom-paragraph text-16 light">{langCode(this.props.lang, "SimpleIsNot1")}<br/>{langCode(this.props.lang, "SimpleIsNot2")}</p>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="col-12 recalculate-footer">
                    <div className="col-12">
                        <p className="recalculate__bottom-paragraph text-20 light">{langCode(this.props.lang, "weAreMissingSomeData")}</p>
                    </div>
                    <div className="col-12">
                        <button className="recalculate__button text-22 medium button-main"
                                onClick={this.continueFillIn}>{langCode(this.props.lang, "continue")}</button>
                    </div>
                </div>
            )
        }

    }
}
function MapStateToProps(state) {
    return {
        lang: state.utiliteReducer.lang,
        HeaderUser: state.userReducer.HeaderUser,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        openModalFunction: (modal) => {
            dispatch(actionOpenModal(modal))
        },
        headerUserFunction: (HeaderUser) => {
            dispatch(actionHeaderUser(HeaderUser))
        },
        addUserFunction: (AddUser) => {
            dispatch(actionAddUser(AddUser))
        },
    }
}
export default connect(MapStateToProps, mapDispatchToProps)(RecalculateFooter);
