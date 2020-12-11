import React from 'react';
import {actionDataRedirect, setActionAdminPanel} from "../action";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import ru from "../access/lang/LangConstants";
import TariffBlock from "../components/TariffBlock";
import {plansVariables} from "../access/temporaryConstants";

class TariffPlans extends React.Component {
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
        this.props.setActionAdminPanelFunction("TariffPlans");
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.dataRedirect !== this.props.dataRedirect) {
            this.setState({
                redirect: this.props.dataRedirect,
            })
        }
        if (prevProps.Permission !== this.props.Permission) {
            if (this.props.Permission === "primaryAdmin") {
                this.redirect("primary-admin-panel")
            }
        }
    }

    redirect(page = "catalog") {
        this.props.dataRedirectFunction({
            accessR: true,
            to: "/" + page,
        });
    }



    render() {
        if (this.state.redirect.accessR) {
            return(
                <Redirect to={this.state.redirect.to}/>
            )
        }
        return(
            <div className="content">
                <div className="row">
                    <div className="col-12">
                        <h2 className="tariff-block-title steps__title title-36 uppercase">{ru.tariffHeader}</h2>
                        <div className="tariff-block-wrapper">
                            {plansVariables && plansVariables.map((item, index) => {
                                return (<TariffBlock item={item} key={index}/>)
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function MapStateToProps(state) {
    return {
        page: state.pageReducer.page,
        dataRedirect: state.pageReducer.dataRedirect,
        Permission: state.userReducer.Permission,
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

export default connect(MapStateToProps, mapDispatchToProps)(TariffPlans);

