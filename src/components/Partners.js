import React from 'react';
import ru from "./../access/lang/LangConstants";
import ButtonMain from "./shared/ButtonMain";
import "./../access/css/homepage.css";
import {partnersArr} from "../access/temporaryConstants"
import {slideAnimate} from "../js/visualEffects";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

class Partners extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startupArr: [],
            animate: 0,
            stepsArr: [],
            bgNon: "",
            redirect: false,
            partnersBtn: true,
        };
        this.startupRef = [];
        this.startupRefWrap = [0,0,2,2,0,0,2,2];
        this.startupRefWrap.map(() => {
            return this.startupRef.push(React.createRef());
        });
        this.redirect = this.redirect.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll',
            (e) => { slideAnimate(e, this.startupRef, this.props.scrollTopMin,
                this.props.scrollTopMax, this.startupRefWrap)});
        this.setState({
            partnersBtn: this.props.page !== "Service",
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.page !== this.props.page) {
            this.setState({
                partnersBtn: this.props.page !== "Service",
            })
        }
    }

    redirect() {
        this.setState({
            redirect: true,
        })
    }

    partnerBox = (item, index) => {
        return (
            <div ref={this.startupRef[index]} className="partner-box" key={index}>
                <div className="partners-env">
                    <div className="partners-env__picture">
                        <picture className="picture">
                            <img className="picture__source"
                                 src={item.imgUrl} alt={item.imgAlt}/>
                        </picture>
                    </div>
                </div>
            </div>
        )
    };

    renderPartnersBtn() {
        if (this.state.partnersBtn) {
            return (
                <div className="col-12">
                    <div className="partners-env-btn">
                        <ButtonMain btnClass="button-main text-16" text={ru.becomePartner} onClick={this.redirect}/>
                    </div>
                </div>
            )
        }
        return null;
    }

    render() {
        if (this.state.redirect) {
            return(
                <Redirect to={"/seller-service"}/>
            )
        }
        return (
            <div className="partners">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="partners__title title-36 uppercase">{ru.OurPartners}</h2>
                        </div>
                    </div>
                    <div className="row-wrap">
                        {partnersArr && partnersArr.map((item, index) => {
                            return this.partnerBox(item, index);
                        })}
                        {this.renderPartnersBtn()}
                    </div>
                </div>
            </div>
        )
    };
}
function MapStateToProps(state) {
    return {
        page: state.pageReducer.page,
    }
}

export default connect(MapStateToProps)(Partners);
