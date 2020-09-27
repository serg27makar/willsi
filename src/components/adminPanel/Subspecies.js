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

class Subspecies extends React.Component {
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
    }

    componentDidMount() {
        if (subCatalogListGeneral.indexOf(this.props.subCatalog) !== -1) {
            this.setState({
                ...this.state,
                size: {
                    general: "general"
                }
            });
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
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
            color,
            size,
            SizeStandard: this.state.SizeStandard,
            VendorCode: this.state.VendorCode,
            Price: this.state.Price,
        };
        if (color.length > 0 && this.state.VendorCode &&
            this.state.Price && ((this.state.SizeStandard && this.validParamList(size)) || (subCatalogListGeneral.indexOf(this.props.subCatalog) !== -1))) {
            this.props.subspeciesFunction(parameters);
            this.clearParameters();
            this.props.isSaveParams();
        } else {
            this.props.alertTextFunction(ru.enterTheseDetails);
            this.props.openModalFunction("alertModal");
            this.props.saveParamsFunction(false);
        }
    }

    clearParameters() {
        this.setState({
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
            SizeStandard: "",
        });
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
        if (subCatalogListGeneral.indexOf(this.props.subCatalog) !== -1) {
          return null;
        }
        return (
            <div>
                <MainEnvelopeSize sizeDataChange={this.sizeDataChange}
                                  sizeData={this.state.size}
                                  catalog={this.props.catalog}
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
                    <ButtonMain btnClass="button-main text-16" text={ru.addSubspecies} onClick={this.saveSubspecies}/>
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

export default connect(MapStateToProps, mapDispatchToProps)(Subspecies);
