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

    onChange = (e, inputName) => {
        const data = e.target.value <= 0 ? 0 : e.target.value > 500 ? 500 : e.target.value;
        this.setState({
            ...this.state,
            [inputName]: data,
            inputName,
        });
    };

    renderRecalculateBox = (item, index) => {
        const right = evenOdd(index);
        const number = "0" + (index + 1);
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
                            <p className="recalculate-box__title title-36 bold uppercase">{item.title}</p>
                            <p className="recalculate-box__paragraph text-22 light">{item.text}</p>
                            <div className="relative-block">
                                <input className="recalculate-box__input-data text-18 light"
                                       type="number"
                                       name={item.inputName} placeholder={ru.recalculatePlaceholder}
                                       value={this.state[item.inputName] || ""}
                                       onChange={(e) => {this.onChange(e, item.inputName)}}
                                />
                                <p className="recalculate-input-text">{ru.sm}</p>
                            </div>
                            <p className="recalculate-box__number text-115 bold">{number}</p>
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
