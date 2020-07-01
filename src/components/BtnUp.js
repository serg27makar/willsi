import React from 'react';

class BtnUp extends React.Component {
    constructor(props) {
        super(props);
        this. state = {
            itemStyle: "btn-up",
        };
        this.handleScroll = this.handleScroll.bind(this);
        this.handlePageUp = this.handlePageUp.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(event) {
        let scrollTop = event.target.scrollingElement.scrollTop;
        if (scrollTop > 800) {
            this.setState({
                itemStyle: "btn-up btn-show"
            })
        } else {
            this.setState({
                itemStyle: "btn-up"
            })
        }
    }

    handlePageUp() {
        const currentPosition = window.scrollY;
        this.scrollDuration(currentPosition);
    }

    scrollDuration(currentPosition) {
        setTimeout(() => {
            if (currentPosition >= 20) {
                currentPosition = currentPosition - 20;
                this.scrollDuration(currentPosition)
            } else {
                currentPosition = 0;
            }
        }, 1);
        window.scrollTo(0, currentPosition);
    }

    render() {
        return (
            <div className={this.state.itemStyle} onClick={this.handlePageUp}>
                <div className="btn-up__env">
                    <svg className="icon icon-arrow-up ">
                        <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#arrow-up"/>
                    </svg>
                </div>
            </div>
        )
    }
}

export default BtnUp;
