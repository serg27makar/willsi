import React from "react";
import {connect} from "react-redux";
import {langCode} from "../../access/lang/translaterJS";

class DoubleButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            inputValue: "",
            item: this.props.item,
        }
    }

    componentDidMount() {
        if (this.props.active) this.setState({active: this.props.active})
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.item !== this.props.item) {
            this.setState({
                ...this.state,
                item: this.props.item,
            })
        }
    }

    activeBtn = () => {
        this.props.toggle(this.state.active);
        this.setState({
            active: !this.state.active,
        })
    };

    onChange = (e) => {
        this.props.changeValue(e.target.value)
    };

    render() {
        return (
            <div className="main-envelope__info-envelope">
                <span className="main-envelope__info-title text-15 uppercase bold">{langCode(this.props.lang, this.props.placeholderData.title)}</span>
                <label className={"main-envelope__label " + (this.state.active ? "input-check" : "input-uncheck")}>
                    <input className="main-envelope__input text-14" type="text"
                           placeholder={this.props.placeholderData.placeholder}
                           readOnly={!this.state.active}
                           value={this.state.item || ""}
                           onChange={this.onChange}
                    />
                    <button className={"main-envelope__button-active " + (this.state.active ? "button-checked" : "button-pen")} onClick={this.activeBtn}>
                        <span className="main-envelope__icon-check">
                            <svg className="icon">
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
        )
    }
}

function MapStateToProps(state) {
    return {
        lang: state.utiliteReducer.lang,
    }
}

export default connect(MapStateToProps)(DoubleButton);
