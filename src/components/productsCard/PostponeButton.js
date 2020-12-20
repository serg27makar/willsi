import React from "react";
import ru from "../../access/lang/LangConstants";
import "../../access/css/cart.css"
import ButtonPostpone from "../shared/ButtonPostpone";
import {actionPostpone, actionSetActionPostpone} from "../../action";
import {connect} from "react-redux";
import {postUpdate} from "../../utilite/axiosConnect";
import {updateResult, validPostpone} from "../../js/sharedFunctions";
import ButtonMain from "../shared/ButtonMain";

class PostponeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            _id: "",
            postpone: false,
        };
        this.addPostpone = this.addPostpone.bind(this);
        this.updateData = this.updateData.bind(this);
        this.removePostpone = this.removePostpone.bind(this);
    }

    addPostpone(item) {
        const Postpone = this.props.Postpone || [];
        const thing = {
            product: item._id,
            parameter: item.Parameters._id,
            compatibility: item.Parameters.compatibility,
        };
        Postpone.push(thing);
        this.updateData(Postpone);
    }

    updateData(Postpone) {
        const user = {
            UserID: this.props.UserID,
            Postpone,
        };
        this.props.setActionPostponeFunction(!this.props.SetActionPostpone);
        this.props.postponeFunction(Postpone);
        postUpdate(user, updateResult);
    }

    removePostpone(item) {
        const Postpone = this.props.Postpone;
        Postpone.map((itemPostpone, index) => {
            if (itemPostpone.product === item._id) {
                Postpone.splice(index, 1);
            }
            return Postpone;
        });
        this.updateData(Postpone);
    }

    render() {
        const item = this.props.item;
        if (item.postpone || validPostpone(this.props.Postpone, item._id)) {
            return (
                <div className="card-box__button-postpone">
                    <ButtonMain btnClass={"button-main remove-postpone text-18 uppercase medium"}
                                text={ru.removeItem} onClick={() => {
                        this.removePostpone(item)
                    }}/>
                </div>
            )
        } else {
            return (
                <div className="card-box__button-postpone">
                    <ButtonPostpone onClick={() => {
                        this.addPostpone(item)
                    }}/>
                </div>
            )
        }
    }
}

function MapStateToProps(state) {
    return {
        UserID: state.userReducer.UserID,
        Postpone: state.userReducer.Postpone,
        SetActionPostpone: state.userReducer.SetActionPostpone,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        postponeFunction: (Postpone) => {
            dispatch(actionPostpone(Postpone))
        },
        setActionPostponeFunction: (SetActionPostpone) => {
            dispatch(actionSetActionPostpone(SetActionPostpone))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(PostponeButton);
