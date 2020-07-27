import React from 'react';
import {setActionAdminPanel} from "../action";
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
import WelcomeService from "../components/WelcomeService";

class Service extends React.Component {
    componentDidMount() {
        this.props.setActionAdminPanelFunction("Service");
    }
    render() {
        return(
            <div className="content">
                <WelcomeService/>
                <StepsBlock title={ru.SellThings} stepsArr={resourceSellingArr} bgNon={true}/>
                <WhomStartup/>
                <Details/>
                <Startup startupArr={startupServiceArr}/>
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

export default connect(MapStateToProps, mapDispatchToProps)(Service);
