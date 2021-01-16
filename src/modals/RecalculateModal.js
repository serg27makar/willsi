import React from "react";
import {
    actionDataRedirect,
    actionEmail,
    actionHeaderUser,
    actionNewUser,
    actionOpenModal,
    actionPermission,
    actionProductsArr,
    actionSearchParams,
    actionUserID,
    actionUserName,
    actionUsersParameters
} from "../action";
import {connect} from "react-redux";
import Recalculate from "../components/Recalculate";
import {getParametersToIdBySearchParams, getUserData, postRegister, postUpdate} from "../utilite/axiosConnect";
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
        this.paramsResult = this.paramsResult.bind(this);
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
            if (this.props.thingToLink) {
                this.props.openModalFunction("userNameModal");
            } else {
                setTimeout(() => {
                    this.props.headerUserFunction(this.state.newUser);
                    getUserData(this.result);
                }, 500);
            }
        }
    }

    fillRecalculateParams() {
        const HeaderUser = this.props.NewUser || this.props.HeaderUser;
        const recalculateParams = this.props.recalculateParams.slice();

        if (this.props.UsersParameters.length && this.props.UsersParameters.length > HeaderUser) {
            this.props.UsersParameters[HeaderUser].Parameters.map((fillItem) => {
                return recalculateParams.map((item, index) => {
                    if (fillItem.title === item.inputName) {
                        recalculateParams.splice(index, 1);
                    }
                    return recalculateParams;
                })
            });
        }
        this.setState({
            ...this.state,
            recalculateParams,
            newUser: HeaderUser,
            params: this.props.UsersParameters.length && this.props.UsersParameters.length > HeaderUser ? this.props.UsersParameters[HeaderUser].Parameters : [],
        })
    }

    paramsResult(data) {
        if (data.stop) {
            this.props.openModalFunction("nothingToShowModal");
        } else {
            let Product = this.props.ProductsArr[0];
            Product = {
                ...Product,
                Parameters: data,
            }
            this.props.productsArrFunction([Product]);
            this.props.dataRedirectFunction({
                accessR: true,
                to: "/cart",
            })
            this.props.openModalFunction("");
        }
    }

    result(res) {
        if (this.props.thingToLink) {
            const searchParams = {
                ProductID: this.props.ProductsArr[0]._id,
                topCatalog: this.props.ProductsArr[0].topCatalog,
                subCatalog: this.props.ProductsArr[0].subCatalog,
                SearchParams: this.props.SearchParams,
            }
            getParametersToIdBySearchParams(searchParams, this.paramsResult)
        }
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
        const obj = this.fillObj(currentParams);
        UsersParameters.splice(this.state.newUser, 1, obj);
        this.props.usersParametersFunction(UsersParameters);
        this.isChanged();
    };

    fillObj(currentParams) {
        const UsersParameters = this.props.UsersParameters;
        let UserName;
        let Gender;
        let obj = {
            Parameters: currentParams,
            Gender: this.props.Gender,
        };
        if (UsersParameters.length &&
            this.props.UsersParameters[this.state.newUser] &&
            this.props.UsersParameters[this.state.newUser].UserName &&
            this.props.UsersParameters[this.state.newUser].Gender) {
            UserName = this.props.UsersParameters[this.state.newUser].UserName;
            Gender = this.props.UsersParameters[this.state.newUser].Gender;
            obj = {
                ...obj,
                UserName,
                Gender,
            }
        } else {
            this.props.permissionFunction("unknown");
        }
        return obj;
    }

    registerID = (res) => {
        if (res) {
            this.props.userIDFunction(res);
        }
    };

    adaptedSearchParams(Parameters) {
        let searchParams = {};
        Parameters.map(item => {
            searchParams = {
                ...searchParams,
                [item.title]: item.size,
            }
            return searchParams;
        })
        return searchParams;
    }

    updateParams() {
        const UsersParameters = this.props.UsersParameters;
        const obj = this.fillObj(this.props.UsersParameters[this.state.newUser].Parameters);
        const searchParams = this.adaptedSearchParams(obj.Parameters);
        this.props.searchParamsFunction(searchParams);
        UsersParameters.splice(this.state.newUser, 1, obj);
        let user = {
            UsersParameters: UsersParameters,
        };
        if (this.props.UserID) {
            user = {
                ...user,
                UserName: this.props.UserName,
                Email: this.props.Email,
                UserID: this.props.UserID,
            }
            postUpdate(user, updateResult);
        } else {
            user = {
                ...user,
                Permission: "unknown",
            }
            postRegister(user, this.registerID);
        }
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
        thingToLink: state.utiliteReducer.thingToLink,
        ProductsArr: state.productReducer.ProductsArr,
        SearchParams: state.productReducer.SearchParams,
        Gender: state.userReducer.Gender,
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
        userIDFunction: (UserID) => {
            dispatch(actionUserID(UserID))
        },
        permissionFunction: (Permission) => {
            dispatch(actionPermission(Permission))
        },
        dataRedirectFunction: (dataRedirect) => {
            dispatch(actionDataRedirect(dataRedirect))
        },
        searchParamsFunction: (SearchParams) => {
            dispatch(actionSearchParams(SearchParams))
        },
        productsArrFunction: (ProductsArr) => {
            dispatch(actionProductsArr(ProductsArr))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(RecalculateModal);
