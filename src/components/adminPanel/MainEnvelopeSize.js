import React from "react";
import {paramsList} from "../../access/temporaryConstants";
import ru from "../../access/lang/LangConstants";

const sizeArr = [
    "L",
    "S",
    "M",
    "X",
    "XL",
    "XXL",
];

class MainEnvelopeSize extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.changeSize = this.changeSize.bind(this);
    }

    componentDidMount() {}

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.sizeData !== this.props.sizeData) {
            for (const group in this.props.sizeData) {
                this.setState({
                    ...this.state,
                    [group]: this.props.sizeData[group],
                })
            }
        }
    }

    changeSize(e) {
        const name = e.target.name;
        const value = e.target.value;
        const id = e.target.id;
        this.props.sizeDataChange(id, name, value);
    }

    renderSizeInput(item, index, size) {
        const sizeID = size;
        return (
            <div key={index} className="slider-input">
                <span className="slider-input-text">{item.data}</span>
                <input className="slider" type="range" id={sizeID} name={item.title} min="0" max="500" onChange={this.changeSize}/>
                <span className="slider-input-text">{this.state[sizeID] && this.state[sizeID][item.title] ? this.state[sizeID][item.title] : 0}</span>
            </div>
        )
    }

    renderSizeItem = (item, index) => {
        return (
            <div className="main-envelope__size-list" key={index}>
                <span className="main-envelope__size-text text-14 uppercase bold">{item}</span>
                {paramsList && paramsList.map((subItem, subIndex) => {
                    return this.renderSizeInput(subItem, subIndex, item);
                })}
            </div>
        )
    };

    render() {
        return (
            <div className="main-envelope__info-envelope align-items-start">
                <span className="main-envelope__info-title text-15 uppercase bold">{ru.Sizes}</span>
                <div className="main-size-block">
                    {sizeArr && sizeArr.map((item, index) => {
                        return this.renderSizeItem(item, index);
                    })}
                </div>
            </div>
        )
    }
}

export default MainEnvelopeSize;
