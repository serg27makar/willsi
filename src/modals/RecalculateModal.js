import React from "react";
import {
    actionEmail,
    actionHeaderUser, actionNewUser,
    actionOpenModal,
    actionUserName,
    actionUsersParameters
} from "../action";
import {connect} from "react-redux";
import Recalculate from "../components/Recalculate";
import {getUserData, postUpdate} from "../utilite/axiosConnect";
import {updateResult} from "../js/sharedFunctions";

class RecalculateModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            recalculateParams: [],
            startParams: false,
            params: [],
            newUser: 0,
            isChange: false,
            lastBlock: false,
        };
        this.closeLincModal = this.closeLincModal.bind(this);
        this.addParams = this.addParams.bind(this);
        this.lastBlock = this.lastBlock.bind(this);
        this.result = this.result.bind(this);
    }

    componentDidMount() {
        this.fillRecalculateParams();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.recalculateParams !== this.props.recalculateParams) {
            this.fillRecalculateParams();
        }
        if (prevState.isChange !== this.state.isChange && this.state.isChange) {
            this.isChanged();
            this.updateParams();
        }
        if (prevState.lastBlock !== this.state.lastBlock && this.state.lastBlock) {
            this.props.headerUserFunction(this.state.newUser);
            getUserData(this.result);
        }
    }

    fillRecalculateParams() {
        const HeaderUser = this.props.NewUser || this.props.HeaderUser;
        const recalculateParams = this.props.recalculateParams.slice();

        this.props.UsersParameters[HeaderUser].Parameters.map((fillItem) => {
            return recalculateParams.map((item, index) => {
                if (fillItem.title === item.inputName) {
                    recalculateParams.splice(index, 1);
                }
                return recalculateParams;
            })
        });

        this.setState({
            ...this.state,
            recalculateParams,
            newUser: HeaderUser,
            params: this.props.UsersParameters[HeaderUser].Parameters,
        })
        this.props.newUserFunction(0);
    }

    result(res) {
        if (res) {
            this.props.userNameFunction(res.UserName);
            this.props.emailFunction(res.Email);
            this.props.usersParametersFunction(res.UsersParameters);
        }
        this.closeLincModal();
    };

    closeLincModal() {
        this.props.openModalFunction("");
    };

    isChanged() {
        this.setState({
            isChange: !this.state.isChange,
        })
    }

    lastBlock(params) {
        this.addParams(params, true);
    }

    addParams(params, last = false) {
        let paramsUpdate = false;
        let currentParams = [];
        this.state.params.map((item, index) => {
            if (item.title === params.title) {
                paramsUpdate = true;
                this.state.params.splice(index, 1 , params);
                currentParams = this.state.params;
                this.setState({
                    ...this.state,
                    lastBlock: last,
                    params: currentParams,
                });
            }
            return index;
        });
        if (!paramsUpdate) {
            currentParams = this.state.params.concat([params]);
            this.setState({
                ...this.state,
                params: currentParams,
                lastBlock: last,
            });
        }
        const UsersParameters = this.props.UsersParameters;
        const obj = {
            UserName: this.props.UsersParameters[this.state.newUser].UserName,
            Gender: this.props.UsersParameters[this.state.newUser].Gender,
            Parameters: currentParams,
        };
        UsersParameters.splice(this.state.newUser, 1, obj);
        this.props.usersParametersFunction(UsersParameters);
        this.isChanged();
    };

    updateParams() {
        const UsersParameters = this.props.UsersParameters;
        const obj = {
            UserName: this.props.UsersParameters[this.state.newUser].UserName,
            Gender: this.props.UsersParameters[this.state.newUser].Gender,
            Parameters: this.props.UsersParameters[this.state.newUser].Parameters,
        };
        UsersParameters.splice(this.state.newUser, 1, obj);
        const user = {
            UserName: this.props.UserName,
            Email: this.props.Email,
            UsersParameters: UsersParameters,
            UserID: this.props.UserID,
        };
        postUpdate(user, updateResult);
    };

    render() {
        return(
            <div className="modal-envelope" id="modal-recalculate">
                <div className="modal-envelope__close" onClick={this.closeLincModal}>
                    <svg className="icon icon-close ">
                        <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#close"/>
                    </svg>
                </div>
                <Recalculate dataParams={this.state.recalculateParams}
                             startParams={this.state.startParams}
                             firstBlock={this.closeLincModal}
                             lastBlock={this.lastBlock}
                             params={this.addParams}
                />
            </div>

        );
    }
}

function MapStateToProps(state) {
    return {
        modal: state.modalReducer.modal,
        recalculateParams: state.modalReducer.recalculateParams,
        UserID: state.userReducer.UserID,
        UsersParameters: state.userReducer.UsersParameters,
        NewUser: state.userReducer.NewUser,
        HeaderUser: state.userReducer.HeaderUser,
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
        headerUserFunction: (HeaderUser) => {
            dispatch(actionHeaderUser(HeaderUser))
        },
        userNameFunction: (UserName) => {
            dispatch(actionUserName(UserName))
        },
        emailFunction: (Email) => {
            dispatch(actionEmail(Email))
        },
        newUserFunction: (NewUser) => {
            dispatch(actionNewUser(NewUser))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(RecalculateModal);
