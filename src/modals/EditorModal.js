import React from 'react';
import ru from "../access/lang/LangConstants";
import {actionOpenModal, actionUsersParameters} from "../action";
import {connect} from "react-redux";
import ButtonMain from "../components/shared/ButtonMain";
import {postUpdate} from "../utilite/axiosConnect";
import {updateResult} from "../js/sharedFunctions";

class EditorModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arrNum: 0,
            headerUser: "",
            params: [],
            open: "",
            isChange: false,
        };
        this.saveUpdate = this.saveUpdate.bind(this);
    }

    componentDidMount() {
        setTimeout(() => {
            if (this.props.UsersParameters && this.props.UsersParameters.length > 0) {
                this.props.UsersParameters[0].Parameters.map((item, index) => {
                    this.setState({
                        ...this.state,
                        [item.title]: item.size,
                    });
                    return index;
                });
                this.setState({
                    headerUser: this.props.UsersParameters[0].UserName,
                })
            }
        }, 300);
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.UsersParameters !== this.props.UsersParameters && this.state.isChange) {
            this.isChanged();
            this.updateParams();
        }
    }

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
            open: this.state.open === "" ?
                "open" : "",
        })
    };

    changeUser = (index) => {
        this.props.UsersParameters[index].Parameters.map((item) => {
            this.setState({
                ...this.state,
                [item.title]: item.size,
            });
            return index;
        });
        this.setState({
            ...this.state,
            arrNum: index,
            headerUser: this.props.UsersParameters[index].UserName,
            open: this.state.open === "" ?
                "open" : "",
        });
    };

    onChange = (e, item) => {
        this.setState({
            ...this.state,
            [item.title]: e.target.value <= 0 ? 0 : e.target.value >= 500 ? 500 : e.target.value,
        });
    };

    saveUpdate() {
        const index = this.state.arrNum;
        const Parameters = [];
        this.props.UsersParameters[index].Parameters.map((item) => {
            const oneParameter = {
                title: item.title,
                size: this.state[item.title],
            };
            Parameters.push(oneParameter);
            return index;
        });
        const UsersParameters =[{
            UserName: this.props.UsersParameters[index].UserName,
            Gender:  this.props.UsersParameters[index].Gender,
            Parameters,
        }];
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
        postUpdate(user, updateResult);
        this.closeLincModal();
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

    renderInput(item, index) {
        return (
            <div className="relative-block" key={index}>
                <p className="input-placeholder">{ru[item.title]}</p>
                <input className="tags-list__input text-18 light envelope-mode"
                       type="number" name={item.title} placeholder={ru.placeholderExample}
                       value={this.state[item.title] || ""}
                       onChange={(e) => {this.onChange(e, item)}}
                />
                <p className="input-placeholder-sm">{ru.sm}</p>
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
                    <p className="parameters__info-text text-16 uppercase bold">{ru.Available + '  ' + ru.Parameters}</p>
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
                            <div className="dropdown-info__item">
                                <div className="dropdown-info__link icon-plus"/>
                            </div>
                        </div>
                    </div>
                    <div className="parameters__tags-list">
                        <p className="parameters__info-text text-16 uppercase bold">{ru.Change + '  ' + ru.Parameters}</p>
                        <div className="tags-list-envelope">
                            {this.props.UsersParameters[this.state.arrNum].Parameters &&
                            this.props.UsersParameters[this.state.arrNum].Parameters.map((item, index) => {
                                return this.renderInput(item, index);
                            })}
                        </div>
                        <ButtonMain btnClass={"button-main auto-margin text-14 medium"} text={ru.Save} onClick={this.saveUpdate}/>
                    </div>
                </div>
            </div>
        )
    };
}

function MapStateToProps(state) {
    return {
        modal: state.modalReducer.modal,
        UserID: state.userReducer.UserID,
        UserName: state.userReducer.UserName,
        Email: state.userReducer.Email,
        UsersParameters: state.userReducer.UsersParameters,
        AddUser: state.userReducer.AddUser,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        openModalFunction: (modal) => {
            dispatch(actionOpenModal(modal))
        },
        usersParametersFunction: (UsersParameters) => {
            dispatch(actionUsersParameters(UsersParameters))
        }
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(EditorModal);
