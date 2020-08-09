import React from "react";
import ButtonIcon from "./ButtonIcon";

const sizeArr = [
    "S",
    "M",
    "XL",
    "XXL",
];

class MainEnvelopeSize extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
        }
    }

    activeBtn = () => {
        this.setState({
            active: !this.state.active,
        })
    };

    renderSizeItem = (item, index) => {
        return (
            <div className="main-envelope__size-list" key={index}>
                <span className="main-envelope__size-text text-14 uppercase bold">{item}</span>
                <div className="main-enevelope__size-icons">
                    <ButtonIcon btnClass={"main-envelope__size-bars"} btnImage={"static/img/svg-sprites/symbol/sprite.svg#size-menu"}/>
                    <ButtonIcon btnClass={"main-envelope__button-delete"} btnImage={"static/img/svg-sprites/symbol/sprite.svg#delete"}/>
                </div>
            </div>
        )
    };

    render() {
        return (
            <div className="main-envelope__info-envelope align-items-start">
                <span className="main-envelope__info-title text-15 uppercase bold">Размеры</span>
                <div className="main-envelope__size-column">
                    {sizeArr && sizeArr.map((item, index) => {
                        return this.renderSizeItem(item, index);
                    })}
                    <label className={"main-envelope__label " + (this.state.active ? "input-check" : "input-uncheck")}>
                        <input className="main-envelope__input text-14" type="text" placeholder="На пример XL" readOnly={!this.state.active}/>
                        <button className={"main-envelope__button-active " + (this.state.active ? "button-checked" : "button-pen")} onClick={this.activeBtn}>
                            <span className="main-envelope__icon-check">
                                <svg className="icon icon-check-mark ">
                                    <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#check-mark"/>
                                </svg>
                            </span>
                            <span className="main-envelope__icon-pen">
                                <svg className="icon">
                                    <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#pen"/>
                                </svg>
                            </span>
                        </button>
                    </label>
                </div>
            </div>
        )
    }
}

export default MainEnvelopeSize;
