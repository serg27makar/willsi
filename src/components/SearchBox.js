import React from 'react';
import ru from "../access/lang/LangConstants";
import ButtonMain from "./shared/ButtonMain";

class SearchBox extends React.Component {
    render() {
        return (
            <div className="search-box">
                <p className="search-box__title text-18 uppercase">{ru.whatClothesWillSuitYou}</p>
                <div className="search-box__form-env">
                    <form className="form-env">
                        <div className="form-env__wrapper">
                            <input className="form-env__input text-18" type="text" name="growth"
                                   placeholder={ru.placeholderGrowth}/>
                            <input className="form-env__input text-18" type="text" name="shoulders"
                                   placeholder={ru.placeholderShoulders}/>
                            <input className="form-env__input text-18" type="text" name="chest"
                                   placeholder={ru.placeholderChest}/>
                            <input className="form-env__input text-18" type="text" name="waist"
                                   placeholder={ru.placeholderWaist}/>
                            <input className="form-env__input text-18" type="text" name="hips"
                                   placeholder={ru.placeholderHips}/>
                        </div>
                        <ButtonMain btnClass="button-main text-16" text={ru.pickUpClothes}/>
                    </form>
                </div>
            </div>
        )
    };
}

export default SearchBox;
