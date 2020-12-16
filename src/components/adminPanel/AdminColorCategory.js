import React from "react";
import ru from "../../access/lang/LangConstants";
import {catalogColorsItems} from "../../access/temporaryConstants";

class AdminColorCategory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: "",
            beige: false,
            white: false,
            aqua: false,
            yellow: false,
            green: false,
            red: false,
            prints: false,
            pink: false,
            gray: false,
            blue: false,
            black: false,
        };
        this.dataChange = this.dataChange.bind(this);
    }

    componentDidMount() {}

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.colorsState.beige !== this.props.colorsState.beige) this.setState({beige: this.props.colorsState.beige});
        if (prevProps.colorsState.white !== this.props.colorsState.white) this.setState({white: this.props.colorsState.white});
        if (prevProps.colorsState.aqua !== this.props.colorsState.aqua) this.setState({aqua: this.props.colorsState.aqua});
        if (prevProps.colorsState.yellow !== this.props.colorsState.yellow) this.setState({yellow: this.props.colorsState.yellow});
        if (prevProps.colorsState.green !== this.props.colorsState.green) this.setState({green: this.props.colorsState.green});
        if (prevProps.colorsState.red !== this.props.colorsState.red) this.setState({red: this.props.colorsState.red});
        if (prevProps.colorsState.prints !== this.props.colorsState.prints) this.setState({prints: this.props.colorsState.prints});
        if (prevProps.colorsState.pink !== this.props.colorsState.pink) this.setState({pink: this.props.colorsState.pink});
        if (prevProps.colorsState.gray !== this.props.colorsState.gray) this.setState({gray: this.props.colorsState.gray});
        if (prevProps.colorsState.blue !== this.props.colorsState.blue) this.setState({blue: this.props.colorsState.blue});
        if (prevProps.colorsState.black !== this.props.colorsState.black) this.setState({black: this.props.colorsState.black});
    }

    dataChange(e) {
        const name = e.target.name;
        this.props.colorChange(name)
    }

    renderCategoryList = (item, index) => {
        const idCheckbox = "checkboxColor" + index;
        return (
            <div key={index}>
                <input className="category-list__input" type="checkbox" id={idCheckbox} value={this.state[item]} checked={this.state[item]} name={item} onChange={this.dataChange}/>
                <label className="category-list__label text-14 light" htmlFor={idCheckbox}>{ru[item]}</label>
            </div>
        )
    };

    render() {
        return (
            <div className="catalog-sidebar__item-admin">
                <div className="catalog-wrapper-admin text-18 medium" onClick={this.closeOpen}>
                    <span className="catalog-wrapper__name">{ru.Colors}</span>
                </div>
                <div className="catalog__category-list open">
                    <div className="category-list-admin">
                        {catalogColorsItems && catalogColorsItems.map((item, index) => {
                            return this.renderCategoryList(item, index)
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default AdminColorCategory;
