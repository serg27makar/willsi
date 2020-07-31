import React from 'react';
import "./../access/css/cart.css";
import {setActionAdminPanel} from "../action";
import {connect} from "react-redux";
import Carousel from "../components/Carousel";
import CatalogTopEnvironment from "../components/CatalogTopEnvironment";
import ParametersEditor from "../components/ParametersEditor";
import {productArr, slidersArr, subUsers} from "../access/temporaryConstants";
import BreadcrumbsBg from "../components/BreadcrumbsBg";
import ProductsCart from "../components/ProductsCart";
import ButtonMain from "../components/shared/ButtonMain";
import ru from "../access/lang/LangConstants";
import CardDescription from "../components/CardDescription";

const breadcrumbs = {
    title: "Женская одежда",
    links: [
        "Каталог",
        "Одежда",
        "Женская одежда",
        "Красная рубашка",
    ]
};

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.setActionAdminPanelFunction("Cart");
    }

    renderSlide = () => {
        return (
            <Carousel slidersArr={slidersArr}/>
            )
    };

    render() {
        return(
            <div className="content">
                <BreadcrumbsBg  breadcrumbs={breadcrumbs}/>
                <ParametersEditor/>
                <CatalogTopEnvironment subUsers={subUsers}/>

                <div className="cart-info">
                    <div className="container">
                        <div className="footer-row-wrap">
                            <div className="col-12">
                                {this.renderSlide()}
                                <div className="cart-slider__circle" style={{backgroundImage: "url('static/img/content/circle-good.png')"}}/>
                            </div>
                            <div className="col-12">
                               <CardDescription/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cart-tabs">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="tabs-wrapper">
                                    <div className="tabs-wrapper__top-button">
                                        <button className="tabs-wrapper__button text-20 tabs-active uppercase medium"
                                                data-tabs="1" type="button"><span
                                            className="tabs-wrapper__text">Состав</span></button>
                                        <button className="tabs-wrapper__button text-20 uppercase medium" data-tabs="2"
                                                type="button"><span
                                            className="tabs-wrapper__text">Параметры модели</span></button>
                                        <button className="tabs-wrapper__button text-20 uppercase medium" data-tabs="3"
                                                type="button"><span
                                            className="tabs-wrapper__text">Инструкция по уходу</span></button>
                                        <button className="tabs-wrapper__button text-20 uppercase medium" data-tabs="4"
                                                type="button"><span
                                            className="tabs-wrapper__text">Оплата и доставка</span></button>
                                    </div>
                                    <div className="tabs-wrapper__content-info">
                                        <div className="tabs-wrapper__show-tabs" id="1">
                                            <p className="tabs-wrapper__paragraph text-14 light">Повседневная практика
                                                показывает, что начало повседневной работы по формированию позиции
                                                позволяет выполнять важные задания по разработке системы обучения
                                                кадров, соответствует насущным потребностям. Идейные соображения высшего
                                                порядка, а также сложившаяся структура организации играет важную роль в
                                                формировании системы обучения кадров, соответствует насущным
                                                потребностям.</p>
                                            <p className="tabs-wrapper__paragraph text-14 light">С другой стороны
                                                консультация с широким активом позволяет оценить значение
                                                соответствующий условий активизации.</p>
                                            <p className="tabs-wrapper__paragraph text-14 light">Повседневная практика
                                                показывает, что начало повседневной работы по формированию позиции
                                                позволяет выполнять важные задания по разработке системы обучения
                                                кадров, соответствует насущным потребностям. Идейные соображения высшего
                                                порядка, а также сложившаяся структура организации играет важную роль в
                                                формировании системы обучения кадров, соответствует насущным
                                                потребностям.</p>
                                            <p className="tabs-wrapper__paragraph text-14 light">С другой стороны
                                                консультация с широким активом позволяет оценить значение
                                                соответствующий условий активизации.</p>
                                        </div>
                                        <div className="tabs-wrapper__show-tabs" id="2">
                                            <p className="tabs-wrapper__paragraph text-14 light">Повседневная практика
                                                показывает, что начало повседневной работы по формированию позиции
                                                позволяет выполнять важные задания по разработке системы обучения
                                                кадров, соответствует насущным потребностям. Идейные соображения высшего
                                                порядка, а также сложившаяся структура организации играет важную роль в
                                                формировании системы обучения кадров, соответствует насущным
                                                потребностям.</p>
                                            <p className="tabs-wrapper__paragraph text-14 light">С другой стороны
                                                консультация с широким активом позволяет оценить значение
                                                соответствующий условий активизации.</p>
                                            <p className="tabs-wrapper__paragraph text-14 light">Повседневная практика
                                                показывает, что начало повседневной работы по формированию позиции
                                                позволяет выполнять важные задания по разработке системы обучения
                                                кадров, соответствует насущным потребностям. Идейные соображения высшего
                                                порядка, а также сложившаяся структура организации играет важную роль в
                                                формировании системы обучения кадров, соответствует насущным
                                                потребностям.</p>
                                            <p className="tabs-wrapper__paragraph text-14 light">С другой стороны
                                                консультация с широким активом позволяет оценить значение
                                                соответствующий условий активизации.</p>
                                        </div>
                                        <div className="tabs-wrapper__show-tabs" id="3">
                                            <p className="tabs-wrapper__paragraph text-14 light">Повседневная практика
                                                показывает, что начало повседневной работы по формированию позиции
                                                позволяет выполнять важные задания по разработке системы обучения
                                                кадров, соответствует насущным потребностям. Идейные соображения высшего
                                                порядка, а также сложившаяся структура организации играет важную роль в
                                                формировании системы обучения кадров, соответствует насущным
                                                потребностям.</p>
                                            <p className="tabs-wrapper__paragraph text-14 light">С другой стороны
                                                консультация с широким активом позволяет оценить значение
                                                соответствующий условий активизации.</p>
                                            <p className="tabs-wrapper__paragraph text-14 light">Повседневная практика
                                                показывает, что начало повседневной работы по формированию позиции
                                                позволяет выполнять важные задания по разработке системы обучения
                                                кадров, соответствует насущным потребностям. Идейные соображения высшего
                                                порядка, а также сложившаяся структура организации играет важную роль в
                                                формировании системы обучения кадров, соответствует насущным
                                                потребностям.</p>
                                            <p className="tabs-wrapper__paragraph text-14 light">С другой стороны
                                                консультация с широким активом позволяет оценить значение
                                                соответствующий условий активизации.</p>
                                        </div>
                                        <div className="tabs-wrapper__show-tabs" id="4">
                                            <p className="tabs-wrapper__paragraph text-14 light">Повседневная практика
                                                показывает, что начало повседневной работы по формированию позиции
                                                позволяет выполнять важные задания по разработке системы обучения
                                                кадров, соответствует насущным потребностям. Идейные соображения высшего
                                                порядка, а также сложившаяся структура организации играет важную роль в
                                                формировании системы обучения кадров, соответствует насущным
                                                потребностям.</p>
                                            <p className="tabs-wrapper__paragraph text-14 light">С другой стороны
                                                консультация с широким активом позволяет оценить значение
                                                соответствующий условий активизации.</p>
                                            <p className="tabs-wrapper__paragraph text-14 light">Повседневная практика
                                                показывает, что начало повседневной работы по формированию позиции
                                                позволяет выполнять важные задания по разработке системы обучения
                                                кадров, соответствует насущным потребностям. Идейные соображения высшего
                                                порядка, а также сложившаяся структура организации играет важную роль в
                                                формировании системы обучения кадров, соответствует насущным
                                                потребностям.</p>
                                            <p className="tabs-wrapper__paragraph text-14 light">С другой стороны
                                                консультация с широким активом позволяет оценить значение
                                                соответствующий условий активизации.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ideal-product">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h2 className="ideal-product__title title-36 uppercase">{ru.FewPerfectThings}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <ProductsCart products={productArr} compilation={true}/>
                        <div className="col-12">
                            <ButtonMain btnClass={"button-refresh text-14 medium button-white"} text={ru.UpdateProduct}/>
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

export default connect(MapStateToProps, mapDispatchToProps)(Cart);

