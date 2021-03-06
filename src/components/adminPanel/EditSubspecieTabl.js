import React from "react";
import MainEnvelopeSize from "./MainEnvelopeSize";
import AdminColorCategory from "./AdminColorCategory";
import DoubleButton from "./DoubleButton";
import {
    ProductManufacturerInputList,
    subCatalogListGeneral,
} from "../../access/temporaryConstants";
import {isEmptyObject, updateResult, validParamList} from "../../js/sharedFunctions";
import ButtonMain from "../shared/ButtonMain";
import {
    actionAlertText,
    actionOpenModal,
    actionSaveParams,
    actionSpinnerText,
    actionSubspecies,
    actionUpdateSubspecies
} from "../../action";
import {connect} from "react-redux";
import {parametersUpdate, postAddedProductParameters} from "../../utilite/axiosConnect";
import {langCode} from "../../access/lang/translaterJS";

class EditSubspecieTabl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: {
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
            },
            size: {},
            VendorCode: "",
            Price: "",
            SizeStandard: "",
            paramList: [],
        };
        this.colorChange = this.colorChange.bind(this);
        this.sizeDataChange = this.sizeDataChange.bind(this);
        this.dataChange = this.dataChange.bind(this);
        this.saveSubspecies = this.saveSubspecies.bind(this);
        this.setParamsList = this.setParamsList.bind(this);
    }

    componentDidMount() {
        if (!isEmptyObject(this.props.item)) {
            this.fillingDataParameters();
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.item !== this.props.item && !isEmptyObject(this.props.item)) {
            this.fillingDataParameters();
        }
        if (prevProps.updateSubspecies !== this.props.updateSubspecies) {
            this.props.updateData();
        }
        if (prevProps.SaveParams !== this.props.SaveParams) {
            if (this.props.SaveParams) {
                this.saveSubspecies();
            }
        }
        if (prevProps.subCatalog !== this.props.subCatalog) {
            if (subCatalogListGeneral.indexOf(this.props.subCatalog) !== -1) {
                this.setState({
                    ...this.state,
                    size: {
                        general: "general"
                    }
                });
            }
        }
    }

    fillingDataParameters() {
        this.setState({
            ...this.state,
            color: {
                beige: this.props.item.color.includes("beige"),
                white: this.props.item.color.includes("white"),
                aqua: this.props.item.color.includes("aqua"),
                yellow: this.props.item.color.includes("yellow"),
                green: this.props.item.color.includes("green"),
                red: this.props.item.color.includes("red"),
                prints: this.props.item.color.includes("prints"),
                pink: this.props.item.color.includes("pink"),
                gray: this.props.item.color.includes("gray"),
                blue: this.props.item.color.includes("blue"),
                black: this.props.item.color.includes("black"),
            },
            size: this.props.item.size,
            VendorCode: this.props.item.VendorCode,
            Price: this.props.item.Price,
        })
    }

    colorChange(name) {
        this.setState({
            ...this.state,
            color: {
                ...this.state.color,
                [name]: !this.state.color[name],
            }
        })
    }

    sizeDataChange(name, value) {
        this.setState({
            ...this.state,
            size: {
                ...this.state.size,
                [name]: value,
            }
        });
    }

    dataChange(value, name) {
        this.setState({
            ...this.state,
            [name]: value,
        })
    }

    saveSubspecies() {
        const size = this.state.size;
        const color =[];
        for (const item in this.state.color) {
            if (this.state.color.hasOwnProperty(item)) {
                if (this.state.color[item]) {
                    color.push(item);
                }
            }
        }
        let parameters = {
            color,
            size,
            SizeStandard: this.props.sizeStandard,
            VendorCode: this.state.VendorCode,
            Price: Number(this.state.Price),
        };
        if (color.length > 0 && this.state.VendorCode &&
            this.state.Price && (validParamList(this.state.paramList, size)  || (subCatalogListGeneral.indexOf(this.props.subCatalog) !== -1))) {
            if (this.props.item && this.props.item._id && this.props.item._id.length >= 12) {
                parameters = {
                    ...parameters,
                    ParameterID: this.props.item._id,
                };
                parametersUpdate(parameters, updateResult);
                this.props.spinnerTextFunction(langCode(this.props.lang, "saved"));
                this.props.openModalFunction("spinnerModal");
            } else if (this.props.productID) {
                parameters = {
                    ...parameters,
                    ProductId: this.props.productID,
                };
                postAddedProductParameters(parameters, updateResult);
                this.props.spinnerTextFunction(langCode(this.props.lang, "saved"));
                this.props.openModalFunction("spinnerModal");
            } else {
                this.props.subspeciesFunction(parameters);
            }
            this.props.updateSubspeciesFunction(!this.props.updateSubspecies)
        } else {
            const textMessage = langCode(this.props.lang, "enterTheseDetails") + ":" +
                (!color.length ? " " + langCode(this.props.lang, "color") + "," : "") +
                (!this.state.VendorCode ? " " + langCode(this.props.lang, "VendorCode") + "," : "") +
                (!this.state.Price ? " " + langCode(this.props.lang, "Price") + "," : "") +
                (!validParamList(this.state.paramList, size) && subCatalogListGeneral.indexOf(this.props.subCatalog) === -1 ? " " + langCode(this.props.lang, "Sizes") + "," : "");
            this.props.alertTextFunction(textMessage);
            this.props.openModalFunction("alertModal");
            this.props.saveParamsFunction(false);
        }
    }

    setParamsList(list = []) {
        this.setState({
            ...this.state,
            paramList: list,
        });
    }

    renderMainSize() {
        return (
            <MainEnvelopeSize sizeDataChange={this.sizeDataChange}
                              sizeData={this.state.size}
                              catalog={this.props.topCatalog}
                              paramsList={this.setParamsList}
                              subCatalog={this.props.subCatalog}/>
        )
    }

    renderSizeBar() {
        if (subCatalogListGeneral.indexOf(this.props.subCatalog) === -1) {
            return (
                <div>
                    {this.renderMainSize()}
                    <div className="size-standard-block-btn">
                        <div className="welcome-main-env__button-item" onClick={this.saveSubspecies}>
                            <div className="button-main text-16 welcome-about-env">
                                <span>{langCode(this.props.lang, "SaveChangeSize")}
                                    <span className="uppercase">{this.props.sizeStandard}</span>
                                </span>
                            </div>
                        </div>
                        <ButtonMain btnClass="button-white text-16" text={langCode(this.props.lang, "close")} onClick={this.props.cancelSave}/>
                    </div>
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                <DoubleButton placeholderData={ProductManufacturerInputList[3]}
                              item={this.state.VendorCode} active={true}
                              changeValue={(value) => {this.dataChange(value, "VendorCode")}}
                              toggle={updateResult}/>
                <DoubleButton placeholderData={ProductManufacturerInputList[4]}
                              item={this.state.Price} active={true}
                              changeValue={(value) => {this.dataChange(value, "Price")}}
                              toggle={updateResult}/>
                <AdminColorCategory colorsState={this.state.color}
                                    colorChange={this.colorChange}/>
                {this.renderSizeBar()}
            </div>
        )
    }
}

function MapStateToProps(state) {
    return {
        SaveParams: state.productReducer.SaveParams,
        updateSubspecies: state.productReducer.updateSubspecies,
        lang: state.utiliteReducer.lang,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        subspeciesFunction: (Subspecies) => {
            dispatch(actionSubspecies(Subspecies))
        },
        updateSubspeciesFunction: (updateSubspecies) => {
            dispatch(actionUpdateSubspecies(updateSubspecies))
        },
        openModalFunction: (modal) => {
            dispatch(actionOpenModal(modal))
        },
        alertTextFunction: (text) => {
            dispatch(actionAlertText(text))
        },
        saveParamsFunction: (SaveParams) => {
            dispatch(actionSaveParams(SaveParams))
        },
        spinnerTextFunction: (SpinnerText) => {
            dispatch(actionSpinnerText(SpinnerText))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(EditSubspecieTabl);
