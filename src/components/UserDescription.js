import React from 'react';
import {actionHeaderUser, actionOpenModal, actionSpinnerText, actionUsersParameters} from "../action";
import {connect} from "react-redux";
import DoubleButton from "./adminPanel/DoubleButton";
import {placeholderData} from "../access/temporaryConstants";
import {postUpdate} from "../utilite/axiosConnect";
import {activeBtn, updateResult} from "../js/sharedFunctions";
import ButtonMain from "./shared/ButtonMain";
import {langCode} from "../access/lang/translaterJS";

class UserDescription extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            UserName: "",
            Gender: "",
            Parameters: [],
            params: {},
            isChange: false,
            activeBtn: 0,
            isModify: false,
        };
        this.isActive = this.isActive.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.nameChange = this.nameChange.bind(this);
        this.addedParams = this.addedParams.bind(this);
        this.activeBtn = activeBtn.bind(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.selected !== this.props.selected &&
            (this.props.UsersParameters.length > 0 ||
            prevProps.HeaderUser !== this.props.HeaderUser)) {
            if (this.props.selected !== -1 && this.props.selected < this.props.UsersParameters.length) {
                let params = {};
                this.props.UsersParameters[this.props.selected].Parameters.map((item) => {
                    params = {
                        ...params,
                        [item.title]: item.size,
                    };
                    return params;
                });
                const activeBtn = this.activeBtn(this.props.UsersParameters[this.props.selected].Gender);
                this.setState({
                    ...this.state,
                    UserName: this.props.UsersParameters[this.props.selected].UserName,
                    Gender: this.props.UsersParameters[this.props.selected].Gender,
                    Parameters: this.props.UsersParameters[this.props.selected].Parameters,
                    params,
                    activeBtn,
                });
            }
        }
        if (prevState.isChange !== this.state.isChange && this.state.isChange) {
            this.isChanged();
            this.updateParams();
        }
    }

    componentWillUnmount() {
        this.props.headerUserFunction(0);
    }

    isChanged() {
        this.setState({
            isModify: false,
            isChange: !this.state.isChange,
        });
        this.props.updateDate();
    }

    nameChange(value) {
        this.setState({
            ...this.state,
            isModify: true,
            UserName: value,
        })
    };

    isActive(res) {
        if (res) {
            this.saveUpdate();
        }
    }

    deleteUser() {
        const UsersParameters = this.props.UsersParameters;
        UsersParameters.splice(this.props.selected, 1);
        this.props.usersParametersFunction(UsersParameters);
        this.props.selectItem(-1);
        this.isChanged();
    }

    saveUpdate() {
        if (this.state.isModify) {
            const index = this.props.selected;
            const Parameters = [];
            this.props.UsersParameters[index].Parameters.map((item) => {
                const oneParameter = {
                    title: item.title,
                    size: this.state.params[item.title],
                };
                Parameters.push(oneParameter);
                return index;
            });
            const UsersParameters = this.props.UsersParameters;
            const obj = {
                UserName: this.state.UserName,
                Gender: this.state.Gender,
                Parameters,
            };
            UsersParameters.splice(index, 1, obj);
            this.props.usersParametersFunction(UsersParameters);
            this.isChanged();
            this.props.spinnerTextFunction(langCode(this.props.lang, "saved"));
            this.props.openModalFunction("spinnerModal");
        }
    }

    updateParams() {
        const user = {
            UsersParameters: this.props.UsersParameters,
            UserID: this.props.UserID,
        };
        postUpdate(user, updateResult);
    };

    onChange = (e, item) => {
        this.setState({
            ...this.state,
            isModify: true,
            params: {
                ...this.state.params,
                [item.title]: e.target.value <= 0 ? 0 : e.target.value >= 500 ? 500 : e.target.value,
            },
        });
    };

    addedParams() {
        this.props.headerUserFunction(this.props.selected);
        this.props.openModalFunction("addParamsModal")
    }

    renderInput(item, index) {
        return (
            <div className="relative-block" key={index}>
                <p className="input-placeholder text-16">{langCode(this.props.lang, item.title)}</p>
                <input className="tags-list__input text-18 light envelope-mode-cabinet"
                       type="number" name={item.title} placeholder={langCode(this.props.lang, "placeholderExample")}
                       value={this.state.params[item.title] || ""}
                       onChange={(e) => {this.onChange(e, item)}}
                />
                <p className="input-placeholder-sm text-16">{langCode(this.props.lang, "sm")}</p>
            </div>
        )
    }

    render() {
        if (this.props.selected === -1) {
            return null;
        }
        return (
            <div>
                <DoubleButton placeholderData={placeholderData[1]} item={this.state.UserName}
                              changeValue={this.nameChange} toggle={this.isActive}/>
                <div className="tags-list-envelope">
                    {this.props.UsersParameters[this.props.selected].Parameters &&
                    this.props.UsersParameters[this.props.selected].Parameters.map((item, index) => {
                        return this.renderInput(item, index);
                    })}
                </div>
                <div className="partners-env-btn">
                    <ButtonMain btnClass="button-main text-16" text={langCode(this.props.lang, "Save")} onClick={() => {this.isActive(true)}}/>
                    <ButtonMain btnClass="button-main text-16" text={langCode(this.props.lang, "AddedParams")} onClick={this.addedParams}/>
                </div>
            </div>
        )
    }
}

function MapStateToProps(state) {
    return {
        UserID: state.userReducer.UserID,
        UsersParameters: state.userReducer.UsersParameters,
        HeaderUser: state.userReducer.HeaderUser,
        lang: state.utiliteReducer.lang,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        usersParametersFunction: (UsersParameters) => {
            dispatch(actionUsersParameters(UsersParameters))
        },
        openModalFunction: (modal) => {
            dispatch(actionOpenModal(modal))
        },
        headerUserFunction: (HeaderUser) => {
            dispatch(actionHeaderUser(HeaderUser))
        },
        spinnerTextFunction: (SpinnerText) => {
            dispatch(actionSpinnerText(SpinnerText))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(UserDescription);
