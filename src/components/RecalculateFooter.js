import React from "react";
import ru from "../access/lang/LangConstants";
import {Redirect} from "react-router-dom";
import {handlePageUp} from "../js/visualEffects";

class RecalculateFooter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
        };
        this.redirect = this.redirect.bind(this);
    }
    redirect() {
        handlePageUp();
        this.setState({
            redirect: true,
        })
    };

    render() {
        if (this.state.redirect) {
            return (
                <Redirect to={"/catalog"}/>
            )
        }
        return (
            <div className="col-12 recalculate-footer">
                <div className="col-12">
                    <button className={"recalculate__button text-22 medium button-main" + (this.props.disabled ? " disabled-btn" : "")}
                            disabled={this.props.disabled} onClick={this.redirect}>{ru.Count}</button>
                </div>
                <div className="col-12">
                    <p className="recalculate__bottom-title title-36 uppercase color-aqua bold">{ru.YouAreAmazing}</p>
                    <p className="recalculate__bottom-paragraph text-16 light">{ru.SimpleIsNot1}<br/>{ru.SimpleIsNot2}</p>
                </div>
            </div>
        )
    }
}

export default RecalculateFooter;
