import React from "react";

class ToggleButton extends React.Component {

    render() {
        return (
            <div className="toggle-button-wrap" onClick={this.props.onClick}>
                <div className={"toggle-button " + (this.props.active ? "active-toggle" : "")}/>
            </div>
        )
    }
}

export default ToggleButton;
