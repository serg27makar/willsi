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

class Homepage extends React.Component {

    componentDidMount() {
        this.props.setActionAdminPanelFunction("Homepage");
    }

    render() {
        return(
            <div className="content">
                <WelcomeMain/>
                <SearchBox/>
                <Startup startupArr={startupHomepageArr} scrollTopMin={300} scrollTopMax={1000}/>
                <Indicator scrollTopMin={700} scrollTopMax={1600}/>
                <StepsBlock title={ru.JustThreeSteps}
                            stepsArr={resourceThreeStepsArr}
                            btnText={ru.toDressingRoom}
                            scrollTopMin={1800} scrollTopMax={3100}
                />
                <DescriptionBg/>
                <Partners scrollTopMin={3200} scrollTopMax={4500}/>
                <Reviews scrollTopMin={4100}/>
            </div>
        )
    }
}

function MapStateToProps(state) {
    return {
        page: state.pageReducer.page,
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

