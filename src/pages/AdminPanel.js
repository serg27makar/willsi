import React from 'react';
import {connect} from "react-redux";
import {setActionAdminPanel} from "../action";
import {adminBarBtnList, envelopeListArr} from "../access/temporaryConstants";
import ButtonList from "../components/adminPanel/ButtonList";
import ButtonIcon from "../components/adminPanel/ButtonIcon";
import AdminSidebar from "../components/adminPanel/AdminSidebar";
import ButtonMain from "../components/shared/ButtonMain";
import ru from "../access/lang/LangConstants";
import MainEnvelopeSize from "../components/adminPanel/MainEnvelopeSize";
import DoubleButton from "../components/adminPanel/DoubleButton";

class AdminPanel extends React.Component {

    componentDidMount() {
        this.props.setActionAdminPanelFunction("AdminPanel");
    }

    render() {
        return(
            <div className="content main-admin__row">
                <AdminSidebar/>
                <div className="main-admin__main-envelope">
                    <div className="main-envelope__top-env">
                        <ButtonList btnList={adminBarBtnList}/>
                        <ButtonIcon btnClass={"main-envelope__button-menu"} btnImage={"static/img/svg-sprites/symbol/sprite.svg#menu-dots"}/>
                    </div>
                    <div className="main-envelope__middle-line">
                        <ButtonMain btnClass={"main-envelope__button-create text-14"} text={ru.Create}/>
                        <ButtonIcon btnClass={"main-envelope__link-admin"} btnImage={"static/img/svg-sprites/symbol/sprite.svg#link"}/>
                    </div>
                    <div className="main-envelope__bottom-env">
                        {envelopeListArr && envelopeListArr.map((item, index) => {
                            return (
                                <DoubleButton placeholderData={item} key={index} toggle={()=>{}}/>
                            )
                        })}
                        <MainEnvelopeSize/>
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

export default connect(MapStateToProps, mapDispatchToProps)(AdminPanel);

