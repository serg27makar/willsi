import React from "react";
import {connect} from "react-redux";

class MainBarAdmin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount() {

    }

    allUsersData() {
        return this.props.AllUsersData.map((item, index) => {
            return (
                <div>{item.Permission}</div>
            )
        })
    }

    allStoresData() {

    }

    allProductsData() {

    }

    dataSwitcher() {
        switch (this.props.dataViewIndicator) {
            case "u":
                return this.allUsersData();
        }
    }

    render() {
        console.log(this.props.AllUsersData, this.props.AllStoresData, this.props.AllProductsData)
        return (
            <div className="main-bar-wrap">
                {this.dataSwitcher()}
            </div>

        )
    }
}
function MapStateToProps(state) {
    return {
        AllUsersData: state.userReducer.AllUsersData,
        AllStoresData: state.storeReducer.AllStoresData,
        AllProductsData: state.productReducer.AllProductsData,
        dataView: state.utiliteReducer.dataView,
        dataViewIndicator: state.utiliteReducer.dataViewIndicator,
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(MainBarAdmin);
