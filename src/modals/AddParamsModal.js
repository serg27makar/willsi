import React from "react";
import ButtonMain from "../components/shared/ButtonMain";
import {actionAlertText, actionHeaderUser, actionOpenModal, actionUsersParameters} from "../action";
import {connect} from "react-redux";
import {getUserData, postUpdate} from "../utilite/axiosConnect";
import {genderSwitcher} from "../js/sharedFunctions";
import {langCode} from "../access/lang/translaterJS";

class AddParamsModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: -1,
            paramsList: [],
            load: false,
        };
        this.addedParamsList = this.addedParamsList.bind(this);
        this.updateResult = this.updateResult.bind(this);
        this.result = this.result.bind(this);
    }

    componentDidMount() {
        const list = genderSwitcher(this.props.UsersParameters[this.props.HeaderUser].Gender)
        this.props.UsersParameters[this.props.HeaderUser].Parameters.map((param) => {
            return list.map((item, index) => {
                if (item.inputName === param.title) {
                    list.splice(index, 1);
                }
                return index;
            });
        });
        let params = {};
        this.props.UsersParameters[this.props.HeaderUser].Parameters.map((item) => {
            params = {
                ...params,
                [item.title]: item.size,
            };
            return params;
        });
        this.setState({
            ...this.state,
            params,
            paramsList: list,
            load: true
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.isChange !== this.state.isChange && this.state.isChange) {
            this.isChanged();
            this.updateParams();
        }
    }

    isChanged() {
        this.setState({
            isChange: !this.state.isChange,
        });
    }

    updateParams() {
        const user = {
            UsersParameters: this.props.UsersParameters,
            UserID: this.props.UserID,
        };
        postUpdate(user, this.updateResult);
        this.props.headerUserFunction(0);
        this.closeLincModal();
    };

    updateResult() {
        getUserData(this.result);
    }

    result(res) {
        if (res.isAxiosError) {
            console.log(res);
            return;
        }
        if (res) {
            this.props.usersParametersFunction(res.UsersParameters);
        }
    };

    closeLincModal = () => {
        this.props.openModalFunction("");
    };

    addedParamsList() {
        const addedParam = {
            title: this.state.paramsList[this.state.active].inputName,
            size: 0
        };
        const index = this.props.HeaderUser;
        const Parameters = [];
        this.props.UsersParameters[index].Parameters.map((item) => {
            const oneParameter = {
                title: item.title,
                size: this.state.params[item.title],
            };
            Parameters.push(oneParameter);
            return index;
        });
        Parameters.push(addedParam);
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

    setActive(index) {
        if (this.state.active === index) {
            index = -1;
        }
        this.setState({
            active: index
        })
    }

    renderParamList(item, index) {
        return(
            <div className={"modal-param-list-item " + (this.state.active === index ? "active" : "")} key={index} onClick={() => {this.setActive(index)}}>{item.title}</div>
        )
    }

    render() {
        if (this.state.load && this.state.paramsList.length === 0) {
            this.props.openModalFunction("alertModal");
            this.props.alertTextFunction(langCode(this.props.lang, "allParametersAdded"));
        }
        return(
            <div className="modal-envelope" id="modal-wowFirst">
                <div className="modal-envelope__close" onClick={this.closeLincModal}>
                    <svg className="icon icon-close ">
                        <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#close"/>
                    </svg>
                </div>
                <div className="modal-param-list">
                    {this.state.paramsList && this.state.paramsList.map((item, index) => {
                        return this.renderParamList(item, index);
                    })}
                    <div className="modal-form__button-enter">
                        <ButtonMain btnClass={"button-enter button-main text-18 uppercase medium"} text={langCode(this.props.lang, "AddedParams")} onClick={this.addedParamsList}/>
                    </div>
                </div>
            </div>
        );
    }
}

function MapStateToProps(state) {
    return {
        modal: state.modalReducer.modal,
        UsersParameters: state.userReducer.UsersParameters,
        UserID: state.userReducer.UserID,
        HeaderUser: state.userReducer.HeaderUser,
        lang: state.utiliteReducer.lang,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        openModalFunction: (modal) => {
            dispatch(actionOpenModal(modal))
        },
        headerUserFunction: (HeaderUser) => {
            dispatch(actionHeaderUser(HeaderUser))
        },
        usersParametersFunction: (UsersParameters) => {
            dispatch(actionUsersParameters(UsersParameters))
        },
        alertTextFunction: (text) => {
            dispatch(actionAlertText(text))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(AddParamsModal);
