import {dropdownListArr} from "../../access/temporaryConstants";
import React from "react";
import {connect} from "react-redux";
import AdminDropdownList from "./AdminDropdownList";
import ProductDescription from "./ProductDescription";
import ProductLinkInput from "./ProductLinkInput";
import ProductTypeDescription from "./ProductTypeDescription";
import ButtonMain from "../shared/ButtonMain";
import ru from "../../access/lang/LangConstants";
import {postAddedProduct, postAddedProductParameters, postUpdateProduct} from "../../utilite/axiosConnect";
import {
    actionAlertText,
    actionOpenModal,
    actionSaveParams,
    actionSpinnerText,
    actionSubspecies
} from "../../action";
import {isEmptyObject, miDateFormatNumber, updateResult} from "../../js/sharedFunctions";
import EditSubspecies from "./EditSubspecies";

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
            subCatalog: dropdownListArr[0].dropdownItems.slice(1),
            headerItem: dropdownListArr[0].dropdownTitle,
            headerSubItem: dropdownListArr[0].dropdownItems[1],
        });
        if (this.props.item) {
            this.fillInState();
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.headerIndex !== this.state.headerIndex) {
            this.setState({
                subCatalog: dropdownListArr[this.state.headerIndex].dropdownItems.slice(1),
                headerSubItem: dropdownListArr[this.state.headerIndex].dropdownItems[1]
            })
        }
        if (prevProps.item !== this.props.item) {
            this.fillInState();
        }
    }

    fillInState() {
        this.setState({
            ProductStoreID: this.props.storeID,
            headerItem: this.props.item.topCatalog,
            headerSubItem: this.props.item.subCatalog,
            Manufacturer: this.props.item.Manufacturer,
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
            headerItem: dropdownListArr[index].dropdownTitle,
            headerIndex: index,
        })
    }

    changeSubCatalog(index) {
        this.setState({
            headerSubItem: dropdownListArr[this.state.headerIndex].dropdownItems[index + 1],
            headerSubIndex: index + 1,
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
            this.addedProductResult(this.state.addedProductId);
        } else {
            this.saveHeaderCart();
        }
    }

    addedProductResult(res) {
        if (res && res.length >= 12 && this.props.Subspecies) {
            this.setState({
                addedProductId: res,
            });
            const Parameters = {
                ProductId: res,
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
    }

    saveCart() {
        this.props.saveParamsFunction(true);
    }

    updateProduct() {
        this.saveHeaderCart(true);
    }

    saveHeaderCart(update = false) {
        const currentDate = new Date();
        let cart = {
            ProductStoreID: this.props.storeID,
            topCatalog: this.state.headerItem,
            subCatalog: this.state.headerSubItem,
            Manufacturer: this.state.Manufacturer,
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
            this.props.spinnerTextFunction(ru.saved);
            this.props.openModalFunction("spinnerModal");
        } else {
            this.props.alertTextFunction(ru.enterTheseDetails);
            this.props.openModalFunction("alertModal");
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
                    <ButtonMain btnClass="button-main text-16" text={ru.SaveChange} onClick={this.updateProduct}/>
                    <ButtonMain btnClass="button-white text-16" text={ru.close} onClick={this.cancelSave}/>
                </div>
            )
        }
        return (
            <div className="partners-env-btn">
                <ButtonMain btnClass="button-main text-16" text={ru.Save} onClick={this.saveCart}/>
                <ButtonMain btnClass="button-white text-16" text={ru.Cancel} onClick={this.cancelSave}/>
            </div>
        )
    }

    renderStoreAdminInput() {
        return (
            <div>
                <input className="category-list__input" type="checkbox" id={"storeAdmin"} disabled={this.props.Permission === "primaryAdmin"}
                       value={this.state.storeAdmin} checked={this.state.storeAdmin} name={"storeAdmin"} onChange={this.dataChange}/>
                <label className="category-list__label text-14 light" htmlFor={"storeAdmin"}>{ru.storeAdminHide}</label>
            </div>
        );
    }

    renderPrimaryAdminInput() {
        return (
            <div>
                <input className="category-list__input" type="checkbox" id={"primaryAdmin"} disabled={this.props.Permission === "storeAdmin"}
                       value={this.state.primaryAdmin} checked={this.state.primaryAdmin} name={"primaryAdmin"} onChange={this.dataChange}/>
                <label className="category-list__label text-14 light" htmlFor={"primaryAdmin"}>{ru.primaryAdmin}</label>
            </div>
        );
    }

    renderVisibilitySwitches() {
        return (
            <div className="visibility-switches">
                {this.renderPrimaryAdminInput()}
                {this.renderStoreAdminInput()}
            </div>
        )
    }

    render() {
        return (
            <div className="main-envelope__bottom-env">
                {this.renderVisibilitySwitches()}
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
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(AdminMainSite);
