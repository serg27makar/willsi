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
                <Startup startupArr={startupHomepageArr}/>
                <Indicator/>
                <StepsBlock title={ru.JustThreeSteps} stepsArr={resourceThreeStepsArr} btnText={ru.toDressingRoom}/>
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

