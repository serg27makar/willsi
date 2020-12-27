import React from "react";
import {isEmptyObject} from "../../js/sharedFunctions";
import {connect} from "react-redux";
import {getParametersToId} from "../../utilite/axiosConnect";
import EditSubspecieTabl from "./EditSubspecieTabl";
import {subCatalogListGeneral} from "../../access/temporaryConstants";

const allSize = [
    "xs", "s", "m", "l", "xl", "xxl", "xxxl"
];

class EditSubspecies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            PropertyArr: [],
            nameTab: 0,
            active: "tabs-active",
        };
        this.parametersResult = this.parametersResult.bind(this);
        this.updateDataParameters = this.updateDataParameters.bind(this);
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
            ...this.state,
            PropertyArr: data,
        });
    }

    updateDataParameters() {
        if (this.props.item && this.props.item._id) {
            getParametersToId(this.props.item._id, this.parametersResult);
        } else {
            this.props.isSaveParams()
        }
    }

    isEmptySize(item) {
        let result = true;
        this.state.PropertyArr.map(prop => {
            if (prop.SizeStandard === item && result) {
                result = false;
            }
            return result;
        })
        return result
    }

    activeTab(index) {
        this.setState({
            ...this.state,
            nameTab: index,
        })
    };

    renderTabsButtons = () => {
        const subCatalog = (this.props.item && this.props.item.subCatalog) || this.props.subCatalog;
        if (subCatalogListGeneral.indexOf(subCatalog) === -1) {
            return (
                <div className="size-tabs-wrapper-button">
                    {allSize && allSize.map((item, index) => {
                        return (
                            <button key={index}
                                    className={"size-tabs-wrapper-button text-18 uppercase medium " + (this.state.nameTab === index ? this.state.active : "" )}
                                    onClick={() => {this.activeTab(index)}}
                            >
                                <span className={"tabs-wrapper__text " + (this.isEmptySize(item) ? "empty-size" : "")}>{item}</span>
                            </button>
                        )
                    })}
                </div>
            )
        }
        return null;
    };

    renderTabsContent = () => {
        return (
            <div className="tabs-wrapper__content-info">
                <div className="tabs-wrapper__show-tabs" >
                    {allSize && allSize.map((item, index) => {
                        let tabItem = {};
                        this.state.PropertyArr.map((i) => {
                            if (i.SizeStandard === item) {
                                tabItem = i;
                            }
                            return tabItem;
                        });
                        if (this.state.nameTab === index) {
                            const topCatalog = (this.props.item && this.props.item.topCatalog) || this.props.catalog;
                            const subCatalog = (this.props.item && this.props.item.subCatalog) || this.props.subCatalog;
                            return (
                                <EditSubspecieTabl key={index} item={tabItem}
                                                   topCatalog={topCatalog}
                                                   subCatalog={subCatalog}
                                                   sizeStandard={item}
                                                   cancelSave={this.props.cancelSave}
                                                   productID={this.props.item && this.props.item._id}
                                                   updateData={this.updateDataParameters}
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
