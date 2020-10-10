import React from 'react';
import {setActionAdminPanel} from "../action";
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
import {resourceThreeStepsArr, startupHomepageArr} from "../access/temporaryConstants";
import ru from "../access/lang/LangConstants";
import {Redirect} from "react-router-dom";
import {handlePageUp} from "../js/visualEffects";

class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            isUnknown: true,
            minusScroll: 0,
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
            isUnknown: this.props.UsersParameters.length === 0,
            minusScroll: this.props.UsersParameters.length === 0 ? 0 : 600,
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.UsersParameters !== this.props.UsersParameters) {
            this.setState({
                ...this.state,
                isUnknown: this.props.UsersParameters.length === 0,
                minusScroll: this.props.UsersParameters.length === 0 ? 0 : 600,
            })
        }
    }

    redirect() {
        this.setState({
            ...this.state,
            redirect: true,
        })
    }

    renderStepsBlock() {
        if (this.state.isUnknown) {
            return (
                <StepsBlock title={ru.JustThreeSteps}
                            stepsArr={resourceThreeStepsArr}
                            btnText={ru.toDressingRoom}
                            scrollTopMin={1800} scrollTopMax={3100}
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
                <Startup startupArr={startupHomepageArr} scrollTopMin={300} scrollTopMax={1000}/>
                <Indicator scrollTopMin={700} scrollTopMax={1600}/>
                {this.renderStepsBlock()}
                <DescriptionBg/>
                <Partners scrollTopMin={3200 - this.state.minusScroll} scrollTopMax={4500 - this.state.minusScroll}/>
                <Reviews scrollTopMin={4100 - this.state.minusScroll}/>
            </div>
        )
    }
}

function MapStateToProps(state) {
    return {
        page: state.pageReducer.page,
        UsersParameters: state.userReducer.UsersParameters,
        dataRedirect: state.pageReducer.dataRedirect,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        setActionAdminPanelFunction: (page) => {
            dispatch(setActionAdminPanel(page))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(Homepage);

