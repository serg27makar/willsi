import React from 'react';
import "./../access/css/cart.css";
import ru from "../access/lang/LangConstants";
import {actionAddUser, actionDataRedirect, actionHeaderUser, actionOpenModal} from "../action";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import DropdownList from "./DropdownList";

class CatalogTopEnvironment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            headerUser: "",
            params: [],
            open: "",
        };
        this.addUser = this.addUser.bind(this);
        this.changeUser = this.changeUser.bind(this);
    }

    componentDidMount() {
        setTimeout(() => {
            if (this.props.subUsers && this.props.subUsers.length > 0 ) {
                this.setState({
                    headerUser: this.props.subUsers[this.props.HeaderUser].UserName,
                    params: this.props.subUsers[this.props.HeaderUser].Parameters,
                })
            }
        }, 500)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if ((this.props.subUsers && this.props.subUsers.length > 0) &&
            (prevProps.HeaderUser !== this.props.HeaderUser) ||
            (prevProps.subUsers !== this.props.subUsers)) {
            this.setState({
                headerUser: this.props.subUsers.length > 0 ? this.props.subUsers[this.props.HeaderUser].UserName : "",
                params: this.props.subUsers.length > 0 ? this.props.subUsers[this.props.HeaderUser].Parameters : [],
                open: "",
            })
        }
    }

    changeUser = (index) => {
        this.props.headerUserFunction(index);

    };

    editorOpen = () => {
        this.props.openModalFunction("editorModal");
    };

    addUser() {
        this.props.addUserFunction(true);
        this.props.dataRedirectFunction({
            accessR: true,
            to: "/data",
        });
    };

    renderParams = (item, index) => {
        return (
            <li className="list-object__item text-16 bold" key={index}>
                <p className="list-object__text">{ru[item.title] + " "}</p>
                <span className="list-object__text-value color-aqua">{item.size + ru.sm}</span>
                <span className="list-object_icon-pen" onClick={this.editorOpen}>
                    <svg className="icon">
                        <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#pen"/>
                    </svg>
                </span>
            </li>
        )
    };

    render() {
        return (
            <div className="catalog-top-env container">
                <div className="environment-row align-items-center">
                    <DropdownList
                        headerItem={this.state.headerUser}
                        subItem={this.props.subUsers}
                        addItem={this.addUser}
                        changeItem={this.changeUser}
                        hidden={this.props.Permission === "unknown"}
                    />
                    <div className="col-12 catalog-top__list-object">
                        <ul className="list-object">
                            {this.state.params && this.state.params.map((item, index) => {
                                return this.renderParams(item, index);
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        )
    };
}

function MapStateToProps(state) {
    return {
        modal: state.modalReducer.modal,
        dataRedirect: state.pageReducer.dataRedirect,
        Permission: state.userReducer.Permission,
        HeaderUser: state.userReducer.HeaderUser,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        openModalFunction: (modal) => {
            dispatch(actionOpenModal(modal))
        },
        addUserFunction: (AddUser) => {
            dispatch(actionAddUser(AddUser))
        },
        headerUserFunction: (HeaderUser) => {
            dispatch(actionHeaderUser(HeaderUser))
        },
        dataRedirectFunction: (dataRedirect) => {
            dispatch(actionDataRedirect(dataRedirect))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(CatalogTopEnvironment);
