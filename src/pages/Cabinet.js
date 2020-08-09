import React from 'react';
import {setActionAdminPanel} from "../action";
import {connect} from "react-redux";
import DoubleButton from "../components/adminPanel/DoubleButton";
import RutCategory from "../components/RutCategory";

export const userData = [
    {
        title: "Email",
        placeholder: "example@gmail.com",
    },
    {
        title: "Name",
        placeholder: "Ваше имя",
    },
    {
        dropdownTitle: "Ваши параметры",
        dropdownItems: [
            "Мои",
            "Мужа",
            "Сына",
        ]
    },
];

class Cabinet extends React.Component {

    componentDidMount() {
        this.props.setActionAdminPanelFunction("Cabinet");
    }

    render() {
        return(
            <div className="content">
                <div className="cabinet-wrapper">
                    <div className="cabinet-sidebar-left">
                        <DoubleButton item={userData[0]}/>
                        <DoubleButton item={userData[1]}/>
                        <RutCategory item={userData[2]}/>
                    </div>
                    <div className="cabinet-sidebar-content"/>
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

export default connect(MapStateToProps, mapDispatchToProps)(Cabinet);

