import {dropdownListArr} from "../../access/temporaryConstants";
import React from "react";
import {connect} from "react-redux";
import AdminDropdownList from "./AdminDropdownList";
import AdminColorCategory from "./AdminColorCategory";
import ProductDescription from "./ProductDescription";
import ProductLinkInput from "./ProductLinkInput";
import ProductTypeDescription from "./ProductTypeDescription";
import MainEnvelopeSize from "./MainEnvelopeSize";
import ButtonMain from "../shared/ButtonMain";
import ru from "../../access/lang/LangConstants";
import {postAddedProduct} from "../../utilite/axiosConnect";
import {updateResult} from "../../js/sharedFunctions";

class AdminMainSite extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropDownClose: -1,
            headerItem: "",
            topCatalog: [],
            subCatalog: [],
            headerIndex: 0,
            headerSubItem: "",
            headerSubIndex: 0,

            Manufacturer: "",
            ProdName: "",
            ProductCode: "",
            VendorCode: "",
            Price: "",

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

            Photo1: "",
            Photo2: "",
            Photo3: "",
            LinkToProduct: "",

            Description: "",
            Composition: "",
            ModelParameters: "",
            CareInstructions: "",
            PaymentAndDelivery: "",
        };
        this.changeCatalog = this.changeCatalog.bind(this);
        this.changeSubCatalog = this.changeSubCatalog.bind(this);
        this.productDescription = this.productDescription.bind(this);
        this.colorChange = this.colorChange.bind(this);
        this.toggleClose = this.toggleClose.bind(this);
        this.sizeDataChange = this.sizeDataChange.bind(this);
        this.saveCart = this.saveCart.bind(this);
    }

    componentDidMount() {
        const topCatalog = [];
        dropdownListArr.map((item, index) => {
            topCatalog.push(item.dropdownTitle);
            return index;
        });
        this.setState({
            ...this.state,
            topCatalog,
            subCatalog: dropdownListArr[0].dropdownItems,
            headerItem: dropdownListArr[0].dropdownTitle,
            headerSubItem: dropdownListArr[0].dropdownItems[0],
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.headerIndex !== this.state.headerIndex) {
            this.setState({
                subCatalog: dropdownListArr[this.state.headerIndex].dropdownItems,
                headerSubItem: dropdownListArr[this.state.headerIndex].dropdownItems[0]
            })
        }
    }

    changeCatalog(index) {
        this.setState({
            headerItem: dropdownListArr[index].dropdownTitle,
            headerIndex: index,
        })
    }

    changeSubCatalog(index) {
        this.setState({
            headerSubItem: dropdownListArr[this.state.headerIndex].dropdownItems[index],
            headerSubIndex: index,
        })
    }

    toggleClose(data) {
        this.setState({dropDownClose: data})
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

    productDescription(name, value) {
        this.setState({
            ...this.state,
            [name]: value,
        })
    }

    sizeDataChange(id, name, value) {
        this.setState({
            ...this.state,
            size: {
                ...this.state.size,
                [id]: {
                    ...this.state.size[id],
                    [name]: value,
                }
            }
        });
    }

    saveCart() {
        const size = {};
        for (const group in this.state.size) {
            const parameters = [];
            for (const key in this.state.size[group]) {
                const item = {
                    title: key,
                    size: this.state.size[group][key],
                };
                parameters.push(item);
                size[group] = {...size[group], parameters};
            }
        }
        const color =[];
        for (const item in this.state.color) {
            if (this.state.color[item]) {
                color.push(item);
            }
        }

        const cart = {
            StoreID: "555555",
            topCatalog: this.state.headerItem,
            subCatalog: this.state.headerSubItem,
            Manufacturer: this.state.Manufacturer,
            ProdName: this.state.ProdName,
            ProductCode: this.state.ProductCode,
            VendorCode: this.state.VendorCode,
            Price: this.state.Price,
            color,
            size,
            Photo1: this.state.Photo1,
            Photo2: this.state.Photo2,
            Photo3: this.state.Photo3,
            LinkToProduct: this.state.LinkToProduct,
            Description: this.state.Description,
            Composition: this.state.Composition,
            ModelParameters: this.state.ModelParameters,
            CareInstructions: this.state.CareInstructions,
            PaymentAndDelivery: this.state.PaymentAndDelivery,
        };
        postAddedProduct(cart, updateResult)
    }

    render() {
        return (
            <div className="main-envelope__bottom-env">
                <AdminDropdownList
                    headerItem={this.state.headerItem}
                    subItem={this.state.topCatalog}
                    changeItem={this.changeCatalog}
                    toggleClose={this.toggleClose}
                    closeOpen={this.state.dropDownClose}
                    index={0}
                />
                <AdminDropdownList
                    headerItem={this.state.headerSubItem}
                    subItem={this.state.subCatalog}
                    changeItem={this.changeSubCatalog}
                    toggleClose={this.toggleClose}
                    closeOpen={this.state.dropDownClose}
                    index={1}
                />
                <ProductTypeDescription item={this.state} dataChange={this.productDescription}/>
                <AdminColorCategory colorsState={this.state.color} colorChange={this.colorChange}/>
                <ProductLinkInput item={this.state} dataChange={this.productDescription}/>
                <ProductDescription dataChange={this.productDescription}/>
                <MainEnvelopeSize sizeDataChange={this.sizeDataChange} sizeData={this.state.size}/>
                <ButtonMain btnClass="button-main text-16" text={ru.Save} onClick={this.saveCart}/>
            </div>
        )
    }
}

function MapStateToProps(state) {
    return {}
}
const mapDispatchToProps = dispatch => {
    return {}
};

export default connect(MapStateToProps, mapDispatchToProps)(AdminMainSite);
