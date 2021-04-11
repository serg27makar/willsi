import React from "react";
import {connect} from "react-redux";

class DoubleTextarea extends React.Component {
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
                <span className="main-envelope__info-title text-15 uppercase bold">{this.props.placeholderData}</span>
                <label className={"main-envelope__label " + (this.state.active ? "input-check" : "input-uncheck")}>
                    <textarea className="form-shop__textarea double-textarea text-14"
                              placeholder={this.props.placeholderData}
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
    return {}
}

export default connect(MapStateToProps)(DoubleTextarea);
