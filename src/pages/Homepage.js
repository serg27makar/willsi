import React from 'react';
import {actionDataRedirect, setActionAdminPanel} from "../action";
import {connect} from "react-redux";
import "../access/css/homepage.css";
import SearchBox from "../components/SearchBox";
import Reviews from "../components/shared/Reviews";
import Partners from "../components/Partners";
import DescriptionBg from "../components/DescriptionBg";
import StepsBlock from "../components/StepsBlock";
import Indicator from "../components/shared/Indicator";
import Startup from "../components/Startup";
import WelcomeMain from "../components/WelcomeMain";
import {resourceThreeStepsArr} from "../access/temporaryConstants";
import ru from "../access/lang/LangConstants";
import {Redirect} from "react-router-dom";
import {handlePageUp} from "../js/visualEffects";

class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isUnknown: true,
        };
        this.redirect = this.redirect.bind(this);
    }

    componentDidMount() {
        this.props.setActionAdminPanelFunction("Homepage");
        setTimeout(() => {
            handlePageUp();
        }, 50);
        this.setState({
            ...this.state,
            isUnknown: this.props.UsersParameters && this.props.UsersParameters.length === 0,
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.UsersParameters !== this.props.UsersParameters && this.props.UsersParameters) {
            this.setState({
                ...this.state,
                isUnknown: this.props.UsersParameters.length === 0,
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

    renderStepsBlock() {
        if (this.state.isUnknown) {
            return (
                <StepsBlock title={ru.JustThreeSteps}
                            stepsArr={resourceThreeStepsArr}
                            btnText={ru.toDressingRoom}
                            onClick={this.redirect}
                />
            )
        }
        return null;
    }

    render() {
        if (this.props.redirect && this.props.redirect.accessR) {
            return(
                <Redirect to={this.props.redirect.to}/>
            )
        }
        return(
            <div className="content">
                <WelcomeMain/>
                <SearchBox/>
                <Startup/>
                <Indicator/>
                {this.renderStepsBlock()}
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
        UsersParameters: state.userReducer.UsersParameters,
        Permission: state.userReducer.Permission,
        dataRedirect: state.pageReducer.dataRedirect,
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

export default connect(MapStateToProps, mapDispatchToProps)(Homepage);

