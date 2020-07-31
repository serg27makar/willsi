import React from "react";

class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: "",
        };
        this.closeOpen = this.closeOpen.bind(this);
    }

    closeOpen = () => {
        this.setState({
            ...this.state,
            open: this.state.open === "" ?
                "open" : "",
        })
    };

    renderCategoryList = (item, index, parentIndex) => {
        const idCheckbox = "checkbox" + parentIndex + index;
        return (
            <div key={index}>
                <input className="category-list__input" type="checkbox" id={idCheckbox}/>
                <label className="category-list__label text-14 light" htmlFor={idCheckbox}>{item}</label>
            </div>
        )
    };

    render() {
        return (
            <div className="catalog-sidebar__item">
                <div className="catalog-wrapper text-18 medium" onClick={this.closeOpen}>
                    <span className="catalog-wrapper__name">{this.props.item.catalogTitle}</span>
                    <svg className="icon icon-arrow-small ">
                        <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#arrow-small"/>
                    </svg>
                </div>
                <div className={"catalog__category-list " + this.state.open}>
                    <div className="category-list">
                        {this.props.item.catalogItems && this.props.item.catalogItems.map((listItem, listIndex) => {
                            return this.renderCategoryList(listItem, listIndex, this.props.index)
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default Category;
