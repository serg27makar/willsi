import React from "react";
import {connect} from "react-redux";
import {langCode} from "../access/lang/translaterJS";

class DataHeader extends React.Component {

    render() {
        return (
            <div className="welcome-data">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="welcome-data-env">
                                <h1 className="welcome-data-env__title uppercase title-36 bold">{langCode(this.props.lang, "AreYouReady")}</h1>
                                <p className="welcome-data-env__text text-16 light">{langCode(this.props.lang, "ToMakeTheDressLookPerfect") + langCode(this.props.lang, "EnterParameters")}</p>
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

export default connect(MapStateToProps)(DataHeader);
