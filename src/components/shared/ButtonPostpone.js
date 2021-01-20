import React from "react";
import {connect} from "react-redux";
import {langCode} from "../../access/lang/translaterJS";

class ButtonPostpone extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="button-postpone" onClick={this.props.onClick}>
                <span className="button-postpone__text text-16 medium">{langCode(this.props.lang, "Postpone")}</span>
                <svg className="icon icon-shopping-bag ">
                    <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#shopping-bag"/>
                </svg>
            </div>
        )
    }
}

function MapStateToProps(state) {
    return {
        lang: state.utiliteReducer.lang,
    }
}

export default connect(MapStateToProps)(ButtonPostpone);
