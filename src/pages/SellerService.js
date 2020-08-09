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

class SellerService extends React.Component {
    componentDidMount() {
        this.props.setActionAdminPanelFunction("Service");
    }
    render() {
        return(
            <div className="content">
                <WelcomeService/>
                <StepsBlock title={ru.SellThings}
                            stepsArr={resourceSellingArr} bgNon={true} scrollTopMax={1100}/>
                <WhomStartup/>
                <Details/>
                <Startup startupArr={startupServiceArr}  scrollTopMin={1600} scrollTopMax={2600}/>
                <Indicator scrollTopMin={2300} scrollTopMax={3400}/>
                <StepsBlock title={ru.JustThreeSteps}
                            stepsArr={resourceThreeStepsArr} btnText={ru.toDressingRoom}
                            scrollTopMin={3400} scrollTopMax={4700}/>
                <DescriptionBg/>
                <Partners  scrollTopMin={4800} scrollTopMax={6000}/>
                <Reviews scrollTopMin={5800}/>
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

export default connect(MapStateToProps, mapDispatchToProps)(SellerService);
