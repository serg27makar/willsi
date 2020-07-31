import React from "react";
import ButtonMain from "./shared/ButtonMain";
import ru from "../access/lang/LangConstants";

const whomParams = [
    "Женщина",
    "Мужчина",
    "Ребенок",
];

class InputDataParams extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeBtn: 0,
        }
    }

    btnActive = (index) => {
        this.setState({
            activeBtn: index,
        })
    };

    renderBtn = (item, index) => {
        return (
            <button key={index}
                    className={"box-tags__item " + (this.state.activeBtn === index ? "tags-active" : "")}
                    onClick={() => {this.btnActive(index)}}
            >
                <span className="text-18 medium">{item}</span>
                <svg className="icon">
                    <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#pen"/>
                </svg>
            </button>
        )
    };

    render() {
        return(
            <div className="recalculate-top">
                <div className="container">
                    <div className="row">
                        <div className="col-12 ">
                            <div className="recalculate-envelope">
                                <p className="recalculate-envelope__title text-18 uppercase bold color-aqua">{ru.WhomMeasure}</p>
                                <div className="recalculate-envelope__box-tags">
                                    <div className="box-tags">
                                        {whomParams && whomParams.map((item, index) => {
                                            return this.renderBtn(item, index)
                                        })}
                                    </div>
                                </div>
                                <p className="recalculate-envelope__sub-info text-22 light">{ru.WhatCallParameters}</p>
                                <div className="recalculate-envelope__bottom-info">
                                    <input className="recalculate-envelope__input-data text-18 light" placeholder={ru.DataPlaceholder}/>
                                    <ButtonMain btnClass={"recalculate-envelope__button-next text-16 medium"} text={ru.Next}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default InputDataParams;
