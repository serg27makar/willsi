import React from "react";
import {connect} from "react-redux";
import AdminProductsCard from "./AdminProductsCard";

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
                <div key={index}>{item.Permission}</div>
            )
        })
    }

    allStoresData() {
        return this.props.AllStoresData.map((item, index) => {
            return (
                <div key={index}>{item.nameStore}</div>
            )
        })
    }

    allProductsData() {
        return (
            <div className="col-12">
                <AdminProductsCard products={this.props.AllProductsData}/>
            </div>
        )
    }

    dataSwitcher() {
        switch (this.props.dataViewIndicator) {
            case "u":
                return this.allUsersData();
            case "s":
                return this.allStoresData();
            case "p":
                return this.allProductsData();
        }
    }

    render() {
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
