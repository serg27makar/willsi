import React from "react";
import {langCode} from "../access/lang/translaterJS";
import {connect} from "react-redux";

class WhomStartup extends React.Component {
    render() {
        return (
            <div className="whom-startup">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-12">
                            <h2 className="whom-startup__title uppercase title-36">{langCode(this.props.lang, "WhomStartupTitle")}</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 col-12">
                            <p className="whom-startup__paragraph text-14">{langCode(this.props.lang, "WhomStartupText1")}</p>
                            <p className="whom-startup__paragraph text-14">{langCode(this.props.lang, "WhomStartupText2")}</p>
                        </div>
                        <div className="col-lg-4 col-12">
                            <div className="whom-startup__picture">
                                <picture className="picture">
                                    <img className="picture__source" src="static/img/content/startup-item.png" alt="steps"/>
                                </picture>
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

export default connect(MapStateToProps)(WhomStartup);
