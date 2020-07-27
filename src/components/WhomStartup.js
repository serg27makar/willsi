import React from "react";

class WhomStartup extends React.Component {
    render() {
        return (
            <div className="whom-startup">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-12">
                            <h2 className="whom-startup__title uppercase title-36">для кого нужен наш стартап?</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 col-12">
                            <p className="whom-startup__paragraph text-14">
                                Вы продаете классную одежду, но при этом получаете возвраты по причине некорректного
                                размера? Наш стартап - то, что Вам нужно!
                                Оставьте КОРРЕКТНУЮ информацию о параметрах продаваемой Вами одежды,
                                и получайте новых клиентов.
                            </p>
                            <p className="whom-startup__paragraph text-14">У Вас свой интернет магазин или продаете
                                вещи в ИНСТАГРАММ? тогда Наше предложение точно для Вас! Получите доступ к
                                быстрорастущей платформе продаж, где клиенты ищут и покупают одежду по
                                принципиально-новому подходу. Оставьте Ваше имя и номер телефона и наш менеджер
                                свяжется с Вами в ближайшее время.</p>
                        </div>
                        <div className="col-lg-4 col-12">
                            <div className="whom-startup__picture">
                                <picture className="picture">
                                    <source className="picture__source"
                                            srcSet="static/img/content/startup-item.webp" type="image/webp"/><img
                                    className="picture__source" src="static/img/content/startup-item.png"
                                    alt="steps"/>
                                </picture>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WhomStartup;
