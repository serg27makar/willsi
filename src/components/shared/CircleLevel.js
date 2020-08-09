import React from 'react';
import "../../access/css/carousel.css"

class CircleLevel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rotate: "rotate(0deg)",
        }
    }

    componentDidMount() {
        this.counterRotate(this.props.level);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.level !== this.props.level) {
            this.counterRotate(this.props.level);
        }
    }

    counterRotate = (count) => {
        const deg = 200 / 100 * count;
        this.setState({
            rotate: "rotate(" + deg + "deg)",
        })
    };

    textCounter = (level) => {
        let text;
        if (level <= 20) {
            text = "очень плохо"
        } else if (level <= 40) {
            text = "плохо"
        } else if (level <= 60) {
            text = "так сибе"
        } else if (level <= 80) {
            text = "хорошо"
        } else if (level <= 100) {
            text = "отлично"
        }
        return text;
    };

    render() {
        return(
            <div className="cart-slider__circle" style={{backgroundImage: "url('static/img/content/circle-full.png')"}}>
                <div className="circle-counter">{this.props.level}</div>
                <div className="circle-arrow" style={{transform: this.state.rotate}}>
                    <div className="circle-counter-point"/>
                </div>
                <div className="circle-counter-text">{this.textCounter(this.props.level)}</div>
            </div>
        )
    }
}

export default CircleLevel;
