import React from 'react';
import {setActionAdminPanel} from "../action";
import {connect} from "react-redux";
import RecalculateFooter from "../components/RecalculateFooter";
import Recalculate from "../components/Recalculate";
import {recalculateParams} from "../access/temporaryConstants";
import DataHeader from "../components/DataHeader";
import InputDataParams from "../components/InputDataParams";
import {handlePageUp} from "../js/visualEffects";

class Data extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startParams: false,
        };
        this.nextParams =this.nextParams.bind(this);
    }

    componentDidMount() {
        this.props.setActionAdminPanelFunction("Data");
        document.body.style.overflow = "hidden";
        setTimeout(() => {
            handlePageUp();
        }, 5);
    }

    componentWillUnmount() {
        document.body.style.overflow = "auto"
    }

    nextParams() {
        this.setState({startParams: true})
    }

    render() {
        return(
            <div className="content">
                <DataHeader/>
                <InputDataParams nextParams={this.nextParams}/>
                <div className="recalculate">
                    <div className="container">
                        <div className="row-wrap">
                            <Recalculate dataParams={recalculateParams} startParams={this.state.startParams}/>
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

