import React from "react";
import ButtonMain from "./shared/ButtonMain";
import ru from "../access/lang/LangConstants";

class RecalculateFooter extends React.Component {
    render() {
        return (
            <div className="col-12 recalculate-footer">
                <div className="col-12">
                    <ButtonMain btnClass={"recalculate__button text-22 medium button-main"} text={ru.Count}/>
                </div>
                <div className="col-12">
                    <p className="recalculate__bottom-title title-36 uppercase color-aqua bold">{ru.YouAreAmazing}</p>
                    <p className="recalculate__bottom-paragraph text-16 light">{ru.SimpleIsNot1}<br/>{ru.SimpleIsNot2}</p>
                </div>
            </div>
        )
    }
}

export default RecalculateFooter;
