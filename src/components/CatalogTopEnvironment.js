import React from 'react';
import "./../access/css/cart.css";
import ru from "../access/lang/LangConstants";
import {
    actionAddUser,
    actionDataRedirect,
    actionHeaderUser,
    actionOpenModal,
    actionSearchParams,
} from "../action";
import {connect} from "react-redux";
import DropdownList from "./DropdownList";

class CatalogTopEnvironment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            moveLeft: "0",
            headerUser: "",
            params: [],
            open: "",
            updateEditorModal: false,
        };
        this.addUser = this.addUser.bind(this);
        this.changeUser = this.changeUser.bind(this);
        this.arrowLeft = this.arrowLeft.bind(this);
        this.arrowRight = this.arrowRight.bind(this);
    }

    componentDidMount() {
        setTimeout(() => {
            if (this.props.subUsers && this.props.subUsers.length > 0 ) {
                const params = this.props.subUsers[this.props.HeaderUser].Parameters;
                this.setState({
                    headerUser: this.props.subUsers[this.props.HeaderUser].UserName,
                    params,
                });
                this.searchParameters(params);
            }
        }, 500)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if ((this.props.subUsers && this.props.subUsers.length > 0) &&
            ((prevProps.HeaderUser !== this.props.HeaderUser) ||
                (prevProps.subUsers !== this.props.subUsers) ||
                (prevState.updateEditorModal !== this.state.updateEditorModal))) {
                const params = this.props.subUsers.length > 0 ? this.props.subUsers[this.props.HeaderUser].Parameters : [];
                this.setState({
                    ...this.state,
                    headerUser: this.props.subUsers.length > 0 ? this.props.subUsers[this.props.HeaderUser].UserName : "",
                    params,
                    open: "",
                    updateEditorModal: this.props.updateEditorModal
                });
                this.searchParameters(params);
        }
        if (prevProps.updateEditorModal !== this.props.updateEditorModal) {
            this.setState({
                ...this.state,
                headerUser: "",
                params: [],
                open: "",
                updateEditorModal: this.props.updateEditorModal
            });
        }
    }

    searchParameters(params) {
        let searchParams = {};
        params.map((item) => {
            searchParams = {
                ...searchParams,
                [item.title]: item.size,
            };
            return searchParams;
        });
        this.props.searchParamsFunction(searchParams);
    }

    changeUser = (index) => {
        this.props.headerUserFunction(index);
        this.setState({
            moveLeft: 0,
        })
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

    arrowRight() {
        let maxLength = 0;
        const paramsLength = this.state.params.length;
        switch (paramsLength) {
            case 6: maxLength = 8;
            break;
            case 7: maxLength = 24;
            break;
            case 8: maxLength = 40;
            break;
            case 9: maxLength = 64;
            break;
            case 10: maxLength = 72;
            break;
            case 11: maxLength = 80;
            break;
            case 12: maxLength = 88;
            break;
            case 13: maxLength = 96;
            break;
            case 14: maxLength = 112;
            break;
            case 15: maxLength = 128;
            break;
            default: maxLength = paramsLength > 5 ? paramsLength * 8 - 40 : 0;
        }
        this.setState({
            moveLeft: this.state.moveLeft <= -maxLength ? this.state.moveLeft : this.state.moveLeft - 8,
        })
    }

    arrowLeft() {
        this.setState({
            moveLeft: this.state.moveLeft >= 0 ? this.state.moveLeft : this.state.moveLeft + 8,
        })
    }

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
                    <div style={{display: "contents"}}>
                        <div className="arrow-slide-params" onClick={this.arrowLeft}> &lt; </div>
                            <div className="col-12 catalog-top__list-object">
                                <ul className="list-object" style={{left: this.state.moveLeft + "vw"}}>
                                    {this.state.params && this.state.params.map((item, index) => {
                                        return this.renderParams(item, index);
                                    })}
                                </ul>
                            </div>
                        <div className="arrow-slide-params" onClick={this.arrowRight}> &gt; </div>
                    </div>
                </div>
            </div>
        )
    };
}

function MapStateToProps(state) {
    return {
        modal: state.modalReducer.modal,
        updateEditorModal: state.modalReducer.updateEditorModal,
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
        searchParamsFunction: (SearchParams) => {
            dispatch(actionSearchParams(SearchParams))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(CatalogTopEnvironment);
