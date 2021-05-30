import React from "react";
import {actionPermission, actionUserID, setActionAdminPanel} from "../action";
import {connect} from "react-redux";
import {postRegister} from "../utilite/axiosConnect";
import {whomParams} from "../access/temporaryConstants"
import {langCode} from "../access/lang/translaterJS";

class InputDataParams extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeBtn: 0,
            name: "",
            gender: "woman",
        };
        this.updateData = this.updateData.bind(this);
        this.newID = this.newID.bind(this);
    }

    componentDidMount() {
        if (this.props.UsersParameters && !this.props.AddUser && this.props.HeaderUser <= this.props.UsersParameters.length) {
            const thisUserParams = this.props.UsersParameters[this.props.HeaderUser];
            const name = (thisUserParams && thisUserParams.UserName) || this.props.UserName || "";
            const gender = (thisUserParams && thisUserParams.Gender) || "";
            const activeBtn = (this.props.UsersParameters.length > 0 &&
                whomParams.map((e) => { return e.data; }).indexOf(thisUserParams.Gender)) || 0;
            this.setState({
                ...this.state,
                name,
                gender,
                activeBtn,
            });
            if (gender) {
                this.props.changeGender(gender);
            }
            if (name && gender) {
                this.props.nextParams(name, gender, true);
            }
        } else {
            this.props.changeGender(this.state.gender);
        }
    }

    btnActive = (index) => {
        const gender = whomParams[index].data;
        this.setState({
            ...this.state,
            activeBtn: index,
            gender,
        });
        this.props.changeGender(gender);
    };

    onChange = (e) => {
        this.setState({
            ...this.state,
            name: e.target.value,
        })
    };

    newID(res) {
        this.props.userIDFunction(res);
        this.props.nextParams(this.state.name, this.state.gender);
    }

    updateData() {
        if ((!this.props.UserID || this.props.UserID === "undefined") && !this.props.searchBlock) {
            const user = {
                UserName: "",
                Email: "",
                Password: "",
                UsersParameters: [],
                Permission: this.props.Permission
            };
            postRegister(user, this.newID)
        } else {
            this.props.nextParams(this.state.name, this.state.gender)
        }
    }

    renderBtn = (item, index) => {
        if (this.props.notDog && whomParams.length - 1 === index) {
            return;
        }
        return (
            <button key={index}
                    className={"box-tags__item " + (this.state.activeBtn === index ? "tags-active" : "")}
                    onClick={() => {this.btnActive(index)}}
            >
                <span className="text-18 medium">{item.text}</span>
                <svg className="icon">
                    <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#pen"/>
                </svg>
            </button>
        )
    };

    render() {
        return (
            <div className="recalculate-top">
                <div className="container">
                    <div className="row">
                        <div className="col-12 ">
                            <div className="recalculate-envelope">
                                <p className="recalculate-envelope__title text-18 uppercase bold color-aqua">{langCode(this.props.lang, "WhomMeasure")}</p>
                                <div className="recalculate-envelope__box-tags">
                                    <div className="box-tags">
                                        {whomParams && whomParams.map((item, index) => {
                                            return this.renderBtn(item, index)
                                        })}
                                    </div>
                                </div>
                                <p className="recalculate-envelope__sub-info text-22 light">{langCode(this.props.lang, "WhatCallParameters")}</p>
                                <div className="recalculate-envelope__bottom-info">
                                    <input className="recalculate-envelope__input-data text-18 light"
                                           placeholder={langCode(this.props.lang, "DataPlaceholder")}
                                           value={this.state.name || ""}
                                           onChange={this.onChange}
                                    />
                                    <button className={"recalculate-envelope__button-next text-16 medium " + (this.state.name ? "" : "disabled-btn")}
                                            disabled={!this.state.name}
                                            onClick={this.updateData}>{langCode(this.props.lang, "Next")}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function MapStateToProps(state) {
    return {
        UserName: state.userReducer.UserName,
        UserID: state.userReducer.UserID,
        UsersParameters: state.userReducer.UsersParameters,
        AddUser: state.userReducer.AddUser,
        Permission: state.userReducer.Permission,
        lang: state.utiliteReducer.lang,
        HeaderUser: state.userReducer.HeaderUser,
        NewUser: state.userReducer.NewUser,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        setActionAdminPanelFunction: (page) => {
            dispatch(setActionAdminPanel(page))
        },
        userIDFunction: (UserID) => {
            dispatch(actionUserID(UserID))
        },
        permissionFunction: (Permission) => {
            dispatch(actionPermission(Permission))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(InputDataParams);
