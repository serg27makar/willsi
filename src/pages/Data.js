import React from 'react';
import {
    actionAddUser,
    actionAlertText,
    actionDataRedirect,
    actionHeaderUser,
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
import {postUpdate} from "../utilite/axiosConnect";
import {Redirect} from "react-router-dom";
import {genderSwitcher, isEmptyObject, isValidStartParams, updateResult} from "../js/sharedFunctions";
import {langCode} from "../access/lang/translaterJS";

class Data extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startParams: false,
            isChange: false,
        };
        this.nextParams =this.nextParams.bind(this);
        this.genderSwitcher =this.genderSwitcher.bind(this);
    }

    componentDidMount() {
        this.props.setActionAdminPanelFunction("Data");
        this.redirect("", false);
        if (this.props.Permission === "primaryAdmin") {
            this.redirect("primary-admin-panel")
        }
        setTimeout(() => {
            this.checkIfNewUser();
        }, 100)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.isChange !== this.state.isChange && this.state.isChange) {
            this.isChanged();
            this.updateParams();
        }
        if (prevProps.AddUser !== this.props.AddUser) {
            this.checkAddUser();
        }
        if (prevProps.NewUser !== this.props.NewUser &&
            prevProps.UsersParameters !== this.props.UsersParameters) {
            this.checkIfNewUser();
        }
        if (prevState.startParams !== this.state.startParams) {
            if (!isValidStartParams(this.props.UsersParameters, this.props.NewUser)) {
                this.props.openModalFunction("recalculateModal");
            }
        }
        if (prevProps.Permission !== this.props.Permission) {
            if (this.props.Permission === "primaryAdmin") {
                this.redirect("primary-admin-panel")
            }
        }
    }

    checkIfNewUser() {
        if (!this.props.NewUser && isValidStartParams(this.props.UsersParameters, 0)) {
            this.redirect("catalog");
        }
        if (this.props.NewUser && this.props.UsersParameters.length) {
            if (!isValidStartParams(this.props.UsersParameters, this.props.NewUser)) {
                if (!isEmptyObject(this.props.UsersParameters[this.props.NewUser]) &&
                    this.props.UsersParameters[this.props.NewUser].UserName &&
                    this.props.UsersParameters[this.props.NewUser].Gender) {
                    this.setState({
                        ...this.state,
                        startParams: true,
                    })
                }
            } else {
                this.redirect("catalog");
            }
        }
    }

    redirect(page, accessR = true) {
        this.props.dataRedirectFunction({
            accessR,
            to: "/" + page,
        });
    }

    componentWillUnmount() {
        this.props.addUserFunction(false);
        if (!isValidStartParams(this.props.UsersParameters, this.props.NewUser)
        ) {
            this.props.headerUserFunction(0);
            this.props.newUserFunction(0);
            this.props.addUserFunction(false);
        }
    }

    checkAddUser() {
        if (!this.props.AddUser) {
            this.redirect("catalog")
        } else {
            let newUser;
            let startParams = false;
            if (this.props.NewUser !== 0) {
                startParams = true;
            } else {
                newUser = this.props.UsersParameters.length;
                this.props.newUserFunction(newUser);
            }
            this.setState({
                ...this.state,
                startParams,
            })
        }
    }
    genderSwitcher(gender) {
        let subCatalog = "subCatalogListWomenTshirts"
        if (gender === "dog") {
            subCatalog = "subCatalogListDogShirts"
        }
        const recalculateParams = genderSwitcher(gender, subCatalog);
        this.props.recalculateParamsFunction(recalculateParams);
    }

    nextParams(name, gender, next = false) {
        const UsersParameters = this.props.UsersParameters || [];
        const obj = {
            UserName: name,
            Gender: gender,
            Parameters: next ? this.props.UsersParameters[this.props.NewUser].Parameters ? this.props.UsersParameters[this.props.NewUser].Parameters : [] : [],
        };
        UsersParameters.splice(this.props.NewUser, 1, obj);
        this.props.usersParametersFunction(UsersParameters);
        if (name.length > 0) {
            this.setState({
                ...this.state,
                startParams: true,
            });
        } else {
            this.props.alertTextFunction(langCode(this.props.lang, "inOrderToContinue"));
            this.props.openModalFunction("alertModal");
        }
        this.isChanged();
    }

    isChanged() {
        this.setState({
            isChange: !this.state.isChange,
        })
    }

    updateParams() {
        const UsersParameters = this.props.UsersParameters || [];
        const obj = {
            UserName: this.props.UsersParameters[this.props.NewUser].UserName,
            Gender: this.props.UsersParameters[this.props.NewUser].Gender,
            Parameters: this.props.UsersParameters[this.props.NewUser].Parameters,
        };
        UsersParameters.splice(this.props.NewUser, 1, obj);
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
        if (this.props.dataRedirect.accessR) {
            return(
                <Redirect to={this.props.dataRedirect.to}/>
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
        HeaderUser: state.userReducer.HeaderUser,
        lang: state.utiliteReducer.lang,
        recalculateParams: state.modalReducer.recalculateParams,
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
        headerUserFunction: (HeaderUser) => {
            dispatch(actionHeaderUser(HeaderUser))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(Data);

