import {Link} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";
import Authentication from "./Authentication";
import {langCode} from "../../access/lang/translaterJS";

class HeaderCabinet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            UserName: "",
            pts: 0,
        }
    }

    componentDidMount() {
        if (this.props.Postpone) {
            this.calcPostpone();
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.UserName !== this.props.UserName) {
            this.setState({
                UserName: this.props.UserName,
            })
        }
        if ((prevProps.SetActionPostpone !== this.props.SetActionPostpone ||
            prevProps.Postpone !== this.props.Postpone) && this.props.Postpone) {
            this.calcPostpone();
        }
    }

    calcPostpone() {
        this.setState({
            ...this.state,
            pts: this.props.Postpone.length || 0,
        })
    }

    renderRedRing() {
        if (this.state.pts) {
            return (
                <div className="red-ring-delayed">{this.state.pts}</div>
            )
        }
        return null;
    }

    render() {
        return (
            <div className="col-12 col-md-12 col-lg-3">
                <div className="header">
                    <Authentication/>
                    <div className="header__basket-icon" >
                        <li className="navigation-list__item">
                            <Link className="navigation-list__link light text-16" to={"/postpone"}>
                                <svg className="icon">
                                    <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#shopping-bag"/>
                                </svg>
                                {this.renderRedRing()}
                                {langCode(this.props.lang, "delayed")}
                            </Link>
                        </li>
                    </div>
                </div>
            </div>
        )
    }
}

function MapStateToProps(state) {
    return {
        Postpone: state.userReducer.Postpone,
        SetActionPostpone: state.userReducer.SetActionPostpone,
        UserName: state.userReducer.UserName,
        lang: state.utiliteReducer.lang,
    }
}
const mapDispatchToProps = dispatch => {
    return {}
};

export default connect(MapStateToProps, mapDispatchToProps)(HeaderCabinet);
