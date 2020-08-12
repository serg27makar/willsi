import React from 'react';
import {setActionAdminPanel} from "../action";
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
        };
        this.Data = {
            dropdownTitle: "Ваши параметры",
            dropdownItems: [],
        };
    }

    componentDidMount() {
        this.props.setActionAdminPanelFunction("Cabinet");
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.Email !== this.props.Email) {
            this.setState({
                Email: this.props.Email,
                UserName: this.props.UserName,
            })
        }
        if (prevProps.UsersParameters !== this.props.UsersParameters) {
            this.props.UsersParameters.map((item, index) => {
                this.Data.dropdownItems.push(item.UserName)
            })
        }
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
        if (this.state.Email !== this.props.Email) {
            console.log("000")
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
                        <RutCategory item={this.Data}/>
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
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(Cabinet);

