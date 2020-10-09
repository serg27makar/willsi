import React from "react";
import {isEmptyObject} from "../../js/sharedFunctions";
import {connect} from "react-redux";
import {getParametersToId} from "../../utilite/axiosConnect";
import EditSubspecieTabl from "./EditSubspecieTabl";

class EditSubspecies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            PropertyArr: [],
            numberTab: 0,
            active: "tabs-active",
        };
        this.parametersResult = this.parametersResult.bind(this);
        this.cancelSave = this.cancelSave.bind(this);
    }

    componentDidMount() {
        if (!isEmptyObject(this.props.item)) {
            getParametersToId(this.props.item._id, this.parametersResult);
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.item !== this.props.item && !isEmptyObject(this.props.item)) {
            getParametersToId(this.props.item._id, this.parametersResult);
        }
    }

    parametersResult(data) {
        this.setState({
            PropertyArr: data,
        });
    }

    activeTab = (index) => {
        this.setState({
            ...this.state,
            numberTab: index,
        })
    };

    cancelSave() {
        this.props.cancelSave();
    }

    renderTabsButtons = () => {
        return (
            <div className="size-tabs-wrapper-button">
                {this.state.PropertyArr && this.state.PropertyArr.map((item, index) => {
                    return (
                        <button key={index}
                                className={"size-tabs-wrapper-button text-20 uppercase medium " + (this.state.numberTab === index ? this.state.active : "" )}
                                onClick={() => {this.activeTab(index)}}
                        >
                            <span className="tabs-wrapper__text">{item.SizeStandard}</span>
                        </button>
                    )
                })}
            </div>
        )
    };

    renderTabsContent = () => {
        return (
            <div className="tabs-wrapper__content-info">
                <div className="tabs-wrapper__show-tabs" >
                    {this.state.PropertyArr && this.state.PropertyArr.map((item, index) => {
                        if (this.state.numberTab === index) {
                            return (
                                <EditSubspecieTabl key={index} item={item}
                                                   topCatalog={this.props.item.topCatalog}
                                                   subCatalog={this.props.item.subCatalog}
                                                   cancelSave={this.cancelSave}
                                />
                            )
                        }
                        return null;
                    })}
                </div>
            </div>
        )
    };

    render() {
        return (
            <div className="cart-tabs">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="tabs-wrapper">
                                {this.renderTabsButtons()}
                                {this.renderTabsContent()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function MapStateToProps(state) {
    return {
    }
}
const mapDispatchToProps = dispatch => {
    return {
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(EditSubspecies);
