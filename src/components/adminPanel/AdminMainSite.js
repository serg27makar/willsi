import {dropdownListArr} from "../../access/temporaryConstants";
import React from "react";
import {connect} from "react-redux";
import AdminDropdownList from "./AdminDropdownList";
import ProductDescription from "./ProductDescription";
import ProductLinkInput from "./ProductLinkInput";
import ProductTypeDescription from "./ProductTypeDescription";
import ButtonMain from "../shared/ButtonMain";
import ru from "../../access/lang/LangConstants";
import {postAddedProduct, postAddedProductParameters} from "../../utilite/axiosConnect";
import {actionAlertText, actionOpenModal, actionSaveParams} from "../../action";
import Subspecies from "./Subspecies";
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
        };
        this.changeCatalog = this.changeCatalog.bind(this);
        this.changeSubCatalog = this.changeSubCatalog.bind(this);
        this.productDescription = this.productDescription.bind(this);
        this.toggleClose = this.toggleClose.bind(this);
        this.saveCart = this.saveCart.bind(this);
        this.cancelSave = this.cancelSave.bind(this);
        this.saveParameters = this.saveParameters.bind(this);
        this.saveHeaderCart = this.saveHeaderCart.bind(this);
        this.addedProductResult = this.addedProductResult.bind(this);
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

    productDescription(name, value) {
        this.setState({
            ...this.state,
            [name]: value,
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
                this.props.closeMainSite(this.props.storeID);
            }
        }
    }

    saveCart() {
        this.props.saveParamsFunction(true);
    }

    saveHeaderCart() {
        const cart = {
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
        };
        if (cart.Manufacturer && cart.ProdName &&
            cart.ProductCode && cart.Photo1 &&
            cart.Photo2 && cart.Photo3 &&
            cart.LinkToProduct && cart.Description) {
            postAddedProduct(cart, this.addedProductResult);
        } else {
            this.props.alertTextFunction(ru.enterTheseDetails);
            this.props.openModalFunction("alertModal");
        }
    }

    cancelSave() {
        this.props.closeMainSite(this.props.storeID);
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
                <ProductLinkInput item={this.state} dataChange={this.productDescription}/>
                <ProductDescription dataChange={this.productDescription}/>
                <Subspecies catalog={this.state.headerItem}
                            subCatalog={this.state.headerSubItem}
                            isSaveParams={this.saveParameters}
                />
                <div className="partners-env-btn">
                    <ButtonMain btnClass="button-main text-16" text={ru.Save} onClick={this.saveCart}/>
                    <ButtonMain btnClass="button-white text-16" text={ru.Cancel} onClick={this.cancelSave}/>
                </div>
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

export default connect(MapStateToProps, mapDispatchToProps)(AdminMainSite);
