import React from 'react';
import "../../access/css/buttonMain.css"

class ButtonMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            btnClass: ""
        }
    }

    render() {
        return(
            <div className="welcome-main-env__button-item">
                <div className={this.props.btnClass}>{this.props.text}</div>
            </div>
        )
    }
}

export default ButtonMain;
