import React from 'react';
import "../access/css/carousel.css";

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startPosition: 0,
            stopPosition: 0,
            slidersLength: 0,
            clientWidth: 0,
            sliderWidth: 0,
            sliderHeight: 0,
            sliderLeft: 0,
            sliderTop: 0,
            PosX: 0,
            slideStyle: {},
            zoomStyles: {},
            imgUrl: "",
            zoomLens: "",
            slidersArr: [],
        };
    }

    startScroll = (e) => {
        e.preventDefault();
        e.stopPropagation();
        let mouseDown = true;
        this.setState({
            ...this.state,
            startPosition: e.clientX,
            slidersLength: -e.target.offsetParent.clientWidth * (this.props.slidersArr.length - 1),
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
        });
    };

    lastPosition = (stopPosition) => {
        console.log(stopPosition);
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
        return this.props.slidersArr.map((slide, index) => {
            return (
                <div className="carousel-slide"
                     style={this.state.slideStyle}
                     onMouseMove={(e) => {
                         e.preventDefault();
                         e.stopPropagation();
                         const {left, top, width, height} = e.currentTarget.getBoundingClientRect();
                         this.setState({
                             ...this.state,
                             sliderWidth: width,
                             sliderHeight: height,
                             sliderLeft: left,
                             sliderTop: top,
                         });
                         if (this.state.isVisibleZoom) this.zoomMove(this.state.imgUrl, e.clientX - this.state.sliderLeft, e.clientY - this.state.sliderTop );
                         if (!this.state.isVisibleZoom) this.zoomStart(this.state.imgUrl, left, top, width, height);
                     }}
                     onMouseEnter={(e) => {
                         e.preventDefault();
                         e.stopPropagation();
                         const {left, top, width, height} = e.currentTarget.getBoundingClientRect();
                         this.zoomStart(slide.imgUrl,left, top, width, height)
                     }} key={index}>
                    <div className="carousel-img-wrap">
                        <img className="carousel-img" src={slide.imgUrl} alt={slide.alt} key={index}/>
                    </div>
                </div>
            )
        })
    };

    zoomStart = (imgUrl,left, top, width, height) => {
        this.setState({
            ...this.state,
            sliderWidth: width,
            sliderHeight: height,
            sliderLeft: left,
            sliderTop: top,
            isVisibleZoom: true,
            imgUrl: imgUrl,
            zoomLens: "zoomLens",
            zoomStyles: {
                display: "block",
                background: "url(" + imgUrl + ") -50px -50px no-repeat 300%",
            }
        })
    };

    zoomStop = () => {
        this.setState({
            ...this.state,
            isVisibleZoom: false,
            zoomStyles: {
                display: "none",
            }
        })
    };

    zoomMove = (imgUrl, X, Y) => {
        if ( Y < -25 || Y > this.state.sliderHeight || X < -25 || X > this.state.sliderWidth) {
            this.zoomStop();
        } else {
            this.setState({
                ...this.state,
                zoomStyles: {
                    backgroundImage: "url(" + imgUrl + ")",
                    backgroundPositionX: "-" + (X - 50) + "px",
                    backgroundPositionY: "-" + (Y - 50) + "px",
                    top: "calc(" + Y + "px - 80px)",
                    left: "calc(" + X + "px - 80px)",
                    transform: "scale(1.1)",
                }
            })
        }
    };

    renderSlideBar = () => {
        return this.props.slidersArr.map((slide, index) => {
            return (
                <div className="slide-bar" key={index} onClick={(e) => {this.chooseSlideBtn(index, e.target.offsetParent.clientWidth)}}>
                    <img className="carousel-img-btn" src={slide.imgUrl} alt={slide.alt} key={index}/>
                </div>
            )
        })
    };

    render() {
        return (
            <div>
                <div className="carousel-wrap" onMouseDown={this.startScroll}>
                    <div className="cart-slider">
                        {this.renderSlide()}
                        <div className={this.state.zoomLens} style={this.state.zoomStyles} onMouseMove={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            if (this.state.isVisibleZoom) this.zoomMove(this.state.imgUrl, e.clientX - this.state.sliderLeft, e.clientY - this.state.sliderTop);
                        }}/>
                    </div>
                    <div className="sliders-bar-btn">
                        {this.renderSlideBar()}
                    </div>
                </div>
            </div>
        )
    }
}

export default Carousel;
