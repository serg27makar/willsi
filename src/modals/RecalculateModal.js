import React from "react";
import {actionOpenModal, actionUsersParameters} from "../action";
import {connect} from "react-redux";
import Recalculate from "../components/Recalculate";
import {postUpdate} from "../utilite/axiosConnect";
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
        }
    }

    componentDidMount() {
        this.setState({
            ...this.state,
            recalculateParams: this.props.recalculateParams,
            newUser: this.props.NewUser,
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.recalculateParams !== this.props.recalculateParams) {
            this.setState({
                ...this.state,
                recalculateParams: this.props.recalculateParams
            })
        }
        if (prevState.isChange !== this.state.isChange && this.state.isChange) {
            this.isChanged();
            this.updateParams();
        }
    }

    closeLincModal() {
        this.props.openModalFunction("");
    };

    isChanged() {
        this.setState({
            isChange: !this.state.isChange,
        })
    }

    addParams = (params) => {
        let paramsUpdate = false;
        let currentParams = [];
        this.state.params.map((item, index) => {
            if (item.title === params.title) {
                paramsUpdate = true;
                this.state.params.splice(index, 1 , params);
                currentParams = this.state.params;
                this.setState({
                    ...this.state,
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
        UsersParameters: state.userReducer.UsersParameters,
        NewUser: state.userReducer.NewUser,
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
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(RecalculateModal);
