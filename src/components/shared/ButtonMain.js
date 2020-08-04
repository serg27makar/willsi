import React from 'react';
import "../../access/css/buttonMain.css"

class ButtonMain extends React.Component {
    render() {
        return(
            <div className="welcome-main-env__button-item" onClick={this.props.onClick}>
                <div className={this.props.btnClass}>{this.props.text}</div>
            </div>
        )
    }
}

export default ButtonMain;
