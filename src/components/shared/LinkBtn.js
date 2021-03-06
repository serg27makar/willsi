import React from 'react';
import "../../access/css/shared.css"
import {actionOpenModal} from "../../action";
import {connect} from "react-redux";
import {langCode} from "../../access/lang/translaterJS";

class LinkBtn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemStyle: "link-fixed",
        };
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }

    handleScroll(event) {
        const screenWidth = window.screen.width;
        let scrollTop = event.target.scrollingElement.scrollTop;
        let btnShow = screenWidth < 992 ? (1000 - screenWidth)/3 + 300 : 200;

        if (scrollTop > btnShow) {
            this.setState({
                itemStyle: "link-fixed btn-show"
            })
        } else {
            this.setState({
                itemStyle: "link-fixed"
            })
        }
    }

    openLincModal = () => {
        this.props.openModalFunction("linkModal");
    };

    renderView() {
        const mobileView = window.screen.width < 992;
        if (mobileView) {
            return (
                <div className="link-fixed_mobil">
                    <svg className="icon icon-link ">
                        <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#link"/>
                    </svg>
                </div>
            )
        }
        return (
            <div className="link-fixed__env">
                    <span className="text-11 medium">{langCode(this.props.lang, "HaveLink")}
                        <br/>{langCode(this.props.lang, "OnTheProduct")}
                    </span>
                <div className="link-fixed__item text-11 medium" >{langCode(this.props.lang, "TryItOn")}</div>
            </div>
        )
    }

    render() {
        if (this.props.page === "AdminPanel" ||
            this.props.page === "Data" ||
            this.props.page === "TariffPlans" ||
            this.props.page === "Cart" ||
            this.props.page === "Cabinet") {
            return null;
        }
        return (
            <div className={this.state.itemStyle} onClick={this.openLincModal}>
                {this.renderView()}
            </div>
        )
    }
}

function MapStateToProps(state) {
    return {
        page: state.pageReducer.page,
        modal: state.modalReducer.modal,
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

export default connect(MapStateToProps, mapDispatchToProps)(LinkBtn);
