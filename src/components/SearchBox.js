import React from 'react';
import ru from "../access/lang/LangConstants";
import ButtonMain from "./shared/ButtonMain";
import {Redirect} from "react-router-dom";
import {actionAlertText, actionDataUpdate, actionOpenModal, actionUserID, actionUsersParameters} from "../action";
import {connect} from "react-redux";
import {postRegister, postUpdate} from "../utilite/axiosConnect";
import {updateResult} from "../js/sharedFunctions";

const inputArr = [
    {
        name: "growth",
        placeholder: ru.placeholderGrowth,
    },
    {
        name: "shoulder",
        placeholder: ru.placeholderShoulders,
    },
    {
        name: "chest",
        placeholder: ru.placeholderChest,
    },
    {
        name: "waist",
        placeholder: ru.placeholderWaist,
    },
    {
        name: "hips",
        placeholder: ru.placeholderHips,
    },
];
class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            growth: 0,
            shoulder: 0,
            chest: 0,
            waist: 0,
            hips: 0,
            update: false,
        };
        this.searchClothes = this.searchClothes.bind(this);
        this.onChange = this.onChange.bind(this);
        this.newID = this.newID.bind(this);
    }

    componentDidMount() {}

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.UserID !== this.props.UserID && this.state.update) {
            this.updateData();
        }
        if (prevProps.UsersParameters !== this.props.UsersParameters && this.props.UsersParameters && this.props.UsersParameters[0].Parameters.length) {
            const params = this.props.UsersParameters[0].Parameters;
            const growth = params.find(item => item.title === "growth").size;
            const shoulder = params.find(item => item.title === "shoulder").size;
            const chest = params.find(item => item.title === "chest").size;
            const waist = params.find(item => item.title === "waist").size;
            const hips = params.find(item => item.title === "hips").size;
            if (growth && shoulder && chest && waist && hips) {
                this.setState({
                    ...this.state,
                    growth: params.find(item => item.title === "growth").size,
                    shoulder: params.find(item => item.title === "shoulder").size,
                    chest: params.find(item => item.title === "chest").size,
                    waist: params.find(item => item.title === "waist").size,
                    hips: params.find(item => item.title === "hips").size,
                })
            }
        }
    }

    onChange(e) {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        const data = value <= 0 ? 0 : value > 500 ? 500 : value;
        this.setState({
            ...this.state,
            [name]: data,
        });
    }

    searchClothes() {
        const {growth, shoulder, chest, waist, hips} = this.state;
        if (growth && shoulder && chest && waist && hips) {
            const Parameters = [];
            inputArr.map((item, index) => {
                const obj = {
                    title: item.name,
                    size: this.state[item.name]
                };
                Parameters.push(obj);
                return index;
            });
            if (!this.props.UserID || this.props.UserID === "undefined") {
                this.setState({update: true});
                const userParameter = {
                    UserName: "",
                    Gender: "unisexs",
                    Parameters
                };
                const user = {
                    UserName: "",
                    Email: "",
                    Password: "",
                    UsersParameters: [userParameter],
                    Permission: this.props.Permission
                };
                this.props.usersParametersFunction(user.UsersParameters);
                postRegister(user, this.newID)
            } else {
                this.setState({
                    redirect: true,
                });
            }
        } else {
            this.props.alertTextFunction(ru.enterTheseDetails);
            this.props.openModalFunction("alertModal");
        }
    }

    newID(res) {
        this.props.userIDFunction(res);
    }

    updateData() {
        const userParameter = {
            UserName: "User: " + this.props.UserID.slice(20),
            Gender: "unisexs",
            Parameters: this.props.UsersParameters[0].Parameters
        };
        const user = {
            UsersParameters: [userParameter],
            UserID: this.props.UserID
        };
        postUpdate(user, updateResult);
        this.props.usersParametersFunction(user.UsersParameters);
        this.props.dataUpdateFunction(!this.props.update);
        this.setState({
            redirect: true,
        })
    }

    renderInput(item, index) {
        return (
            <input className="form-env__input text-18" type="number"
                   name={item.name} placeholder={item.placeholder}
                   value={this.state[item.name] || ""}
                   onChange={this.onChange} key={index}/>
        )
    }

    render() {
        if (this.state.redirect) {
            return(
                <Redirect to={"/catalog"}/>
            )
        }
        return (
            <div className="search-box">
                <p className="search-box__title text-18 uppercase">{ru.whatClothesWillSuitYou}</p>
                <div className="search-box__form-env">
                    <form className="form-env">
                        <div className="form-env__wrapper">
                            {inputArr.map((item, index) => {
                                return this.renderInput(item, index);
                            })}
                        </div>
                        <ButtonMain btnClass="button-main text-16" text={ru.pickUpClothes} onClick={this.searchClothes}/>
                    </form>
                </div>
            </div>
        )
    };
}
function MapStateToProps(state) {
    return {
        UsersParameters: state.userReducer.UsersParameters,
        Permission: state.userReducer.Permission,
        UserID: state.userReducer.UserID,
        update: state.pageReducer.update,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        userIDFunction: (UserID) => {
            dispatch(actionUserID(UserID))
        },
        openModalFunction: (modal) => {
            dispatch(actionOpenModal(modal))
        },
        alertTextFunction: (text) => {
            dispatch(actionAlertText(text))
        },
        usersParametersFunction: (UsersParameters) => {
            dispatch(actionUsersParameters(UsersParameters))
        },
        dataUpdateFunction: (update) => {
            dispatch(actionDataUpdate(update))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(SearchBox);
