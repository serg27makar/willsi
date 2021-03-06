import React from 'react';
import ButtonMain from "./shared/ButtonMain";
import "./../access/css/homepage.css";
import {partnersArr} from "../access/temporaryConstants"
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {actionOpenModal} from "../action";
import AOS from "aos";
import "aos/dist/aos.css";
import {aosMethod} from "../js/visualEffects";
import {langCode} from "../access/lang/translaterJS";

class Partners extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: {
                accessR: false,
                to: "",
            },
            partnersBtn: true,
        };
        this.openModal = this.openModal.bind(this);
    }

    componentDidMount() {
        this.setState({
            partnersBtn: this.props.page !== "Service",
        })
        AOS.init({
            duration: 3000
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.page !== this.props.page) {
            this.setState({
                partnersBtn: this.props.page !== "Service",
            })
        }
        if (prevProps.dataRedirect !== this.props.dataRedirect) {
            this.setState({
                redirect: this.props.dataRedirect,
            })
        }
    }

    openModal() {
        if (this.props.Permission === "storeAdmin") {
            this.props.openModalFunction("addServiceModal");
        } else {
            this.props.openModalFunction("storeAdminModal");
        }
    }

    partnerBox = (item, index) => {
        const aosFade = aosMethod(index);
        return (
            <div data-aos={aosFade} className="partner-box" key={index}>
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
        return (
            <div className="col-12">
                <div className="partners-env-btn">
                    <ButtonMain btnClass="button-main text-16" text={langCode(this.props.lang, "becomePartner")} onClick={this.openModal}/>
                </div>
            </div>
        );
    }

    render() {
        if (this.state.redirect.accessR) {
            return(
                <Redirect to={this.state.redirect.to}/>
            )
        }
        return (
            <div className="partners">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="partners__title title-36 uppercase">{langCode(this.props.lang, "OurPartners")}</h2>
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
        dataRedirect: state.pageReducer.dataRedirect,
        modal: state.modalReducer.modal,
        Permission: state.userReducer.Permission,
        lang: state.utiliteReducer.lang,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        openModalFunction: (modal) => {
            dispatch(actionOpenModal(modal))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(Partners);
