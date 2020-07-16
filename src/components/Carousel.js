import React from 'react';
import "../access/css/carousel.css";

const groupSliders = [
    {
        imgUrl: "static/img/content/slider-main.jpg",
        alt: "slider",
    },
    {
        imgUrl: "static/img/content/thumbs-1.webp",
        alt: "slider",
    },
    {
        imgUrl: "static/img/content/slider-main.jpg",
        alt: "slider",
    },
];

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startPosition: 0,
            stopPosition: 0,
            slidersLength: 0,
            clientWidth: 0,
            PosX: 0,
            slideStyle: {},
            zoomStyles: {},
        };
        this.chooseSlideBtn = this.chooseSlideBtn.bind(this);
    }

    startScroll = (e) => {
        e.preventDefault();
        e.stopPropagation();
        let mouseDown = true;
        this.setState({
            ...this.state,
            startPosition: e.clientX,
            slidersLength: -e.target.offsetParent.clientWidth * (groupSliders.length - 1),
            clientWidth: e.target.offsetParent.clientWidth,
        });
        document.addEventListener("mouseup", () => {
            mouseDown = false;
            this.stopScroll();
        });
        document.addEventListener("mousemove", (e) => {
            if (mouseDown) this.horizontalScroll(e);
        }, true);

    };

    horizontalScroll = (e) => {
        const X = -(this.state.startPosition - e.clientX) + this.state.stopPosition;
        this.setState({
            PosX: X >= 0 ? 0 : X <= this.state.slidersLength ? this.state.slidersLength : X
        });
        this.slideMove(this.state.PosX, false);
    };

    stopScroll = () => {
        let slideNumber = this.state.PosX / this.state.clientWidth;
        if (!Number.isInteger(slideNumber)) {
            slideNumber = Math.round(slideNumber);
        }
        const stopPosition = this.state.clientWidth * slideNumber;
        this.lastPosition(stopPosition);
        this.slideMove(stopPosition, true)
    };

    slideMove = (positionX, animation = false) => {
        this.setState({
            ...this.state,
            slideStyle: {
                transform: "translate(" + positionX + "px, 0)",
                transitionDuration: animation ? "1s" : "0s",
            }
        })
    };

    lastPosition = (stopPosition) => {
        this.setState({
            ...this.state,
            stopPosition: stopPosition,
        })
    };

    chooseSlideBtn = (index, clientWidth) => {
        const stopPosition = -index * clientWidth;
        this.lastPosition(stopPosition);
        this.slideMove(stopPosition, true);
    };

    renderSlide = () => {
        return groupSliders.map((slide, index) => {
            return (
                <div className="carousel-slide" style={this.state.slideStyle} onMouseOver={this.zoomStart} onMouseMove={(e) => {this.renderZoom(slide.imgUrl, e.pageX, e.pageY)}}>
                    <img className="carousel-img" src={slide.imgUrl} alt={slide.alt} key={index}/>
                    <div className="zoomLens" style={this.state.zoomStyles} />
                </div>
            )
        })
    };

    zoomStart = (e) => {
        this.setState({

        })
    };

    renderZoom = (imgUrl, corX, corY) => {
        this.setState({
            ...this.state,
            zoomStyles: {
                display: "block",
                background: "url(" + imgUrl + ") -50px -50px no-repeat",
                top: corY,
                left: corX,
            }
        })
    };

    renderSlideBar = () => {
        return groupSliders.map((slide, index) => {
            return (
                <div className="slide-bar" key={index} onClick={(e) => {this.chooseSlideBtn(index, e.target.offsetParent.clientWidth)}}>
                    <img className="carousel-img" src={slide.imgUrl} alt={slide.alt} key={index}/>
                </div>
            )
        })
    };

    render() {
        return (
            <div className="carousel-wrap" onMouseDown={this.startScroll}>
                <div className="cart-slider">
                    {this.renderSlide()}
                </div>
                <div className="sliders-bar-btn">
                    {this.renderSlideBar()}
                </div>
            </div>
        )
    }
}

export default Carousel;

