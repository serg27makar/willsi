import React from 'react';
import {setActionAdminPanel} from "../action";
import {connect} from "react-redux";
import RecalculateFooter from "../components/RecalculateFooter";
import Recalculate from "../components/Recalculate";
import {recalculateParams} from "../access/temporaryConstants";
import DataHeader from "../components/DataHeader";
import InputDataParams from "../components/InputDataParams";

class Data extends React.Component {

    componentDidMount() {
        this.props.setActionAdminPanelFunction("Data");
    }

    render() {
        return(
            <div className="content">
                <DataHeader/>
                <InputDataParams/>
                <div className="recalculate">
                    <div className="container">
                        <div className="row-wrap">
                            <Recalculate dataParams={recalculateParams}/>
                            <RecalculateFooter/>
                        </div>
                    </div>
                </div>
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

export default connect(MapStateToProps, mapDispatchToProps)(Data);

