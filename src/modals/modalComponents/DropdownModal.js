import React from "react";

class DropdownModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: "",
            title: "",
            items: [],
        };
        this.closeOpen = this.closeOpen.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        if (this.props.title) {
            this.setState({
                ...this.state,
                title: this.props.title,
            })
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.items !== this.props.items && prevProps.title !== this.props.title) {
            this.setState({
                ...this.state,
                items: this.props.items,
                title: this.props.title,
            })
        } else {
            if (prevProps.items !== this.props.items) {
                this.setState({
                    ...this.state,
                    items: this.props.items,
                })
            }
            if (prevProps.title !== this.props.title) {
                this.setState({
                    ...this.state,
                    title: this.props.title,
                })
            }
        }
    }

    closeOpen(e) {
        e.preventDefault();
        e.stopPropagation();
        this.setState({
            ...this.state,
            open: this.state.open === "" ? "open" : "",
        })
    };

    changeItem(item) {
        this.props.changeItem(item);
        this.closeOpen();
    }

    onChange(e) {
        console.log(e.target.value);
        this.setState({
            ...this.state,
            title: e.target.value,
        })
    }

    renderItem = (item, index) => {
        return (
            <li className={"dropdown-country " + (this.props.selected === item ? "item-select" : "")} key={index} onClick={() => {this.changeItem(item)}}>
                <div className="dropdown-list__link text-14" >{item}</div>
            </li>
        )
    };

    render() {
        return (
            <div className="catalog-top__dropdown-info">
                <div className="catalog-top__button-drop-modal" onClick={this.closeOpen}>
                    {/*<div className="catalog-top__button-text text-14 uppercase">{this.props.title}</div>*/}
                    <input className="catalog-top__button-text text-14 uppercase"
                           value={this.state.title}
                           onChange={this.onChange}
                    />
                    <span className="catalog-top__button-icon">
                        <svg className="icon icon-arrow-small ">
                          <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#arrow-small"/>
                        </svg>
                    </span>
                </div>
                <div className={"dropdown-info country-list " + this.state.open}>
                    <ul>
                        {this.state.items.map((item, index) => {
                            return this.renderItem(item, index);
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default DropdownModal;
