import React from 'react';
import "../access/css/stepsBlock.css";
import ru from "../access/lang/LangConstants";

class Startup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startupArr: [],
        }
    }

    startupBlock = (item, index) => {
        return (
            <div className="step-box" key={index}>
                <div className="startup-box" data-aos="fade-right" data-aos-offset="300"
                     data-aos-duration="1000">
                    <div className="startup-box__icon">
                        <svg className="icon icon-note ">
                            <use xlinkHref={item.icon}/>
                        </svg>
                    </div>
                    <div className="startup-box__column">
                        <p className="startup-box__title text-18 bold uppercase">{item.cause}</p>
                        <p className="startup-box__paragraph text-14 light">{item.text}</p>
                    </div>
                </div>
            </div>
        )
    };

    render() {
        return (
            <div className="startup">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="startup__title title-36 uppercase">{ru.StartupIsGainingPopularity}</h2>
                        </div>
                    </div>
                    <div className="row-wrap align-items-start justify-content-center">
                        {this.props.startupArr && this.props.startupArr.map((item, index) => {
                            return this.startupBlock(item, index);
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default Startup;
