import React from 'react';
import {
    actionAddUser,
    actionAlertText,
    actionDataRedirect,
    actionNewUser,
    actionOpenModal,
    actionRecalculateParams,
    actionUsersParameters,
    setActionAdminPanel
} from "../action";
import {connect} from "react-redux";
import RecalculateFooter from "../components/RecalculateFooter";
import DataHeader from "../components/DataHeader";
import InputDataParams from "../components/InputDataParams";
import {handlePageUp} from "../js/visualEffects";
import ru from "../access/lang/LangConstants";
import {postUpdate} from "../utilite/axiosConnect";
import {Redirect} from "react-router-dom";
import {genderSwitcher, updateResult} from "../js/sharedFunctions";

class Data extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startParams: false,
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
            if (this.props.Permission === "primaryAdmin") {
                this.redirect("primary-admin-panel")
            }
            if (!this.props.AddUser) {
                this.props.dataRedirectFunction({
                    accessR: true,
                    to: "/catalog",
                });
            }
            if (this.props.AddUser) {
                let newUser;
                let startParams = false;
                if (this.props.NewUser !== 0) {
                    newUser = this.props.NewUser;
                    startParams = true;
                } else {
                    newUser = this.props.UsersParameters.length;
                    this.props.newUserFunction(newUser);
                }
                this.setState({
                    ...this.state,
                    newUser,
                    startParams,
                })
            }
        }, 100);
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
        if (prevProps.Permission !== this.props.Permission) {
            if (this.props.Permission === "primaryAdmin") {
                this.redirect("primary-admin-panel")
            }
        }
    }

    redirect(page = "catalog") {
        this.props.dataRedirectFunction({
            accessR: true,
            to: "/" + page,
        });
    }

    componentWillUnmount() {
        this.props.addUserFunction(false);
    }

    genderSwitcher(gender) {
        const recalculateParams = genderSwitcher(gender, "subCatalogListWomenTshirts");
        this.props.recalculateParamsFunction(recalculateParams);
    }

    nextParams(name, gender) {
        const UsersParameters = this.props.UsersParameters || [];
        const obj = {
            UserName: name,
            Gender: gender,
            Parameters: [],
        };
        UsersParameters.splice(this.state.newUser, 1, obj);
        this.props.usersParametersFunction(UsersParameters);
        if (name.length > 0) {
            this.firstBlock();
        } else {
            this.props.alertTextFunction(ru.inOrderToContinue);
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
        const UsersParameters = this.props.UsersParameters || [];
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

    renderInputDataParams() {
        if (!this.state.startParams) {
            return (
                <InputDataParams nextParams={this.nextParams} changeGender={this.genderSwitcher}/>
            )
        }
    }

    render() {
        if (this.state.redirect.accessR) {
            return(
                <Redirect to={this.state.redirect.to}/>
            )
        }
        return(
            <div className="content">
                <DataHeader/>
                {this.renderInputDataParams()}
                <RecalculateFooter disabled={!this.state.startParams} UsersParameters={this.props.UsersParameters}/>
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
        Permission: state.userReducer.Permission,
        NewUser: state.userReducer.NewUser,
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
        newUserFunction: (NewUser) => {
            dispatch(actionNewUser(NewUser))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(Data);

