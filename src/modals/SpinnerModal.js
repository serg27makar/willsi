import React from "react";
import {actionOpenModal} from "../action";
import {connect} from "react-redux";

class SpinnerModal extends React.Component {

    closeLincModal = () => {
        this.props.openModalFunction("");
    };

    componentDidMount() {
        setTimeout(() => {
            this.closeLincModal();
        }, 5000);
    }

    render() {
        return(
            <div className="modal-envelope" id="spinner-modal" onClick={this.closeLincModal}>
                <div className="modal-envelope__body spinner-block">
                    <p className="modal-envelope__sub-info text-22 bold uppercase">{this.props.SpinnerText}</p>
                </div>
            </div>

        );
    }
}

function MapStateToProps(state) {
    return {
        modal: state.modalReducer.modal,
        SpinnerText: state.modalReducer.SpinnerText,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        openModalFunction: (modal) => {
            dispatch(actionOpenModal(modal))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(SpinnerModal);
