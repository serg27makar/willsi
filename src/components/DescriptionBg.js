import React from 'react';
import "./../access/css/homepage.css";
import {connect} from "react-redux";
import {langCode} from "../access/lang/translaterJS";

class DescriptionBg extends React.Component {

    render() {
        return (
            <div className="description-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-12">
                            <div className="description-env">
                                <div className="description-env__icon">
                                    <svg className="icon icon-idea ">
                                        <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#idea"/>
                                    </svg>
                                </div>
                                <p className="description-env__top-info text-22 bold uppercase">{langCode(this.props.lang, "Hint")}</p>
                            </div>
                            <p className="description-bg__paragraph text-14">{langCode(this.props.lang, "descriptionText1")}</p>
                            <div className="description-env">
                                <div className="description-env__icon">
                                    <svg className="icon icon-warning ">
                                        <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#warning"/>
                                    </svg>
                                </div>
                                <p className="description-env__top-info text-22 bold uppercase">{langCode(this.props.lang, "Important")}</p>
                            </div>
                            <p className="description-bg__paragraph text-14">{langCode(this.props.lang, "descriptionText2")}</p>
                            <p className="description-bg__paragraph text-14">{langCode(this.props.lang, "descriptionText3")}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}
function MapStateToProps(state) {
    return {
        lang: state.utiliteReducer.lang,
    }
}

export default connect(MapStateToProps)(DescriptionBg);

