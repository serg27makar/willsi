import React from "react";
import {evenOdd} from "../js/sharedFunctions";
import {actionAlertText, actionOpenModal, actionUsersParameters} from "../action";
import {connect} from "react-redux";
import ButtonMain from "./shared/ButtonMain";
import {langCode} from "../access/lang/translaterJS";

class Recalculate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataParams: [],
            inputName: "",
            active: 0,
            openAlertPopUp: false,
            default: false,
            defaultItem: {}
        };
        this.onChange = this.onChange.bind(this);
        this.closeLincModal = this.closeLincModal.bind(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.default !== this.state.default && this.state.default) {
            this.nextItem(this.state.defaultItem.index, this.state.defaultItem.item);
        }
    }

    prevItem(index) {
        if (index === 0) {
            this.props.firstBlock();
        } else {
            this.setState({
                ...this.state,
                active: index - 1,
            });
        }
    }

    nextItem(index, item) {
        if (this.state[item.inputName]) {
            const params = {
                title: item.inputName,
                size: this.state[item.inputName],
            };
            this.props.params(params);
            if (index === (this.props.dataParams.length - 1)) {
                this.props.lastBlock(params);
            } else {
                this.setState({
                    ...this.state,
                    active: index + 1,
                    default: false,
                    defaultItem: {},
                })
            }
        } else {
            this.defaultData(item, index);
        }
    }

    defaultData(item, index) {
        this.setState({
            ...this.state,
            [item.inputName]: item.sizeMin,
            inputName: item.inputName,
            default: true,
            defaultItem: {
                ...this.state.defaultItem,
                item, index,
            }
        });
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

    closeLincModal() {
        this.setState({
            ...this.state,
            openAlertPopUp: false,
        })
    }

    renderDigitalFace(item) {
        return (
            <div className="digital-face-wrapper">
                <div className="digital-face left-arrow text-25 unselectable"
                     onClick={() => {this.leftArrowClick(item.inputName, this.state[item.inputName] || item.sizeMin, item.sizeMin)}}>-</div>
                <div className="digital-face face-block unselectable">
                    <input className="slider-input-text text-16" name={item.inputName}
                           value={(this.state && this.state[item.inputName]) || item.sizeMin} min={item.sizeMin} max={item.sizeMax}
                           onChange={this.onChange}/>
                           <div className="face-block-text">{langCode(this.props.lang, "sm")}</div>
                </div>
                <div className="digital-face right-arrow text-25 unselectable"
                     onClick={() => {this.rightArrowClick(item.inputName, this.state[item.inputName] || item.sizeMin, item.sizeMax)}}>+</div>
            </div>
        )
    }

    renderSlider(item) {
        return (
            <div className="digital-slider-wrapper">
                <input className="slider" type="range" name={item.inputName}
                       value={(this.state && this.state[item.inputName]) || 0} min={item.sizeMin} max={item.sizeMax}
                       onChange={this.onChange}/>
                <div className="digital-slider-limit-wrapper">
                    <div className="digital-slider-limit text-16">{item.sizeMin + " " + langCode(this.props.lang, "sm")}</div>
                    <div className="digital-slider-limit text-16">{item.sizeMax + " " + langCode(this.props.lang, "sm")}</div>
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
            <div className="recalculate-box" key={index} style={index !== this.state.active ? {display: "none"} : {}}>
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
                            <div className="recalculate-prev-btn text-22" onClick={() => {this.prevItem(index)}}>{"< назад"}</div>
                            <div className="recalculate-next-btn text-22" onClick={() => {this.nextItem(index, item)}}>{"далее >"}</div>
                        </div>
                    </div>
                </div>
                <div className={right ? "ellipse-right" : "ellipse-left"}/>
            </div>
        )
    };

    render() {
        if (this.state.openAlertPopUp) {
            return (
                <div className="modal-envelope" id="modal-wowFirst">
                    <div className="modal-envelope__close" onClick={this.closeLincModal}>
                        <svg className="icon icon-close ">
                            <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#close"/>
                        </svg>
                    </div>
                    <div className="modal-envelope__body">
                        <p className="modal-envelope__title title-36 bold">{langCode(this.props.lang, "inOrderToContinue")}</p>
                        <div className="modal-form__button-enter">
                            <ButtonMain btnClass={"button-enter button-main text-18 uppercase medium"}
                                        text={langCode(this.props.lang, "understandably")} onClick={this.closeLincModal}/>
                        </div>
                    </div>
                </div>
            )
        }
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
    return {
        lang: state.utiliteReducer.lang,
    }
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
