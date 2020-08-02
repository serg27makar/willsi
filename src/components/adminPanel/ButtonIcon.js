import React from "react";

class ButtonIcon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            btnImage: "",
            btnClass: "",
        }
    }

    render() {
        return (
            <div className={this.props.btnClass}>
                <svg className="icon">
                    <use xlinkHref={this.props.btnImage}/>
                </svg>
            </div>
        )
    }
}

export default ButtonIcon
