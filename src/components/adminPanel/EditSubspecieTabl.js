import React from "react";
import MainEnvelopeSize from "./MainEnvelopeSize";
import AdminColorCategory from "./AdminColorCategory";
import DoubleButton from "./DoubleButton";
import {
    ProductManufacturerInputList,
    subCatalogListGeneral,
} from "../../access/temporaryConstants";
import {updateResult} from "../../js/sharedFunctions";
import ButtonMain from "../shared/ButtonMain";
import ru from "../../access/lang/LangConstants";
import {actionAlertText, actionOpenModal, actionSaveParams, actionSubspecies} from "../../action";
import {connect} from "react-redux";
import {parametersUpdate} from "../../utilite/axiosConnect";

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
        };
        this.colorChange = this.colorChange.bind(this);
        this.sizeDataChange = this.sizeDataChange.bind(this);
        this.dataChange = this.dataChange.bind(this);
        this.saveSubspecies = this.saveSubspecies.bind(this);
        this.dataChangeSizeStandard = this.dataChangeSizeStandard.bind(this);
        this.setParamsList = this.setParamsList.bind(this);
        this.cancelSave = this.cancelSave.bind(this);
    }

    componentDidMount() {
        if (this.props.item) {
            this.fillingDataParameters();
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.item !== this.props.item && this.props.item) {
            this.fillingDataParameters();
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
            SizeStandard: this.props.item.SizeStandard,
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

    dataChangeSizeStandard(e) {
        const value = e.target.value;
        this.setState({
            ...this.state,
            SizeStandard: value,
        })
    }

    cancelSave() {
        this.props.cancelSave();
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
        const parameters = {
            ParameterID: this.props.item._id,
            color,
            size,
            SizeStandard: this.state.SizeStandard,
            VendorCode: this.state.VendorCode,
            Price: this.state.Price,
        };
        if (color.length > 0 && this.state.VendorCode &&
            this.state.Price && ((this.state.SizeStandard && this.validParamList(size)) ||
                (subCatalogListGeneral.indexOf(this.props.subCatalog) !== -1))) {
            parametersUpdate(parameters, updateResult)
        } else {
            this.props.alertTextFunction(ru.enterTheseDetails);
            this.props.openModalFunction("alertModal");
            this.props.saveParamsFunction(false);
        }
    }

    setParamsList(list = []) {
        this.setState({
            paramList: list,
        });
    }

    validParamList(size) {
        let res = true;
        this.state.paramList.map((item) => {
            if (size[item] && res) {
                //    Do nothing
            } else {res = false;}
            return res;
        });
        return res;
    }

    renderSizeBar() {
        return (
            <div>
                <MainEnvelopeSize sizeDataChange={this.sizeDataChange}
                                  sizeData={this.state.size}
                                  catalog={this.props.topCatalog}
                                  paramsList={this.setParamsList}
                                  subCatalog={this.props.subCatalog}/>
                <div className="size-standard-block-btn">
                    <div className="size-standard-block">
                        <span className="size-standard-text">{ru.SizeStandard}</span>
                        <input className="size-standard-input" type="text"
                               placeholder={"XXL"}
                               name={"SizeStandard"}
                               value={this.state.SizeStandard || ""}
                               onChange={this.dataChangeSizeStandard}
                        />
                    </div>
                    <ButtonMain btnClass="button-main text-16" text={ru.SaveChange} onClick={this.saveSubspecies}/>
                    <ButtonMain btnClass="button-white text-16" text={ru.close} onClick={this.cancelSave}/>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="subspecies-admin">
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
        Subspecies: state.productReducer.Subspecies,
        SaveParams: state.productReducer.SaveParams,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        subspeciesFunction: (Subspecies) => {
            dispatch(actionSubspecies(Subspecies))
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
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(EditSubspecieTabl);