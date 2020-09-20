import React from 'react';
import {
    actionAddUser,
    actionDataRedirect,
    actionOpenModal,
    actionSetStoreArr,
    actionUsersParameters,
    actionUserUpdate,
    setActionAdminPanel
} from "../action";
import {connect} from "react-redux";
import DoubleButton from "../components/adminPanel/DoubleButton";
import RutCategory from "../components/RutCategory";
import {placeholderData} from "../access/temporaryConstants";
import UserDescription from "../components/UserDescription";
import {Redirect} from "react-router-dom";
import ru from "../access/lang/LangConstants";
import StoreDescription from "../components/StoreDescription";
import {getStoreData, postRemoveStore, postUpdate} from "../utilite/axiosConnect";
import {updateResult} from "../js/sharedFunctions";

class Cabinet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Email: "",
            UserName: "",
            Data: {
                dropdownTitle: "YourParams",
                dropdownItems: [],
            },
            Store: {
                dropdownTitle: "YourStore",
                dropdownItems: [],
            },
            selected: -1,
            selectedStore: -1,
            updateDate: true,
            redirect:  {
                accessR: false,
                to: "/",
            },
            StoreArr: [],
        };
        this.selectUser = this.selectUser.bind(this);
        this.updateDate = this.updateDate.bind(this);
        this.selectStore = this.selectStore.bind(this);
        this.addUser = this.addUser.bind(this);
        this.addStore = this.addStore.bind(this);
        this.storeData = this.storeData.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.deleteStore = this.deleteStore.bind(this);
    }

    componentDidMount() {
        getStoreData(this.storeData);
        this.props.dataRedirectFunction({
            accessR: false,
            to: "/",
        });
        this.props.setActionAdminPanelFunction("Cabinet");
        setTimeout(() => {
            this.setState({
                UserName: this.props.UserName,
                Email: this.props.Email,
                UsersParameters: this.props.UsersParameters,
            });
        }, 500);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if ((prevProps.StoreArr !== this.props.StoreArr) ||
            (prevState.StoreArr !== this.props.StoreArr)) {
            this.setState({
                StoreArr: this.props.StoreArr
            })
        }
        if (prevState.selected !== this.state.selected) this.dropdownUpdate();
        if (prevState.selectedStore !== this.state.selectedStore) this.dropdownStoreUpdate();
        if (prevState.updateDate !== this.state.updateDate) {
            this.dropdownUpdate();
            this.dropdownStoreUpdate();
        }
        if ((prevProps.UsersParameters !== this.props.UsersParameters) ||
            (prevState.UsersParameters !== this.props.UsersParameters)) this.dropdownUpdate();
        if (prevProps.UserStore !== this.props.UserStore) this.dropdownStoreUpdate();
        if (prevProps.dataRedirect !== this.props.dataRedirect) {
            this.setState({
                redirect: this.props.dataRedirect,
            })
        }
    }

    storeData(res) {
        this.updateDate();
        if (res && res.length > 0) {
            this.props.setStoreArrFunction(res);
            this.dropdownStoreUpdate();
        }
    }

    dropdownUpdate() {
        const dropdownItems = [];
        this.props.UsersParameters.map((item, index) => {
            const obj = {
                name: item.UserName,
                deleteBtn: index !== 0
            };
            dropdownItems.push(obj);
            return index;
        });
        this.setState({
            ...this.state,
            UsersParameters: this.props.UsersParameters,
            Data: {
                ...this.state.Data,
                dropdownItems: dropdownItems,
            }
        })
    }

    dropdownStoreUpdate() {
        const dropdownItems = [];
        const UserStore = this.props.StoreArr || [];
        UserStore.map((item, index) => {
            const obj = {
                name: item.nameStore,
                deleteBtn: true
            };
            dropdownItems.push(obj);
            return index;
        });
        this.setState({
            ...this.state,
            Store: {
                ...this.state.Store,
                dropdownItems: dropdownItems,
                StoreArr: this.props.StoreArr
            }
        })
    }

    emailChange = (value) => {
        this.setState({
            ...this.state,
            Email: value,
        })
    };

    nameChange = (value) => {
        this.setState({
            ...this.state,
            UserName: value,
        })
    };

    updateDate() {
        this.setState({
            updateDate: !this.state.updateDate,
        });
    }

    selectUser(index) {
        this.setState({
            ...this.state,
            selected: index,
            selectedStore: -1,
        });
    }

    selectStore(index) {
        this.setState({
            ...this.state,
            selectedStore: index,
            selected: -1
        });
    }

    clearSelect() {
        this.setState({
            ...this.state,
            selected: -1,
            selectedStore: -1,
        })
    }
    isActive = () => {
        if (this.state.Email !== this.props.Email ||
            this.state.UserName !== this.props.UserName ||
            this.state.UsersParameters !== this.props.UsersParameters) {
            this.props.openModalFunction("saveUpdate");
            const User = {
                UserName: this.state.UserName,
                Email: this.state.Email,
                UsersParameters: this.state.UsersParameters,
            };
            this.props.UserUpdateFunction(User);
        }
    };

    addUser() {
        this.props.addUserFunction(true);
        this.props.dataRedirectFunction({
            accessR: true,
            to: "/data",
        });
    }

    addStore() {
        this.props.openModalFunction("addServiceModal");
    }

    deleteUser(index) {
        const Params = this.props.UsersParameters.slice();
        Params.splice(index, 1);
        this.props.usersParametersFunction(Params);
        const user = {
            UserID: this.props.UserID,
            UsersParameters: Params,
        };
        postUpdate(user, updateResult);
        this.clearSelect();
        this.updateDate();
    }

    deleteStore(index, e) {
        e.stopPropagation();
        const StoreArr = this.props.StoreArr.slice();
        const removeItem = StoreArr.splice(index, 1);
        this.props.setStoreArrFunction(StoreArr);
        postRemoveStore(removeItem[0]._id, updateResult);
        this.clearSelect();
        this.updateDate();
    }

    storeDropdown() {
        if (this.props.Permission === "storeAdmin") {
            return (
                <RutCategory item={this.state.Store}
                             selectItem={this.selectStore}
                             isAddItem={ru.AddStore}
                             addItem={this.addStore}
                             deleteBtnFun={this.deleteStore} index={1}
                             disabledFalse={true}
                />
            )
        } else {
            return null;
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
                <div className="cabinet-wrapper">
                    <div className="cabinet-sidebar-left">
                        <DoubleButton placeholderData={placeholderData[1]} item={this.state.UserName}
                                      changeValue={this.nameChange} toggle={this.isActive}/>
                        <DoubleButton placeholderData={placeholderData[0]} item={this.state.Email}
                                      changeValue={this.emailChange} toggle={this.isActive}/>
                        <RutCategory item={this.state.Data} selectItem={this.selectUser}
                                     isAddItem={ru.AddedUser} addItem={this.addUser}
                                     deleteBtnFun={this.deleteUser} index={0}/>
                        {this.storeDropdown()}
                    </div>
                    <div className="cabinet-sidebar-content">
                        <UserDescription selected={this.state.selected} selectItem={this.selectUser} updateDate={this.updateDate}/>
                        <StoreDescription storeArr={this.state.StoreArr} selectedStore={this.state.selectedStore} updateDate={this.updateDate}/>
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
        UserID: state.userReducer.UserID,
        Email: state.userReducer.Email,
        UserName: state.userReducer.UserName,
        UsersParameters: state.userReducer.UsersParameters,
        UserStore: state.userReducer.UserStore,
        Permission: state.userReducer.Permission,
        StoreArr: state.storeReducer.StoreArr,
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
        UserUpdateFunction: (UserUpdate) => {
            dispatch(actionUserUpdate(UserUpdate))
        },
        dataRedirectFunction: (dataRedirect) => {
            dispatch(actionDataRedirect(dataRedirect))
        },
        addUserFunction: (AddUser) => {
            dispatch(actionAddUser(AddUser))
        },
        setStoreArrFunction: (StoreArr) => {
            dispatch(actionSetStoreArr(StoreArr))
        },
        usersParametersFunction: (UsersParameters) => {
            dispatch(actionUsersParameters(UsersParameters))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(Cabinet);

