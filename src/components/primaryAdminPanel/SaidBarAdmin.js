import React from "react";
import {connect} from "react-redux";
import ButtonMain from "../shared/ButtonMain";
import Filters from "./Filters";
import {postGetAllStoresData, postGetAllUsersData} from "../../utilite/axiosConnect";
import {
    actionAllStoresData,
    actionAllUsersData,
    actionSetDataViewIndicator
} from "../../action";
import {langCode} from "../../access/lang/translaterJS";

class SaidBarAdmin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            btnList: []
        }
        this.getDataUser = this.getDataUser.bind(this);
        this.getDataStores = this.getDataStores.bind(this);
        this.allUsersData = this.allUsersData.bind(this);
        this.allStoresData = this.allStoresData.bind(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.filters !== this.props.filters) {
            if (this.props.filters.type) {
                switch (this.props.filters.type) {
                    case "u": this.allUsersData();
                        break;
                    case "s": this.allStoresData();
                        break;
                    default:
                        return null;
                }
            }
        }
    }

    getDataUser(data) {
        this.props.allUsersDataFunction(data)
    }

    getDataStores(data) {
        this.props.allStoresDataFunction(data)
    }

    allUsersData() {
        const filters = this.props.filters;
        let search = {};
        const filter = [];
        if (filters && filters.type && filters.type === "u") {
            if (filters.buyer) filter.push("buyer");
            if (filters.unknown) filter.push("unknown");
            if (filters.storeAdmin) filter.push("storeAdmin");
        }
        if (filter.length > 0) {
            search = {
                "Permission":  {$in : filter}
            }
        }
        this.props.setDataViewIndicatorFunction("u")
        postGetAllUsersData(search, this.getDataUser);
    }

    allStoresData() {
        let search = {};
        this.props.setDataViewIndicatorFunction("s")
        postGetAllStoresData(search, this.getDataStores);
    }

    render() {
        return (
            <div className="said-bar-wrap">
                <ButtonMain btnClass={"button-enter button-main text-18 uppercase medium button-margin"}
                            text={langCode(this.props.lang, "allUsers")} onClick={this.allUsersData}/>
                <ButtonMain btnClass={"button-enter button-main text-18 uppercase medium button-margin"}
                            text={langCode(this.props.lang, "allStores")} onClick={this.allStoresData}/>
                <div className="border-line"/>
                <Filters/>
            </div>

        )
    }
}
function MapStateToProps(state) {
    return {
        filters: state.utiliteReducer.filters,
        lang: state.utiliteReducer.lang,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        allUsersDataFunction: (AllUsersData) => {
            dispatch(actionAllUsersData(AllUsersData))
        },
        allStoresDataFunction: (AllStoresData) => {
            dispatch(actionAllStoresData(AllStoresData))
        },
        setDataViewIndicatorFunction: (dataViewIndicator) => {
            dispatch(actionSetDataViewIndicator(dataViewIndicator))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(SaidBarAdmin);
