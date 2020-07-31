import React from "react";
import ru from "../access/lang/LangConstants";

class DataHeader extends React.Component {

    render() {
        return (
            <div className="welcome-data">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="welcome-data-env">
                                <h1 className="welcome-data-env__title uppercase title-36 bold">{ru.AreYouReady}</h1>
                                <p className="welcome-data-env__text text-16 light">{ru.ToMakeTheDressLookPerfect + ru.EnterParameters}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DataHeader;
