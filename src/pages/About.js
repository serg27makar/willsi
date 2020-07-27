import React from 'react';
import {setActionAdminPanel} from "../action";
import {connect} from "react-redux";
import Reviews from "../components/shared/Reviews";
import SearchBox from "../components/SearchBox";
import WelcomeAbout from "../components/WelcomeAbout";

class About extends React.Component {

    componentDidMount() {
        this.props.setActionAdminPanelFunction("About");
    }

    render() {
        return(
            <div className="content">
                <WelcomeAbout/>
                <SearchBox/>
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

export default connect(MapStateToProps, mapDispatchToProps)(About);

