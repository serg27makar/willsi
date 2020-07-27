import React from 'react';
import ButtonMain from "./shared/ButtonMain";
import "../access/css/stepsBlock.css";

class StepsBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stepsArr: [],
            bgNon: "",
        }
    }

    stepBox = (item, index) => {
        return (
            <div className="step-box">
                <div className="steps-box">
                    <div className="steps-box__picture">
                        <picture>
                            <img className="picture__source" src={item.imgUrl} alt={item.imgAlt}/>
                        </picture>
                        <p className="steps-box__number">
                            <span className="steps-box__number-item text-25 bold">{"0" + ++index}</span>
                        </p>
                    </div>
                    <ButtonMain btnClass="steps-box__bottom-info text-18 bold uppercase" text={item.btnText}/>
                </div>
            </div>
        )
    };

    render() {
        return (
            <div className={this.props.bgNon ? "steps bgNon" : "steps"}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="steps__title title-36 uppercase">{this.props.title}</h2>
                        </div>
                    </div>
                    <div className="row-wrap">
                        {this.props.stepsArr && this.props.stepsArr.map((item, index) => {
                            return this.stepBox(item, index);
                        })}
                        {this.props.btnText ?
                        <div className="col-12">
                            <ButtonMain btnClass="steps-box__button-dressing button-main text-18" text={this.props.btnText}/>
                        </div>
                        : null}
                    </div>
                </div>
            </div>
        )
    }
}

export default StepsBlock;

