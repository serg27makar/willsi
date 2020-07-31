import ru from "../../access/lang/LangConstants";
import React from "react";

class ButtonIcon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="button-postpone">
                <span className="button-postpone__text text-16 medium">{ru.Postpone}</span>
                <svg className="icon icon-shopping-bag ">
                    <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#shopping-bag"/>
                </svg>
            </div>
        )
    }
}

export default ButtonIcon
