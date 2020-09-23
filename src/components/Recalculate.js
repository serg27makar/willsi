import React from "react";
import {paramsAnimate} from "../js/visualEffects";
import {evenOdd} from "../js/sharedFunctions";
import ru from "../access/lang/LangConstants";
import {actionAlertText, actionOpenModal, actionUsersParameters} from "../action";
import {connect} from "react-redux";

class Recalculate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataParams: [],
            inputName: "",
        };
        this.refRecalculate = [];
        this.props.dataParams.map(() => {
            return this.refRecalculate.push(React.createRef());
        });
        this.onChange = this.onChange.bind(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.startParams !== this.props.startParams && this.props.startParams) {
            paramsAnimate(this.refRecalculate, 0)
        }
    }

    endInput() {
        paramsAnimate(this.refRecalculate, -1, true);
    }

    prevItem(index) {
        paramsAnimate(this.refRecalculate, index - 1);
        if (index === 0) {
            this.props.firstBlock();
        }
    }

    nextItem(index, item) {
        if (this.state[item.inputName]) {
            const params = {
                title: item.inputName,
                size: this.state[item.inputName],
            };
            this.props.params(params);
            paramsAnimate(this.refRecalculate, index + 1);
            if (index === (this.props.dataParams.length - 1)) {
                this.endInput();
            }
        } else {
            this.props.alertTextFunction(ru.enterTheseDetails);
            this.props.openModalFunction("alertModal");
        }
    }

    onChange = (e) => {
        const inputName = e.target.name;
        let data = e.target.value <= 0 ? 0 : e.target.value > 500 ? 500 : e.target.value;
        data = Number(data);
        this.setState({
            ...this.state,
            [inputName]: data,
            inputName,
        });
    };

    leftArrowClick(inputName, data, sizeMin) {
        data = Number(data);
        data = data <= sizeMin ? sizeMin : --data;
        this.setState({
            ...this.state,
            [inputName]: data,
            inputName,
        });
    }

    rightArrowClick(inputName, data, sizeMax) {
        data = Number(data);
        data = data >= sizeMax ? sizeMax : ++data;
        this.setState({
            ...this.state,
            [inputName]: data,
            inputName,
        });
    }

    renderDigitalFace(item) {
        return (
            <div className="digital-face-wrapper">
                <div className="digital-face left-arrow" onClick={() => {this.leftArrowClick(item.inputName, this.state[item.inputName] || item.sizeMin, item.sizeMin)}}>-</div>
                <div className="digital-face face-block">
                    <input className="slider-input-text" name={item.inputName}
                           value={this.state && this.state[item.inputName] || item.sizeMin} min={item.sizeMin} max={item.sizeMax}
                           onChange={this.onChange}/>
                           <div className="face-block-text">{ru.sm}</div>
                </div>
                <div className="digital-face right-arrow" onClick={() => {this.rightArrowClick(item.inputName, this.state[item.inputName] || item.sizeMin, item.sizeMax)}}>+</div>
            </div>
        )
    }

    renderSlider(item) {
        return (
            <div className="digital-slider-wrapper">

                <input className="slider" type="range" name={item.inputName}
                       value={this.state && this.state[item.inputName] || 0} min={item.sizeMin} max={item.sizeMax}
                       onChange={this.onChange}/>
                <div className="digital-slider-limit-wrapper">
                    <div className="digital-slider-limit">{item.sizeMin + " " + ru.sm}</div>
                    <div className="digital-slider-limit">{item.sizeMax + " " + ru.sm}</div>
                </div>
            </div>
        )
    }

    renderInput(item) {
        return (
            <div className="slider-input">
                {this.renderDigitalFace(item)}
                {this.renderSlider(item)}
            </div>
        )
    }

    renderRecalculateBox = (item, index) => {
        const right = evenOdd(index);
        const number = index <= 8 ? "0" + (index + 1) : index + 1;
        return (
            <div ref={this.refRecalculate[index]} className="recalculate-box" key={index}>
                <div className={"recalculate-box__row " + (right ? "row-reverse" : "")}>
                    <div className="recalculate-box__column-left">
                        <div className="recalculate-box__picture">
                            <picture className="picture">
                                <img className="picture__source" src={item.imgUrl} alt={item.inputName}/>
                            </picture>
                        </div>
                    </div>
                    <div className="recalculate-box__column-right">
                        <div className="recalculate-box__flex-col">
                            <div className="breadcrumbs__row">
                                <p className="recalculate-box__title title-36 bold uppercase">{item.title}</p>
                                <picture className="picture">
                                    <img className="picture__source" src={item.secondImgUrl} alt={item.inputName}/>
                                </picture>
                            </div>
                            <p className="recalculate-box__paragraph text-22 light">{item.text}</p>
                            <div className="digital-slider-limit-wrapper">
                                {this.renderInput(item)}
                                <p className="recalculate-box__number text-115 bold">{number}</p>
                            </div>
                        </div>
                        <div className="recalculate-nav-btn">
                            <div className="recalculate-prev-btn" onClick={() => {this.prevItem(index)}}>{"< назад"}</div>
                            <div className="recalculate-next-btn" onClick={() => {this.nextItem(index, item)}}>{"далее >"}</div>
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

function MapStateToProps(state) {
    return {}
}
const mapDispatchToProps = dispatch => {
    return {
        openModalFunction: (modal) => {
            dispatch(actionOpenModal(modal))
        },
        alertTextFunction: (text) => {
            dispatch(actionAlertText(text))
        },
        usersParametersFunction: (UsersParameters) => {
            dispatch(actionUsersParameters(UsersParameters))
        }
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(Recalculate);
