import React from 'react';
import {
    actionAddUser,
    actionDataRedirect,
    actionHeaderUser,
    actionOpenModal,
    actionUpdateEditorModal,
    actionUsersParameters
} from "../action";
import {connect} from "react-redux";
import ButtonMain from "../components/shared/ButtonMain";
import {postUpdate} from "../utilite/axiosConnect";
import {genderSwitcher} from "../js/sharedFunctions";
import {langCode} from "../access/lang/translaterJS";

class EditorModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arrNum: 0,
            headerUser: "",
            params: {},
            open: "",
            isChange: false,
            Parameters: [],
        };
        this.saveUpdate = this.saveUpdate.bind(this);
        this.addUser = this.addUser.bind(this);
        this.updateResToggle = this.updateResToggle.bind(this);
    }

    componentDidMount() {
        setTimeout(() => {
            if (this.props.UsersParameters && this.props.UsersParameters.length > 0) {
                let params = {};
                this.props.UsersParameters[this.props.HeaderUser].Parameters.map((item, index) => {
                    params = {
                        ...params,
                        [item.title]: item.size,
                    };
                    return index;
                });
                this.setState({
                    headerUser: this.props.UsersParameters[this.props.HeaderUser].UserName,
                    params,
                    Parameters: genderSwitcher(this.props.UsersParameters[this.props.HeaderUser].Gender),
                })
            }
        }, 300);
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.isChange !== this.state.isChange && this.state.isChange) {
            this.isChanged();
            this.updateParams();
        }
        if (prevProps.HeaderUser !== this.props.HeaderUser) {
            let params = {};
            this.props.UsersParameters[this.props.HeaderUser].Parameters.map((item) => {
                params = {
                    ...params,
                    [item.title]: item.size,
                };
                return params;
            });
            this.setState({
                params,
                headerUser: this.props.UsersParameters[this.props.HeaderUser].UserName,
                Parameters: genderSwitcher(this.props.UsersParameters[this.props.HeaderUser].Gender),
            })
        }
    }

    addUser() {
        this.props.addUserFunction(true);
        this.props.dataRedirectFunction({
            accessR: true,
            to: "/catalog",
        });
        this.closeLincModal();
    };

    isChanged() {
        this.setState({
            isChange: !this.state.isChange,
        })
    }

    closeLincModal = () => {
        this.props.openModalFunction("");
    };

    closeOpen = () => {
        this.setState({
            ...this.state,
            open: this.state.open === "" ? "open" : "",
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

    onChange = (e, item) => {
        this.setState({
            ...this.state,
            params: {
                ...this.state.params,
                [item.inputName]: e.target.value <= item.sizeMin ? item.sizeMin : e.target.value >= item.sizeMax ? item.sizeMax : e.target.value,
            },
        });
    };

    saveUpdate() {
        const index = this.props.HeaderUser;
        const Parameters = [];
        this.state.Parameters.map((item) => {
            if (this.state.params[item.inputName]) {
                const oneParameter = {
                    title: item.inputName,
                    size: this.state.params[item.inputName],
                };
                Parameters.push(oneParameter);
            }
            return index;
        });
        const UsersParameters = this.props.UsersParameters;
        const obj = {
            UserName: this.props.UsersParameters[index].UserName,
            Gender: this.props.UsersParameters[index].Gender,
            Parameters,
        };
        UsersParameters.splice(index, 1, obj);
        this.props.usersParametersFunction(UsersParameters);
        this.isChanged();
    }

    updateParams() {
        const user = {
            UserName: this.props.UserName,
            Email: this.props.Email,
            UsersParameters: this.props.UsersParameters,
            UserID: this.props.UserID,
        };
        postUpdate(user, this.updateResToggle);
        this.closeLincModal();
    };

    updateResToggle() {
        this.props.updateEditorModalFunction(!this.props.updateEditorModal);
    }

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

    renderInput(item, index) {
        return (
            <div className="relative-block" key={index}>
                <p className="input-placeholder text-16">{langCode(this.props.lang, item.inputName)}</p>
                <input className="tags-list__input text-14 light envelope-mode"
                       type="number" name={item.inputName} placeholder={langCode(this.props.lang, "placeholderExample")}
                       value={this.state.params[item.inputName] || ""}
                       onChange={(e) => {this.onChange(e, item)}}
                />
                <p className="input-placeholder-sm text-16">{langCode(this.props.lang, "sm")}</p>
            </div>
        )
    }

    render() {
        return (
            <div className="modal-envelope" id="modal-editor">
                <div className="modal-envelope__close" onClick={this.closeLincModal}>
                    <svg className="icon">
                        <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#close"/>
                    </svg>
                </div>
                <div className="col-12 envelope-list">
                    <p className="parameters__info-text text-16 uppercase bold">{langCode(this.props.lang, "Available") + '  ' + langCode(this.props.lang, "Parameters")}</p>
                    <div className="catalog-top__dropdown-info envelope-mode">
                        <div className="catalog-top__button-drop" onClick={this.closeOpen}>
                            <div className="catalog-top__button-text text-16 bold uppercase">{this.state.headerUser}</div>
                            <span className="catalog-top__button-icon">
                                <svg className="icon icon-arrow-small ">
                                  <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#arrow-small"/>
                                </svg>
                            </span>
                        </div>
                        <div className={"dropdown-info envelope-mode " + this.state.open}>
                            {this.props.UsersParameters && this.props.UsersParameters.map((item, index) => {
                                return this.renderUser(item, index);
                            })}
                            <div className="dropdown-info__item" onClick={this.addUser} hidden={this.props.Permission === "unknown"}>
                                <div className="dropdown-info__link icon-plus"/>
                            </div>
                        </div>
                    </div>
                    <div className="parameters__tags-list">
                        <p className="parameters__info-text text-16 uppercase bold">{langCode(this.props.lang, "Change") + '  ' + langCode(this.props.lang, "Parameters")}</p>
                        <div className="tags-list-envelope">
                            <div>
                                {this.state.Parameters && this.state.Parameters.map((item, index) => {
                                    return this.renderInput(item, index);
                                })}
                            </div>
                        </div>
                        <ButtonMain btnClass={"button-main auto-margin text-14 medium"} text={langCode(this.props.lang, "Save")} onClick={this.saveUpdate}/>
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
        UserID: state.userReducer.UserID,
        UserName: state.userReducer.UserName,
        Email: state.userReducer.Email,
        UsersParameters: state.userReducer.UsersParameters,
        AddUser: state.userReducer.AddUser,
        Permission: state.userReducer.Permission,
        HeaderUser: state.userReducer.HeaderUser,
        lang: state.utiliteReducer.lang,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        openModalFunction: (modal) => {
            dispatch(actionOpenModal(modal))
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
        headerUserFunction: (HeaderUser) => {
            dispatch(actionHeaderUser(HeaderUser))
        },
        updateEditorModalFunction: (updateEditorModal) => {
            dispatch(actionUpdateEditorModal(updateEditorModal))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(EditorModal);
