import React from "react";

class ModalInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataInput: {}
        }
    }

    render() {
        return (
            <label className="modal-form__label">
                <input className="modal-form__input text-18 light"
                       type={this.props.dataInput.type}
                       name={this.props.dataInput.name}
                       placeholder={this.props.dataInput.placeholder}
                       onChange={this.props.dataOnChange}
                />
                <svg className="icon">
                    <use xlinkHref={this.props.dataInput.icon}/>
                </svg>
            </label>
        )
    }
}

export default ModalInput;
