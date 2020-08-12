import React from 'react';
import "../../access/css/shared.css"
import {handlePageUp} from "../../js/visualEffects";

class BtnUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemStyle: "btn-up",
        };
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }

    handleScroll(event) {
        let scrollTop = event.target.scrollingElement.scrollTop;
        if (scrollTop > 800) {
            this.setState({
                itemStyle: "btn-up btn-show"
            })
        } else {
            this.setState({
                itemStyle: "btn-up"
            })
        }
    }

    render() {
        if (window.location.pathname === "/admin-panel" || window.location.pathname === "/data") {
            return null;
        }
        return (
            <div className={this.state.itemStyle} onClick={handlePageUp}>
                <div className="btn-up__env">
                    <svg className="icon">
                        <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#arrow-up"/>
                    </svg>
                </div>
            </div>
        )
    }
}

export default BtnUp;
