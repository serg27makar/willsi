import React from 'react';
import "../../access/css/stepsBlock.css"
import AOS from "aos";
import CircleLevel from "./CircleLevel";
import {connect} from "react-redux";
import {langCode} from "../../access/lang/translaterJS";

class Indicator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            start: false,
        }
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        AOS.init({
            duration: 2000
        });
        window.addEventListener('scroll', this.handleScroll)
    }

    handleScroll(event) {
        let scrollTop = event.target.scrollingElement.scrollTop;
        if (scrollTop > 500) {
            this.setState({
                start: true
            })
        }
    }

    renderDynamicCircle() {
        if (this.state.start)
        return(
            <CircleLevel level={99}/>
        )
    }

    render() {
        return(
            <div className="indicator">
                <div className="container">
                    <div className="row-wrap">
                        <p className="indicator-env__mobile-info text-14 light italic color-aqua">{langCode(this.props.lang, "WithIndicator")}</p>
                        <div data-aos={"fade-right"} className="step-box-indicator">
                            {this.renderDynamicCircle()}
                        </div>
                        <div data-aos={"fade-left"} className="step-box-indicator">
                            <p className="indicator-env__paragraph text-14 light italic">{langCode(this.props.lang, "PayAttentionToThings")}</p>
                        </div>
                        <div data-aos={"fade-right"} className="step-box-indicator">
                            <div className="indicator-env__picture">
                                <picture className="picture">
                                    <img className="picture__source" src="static/img/content/slidebars.png" alt="slidebars"/>
                                </picture>
                                <span className="indicator-env__number-start text-14">0</span>
                                <span className="indicator-env__number-end text-14">100</span>
                            </div>
                        </div>
                        <div data-aos={"fade-left"} className="step-box-indicator">
                            <p className="indicator-env__paragraph text-14 light italic color-aqua">{langCode(this.props.lang, "RecommendToConsider")}</p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div data-aos={"fade-down"} className="indicator-bottom">
                                <div className="indicator-bottom__picture">
                                    <picture className="picture">
                                        <img className="picture__source" src="static/img/content/window-screen.png" alt="window-screen"/>
                                    </picture>
                                    <p className="indicator-bottom__text text-14 light italic color-aqua">{langCode(this.props.lang, "WithIndicator")}</p>
                                </div>
                                <div className="indicator-bottom__mobile-picture">
                                    <picture className="mobile-picture">
                                        <img className="mobile-picture__source" src="static/img/content/window-screen-mobile.png" alt="window-screen"/>
                                    </picture>
                                </div>
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

export default connect(MapStateToProps)(Indicator);
