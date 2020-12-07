import React from "react";
import {connect} from "react-redux";

class MainBarAdmin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            btnList: []
        }
    }
    componentDidMount() {

    }

    allUsersData() {

    }

    allStoresData() {

    }

    allProductsData() {

    }

    render() {
        console.log(this.props.AllUsersData, this.props.AllStoresData, this.props.AllProductsData)
        return (
            <div className="main-bar-wrap">
            </div>

        )
    }
}
function MapStateToProps(state) {
    return {
        AllUsersData: state.userReducer.AllUsersData,
        AllStoresData: state.storeReducer.AllStoresData,
        AllProductsData: state.productReducer.AllProductsData,
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(MainBarAdmin);
