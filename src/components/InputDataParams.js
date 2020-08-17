import React from "react";
import ButtonMain from "./shared/ButtonMain";
import ru from "../access/lang/LangConstants";
import {actionPermission, actionUserID, setActionAdminPanel} from "../action";
import {connect} from "react-redux";
import {postRegister} from "../utilite/axiosConnect";

const whomParams = [
    {
        data: "woman",
        text: "Женщина",
    },
    {
        data: "man",
        text: "Мужчина",
    },
    {
        data: "child",
        text: "Ребенок",
    },
];

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
        if (this.props.UsersParameters && !this.props.AddUser) {
            const name = (this.props.UsersParameters.length > 0 && this.props.UsersParameters[0].UserName) || this.props.UserName || "";
            const gender = (this.props.UsersParameters.length > 0 && this.props.UsersParameters[0].Gender) || whomParams[0].data;
            const activeBtn = (this.props.UsersParameters.length > 0 &&
                whomParams.map((e) => { return e.data; }).indexOf(this.props.UsersParameters[0].Gender)) || 0;
            this.setState({
                ...this.state,
                name,
                gender,
                activeBtn,
            });
        }
    }

    btnActive = (index) => {
        this.setState({
            ...this.state,
            activeBtn: index,
            gender: whomParams[index].data,
        });
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
        if (!this.props.UserID || this.props.UserID === "undefined") {
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
                                <p className="recalculate-envelope__title text-18 uppercase bold color-aqua">{ru.WhomMeasure}</p>
                                <div className="recalculate-envelope__box-tags">
                                    <div className="box-tags">
                                        {whomParams && whomParams.map((item, index) => {
                                            return this.renderBtn(item, index)
                                        })}
                                    </div>
                                </div>
                                <p className="recalculate-envelope__sub-info text-22 light">{ru.WhatCallParameters}</p>
                                <div className="recalculate-envelope__bottom-info">
                                    <input className="recalculate-envelope__input-data text-18 light"
                                           placeholder={ru.DataPlaceholder}
                                           value={this.state.name || ""}
                                           onChange={this.onChange}
                                    />
                                    <ButtonMain btnClass={"recalculate-envelope__button-next text-16 medium"} text={ru.Next}
                                                onClick={this.updateData}/>
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
