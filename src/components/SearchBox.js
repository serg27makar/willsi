import React from 'react';
import ButtonMain from "./shared/ButtonMain";
import {Redirect} from "react-router-dom";
import {
    actionAddUser,
    actionAlertText,
    actionDataUpdate,
    actionOpenModal,
    actionUserID,
    actionUsersParameters
} from "../action";
import {connect} from "react-redux";
import {postRegister, postUpdate} from "../utilite/axiosConnect";
import InputDataParams from "./InputDataParams";
import {getSizeMinMax, isEmptyObject, isValid, updateResult} from "../js/sharedFunctions";
import {sizeListTshirts} from "../access/recalculateConstants";
import {langCode} from "../access/lang/translaterJS";

class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            size: {},
            update: false,
            renderInputDataParams: false,
        };
        this.searchClothes = this.searchClothes.bind(this);
        this.onChange = this.onChange.bind(this);
        this.newID = this.newID.bind(this);
        this.genderSwitcher = this.genderSwitcher.bind(this);
        this.registerUser = this.registerUser.bind(this);
    }

    componentDidMount() {
        if (this.props.UsersParameters && this.props.UsersParameters.length && this.props.UsersParameters[0].Parameters.length) {
            this.updateStartData();
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.UsersParameters !== this.props.UsersParameters) {
            if (this.props.UsersParameters && this.props.UsersParameters.length && this.props.UsersParameters[0].Parameters.length) {
                this.updateStartData();
            } else {
                this.setState({
                    ...this.state,
                    size: {}
                })
            }
        }
    }
    updateStartData() {
        let params = this.props.UsersParameters[0].Parameters;
        let size = {}
        params.map((item) => {
            size = {...size, [item.title]:item.size}
            return size;
        });

        if (!isEmptyObject(size)) {
            this.setState({
                ...this.state,
                size,
            })
        }
    }

    onChange(e) {
        e.preventDefault();
        const name = e.target.name;
        const value = Number(e.target.value);
        const {sizeMin, sizeMax} = getSizeMinMax(name)
        const data = value <= sizeMin ? sizeMin : value > sizeMax ? sizeMax : value;
        this.setState({
            ...this.state,
            size: {
                ...this.state.size,
                [name]: data,
            }
        });
    }

    searchClothes() {
        if (this.props.UserID && this.props.UsersParameters && this.props.UsersParameters.length > 0) {
            this.setState({
                redirect: true,
            });
        } else {
            if (isValid(this.state.size, sizeListTshirts)) {
                this.proceedSearch(true);
            } else {
                this.proceedSearch(false);
            }
        }
    }

    proceedSearch(access) {
        if (access) {
            this.props.addUserFunction(true);
            this.setState({
                ...this.state,
                renderInputDataParams: true,
            });
        } else {
            this.props.alertTextFunction(langCode(this.props.lang, "weAreMissingSomeData"));
            this.props.openModalFunction("alertModal");
        }
    }

    newID(res) {
        this.props.userIDFunction(res);
    }

    registerUser(name, gender) {
        const Parameters = [];
        sizeListTshirts.map((item, index) => {
            const obj = {
                title: item,
                size: this.state.size[item]
            };
            Parameters.push(obj);
            return index;
        });
        const userParameter = {
            UserName: name,
            Gender: gender,
            Parameters
        };

        let user;

        if(this.props.UserID) {
            user = {
                UsersParameters: [userParameter],
                UserID: this.props.UserID,
            };
            postUpdate(user, updateResult);
        } else {
            user = {
                UserName: "",
                Email: "",
                Password: "",
                UsersParameters: [userParameter],
                Permission: this.props.Permission
            };
            postRegister(user, this.newID);
        }
        this.props.usersParametersFunction(user.UsersParameters);
        this.setState({
            redirect: true,
        });
    }

    genderSwitcher(gender) {}

    renderInputDataParams() {
        if (!this.state.renderInputDataParams) return null;
        return (
            <InputDataParams nextParams={this.registerUser} changeGender={this.genderSwitcher} searchBlock={true} notDog={true}/>
        )
    }

    renderInput(item, index) {
        const {sizeMin, sizeMax} = getSizeMinMax(item);
        return (
            <div className="indicator-bottom__picture" key={index}>
                <span className="text-to-input text-18">{langCode(this.props.lang, item)}</span>
                <input className="form-env__input text-18" type="number"
                       name={item} placeholder={"?"}
                       value={this.state.size[item] || ""}
                       min={sizeMin} max={sizeMax}
                       onChange={this.onChange}/>
            </div>
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
                <p className="search-box__title text-18 uppercase">{langCode(this.props.lang, "whatClothesWillSuitYou")}</p>
                <div className="search-box__form-env">
                    <form className="form-env">
                        <div className="form-env__wrapper">
                            {sizeListTshirts.map((item, index) => {
                                return this.renderInput(item, index);
                            })}
                        </div>
                        <ButtonMain btnClass="button-main text-16" text={langCode(this.props.lang, "pickUpClothes")} onClick={this.searchClothes}/>
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
        lang: state.utiliteReducer.lang,
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
        addUserFunction: (AddUser) => {
            dispatch(actionAddUser(AddUser))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(SearchBox);
