import React from "react";
import {connect} from "react-redux";
import ButtonMain from "../shared/ButtonMain";
import ru from "../../access/lang/LangConstants";
import Filters from "./Filters";

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
        return (
            <div className="main-bar-wrap">
                <ButtonMain btnClass={"button-enter button-main text-18 uppercase medium button-margin"}
                            text={ru.allUsers} onClick={this.allUsersData}/>
                <ButtonMain btnClass={"button-enter button-main text-18 uppercase medium button-margin"}
                            text={ru.allStores} onClick={this.allStoresData}/>
                <ButtonMain btnClass={"button-enter button-main text-18 uppercase medium button-margin"}
                            text={ru.allProducts} onClick={this.allProductsData}/>
                <div className="border-line"/>
                <Filters/>
            </div>

        )
    }
}
function MapStateToProps(state) {
    return {
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(MainBarAdmin);
