import React from 'react';
import "../../access/css/carousel.css"

class CircleLevel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rotate: "rotate(0deg)",
            currentCount: 0,
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

    counterRotate = (count, currentCount = 0) => {
        if (count > currentCount) {
            setTimeout(() => {
                currentCount = currentCount < count ? currentCount + 1 : count;
                const deg = 200 / 100 * currentCount;
                this.setState({
                    rotate: "rotate(" + deg + "deg)",
                    currentCount,
                });
                this.counterRotate(count, currentCount);
            }, 20);
        }
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
            <div className={this.props.catalog ? "cart-slider__circle catalog-size" : "cart-slider__circle"} style={{backgroundImage: "url('static/img/content/circle-full.png')"}}>
                <div className={this.props.catalog ? "circle-counter catalog-size" : "circle-counter"}>{this.state.currentCount}</div>
                <div className={this.props.catalog ? "circle-arrow catalog-size" : "circle-arrow"} style={{transform: this.state.rotate}}>
                    <div className="circle-counter-point"/>
                </div>
                <div className="circle-counter-text">{this.textCounter(this.state.currentCount)}</div>
            </div>
        )
    }
}

export default CircleLevel;
