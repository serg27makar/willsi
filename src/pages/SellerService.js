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
import ru from "../access/lang/LangConstants";
import {handlePageUp} from "../js/visualEffects";
import {Redirect} from "react-router-dom";

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
        setTimeout(() => {
            handlePageUp();
        }, 50);
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
                <StepsBlock title={ru.SellThings}
                            stepsArr={resourceSellingArr} bgNon={true} scrollTopMax={500}/>
                <WhomStartup/>
                <Details/>
                <Startup startupArr={startupServiceArr}  scrollTopMin={1000} scrollTopMax={2000}/>
                <Indicator scrollTopMin={1700} scrollTopMax={2800}/>
                <StepsBlock title={ru.JustThreeSteps}
                            stepsArr={resourceThreeStepsArr} btnText={ru.toDressingRoom}
                            scrollTopMin={2800} scrollTopMax={4100} onClick={() => {this.redirect("catalog")}}/>
                <DescriptionBg/>
                <Partners  scrollTopMin={4200} scrollTopMax={5400}/>
                <Reviews scrollTopMin={5200}/>
            </div>
        )
    }
}

function MapStateToProps(state) {
    return {
        page: state.pageReducer.page,
        dataRedirect: state.pageReducer.dataRedirect,
        Permission: state.userReducer.Permission,
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
