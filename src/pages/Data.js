import React from 'react';
import {actionAlertText, actionOpenModal, actionUsersParameters, setActionAdminPanel} from "../action";
import {connect} from "react-redux";
import RecalculateFooter from "../components/RecalculateFooter";
import Recalculate from "../components/Recalculate";
import {recalculateParams} from "../access/temporaryConstants";
import DataHeader from "../components/DataHeader";
import InputDataParams from "../components/InputDataParams";
import {handlePageUp} from "../js/visualEffects";
import ru from "../access/lang/LangConstants";
import {postUpdate} from "../utilite/axiosConnect";
import {Redirect} from "react-router-dom";
import {updateResult} from "../js/sharedFunctions";

class Data extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startParams: false,
            params: [],
            reDirect: false,
            isChange: false,
        };
        this.nextParams =this.nextParams.bind(this);
        this.firstBlock =this.firstBlock.bind(this);
    }

    componentDidMount() {
        this.props.setActionAdminPanelFunction("Data");
        document.body.style.overflow = "hidden";
        setTimeout(() => {
            handlePageUp();
        }, 50);
        setTimeout(() => {
            if (this.props.UsersParameters && this.props.UsersParameters.length >= 1 &&
                this.props.UsersParameters[0].Parameters &&
                this.props.UsersParameters[0].Parameters.length > 0) {
                this.setState({
                    reDirect: true
                })
            }
        }, 500);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.UsersParameters !== this.props.UsersParameters && this.state.isChange) {
            this.isChanged();
            this.updateParams();
        }
    }

    componentWillUnmount() {
        document.body.style.overflow = "auto"
    }

    nextParams(name, gender) {
        const UsersParameters =[{
            UserName: name,
            Gender: gender,
            Parameters: this.state.params,
        }];
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
        const UsersParameters = [{
            UserName: this.props.UsersParameters[0].UserName,
            Gender:  this.props.UsersParameters[0].Gender,
            Parameters:  this.props.UsersParameters[0].Parameters,
        }];
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
        const UsersParameters =[{
            UserName: this.props.UsersParameters[0].UserName,
            Gender:  this.props.UsersParameters[0].Gender,
            Parameters: currentParams,
        }];
        this.props.usersParametersFunction(UsersParameters);
        this.isChanged();
    };

    render() {
        if (this.state.reDirect) {
            return (
                <Redirect to={"/catalog"}/>
            )
        }
        return(
            <div className="content">
                <DataHeader/>
                <InputDataParams nextParams={this.nextParams}/>
                <div className="recalculate">
                    <div className="container">
                        <div className="row-wrap">
                            <Recalculate dataParams={recalculateParams}
                                         startParams={this.state.startParams}
                                         firstBlock={this.firstBlock}
                                         params={this.addParams}
                            />
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
        UserID: state.userReducer.UserID,
        UserName: state.userReducer.UserName,
        Email: state.userReducer.Email,
        UsersParameters: state.userReducer.UsersParameters,
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
        }
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(Data);

