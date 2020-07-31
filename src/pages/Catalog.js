import React from 'react';
import {setActionAdminPanel} from "../action";
import {connect} from "react-redux";
import CatalogTopEnvironment from "../components/CatalogTopEnvironment";
import {dropdownListArr, productArr, sidebarCatalogArr, subUsers} from "../access/temporaryConstants";
import RutCatalogSidebar from "../components/RutCatalogSidebar";
import CatalogSidebar from "../components/CatalogSidebar";
import BreadcrumbsBg from "../components/BreadcrumbsBg";
import ShowProductsBar from "../components/ShowProductsBar";
import ProductsCart from "../components/ProductsCart";

const breadcrumbs = {
    title: "Женская одежда",
    links: [
        "Каталог",
        "Одежда",
        "Женская одежда",
    ]
};

class Catalog extends React.Component {

    componentDidMount() {
        this.props.setActionAdminPanelFunction("Catalog");
    }

    render() {
        return(
            <div className="content">
                <BreadcrumbsBg  breadcrumbs={breadcrumbs}/>
                <CatalogTopEnvironment  subUsers={subUsers}/>
                <div className="catalog-middle container">
                    <div className="footer-row-wrap">
                            <div className="catalog-sidebar">
                                <RutCatalogSidebar Categories={dropdownListArr}/>
                                <CatalogSidebar Categories={sidebarCatalogArr}/>
                            </div>
                        <div className="col-12">
                            <ShowProductsBar subUsers={subUsers}/>
                            <ProductsCart products={productArr}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function MapStateToProps(state) {
    return {
        page: state.pageReducer.page,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        setActionAdminPanelFunction: (page) => {
            dispatch(setActionAdminPanel(page))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(Catalog);

