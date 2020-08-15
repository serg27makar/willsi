import React from 'react';
import "./../access/css/cart.css";
import ru from "../access/lang/LangConstants";
import {actionAddUser, actionHeaderUser, actionOpenModal} from "../action";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

class CatalogTopEnvironment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            headerUser: "",
            params: [],
            open: "",
            dataRedirect: false,
        };
        this.addUser = this.addUser.bind(this);
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
        if (prevProps.dataRedirect !== this.props.dataRedirect) {
            this.setState({
                dataRedirect: this.props.dataRedirect,
            })
        }
        if ((this.props.subUsers && this.props.subUsers.length > 0) &&
            (prevProps.HeaderUser !== this.props.HeaderUser)) {
            this.setState({
                headerUser: this.props.subUsers[this.props.HeaderUser].UserName,
                params: this.props.subUsers[this.props.HeaderUser].Parameters,
            })
        }
    }

    closeOpen = () => {
        this.setState({
            ...this.state,
            open: this.state.open === "" ?
                "open" : "",
        })
    };

    changeUser = (index) => {
        this.props.headerUserFunction(index);
        this.setState({
            ...this.state,
            open: this.state.open === "" ?
                "open" : "",
        });
    };

    editorOpen = () => {
        this.props.openModalFunction("editorModal");
    };

    addUser() {
        this.props.addUserFunction(true);
        this.setState({
            dataRedirect: true,
        })
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

    renderUser = (item, index) => {
        if (item.UserName !== this.state.headerUser) {
            return (
                <div className="dropdown-info__item" key={index} onClick={() => {this.changeUser(index)}}>
                    <div className="border-line" />
                    <div className="dropdown-info__link text-16 bold uppercase">{item.UserName}</div>
                </div>
            )
        }
    };

    render() {
        if (this.state.dataRedirect) {
            return (<Redirect to={"/data"}/>)
        }
        return (
            <div className="catalog-top-env container">
                <div className="environment-row align-items-center">
                    <div className="select-fitting-user">
                        <div className="catalog-top__dropdown-info">
                            <div className="catalog-top__button-drop" onClick={this.closeOpen}>
                                <div className="catalog-top__button-text text-16 bold uppercase">{this.state.headerUser}</div>
                                <span className="catalog-top__button-icon">
                                    <svg className="icon icon-arrow-small ">
                                      <use
                                          xlinkHref="static/img/svg-sprites/symbol/sprite.svg#arrow-small"/>
                                    </svg>
                                </span>
                            </div>
                            <div className={"dropdown-info " + this.state.open}>
                                {this.props.subUsers && this.props.subUsers.map((item, index) => {
                                    return this.renderUser(item, index);
                                })}
                                <div className="dropdown-info__item" onClick={this.addUser} hidden={this.props.Permission === "unknown"}>
                                    <div className="dropdown-info__link icon-plus"/>
                                </div>
                            </div>
                        </div>
                    </div>
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
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(CatalogTopEnvironment);
