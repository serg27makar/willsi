import React from 'react';
import {connect} from "react-redux";
import {actionDataRedirect, actionSetStoreArr, setActionAdminPanel} from "../action";
import {envelopeListArr} from "../access/temporaryConstants";
import AdminSidebar from "../components/adminPanel/AdminSidebar";
import ButtonMain from "../components/shared/ButtonMain";
import ru from "../access/lang/LangConstants";
import MainEnvelopeSize from "../components/adminPanel/MainEnvelopeSize";
import {Redirect} from "react-router-dom";
import {getStoreData} from "../utilite/axiosConnect";

class AdminPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: {
                accessR: false,
                to: "",
            },
        };
        this.storeData = this.storeData.bind(this);
    }
    componentDidMount() {
        getStoreData(this.storeData);
        this.props.setActionAdminPanelFunction("AdminPanel");
        this.props.dataRedirectFunction({
            accessR: false,
            to: "/",
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.dataRedirect !== this.props.dataRedirect) {
            this.setState({
                redirect: this.props.dataRedirect,
            })
        }
    }

    storeData(res) {
        if (res && res.length > 0) {
            this.props.setStoreArrFunction(res);
        }
    }

    render() {
        if (this.state.redirect.accessR) {
            return(
                <Redirect to={this.state.redirect.to}/>
            )
        }
        return(
            <div className="content main-admin__row">
                <AdminSidebar/>
                <div className="main-admin__main-envelope">
                    <div className="main-envelope__middle-line">
                        <ButtonMain btnClass={"main-envelope__button-create text-14"} text={ru.Create}/>
                    </div>
                    <div className="main-envelope__bottom-env">
                        {/*<DropdownList*/}
                        {/*    headerItem={this.state.headerUser}*/}
                        {/*    subItem={envelopeListArr}*/}
                        {/*    changeItem={this.changeUser}*/}
                        {/*    hidden={true}*/}
                        {/*/>*/}
                        {/*{envelopeListArr && envelopeListArr.map((item, index) => {*/}
                        {/*    return (*/}
                        {/*        <DoubleButton placeholderData={item} key={index} toggle={()=>{}}/>*/}
                        {/*    )*/}
                        {/*})}*/}
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
        dataRedirect: state.pageReducer.dataRedirect,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setActionAdminPanelFunction: (page) => {
            dispatch(setActionAdminPanel(page))
        },
        dataRedirectFunction: (dataRedirect) => {
            dispatch(actionDataRedirect(dataRedirect))
        },
        setStoreArrFunction: (StoreArr) => {
            dispatch(actionSetStoreArr(StoreArr))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(AdminPanel);

