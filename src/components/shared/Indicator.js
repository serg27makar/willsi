import React from 'react';
import ru from "../../access/lang/LangConstants";
import "../../access/css/stepsBlock.css"
import AOS from "aos";

class Indicator extends React.Component {

    componentDidMount() {
        AOS.init({
            duration: 2000
        })
    }

    render() {
        return(
            <div className="indicator">
                <div className="container">
                    <div className="row-wrap">
                        <p className="indicator-env__mobile-info text-14 light italic color-aqua">{ru.WithIndicator}</p>
                        <div className="indicator-env__mobile-picture">
                            <picture className="mobile-picture">
                                <img className="mobile-picture__source" src="static/img/content/circle-full.png" alt="circle"/>
                            </picture>
                        </div>
                        <div data-aos={"fade-left"} className="step-box-indicator">
                            <p className="indicator-env__paragraph text-14 light italic">{ru.PayAttentionToThings}</p>
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
                            <p className="indicator-env__paragraph text-14 light italic color-aqua">{ru.RecommendToConsider}</p>
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
                                    <p className="indicator-bottom__text text-14 light italic color-aqua">{ru.WithIndicator}</p>
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

export default Indicator;
