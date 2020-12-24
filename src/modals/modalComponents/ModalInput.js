import React from "react";

class ModalInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataInput: {},
            inputType: "",
        }
        this.changeInputType = this.changeInputType.bind(this);
    }

    componentDidMount() {
        this.setState({
            ...this.state,
            inputType: this.props.dataInput.type,
        })
    }

    changeInputType() {
        if (this.props.dataInput.type === "password") {
            this.setState({
                ...this.state,
                inputType: this.state.inputType === "password" ? "text" : "password",
            })
        }
    }

    renderErrorText(item) {
        if (this.props.errorItem === item)
        return (
            <span className="modal-input-error-text text-12">{this.props.errorText}</span>
        )
    }

    render() {
        return (
            <label className="modal-form__label">
                <input className="modal-form__input text-18 light"
                       type={this.state.inputType}
                       name={this.props.dataInput.name}
                       placeholder={this.props.dataInput.placeholder}
                       value={this.props.dataValue[this.props.dataInput.name] || ""}
                       onChange={this.props.dataOnChange}
                />
                <div onClick={this.changeInputType}>
                    <svg className="icon">
                        <use xlinkHref={this.props.dataInput.icon}/>
                    </svg>
                </div>
                {this.renderErrorText(this.props.dataInput.name)}
            </label>
        )
    }
}

export default ModalInput;
