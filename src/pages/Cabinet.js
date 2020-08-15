import React from 'react';
import {actionOpenModal, actionUserUpdate, setActionAdminPanel} from "../action";
import {connect} from "react-redux";
import DoubleButton from "../components/adminPanel/DoubleButton";
import RutCategory from "../components/RutCategory";
import {placeholderData} from "../access/temporaryConstants";

class Cabinet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Email: "",
            UserName: "",
            Data: {
                dropdownTitle: "Ваши параметры",
                dropdownItems: [],
            }
        };
    }

    componentDidMount() {
        this.props.setActionAdminPanelFunction("Cabinet");
        this.dropdownUpdate();
        setTimeout(() => {
            this.setState({
                UserName: this.props.UserName,
                Email: this.props.Email,
                UsersParameters: this.props.UsersParameters,
            });
        }, 500);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.UsersParameters !== this.props.UsersParameters) {
            this.setState({
                UsersParameters: this.props.UsersParameters,
            })
        }
        if (prevProps.UsersParameters !== this.props.UsersParameters && this.props.UsersParameters) {
            this.dropdownUpdate();
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
            Data: {
                ...this.state.Data,
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

    render() {
        return(
            <div className="content">
                <div className="cabinet-wrapper">
                    <div className="cabinet-sidebar-left">
                        <DoubleButton placeholderData={placeholderData[1]} item={this.state.UserName}
                                      changeValue={this.nameChange} toggle={this.isActive}/>
                        <DoubleButton placeholderData={placeholderData[0]} item={this.state.Email}
                                      changeValue={this.emailChange} toggle={this.isActive}/>
                        <RutCategory item={this.state.Data}/>
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
        Email: state.userReducer.Email,
        UserName: state.userReducer.UserName,
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
        UserUpdateFunction: (UserUpdate) => {
            dispatch(actionUserUpdate(UserUpdate))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(Cabinet);

