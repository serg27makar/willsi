import React from "react";
import MainEnvelopeSize from "./MainEnvelopeSize";
import AdminColorCategory from "./AdminColorCategory";
import DoubleButton from "./DoubleButton";
import {ProductManufacturerInputList} from "../../access/temporaryConstants";
import {updateResult} from "../../js/sharedFunctions";
import ButtonMain from "../shared/ButtonMain";
import ru from "../../access/lang/LangConstants";
import {actionSubspecies} from "../../action";
import {connect} from "react-redux";

class Subspecies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: {
                beige: false,
                white: false,
                heavenly: false,
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
    }

    componentDidMount() {}

    componentDidUpdate(prevProps, prevState, snapshot) {}

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
        const subspecies = this.props.Subspecies || [];
        const size = this.state.size;
        const color =[];
        for (const item in this.state.color) {
            if (this.state.color[item]) {
                color.push(item);
            }
        }
        const parameters = {
            color,
            size,
            VendorCode: this.state.VendorCode,
            Price: this.state.Price,
        };
        subspecies.push(parameters);
        this.props.subspeciesFunction(subspecies);
        this.setState({
            color: {
                beige: false,
                white: false,
                heavenly: false,
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
        })
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
                <MainEnvelopeSize sizeDataChange={this.sizeDataChange}
                                  sizeData={this.state.size}
                                  catalog={this.props.catalog}
                                  subCatalog={this.props.subCatalog}/>
                <div className="size-standard-block-btn">
                    <div className="size-standard-block">
                        <span className="size-standard-text">{ru.SizeStandard}</span>
                        <input className="size-standard-input" type="text"
                               placeholder={"XXL"}
                               name="SizeStandard"
                               value={this.state.SizeStandard || ""}
                               onChange={this.dataChange}
                        />
                    </div>
                    <ButtonMain btnClass="button-main text-16" text={ru.addSubspecies} onClick={this.saveSubspecies}/>
                </div>
            </div>
        )
    }
}

function MapStateToProps(state) {
    return {
        Subspecies: state.productReducer.Subspecies,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        subspeciesFunction: (Subspecies) => {
            dispatch(actionSubspecies(Subspecies))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(Subspecies);
