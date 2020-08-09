import React from 'react';
import "../access/css/carousel.css";


//Todo zoom refactor

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sliderWidth: 0,
            sliderHeight: 0,
            sliderLeft: 0,
            sliderTop: 0,
            slideStyle: {},
            zoomStyles: {},
            imgUrl: "",
            zoomLens: "",
        };
    }

    slideMove = (positionX, animation = false) => {
        this.setState({
            ...this.state,
            slideStyle: {
                transform: "translate(" + positionX + "px, 0)",
                transitionDuration: animation ? "1s" : "0s",
            }
        });
    };

    chooseSlideBtn = (index, clientWidth) => {
        const stopPosition = -index * clientWidth;
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
                <div className="carousel-wrap">
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
