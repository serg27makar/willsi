import React from "react";
import ru from "../../access/lang/LangConstants";
import {recalculateParamsDog, recalculateParamsWoman} from "../../access/recalculateConstants";
import {chooseSizeList} from "../../js/sharedFunctions";

class MainEnvelopeSize extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            paramsList: [],
            size: {},
        };
    }

    componentDidMount() {
        if (this.props.catalog) {
            this.chooseParamList();
        }
        if (this.props.subCatalog) {
            this.chooseParamList();
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.sizeData !== this.props.sizeData) {
            this.setState({
                ...this.state,
                size: this.props.sizeData,
            })
        }
        if (prevProps.catalog !== this.props.catalog) {
            this.chooseParamList();
        }
        if (prevProps.subCatalog !== this.props.subCatalog) {
            this.chooseParamList();
        }
    }

    chooseParamList() {
        const catalog = this.props.catalog;
        const subCatalog = this.props.subCatalog;
        if (catalog === "catalogListDog") {
            this.setState({
                paramsList: recalculateParamsDog,
            });
            this.props.paramsList(recalculateParamsDog)
        } else if (catalog.length > 1) {
            const {paramsList, verificationList} = chooseSizeList(subCatalog);
            this.setState({
                paramsList,
            });
            this.props.paramsList(verificationList)
        } else {
            alert("choose catalog")
        }
    }

    onChange = (e) => {
        const inputName = e.target.name;
        let data = e.target.value;
        data = Number(data);
        this.props.sizeDataChange(inputName, data);
    };

    leftArrowClick(inputName, data, sizeMin) {
        data = Number(data);
        data = data <= sizeMin ? sizeMin : --data;
        this.props.sizeDataChange(inputName, data);
    }

    rightArrowClick(inputName, data, sizeMax) {
        data = Number(data);
        data = data >= sizeMax ? sizeMax : ++data;
        this.props.sizeDataChange(inputName, data);
    }

    renderDigitalFace(item) {
        return (
            <div className="digital-face-wrapper">
                <div className="digital-face left-arrow" onClick={() => {
                    this.leftArrowClick(item.inputName, this.state.size[item.inputName] ||
                        item.sizeMin, item.sizeMin)}}
                >-</div>
                <div className="digital-face face-block">
                    <input className="slider-input-text" name={item.inputName}
                           value={(this.state.size && this.state.size[item.inputName]) || 0} min={item.sizeMin} max={item.sizeMax}
                           onChange={this.onChange}/>
                    <div className="face-block-text">{ru.sm}</div>
                </div>
                <div className="digital-face right-arrow" onClick={() => {
                    this.rightArrowClick(item.inputName, this.state.size[item.inputName] ||
                        item.sizeMin, item.sizeMax)}}
                >+</div>
            </div>
        )
    }

    renderSlider(item) {
        return (
            <div className="digital-slider-wrapper">
                <input className="slider" type="range" name={item.inputName}
                       value={(this.state.size && this.state.size[item.inputName]) || 0} min={item.sizeMin} max={item.sizeMax}
                       onChange={this.onChange}/>
                <div className="digital-slider-limit-wrapper">
                    <div className="digital-slider-limit">{item.sizeMin + " " + ru.sm}</div>
                    <div className="digital-slider-limit">{item.sizeMax + " " + ru.sm}</div>
                </div>
            </div>
        )
    }

    renderSizeInput(item, index) {
        return (
            <div key={index} className="slider-input-admin">
                <span className="slider-input-text">{item.title}</span>
                {this.renderDigitalFace(item)}
                {this.renderSlider(item)}
            </div>
        )
    }

    render() {
        return (
            <div className="main-envelope__info-envelope align-items-start">
                <span className="main-envelope__info-title text-15 uppercase bold">{ru.Sizes}</span>
                <div className="main-size-block">
                    {this.state.paramsList && this.state.paramsList.map((subItem, subIndex) => {
                        return this.renderSizeInput(subItem, subIndex);
                    })}
                </div>
            </div>
        )
    }
}

export default MainEnvelopeSize;
