import React from "react";
import {connect} from "react-redux";
import {actionSelectedProductToEdit, setActionAdminPanel} from "../action";

class SelectedProductEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: {}
        };
    }

    componentDidMount() {
        if (this.props.item) {
            this.setState({
                item: this.props.item,
            })
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.item !== this.props.item) {
            this.setState({
                item: this.props.item,
            })
        }
    }

    render() {
        return (
            <div>
                0000000000000
            </div>
        )
    }
}

function MapStateToProps(state) {
    return {}
}
const mapDispatchToProps = dispatch => {
    return {
        selectedProductToEditFunction: (SelectedProductToEdit) => {
            dispatch(actionSelectedProductToEdit(SelectedProductToEdit))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(SelectedProductEditor);
