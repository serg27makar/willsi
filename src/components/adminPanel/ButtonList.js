import React from "react";
import ButtonIcon from "./ButtonIcon";

class ButtonList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            btnList: []
        }
    }
    render() {
        return (
            <div className="button-list">
                {this.props.btnList && this.props.btnList.map((item, index) => {
                    return (<ButtonIcon btnClass={item.btnClass} btnImage={item.btnImage} key={index}/>)
                })}
            </div>
        )
    }
}

export default ButtonList;
