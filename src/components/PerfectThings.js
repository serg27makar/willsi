import React from "react";
import ButtonMain from "./shared/ButtonMain";
import ru from "../access/lang/LangConstants";
import "../access/css/cart.css"
import ProductsCart from "./ProductsCart";
import {connect} from "react-redux";
import {getProductDataToParams} from "../utilite/axiosConnect";
import {validPostpone} from "../js/sharedFunctions";

class PerfectThings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productArr: [],
        };
        this.setProductData = this.setProductData.bind(this);
    }

    componentDidMount() {
        this.getProductData();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.subCatalogName !== this.props.subCatalogName) {
            this.getProductData();
        }
    }

    getProductData() {
        const dataSearch = {
            skip: 0,
            searchItemParams: {},
            searchItemColor: {},
            searchItemPrice: {},
            searchItemNew: {},
            SearchParams: this.props.SearchParams,
            topCatalog: this.props.catalogName,
            subCatalog: this.props.subCatalogName,
        };
        getProductDataToParams(this.setProductData, dataSearch);
    }

    clearData(data) {
        data.map((item, index) => {
            if (validPostpone(this.props.Postpone, item._id)) {
                data.splice(index, 1);
                this.clearData(data);
                return data;
            }
            return data;
        })
    }

    setProductData(data) {
        if (data.length > 0) {
            data.map((item, index) => {
                if (item._id === this.props.SelectProduct._id) {
                    data.splice(index, 1);
                }
                return data;
            })
            this.clearData(data);
            data.sort((a, b) => {
                return b.Parameters.compatibility * 100 - a.Parameters.compatibility * 100
            });
        }
        this.setState({
            ...this.state,
            productArr: data,
        })
    }

    render() {
        return (
            <div className="container">
                <ProductsCart catalog={true} products={this.state.productArr} compilation={true}/>
                <div className="col-12">
                    <ButtonMain btnClass={"button-refresh text-14 medium button-white"} text={ru.UpdateProduct}/>
                </div>
            </div>
        )
    }
}

function MapStateToProps(state) {
    return {
        SelectProduct: state.productReducer.SelectProduct,
        subCatalogName: state.catalogReducer.subCatalogName,
        catalogName: state.catalogReducer.catalogName,
        SearchParams: state.productReducer.SearchParams,
        Postpone: state.userReducer.Postpone,
    }
}
const mapDispatchToProps = dispatch => {
    return {}
};

export default connect(MapStateToProps, mapDispatchToProps)(PerfectThings);
