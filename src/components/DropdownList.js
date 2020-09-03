import React from "react";

class DropdownList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            headerItem: "",
            open: "",
        };
        this.changeItem = this.changeItem.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    componentDidMount() {}

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.subItem !== this.props.subItem && this.props.subItem.length > 0) {
            this.setState({
                headerItem: this.props.subItem[0].UserName || this.props.subItem[0].nameStore
            })
        }
        if (prevProps.headerItem !== this.props.headerItem) {
            this.setState({
                headerItem: this.props.headerItem
            })
        }
    }

    closeOpen = () => {
        this.setState({
            ...this.state,
            open: this.state.open === "" ? "open" : "",
        })
    };

    changeItem(index) {
        this.props.changeItem(index);
        this.closeOpen();
    }

    addItem() {
        this.props.addItem();
    }

    renderItem = (item, index) => {
        const name = item.UserName ? item.UserName : item.nameStore;
        if (name !== this.state.headerItem) {
            return (
                <div className="dropdown-info__item" key={index} onClick={() => {this.changeItem(index)}}>
                    <div className="border-line" />
                    <div className="dropdown-info__link text-16 bold uppercase">{name}</div>
                </div>
            )
        }
    };

    render() {
        return (
            <div className="select-fitting-user">
                <div className="catalog-top__dropdown-info">
                    <div className="catalog-top__button-drop" onClick={this.closeOpen}>
                        <div className="catalog-top__button-text text-16 bold uppercase">{this.state.headerItem}</div>
                        <span className="catalog-top__button-icon">
                            <svg className="icon icon-arrow-small ">
                              <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#arrow-small"/>
                            </svg>
                        </span>
                    </div>
                    <div className={"dropdown-info " + this.state.open}>
                        {this.props.subItem && this.props.subItem.map((item, index) => {
                            return this.renderItem(item, index);
                        })}
                        <div className="dropdown-info__item" onClick={this.addItem} hidden={this.props.hidden}>
                            <div className="dropdown-info__link icon-plus"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DropdownList;
