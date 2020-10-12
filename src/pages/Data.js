import React from 'react';
import {
    actionAddUser,
    actionAlertText,
    actionDataRedirect,
    actionOpenModal, actionRecalculateParams,
    actionUsersParameters,
    setActionAdminPanel
} from "../action";
import {connect} from "react-redux";
import RecalculateFooter from "../components/RecalculateFooter";
import Recalculate from "../components/Recalculate";
import DataHeader from "../components/DataHeader";
import InputDataParams from "../components/InputDataParams";
import {handlePageUp} from "../js/visualEffects";
import ru from "../access/lang/LangConstants";
import {postUpdate} from "../utilite/axiosConnect";
import {Redirect} from "react-router-dom";
import {genderSwitcher, updateResult} from "../js/sharedFunctions";
import {
    recalculateParamsBoy,
    recalculateParamsDog,
    recalculateParamsGirl,
    recalculateParamsMan,
    recalculateParamsWoman
} from "../access/recalculateConstants";

class Data extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recalculateParams: recalculateParamsWoman,
            startParams: false,
            params: [],
            reDirect: false,
            isChange: false,
            newUser: 0,
            redirect: {
                accessR: false,
                to: "",
            },
        };
        this.nextParams =this.nextParams.bind(this);
        this.firstBlock =this.firstBlock.bind(this);
        this.genderSwitcher =this.genderSwitcher.bind(this);
    }

    componentDidMount() {
        this.props.setActionAdminPanelFunction("Data");
        this.props.dataRedirectFunction({
            accessR: false,
            to: "/",
        });
        setTimeout(() => {
            handlePageUp();
        }, 50);
        setTimeout(() => {
            if (!this.props.AddUser && (this.props.UsersParameters && this.props.UsersParameters.length >= 1 &&
                this.props.UsersParameters[0].Parameters &&
                this.props.UsersParameters[0].Parameters.length > 0)) {
                // this.props.dataRedirectFunction({
                //     accessR: true,
                //     to: "/catalog",
                // });
            }
            if (this.props.AddUser) {
                this.setState({
                    newUser: this.props.UsersParameters.length,
                })
            }
        }, 50);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.isChange !== this.state.isChange && this.state.isChange) {
            this.isChanged();
            this.updateParams();
        }
        if (prevProps.dataRedirect !== this.props.dataRedirect) {
            this.setState({
                redirect: this.props.dataRedirect,
            })
        }
        if (prevState.startParams !== this.state.startParams) {
            this.props.openModalFunction("recalculateModal");
        }
    }

    componentWillUnmount() {
        document.body.style.overflow = "auto";
        this.props.addUserFunction(false);
    }

    genderSwitcher(gender) {
        const recalculateParams = genderSwitcher(gender);
        this.props.recalculateParamsFunction(recalculateParams);
    }

    nextParams(name, gender) {
        const UsersParameters = this.props.UsersParameters;
        const obj = {
            UserName: name,
            Gender: gender,
            Parameters: this.state.params,
        };
        UsersParameters.splice(this.state.newUser, 1, obj);
        this.props.usersParametersFunction(UsersParameters);
        if (name.length > 0) {
            this.firstBlock();
        } else {
            this.props.alertTextFunction(ru.enterTheseDetails);
            this.props.openModalFunction("alertModal");
        }
        this.isChanged();
    }

    isChanged() {
        this.setState({
            isChange: !this.state.isChange,
        })
    }

    firstBlock() {
        this.setState({
            ...this.state,
            startParams: !this.state.startParams,
        });
    }

    updateParams() {
        const UsersParameters = this.props.UsersParameters;
        const obj = {
            UserName: this.props.UsersParameters[this.state.newUser].UserName,
            Gender: this.props.UsersParameters[this.state.newUser].Gender,
            Parameters: this.props.UsersParameters[this.state.newUser].Parameters,
        };
        UsersParameters.splice(this.state.newUser, 1, obj);
        const user = {
            UserName: this.props.UserName,
            Email: this.props.Email,
            UsersParameters: UsersParameters,
            UserID: this.props.UserID,
        };
        postUpdate(user, updateResult);
    };

    addParams = (params) => {
        let paramsUpdate = false;
        let currentParams = [];
        this.state.params.map((item, index) => {
            if (item.title === params.title) {
                paramsUpdate = true;
                this.state.params.splice(index, 1 , params);
                currentParams = this.state.params;
                this.setState({
                    ...this.state,
                    params: currentParams,
                });
            }
            return index;
        });
        if (!paramsUpdate) {
            currentParams = this.state.params.concat([params]);
            this.setState({
                ...this.state,
                params: currentParams,

            });
        }
        const UsersParameters = this.props.UsersParameters;
        const obj = {
            UserName: this.props.UsersParameters[this.state.newUser].UserName,
            Gender: this.props.UsersParameters[this.state.newUser].Gender,
            Parameters: currentParams,
        };
        UsersParameters.splice(this.state.newUser, 1, obj);
        this.props.usersParametersFunction(UsersParameters);
        this.isChanged();
    };

    render() {
        if (this.state.redirect.accessR) {
            return(
                <Redirect to={this.state.redirect.to}/>
            )
        }
        return(
            <div className="content">
                <DataHeader/>
                <InputDataParams nextParams={this.nextParams} changeGender={this.genderSwitcher}/>
                <RecalculateFooter disabled={!this.state.startParams}/>
            </div>
        )
    }
}

function MapStateToProps(state) {
    return {
        page: state.pageReducer.page,
        UserID: state.userReducer.UserID,
        UserName: state.userReducer.UserName,
        Email: state.userReducer.Email,
        UsersParameters: state.userReducer.UsersParameters,
        AddUser: state.userReducer.AddUser,
        dataRedirect: state.pageReducer.dataRedirect,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        setActionAdminPanelFunction: (page) => {
            dispatch(setActionAdminPanel(page))
        },
        openModalFunction: (modal) => {
            dispatch(actionOpenModal(modal))
        },
        alertTextFunction: (text) => {
            dispatch(actionAlertText(text))
        },
        usersParametersFunction: (UsersParameters) => {
            dispatch(actionUsersParameters(UsersParameters))
        },
        addUserFunction: (AddUser) => {
            dispatch(actionAddUser(AddUser))
        },
        dataRedirectFunction: (dataRedirect) => {
            dispatch(actionDataRedirect(dataRedirect))
        },
        recalculateParamsFunction: (recalculateParams) => {
            dispatch(actionRecalculateParams(recalculateParams))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(Data);

