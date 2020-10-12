import React from "react";
import {actionOpenModal} from "../action";
import {connect} from "react-redux";
import Recalculate from "../components/Recalculate";

class RecalculateModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            recalculateParams: [],
            startParams: false
        }
    }

    componentDidMount() {
        this.setState({
            ...this.state,
            recalculateParams: this.props.recalculateParams
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.recalculateParams !== this.props.recalculateParams) {
            this.setState({
                ...this.state,
                recalculateParams: this.props.recalculateParams
            })
        }
    }

    closeLincModal = () => {
        this.props.openModalFunction("");
    };

    firstBlock() {
        console.log("firstBlock")
    }

    addParams() {
        console.log("addParams")
    }

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
                             firstBlock={this.firstBlock}
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
    }
}
const mapDispatchToProps = dispatch => {
    return {
        openModalFunction: (modal) => {
            dispatch(actionOpenModal(modal))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(RecalculateModal);
