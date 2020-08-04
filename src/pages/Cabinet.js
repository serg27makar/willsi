import React from 'react';
import {setActionAdminPanel} from "../action";
import {connect} from "react-redux";
import AdminSidebar from "../components/adminPanel/AdminSidebar";

class Cabinet extends React.Component {

    componentDidMount() {
        this.props.setActionAdminPanelFunction("Cabinet");
    }

    render() {
        return(
            <div className="content">
                <AdminSidebar/>
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

export default connect(MapStateToProps, mapDispatchToProps)(Cabinet);

