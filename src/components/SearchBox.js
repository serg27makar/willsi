import React from 'react';
import ru from "../access/lang/LangConstants";
import ButtonMain from "./shared/ButtonMain";
import {Redirect} from "react-router-dom";
import {
    actionAlertText,
    actionDataUpdate,
    actionOpenModal,
    actionUserID,
    actionUsersParameters
} from "../action";
import {connect} from "react-redux";
import {postRegister} from "../utilite/axiosConnect";
import InputDataParams from "./InputDataParams";

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
            renderInputDataParams: false,
        };
        this.searchClothes = this.searchClothes.bind(this);
        this.onChange = this.onChange.bind(this);
        this.newID = this.newID.bind(this);
        this.genderSwitcher = this.genderSwitcher.bind(this);
        this.registerUser = this.registerUser.bind(this);
    }

    componentDidMount() {}

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.UsersParameters !== this.props.UsersParameters && this.props.UsersParameters &&
            this.props.UsersParameters.length && this.props.UsersParameters[0].Parameters.length) {
            let params = this.props.UsersParameters[0].Parameters;
            let growth = "";
            let shoulder = "";
            let chest = "";
            let waist = "";
            let hips = "";
            params.map((item, index) => {
                 growth = item.title === "growth" ? item.size : growth;
                 shoulder = item.title === "shoulder" ? item.size : shoulder;
                 chest = item.title === "chest" ? item.size : chest;
                 waist = item.title === "waist" ? item.size : waist;
                 hips = item.title === "hips" ? item.size : hips;
            });

            if (growth && shoulder && chest && waist && hips) {
                this.setState({
                    ...this.state,
                    growth,
                    shoulder,
                    chest,
                    waist,
                    hips,
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
        if (this.props.UserID) {
            this.setState({
                redirect: true,
            });
        } else {
            const {growth, shoulder, chest, waist, hips} = this.state;
            if (growth && shoulder && chest && waist && hips) {
                this.setState({
                    ...this.state,
                    renderInputDataParams: true,
                });
            } else {
                this.props.alertTextFunction(ru.enterTheseDetails);
                this.props.openModalFunction("alertModal");
            }
        }
    }

    newID(res) {
        this.props.userIDFunction(res);
    }

    registerUser(name, gender) {
        const Parameters = [];
        inputArr.map((item, index) => {
            const obj = {
                title: item.name,
                size: this.state[item.name]
            };
            Parameters.push(obj);
            return index;
        });
        const userParameter = {
            UserName: name,
            Gender: gender,
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
        postRegister(user, this.newID);
        this.setState({
            redirect: true,
        });
    }

    genderSwitcher(gender) {}

    renderInputDataParams() {
        if (!this.state.renderInputDataParams) return null;
        return (
            <InputDataParams nextParams={this.registerUser} changeGender={this.genderSwitcher} searchBlock={true}/>
        )
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
                {this.renderInputDataParams()}
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
