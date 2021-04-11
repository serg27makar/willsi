import {dropdownListArr} from "../../access/temporaryConstants";
import React from "react";
import {connect} from "react-redux";
import AdminDropdownList from "./AdminDropdownList";
import ProductDescription from "./ProductDescription";
import ProductLinkInput from "./ProductLinkInput";
import ProductTypeDescription from "./ProductTypeDescription";
import ButtonMain from "../shared/ButtonMain";
import {postAddedProduct, postAddedProductParameters, postUpdateProduct} from "../../utilite/axiosConnect";
import {
    actionAlertText,
    actionOpenModal,
    actionSaveParams,
    actionSelectedProductToEdit,
    actionSpinnerText,
    actionSubspecies
} from "../../action";
import {isEmptyObject, miDateFormatNumber, updateResult} from "../../js/sharedFunctions";
import EditSubspecies from "./EditSubspecies";
import {langCode} from "../../access/lang/translaterJS";

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

            Manufacturer: "",
            ManufacturerSearch: "",
            ProdName: "",
            ProductCode: "",

            Photo1: "",
            Photo2: "",
            Photo3: "",
            LinkToProduct: "",

            Description: "",
            Composition: "",
            ModelParameters: "",
            CareInstructions: "",
            PaymentAndDelivery: "",

            addedProductId: "",

            primaryAdmin: false,
            storeAdmin: false,
            definePosition: false,
        };
        this.changeCatalog = this.changeCatalog.bind(this);
        this.updateProduct = this.updateProduct.bind(this);
        this.changeSubCatalog = this.changeSubCatalog.bind(this);
        this.productDescription = this.productDescription.bind(this);
        this.toggleClose = this.toggleClose.bind(this);
        this.saveCart = this.saveCart.bind(this);
        this.cancelSave = this.cancelSave.bind(this);
        this.saveParameters = this.saveParameters.bind(this);
        this.saveHeaderCart = this.saveHeaderCart.bind(this);
        this.addedProductResult = this.addedProductResult.bind(this);
        this.fillInState = this.fillInState.bind(this);
        this.dataChange = this.dataChange.bind(this);
        this.defineCatalogPosition = this.defineCatalogPosition.bind(this);
    }

    componentDidMount() {
        const topCatalog = [];
        dropdownListArr.map((item, index) => {
            topCatalog.push(item.dropdownTitle);
            return index;
        });
        const subCatalog = [];
        dropdownListArr[0].dropdownItems.map((item) => {
            if (item.substr(item.length - 3, 3) !== "All") {
                subCatalog.push(item)
            }
            return subCatalog;
        })
        this.setState({
            ...this.state,
            topCatalog,
            subCatalog,
            headerItem: dropdownListArr[0].dropdownTitle,
            headerSubItem: dropdownListArr[0].dropdownItems[1],
        });
        if (this.props.item) {
            this.fillInState();
        }
        if (!isEmptyObject(this.props.catalogs)) {
            this.defineCatalogPosition();
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.headerIndex !== this.state.headerIndex) {
            if (this.state.definePosition) {
                this.setState({
                    ...this.state,
                    definePosition: false,
                })
            } else {
                const subCatalog = [];
                dropdownListArr[this.state.headerIndex].dropdownItems.map((item) => {
                    if (item.substr(item.length - 3, 3) !== "All") {
                        subCatalog.push(item)
                    }
                    return subCatalog;
                })
                this.setState({
                    ...this.state,
                    subCatalog,
                    headerSubItem: dropdownListArr[this.state.headerIndex].dropdownItems[1]
                })
            }
        }
        if (prevProps.item !== this.props.item) {
            this.fillInState();
        }
        if (prevProps.catalogs !== this.props.catalogs && !isEmptyObject(this.props.catalogs)) {
            this.defineCatalogPosition();
        }
    }

    defineCatalogPosition() {
        const headerItem = this.props.catalogs.topCatalog;
        const headerSubItem = this.props.catalogs.subCatalog;
        let headerIndex = 0;
        let subCatalog = [];
        dropdownListArr.map((item, index) => {
            if (item.dropdownTitle === headerItem) {
                item.dropdownItems.map((item) => {
                    if (item.substr(item.length - 3, 3) !== "All") {
                        subCatalog.push(item)
                    }
                    return subCatalog;
                })
                headerIndex = index;
            }
            return subCatalog;
        })
        this.setState({
            ...this.state,
            subCatalog,
            headerItem,
            headerSubItem,
            headerIndex,
            definePosition: true,
        })
    }

    fillInState() {
        this.setState({
            ProductStoreID: this.props.storeID,
            headerItem: this.props.item.topCatalog,
            headerSubItem: this.props.item.subCatalog,
            Manufacturer: this.props.item.Manufacturer,
            ManufacturerSearch: this.props.item.Manufacturer.toUpperCase(),
            ProdName: this.props.item.ProdName,
            ProductCode: this.props.item.ProductCode,
            Photo1: this.props.item.Photo1,
            Photo2: this.props.item.Photo2,
            Photo3: this.props.item.Photo3,
            LinkToProduct: this.props.item.LinkToProduct,
            Description: this.props.item.Description,
            Composition: this.props.item.Composition,
            ModelParameters: this.props.item.ModelParameters,
            CareInstructions: this.props.item.CareInstructions,
            PaymentAndDelivery: this.props.item.PaymentAndDelivery,
            primaryAdmin: this.props.item.primaryAdmin,
            storeAdmin: this.props.item.storeAdmin,
        })
    }

    changeCatalog(index) {
        this.setState({
            ...this.state,
            headerItem: dropdownListArr[index].dropdownTitle,
            headerIndex: index,
        })
    }

    changeSubCatalog(index) {
        this.setState({
            ...this.state,
            headerSubItem: dropdownListArr[this.state.headerIndex].dropdownItems[index + 1],
        })
    }

    toggleClose(data) {
        this.setState({dropDownClose: data})
    }

    productDescription(name, value) {
        this.setState({
            ...this.state,
            [name]: value,
        })
    }

    dataChange(e) {
        const name = e.target.name;
        this.setState({
            ...this.state,
            [name]: !this.state[name],
        })
    }

    saveParameters() {
        if (this.state.addedProductId && this.state.addedProductId.length >= 12 ) {
            this.addedProductParams(this.state.addedProductId);
        } else {
            this.saveHeaderCart();
        }
    }

    addedProductResult(res) {
        if (res && res.insertedId.length >= 12 && this.props.Subspecies) {
            this.addedProduct(res.insertedId);
            this.props.selectedProductToEditFunction(res.ops[0]);
        }
    }

    addedProductParams(addedProductId) {
        if (this.props.Subspecies) {
            this.addedProduct(addedProductId);
        }
    }

    addedProduct(addedProductId) {
        this.setState({
            addedProductId,
        });
        const Parameters = {
            ProductId: addedProductId,
            color: this.props.Subspecies.color,
            size: this.props.Subspecies.size,
            SizeStandard: this.props.Subspecies.SizeStandard,
            VendorCode: this.props.Subspecies.VendorCode,
            Price: this.props.Subspecies.Price,
        };
        postAddedProductParameters(Parameters, updateResult);

        if (this.props.SaveParams) {
            this.props.saveParamsFunction(false);
            this.props.addProduct(true);
        }
    }

    saveCart() {
        this.props.saveParamsFunction(true);
    }

    updateProduct() {
        this.saveHeaderCart(true);
        this.props.saveParamsFunction(true);
    }

    saveHeaderCart(update = false) {
        const currentDate = new Date();
        let cart = {
            ProductStoreID: this.props.storeID,
            topCatalog: this.state.headerItem,
            subCatalog: this.state.headerSubItem,
            Manufacturer: this.state.Manufacturer,
            ManufacturerSearch: this.state.Manufacturer.toUpperCase(),
            ProdName: this.state.ProdName,
            ProductCode: this.state.ProductCode,
            Photo1: this.state.Photo1,
            Photo2: this.state.Photo2,
            Photo3: this.state.Photo3,
            LinkToProduct: this.state.LinkToProduct,
            Description: this.state.Description,
            Composition: this.state.Composition,
            ModelParameters: this.state.ModelParameters,
            CareInstructions: this.state.CareInstructions,
            PaymentAndDelivery: this.state.PaymentAndDelivery,
            primaryAdmin: this.state.primaryAdmin,
            storeAdmin: this.state.storeAdmin,
            registrationDate: miDateFormatNumber(currentDate),
            country: this.props.setCountry,
        };
        if (cart.Manufacturer && cart.ProdName &&
            cart.ProductCode && cart.Photo1 &&
            cart.Photo2 && cart.Photo3 &&
            cart.LinkToProduct && cart.Description) {
            if (update && this.props.item) {
                cart = {
                    ...cart,
                    ProductID: this.props.item._id,
                };
                postUpdateProduct(cart, updateResult)
            } else {
                postAddedProduct(cart, this.addedProductResult);
            }
            this.props.spinnerTextFunction(langCode(this.props.lang, "saved"));
            this.props.openModalFunction("spinnerModal");
        } else {
            const textMessage = langCode(this.props.lang, "enterTheseDetails") + ":" +
                (!cart.Manufacturer ? " " + langCode(this.props.lang, "Manufacturer") + "," : "") +
                (!cart.ProdName ? " " + langCode(this.props.lang, "ProdName") + "," : "") +
                (!cart.ProductCode ? " " + langCode(this.props.lang, "ProductCode") + "," : "") +
                (!cart.Photo1 ? " " + langCode(this.props.lang, "Photo1") + "," : "") +
                (!cart.Photo2 ? " " + langCode(this.props.lang, "Photo2") + "," : "") +
                (!cart.Photo3 ? " " + langCode(this.props.lang, "Photo3") + "," : "") +
                (!cart.LinkToProduct ? " " + langCode(this.props.lang, "LinkToProduct") + "," : "") +
                (!cart.Description ? " " + langCode(this.props.lang, "Description") + "," : "");
            this.props.alertTextFunction(textMessage);
            this.props.openModalFunction("alertModal");
            this.props.saveParamsFunction(false);
        }
    }

    cancelSave() {
        this.props.addProduct(true);
    }

    renderEditSubspecies() {
            return (
                <EditSubspecies item={this.props.item}
                                cancelSave={this.cancelSave}
                                catalog={this.state.headerItem}
                                subCatalog={this.state.headerSubItem}
                                isSaveParams={this.saveParameters}
                />
            )
    }

    renderBtnSave() {
        if (!isEmptyObject(this.props.item)) {
            return (
                <div className="partners-env-btn">
                    <ButtonMain btnClass="button-main text-16" text={langCode(this.props.lang, "SaveChange")} onClick={this.updateProduct}/>
                    <ButtonMain btnClass="button-white text-16" text={langCode(this.props.lang, "close")} onClick={this.cancelSave}/>
                </div>
            )
        }
        return (
            <div className="partners-env-btn">
                <ButtonMain btnClass="button-main text-16" text={langCode(this.props.lang, "Save")} onClick={this.saveCart}/>
                <ButtonMain btnClass="button-white text-16" text={langCode(this.props.lang, "Cancel")} onClick={this.cancelSave}/>
            </div>
        )
    }

    render() {
        return (
            <div className="main-envelope__bottom-env">
                <div className="visibility-switches">
                    <input className="category-list__input" type="checkbox" id={"storeAdmin"} disabled={this.props.Permission === "primaryAdmin"}
                           value={this.state.storeAdmin} checked={this.state.storeAdmin} name={"storeAdmin"} onChange={this.dataChange}/>
                    <label className="category-list__label text-14 light" htmlFor={"storeAdmin"}>{langCode(this.props.lang, "storeAdminHide")}</label>
                </div>
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
                <ProductLinkInput item={this.state} dataChange={this.productDescription}/>
                <ProductDescription item={this.state} dataChange={this.productDescription}/>
                {this.renderEditSubspecies()}
                {this.renderBtnSave()}
            </div>
        )
    }
}

function MapStateToProps(state) {
    return {
        Subspecies: state.productReducer.Subspecies,
        SaveParams: state.productReducer.SaveParams,
        Permission: state.userReducer.Permission,
        setCountry: state.utiliteReducer.setCountry,
        lang: state.utiliteReducer.lang,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        openModalFunction: (modal) => {
            dispatch(actionOpenModal(modal))
        },
        alertTextFunction: (text) => {
            dispatch(actionAlertText(text))
        },
        saveParamsFunction: (SaveParams) => {
            dispatch(actionSaveParams(SaveParams))
        },
        subspeciesFunction: (Subspecies) => {
            dispatch(actionSubspecies(Subspecies))
        },
        spinnerTextFunction: (SpinnerText) => {
            dispatch(actionSpinnerText(SpinnerText))
        },
        selectedProductToEditFunction: (SelectedProductToEdit) => {
            dispatch(actionSelectedProductToEdit(SelectedProductToEdit))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(AdminMainSite);
