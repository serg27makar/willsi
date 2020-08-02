import React from "react";

class DoubleButton extends React.Component {
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

    render() {
        return (
            <div className="main-envelope__info-envelope">
                <span className="main-envelope__info-title text-15 uppercase bold">{this.props.item.title}</span>
                <label className={"main-envelope__label " + (this.state.active ? "input-check" : "input-uncheck")}>
                    <input className="main-envelope__input text-14" type="text" placeholder={this.props.item.placeholder} readOnly={!this.state.active}/>
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

export default DoubleButton;
