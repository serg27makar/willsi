import React from 'react';
import {actionDataRedirect, setActionAdminPanel} from "../action";
import {connect} from "react-redux";
import Reviews from "../components/shared/Reviews";
import SearchBox from "../components/SearchBox";
import WelcomeAbout from "../components/WelcomeAbout";
import {handlePageUp} from "../js/visualEffects";
import {Redirect} from "react-router-dom";

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: {
                accessR: false,
                to: "",
            },
        }
    }
    componentDidMount() {
        this.props.dataRedirectFunction({
            accessR: false,
            to: "/",
        });
        this.props.setActionAdminPanelFunction("About");
        setTimeout(() => {
            handlePageUp();
        }, 50);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.dataRedirect !== this.props.dataRedirect) {
            this.setState({
                redirect: this.props.dataRedirect,
            })
        }
    }

    render() {
        if (this.state.redirect.accessR) {
            return(
                <Redirect to={this.state.redirect.to}/>
            )
        }
        return(
            <div className="content">
                <WelcomeAbout/>
                <SearchBox/>
                <Reviews scrollTopMin={300}/>
            </div>
        )
    }
}

function MapStateToProps(state) {
    return {
        page: state.pageReducer.page,
        dataRedirect: state.pageReducer.dataRedirect,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        setActionAdminPanelFunction: (page) => {
            dispatch(setActionAdminPanel(page))
        },
        dataRedirectFunction: (dataRedirect) => {
            dispatch(actionDataRedirect(dataRedirect))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(About);

