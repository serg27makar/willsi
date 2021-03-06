import React from "react";
import {chooseSizeList} from "../../js/sharedFunctions";
import {connect} from "react-redux";
import {langCode} from "../../access/lang/translaterJS";

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
        if (catalog.length > 1) {
            const {paramsList, verificationList} = chooseSizeList(subCatalog, catalog);
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
                <div className="digital-face left-arrow text-25 unselectable" onClick={() => {
                    this.leftArrowClick(item.inputName, this.state.size[item.inputName] ||
                        item.sizeMin, item.sizeMin)}}
                >-</div>
                <div className="digital-face face-block unselectable">
                    <input className="slider-input-text text-16" name={item.inputName}
                           value={(this.state.size && this.state.size[item.inputName]) || 0} min={item.sizeMin} max={item.sizeMax}
                           onChange={this.onChange}/>
                    <div className="face-block-text text-16">{langCode(this.props.lang, "sm")}</div>
                </div>
                <div className="digital-face right-arrow text-25 unselectable" onClick={() => {
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
                    <div className="digital-slider-limit text-16">{item.sizeMin + " " + langCode(this.props.lang, "sm")}</div>
                    <div className="digital-slider-limit text-16">{item.sizeMax + " " + langCode(this.props.lang, "sm")}</div>
                </div>
            </div>
        )
    }

    renderSizeInput(item, index) {
        return (
            <div key={index} className="slider-input-admin">
                <span className="slider-input-text text-16">{item.title}</span>
                {this.renderDigitalFace(item)}
                {this.renderSlider(item)}
            </div>
        )
    }

    render() {
        return (
            <div className="main-envelope__info-envelope align-items-start">
                <span className="main-envelope__info-title text-15 uppercase bold">{langCode(this.props.lang, "enterIdealParameters")}</span>
                <div className="main-size-block">
                    {this.state.paramsList && this.state.paramsList.map((subItem, subIndex) => {
                        return this.renderSizeInput(subItem, subIndex);
                    })}
                </div>
            </div>
        )
    }
}
function MapStateToProps(state) {
    return {
        lang: state.utiliteReducer.lang,
    }
}

export default connect(MapStateToProps)(MainEnvelopeSize);

