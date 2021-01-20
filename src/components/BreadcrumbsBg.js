import React from "react";
import {connect} from "react-redux";
import {langCodeCatalog} from "../access/lang/translaterJS";

class BreadcrumbsBg extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbs: {},
        }
    }

    renderLinks = (item, index, last) => {
        const active = index === last ? "active" : "";
        return <div className={"breadcrumbs__link light text-14 " + active} key={index}>{item}</div>
    };

    renderShare = () => {
        return (
            <div className="breadcrumbs__share" >
                <svg className="icon icon-share ">
                    <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#share"/>
                </svg>
            </div>
        )
    };

    render() {
        return (
            <div className="breadcrumbs-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadcrumbs__row">
                                <div className="breadcrumb__column">
                                    <div className="breadcrumbs">
                                        <h1 className="breadcrumbs__title title-30 bold uppercase">{langCodeCatalog(this.props.lang, this.props.catalogName)}</h1>
                                    </div>
                                    {/*<nav className="breadcrumbs">*/}
                                    {/*    {this.props.breadcrumbs.links && this.props.breadcrumbs.links.map((item, index) => {*/}
                                    {/*        return this.renderLinks(item, index, this.props.breadcrumbs.links.length);*/}
                                    {/*    })}*/}
                                    {/*</nav>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function MapStateToProps(state) {
    return {
        catalogName: state.catalogReducer.catalogName,
        subCatalogName: state.catalogReducer.subCatalogName,
        lang: state.utiliteReducer.lang,
    }
}
const mapDispatchToProps = dispatch => {
    return {}
};

export default connect(MapStateToProps, mapDispatchToProps)(BreadcrumbsBg);
