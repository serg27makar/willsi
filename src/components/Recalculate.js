import React from "react";
import {paramsAnimate} from "../js/visualEffects";
import {evenOdd} from "../js/sharedFunctions";

class Recalculate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataParams: [],
        };
        this.refRecalculate = [];
        this.props.dataParams.map(() => {
            return this.refRecalculate.push(React.createRef());
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.startParams !== this.props.startParams) {
            paramsAnimate(this.refRecalculate, 0)
        }
    }

    endInput() {
        paramsAnimate(this.refRecalculate, -1, true);
    }

    prevItem(index) {
        paramsAnimate(this.refRecalculate, index - 1);
    }

    nextItem(index) {
        paramsAnimate(this.refRecalculate, index + 1);
        if (index === (this.props.dataParams.length - 1)) {
            this.endInput();
        }
    }

    renderRecalculateBox = (item, index) => {
        const right = evenOdd(index);
        return (
            <div ref={this.refRecalculate[index]} className="recalculate-box" key={index}>
                <div className={"recalculate-box__row " + (right ? "row-reverse" : "")}>
                    <div className="recalculate-box__column-left">
                        <div className="recalculate-box__picture">
                            <picture className="picture">
                                <img className="picture__source" src={item.imgUrl} alt={item.imgAlt}/>
                            </picture>
                        </div>
                    </div>
                    <div className="recalculate-box__column-right">
                        <div className="recalculate-box__flex-col">
                            <p className="recalculate-box__title title-36 bold uppercase">{item.title}</p>
                            <p className="recalculate-box__paragraph text-22 light">{item.text}</p>
                            <input className="recalculate-box__input-data text-18 light" name={item.inputName} placeholder={item.placeholder}/>
                            <p className="recalculate-box__number text-115 bold">{item.number}</p>
                        </div>
                        <div className="recalculate-nav-btn">
                            <div className="recalculate-prev-btn" onClick={() => {this.prevItem(index)}}>{"< назад"}</div>
                            <div className="recalculate-next-btn" onClick={() => {this.nextItem(index)}}>{"далее >"}</div>
                        </div>
                    </div>
                </div>
                <div className={right ? "ellipse-right" : "ellipse-left"}/>
            </div>
        )
    };

    render() {
        return (
            <div className="col-12">
                {this.props.dataParams && this.props.dataParams.map((item, index) => {
                    return (
                        this.renderRecalculateBox(item, index)
                    )
                })}
            </div>
        )
    }
}
export default Recalculate;
