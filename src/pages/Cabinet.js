import React from 'react';
import {
    actionAddUser,
    actionDataRedirect,
    actionOpenModal,
    actionSetStoreArr,
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
import {getStoreData} from "../utilite/axiosConnect";

class Cabinet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Email: "",
            UserName: "",
            Data: {
                dropdownTitle: "Ваши параметры",
                dropdownItems: [],
            },
            Store: {
                dropdownTitle: "Ваши магазины",
                dropdownItems: [],
            },
            selected: -1,
            selectedStore: -1,
            updateDate: true,
            redirect:  {
                accessR: false,
                to: "/",
            },
        };
        this.selectUser = this.selectUser.bind(this);
        this.updateDate = this.updateDate.bind(this);
        this.selectStore = this.selectStore.bind(this);
        this.addUser = this.addUser.bind(this);
        this.addStore = this.addStore.bind(this);
        this.storeData = this.storeData.bind(this);
    }

    componentDidMount() {
        getStoreData(this.storeData);
        this.props.dataRedirectFunction({
            accessR: false,
            to: "/",
        });
        this.props.setActionAdminPanelFunction("Cabinet");
        this.dropdownUpdate();
        this.dropdownStoreUpdate();
        setTimeout(() => {
            this.setState({
                UserName: this.props.UserName,
                Email: this.props.Email,
                UsersParameters: this.props.UsersParameters,
            });
        }, 500);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.selected !== this.state.selected) this.dropdownUpdate();
        if (prevState.selectedStore !== this.state.selectedStore) this.dropdownStoreUpdate();
        if (prevState.updateDate !== this.state.updateDate) this.dropdownUpdate();
        if (prevProps.UsersParameters !== this.props.UsersParameters) this.dropdownUpdate();
        if (prevState.UsersParameters !== this.props.UsersParameters) this.dropdownUpdate();
        if (prevProps.UserStore !== this.props.UserStore) this.dropdownStoreUpdate();
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

    dropdownUpdate() {
        const dropdownItems = [];
        this.props.UsersParameters.map((item, index) => {
            dropdownItems.push(item.UserName);
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
            dropdownItems.push(item.nameStore);
            return index;
        });
        this.setState({
            ...this.state,
            Store: {
                ...this.state.Store,
                dropdownItems: dropdownItems,
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
            selected: index,
        });
    }

    selectStore(index) {
        this.setState({
            selectedStore: index,
        });
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

    storeDropdown() {
        if (this.props.Permission === "storeAdmin") {
            return (
                <RutCategory item={this.state.Store} selectItem={this.selectStore} isAddItem={ru.AddStore} addItem={this.addStore}/>
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
                        <RutCategory item={this.state.Data} selectItem={this.selectUser} isAddItem={ru.AddedUser} addItem={this.addUser}/>
                        {this.storeDropdown()}
                    </div>
                    <div className="cabinet-sidebar-content">
                        <UserDescription selected={this.state.selected} selectItem={this.selectUser} updateDate={this.updateDate}/>
                        <StoreDescription/>
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
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(Cabinet);

