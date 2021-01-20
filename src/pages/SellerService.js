import React from 'react';
import {actionDataRedirect, setActionAdminPanel} from "../action";
import {connect} from "react-redux";
import Reviews from "../components/shared/Reviews";
import StepsBlock from "../components/StepsBlock";
import DescriptionBg from "../components/DescriptionBg";
import Partners from "../components/Partners";
import Indicator from "../components/shared/Indicator";
import Startup from "../components/Startup";
import {resourceSellingArr, resourceThreeStepsArr, startupServiceArr} from "../access/temporaryConstants";
import Details from "../components/Details";
import WhomStartup from "../components/WhomStartup";
import {Redirect} from "react-router-dom";
import {langCode} from "../access/lang/translaterJS";

class SellerService extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: {
                accessR: false,
                to: "",
            },
        };
        this.redirect = this.redirect.bind(this);
    }

    componentDidMount() {
        this.props.dataRedirectFunction({
            accessR: false,
            to: "/",
        });
        this.props.setActionAdminPanelFunction("Service");
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.dataRedirect !== this.props.dataRedirect) {
            this.setState({
                redirect: this.props.dataRedirect,
            })
        }
        if (prevProps.Permission !== this.props.Permission) {
            if (this.props.Permission === "primaryAdmin") {
                this.redirect("primary-admin-panel")
            }
        }
    }

    redirect(page = "catalog") {
        this.props.dataRedirectFunction({
            accessR: true,
            to: "/" + page,
        });
    }

    render() {
        if (this.state.redirect.accessR) {
            return(
                <Redirect to={this.state.redirect.to}/>
            )
        }
        return(
            <div className="content">
                <StepsBlock title={langCode(this.props.lang, "SellThings")}
                            stepsArr={resourceSellingArr} bgNon={true}/>
                <WhomStartup/>
                <Details/>
                <Startup startupArr={startupServiceArr}/>
                <Indicator/>
                <StepsBlock title={langCode(this.props.lang, "JustThreeSteps")}
                            stepsArr={resourceThreeStepsArr} btnText={langCode(this.props.lang, "toDressingRoom")}
                            onClick={() => {this.redirect("catalog")}}/>
                <DescriptionBg/>
                <Partners/>
                <Reviews/>
            </div>
        )
    }
}

function MapStateToProps(state) {
    return {
        page: state.pageReducer.page,
        dataRedirect: state.pageReducer.dataRedirect,
        Permission: state.userReducer.Permission,
        lang: state.utiliteReducer.lang,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        setActionAdminPanelFunction: (page) => {
            dispatch(setActionAdminPanel(page))
        },
        dataRedirectFunction: (dataRedirect) => {
            dispatch(actionDataRedirect(dataRedirect))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(SellerService);
