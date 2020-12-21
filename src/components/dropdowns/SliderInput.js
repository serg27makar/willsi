import React from "react";
import ru from "../../access/lang/LangConstants";
import ButtonMain from "../shared/ButtonMain";

class SliderInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            priceFrom: {
                title: "from",
                name: "priceFrom",
                priceMin: 0,
                current: 0,
                priceMax: 10000,
            },
            priceTo: {
                title: "to",
                name: "priceTo",
                priceMin: 0,
                current: 10000,
                priceMax: 10000,
            },
        };
        this.paramsList = [
            "priceFrom",
            "priceTo"
        ];
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.priceFrom !== this.state.priceFrom || prevState.priceTo !== this.state.priceTo) {
            const price = {
                priceFrom: this.state.priceFrom.current,
                priceTo: this.state.priceTo.current,
            }
            this.props.setPriceData(price);
        }
    }

    priceDataChange(name, value) {
        const secondPriceName = name === "priceFrom" ? "priceTo" : "priceFrom";
        let secondValue = this.state[secondPriceName].current;
        if (secondPriceName === "priceFrom") {
            secondValue = secondValue > value ? value : secondValue
        } else {
            secondValue = secondValue < value ? value : secondValue
        }
        this.setState({
            ...this.state,
            [name]: {
                ...this.state[name],
                current: value,
            },
            [secondPriceName]: {
                ...this.state[secondPriceName],
                current: secondValue,
            }
        });
    }

    onChange = (e) => {
        const inputName = e.target.name;
        let data = e.target.value;
        data = Number(data);
        this.priceDataChange(inputName, data);
    };

    leftArrowClick(inputName, data, sizeMin) {
        data = Number(data);
        data = data <= sizeMin ? sizeMin : --data;
        this.priceDataChange(inputName, data);
    }

    rightArrowClick(inputName, data, sizeMax) {
        data = Number(data);
        data = data >= sizeMax ? sizeMax : ++data;
        this.priceDataChange(inputName, data);
    }

    renderDigitalFace(item) {
        return (
            <div className="digital-face-wrapper">
                <div className="digital-face left-arrow text-25 unselectable" onClick={() => {
                    this.leftArrowClick(item.name, item.current, item.priceMin)}}
                >-</div>
                <div className="digital-face face-block unselectable">
                    <input className="slider-input-text text-16" name={item.name}
                           value={item.current} min={item.priceMin} max={item.priceMax}
                           onChange={this.onChange}/>
                    <div className="face-block-text text-16">{ru.grn}</div>
                </div>
                <div className="digital-face right-arrow text-25 unselectable" onClick={() => {
                    this.rightArrowClick(item.name, item.current, item.priceMax)}}
                >+</div>
            </div>
        )
    }

    renderSlider(item) {
        return (
            <div className="digital-slider-wrapper">
                <input className="slider" type="range" name={item.name}
                       value={item.current} min={item.priceMin} max={item.priceMax}
                       onChange={this.onChange}/>
                <div className="digital-slider-limit-wrapper">
                    <div className="digital-slider-limit text-16">{item.priceMin + " " + ru.grn}</div>
                    <div className="digital-slider-limit text-16">{item.priceMax + " " + ru.grn}</div>
                </div>
            </div>
        )
    }

    renderSizeInput(subItem, index) {
        const item = this.state[subItem]
        return (
            <div key={index} className="slider-input-admin">
                <span className="slider-input-text text-16">{ru[item.title]}</span>
                {this.renderDigitalFace(item)}
                {this.renderSlider(item)}
            </div>
        )
    }

    render() {
        return (
            <div className="main-envelope__info-envelope align-items-start">
                <div className="main-price-block">
                    {this.paramsList && this.paramsList.map((subItem, subIndex) => {
                        return this.renderSizeInput(subItem, subIndex);
                    })}
                </div>
                <ButtonMain btnClass={"button-replace text-16 uppercase"} text={ru.replace} onClick={this.props.replacePrice}/>
            </div>
        )
    }
}

export default SliderInput;
