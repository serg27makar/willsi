import React from "react";
import ru from "../access/lang/LangConstants";
import {Redirect} from "react-router-dom";
import {handlePageUp} from "../js/visualEffects";
import {sizeListTshirts} from "../access/recalculateConstants";
import {connect} from "react-redux";
import {actionHeaderUser, actionOpenModal} from "../action";

class RecalculateFooter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
        };
        this.redirect = this.redirect.bind(this);
        this.continueFillIn = this.continueFillIn.bind(this);
        this.isValid = this.isValid.bind(this);
    }
    redirect() {
        handlePageUp();
        this.setState({
            redirect: true,
        })
    };

    continueFillIn() {
        this.props.headerUserFunction(this.props.UsersParameters.length - 1);
        this.props.openModalFunction("recalculateModal");
    }

    isValid(UsersParameters) {
        let valid = true;
        const index = UsersParameters.length - 1;
        if (UsersParameters && UsersParameters.length &&
            UsersParameters[index].Parameters &&
            UsersParameters[index].Parameters.length &&
            UsersParameters[index].Parameters.length >= sizeListTshirts.length) {
            UsersParameters[index].Parameters.map((item) => {
                if (valid && sizeListTshirts.indexOf(item.title) === -1) {
                    valid = false;
                }
                return valid;
            })
        } else {
            valid = false;
        }
        return valid;
    }

    render() {
        if (this.state.redirect) {
            return (
                <Redirect to={"/catalog"}/>
            )
        }
        if (this.props.disabled) return null;
        if (this.props.UsersParameters && this.props.UsersParameters.length && this.isValid(this.props.UsersParameters)) {
            return (
                <div className="col-12 recalculate-footer">
                    <div className="col-12">
                        <button className="recalculate__button text-22 medium button-main"
                                onClick={this.redirect}>{ru.Count}</button>
                    </div>
                    <div className="col-12">
                        <p className="recalculate__bottom-title title-36 uppercase color-aqua bold">{ru.YouAreAmazing}</p>
                        <p className="recalculate__bottom-paragraph text-16 light">{ru.SimpleIsNot1}<br/>{ru.SimpleIsNot2}</p>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="col-12 recalculate-footer">
                    <div className="col-12">
                        <p className="recalculate__bottom-paragraph text-20 light">{ru.weAreMissingSomeData}</p>
                    </div>
                    <div className="col-12">
                        <button className="recalculate__button text-22 medium button-main"
                                onClick={this.continueFillIn}>{ru.continue}</button>
                    </div>
                </div>
            )
        }

    }
}
function MapStateToProps(state) {
    return {}
}
const mapDispatchToProps = dispatch => {
    return {
        openModalFunction: (modal) => {
            dispatch(actionOpenModal(modal))
        },
        headerUserFunction: (HeaderUser) => {
            dispatch(actionHeaderUser(HeaderUser))
        },
    }
}
export default connect(MapStateToProps, mapDispatchToProps)(RecalculateFooter);
