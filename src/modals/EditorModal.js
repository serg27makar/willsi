import React from 'react';
import ru from "../access/lang/LangConstants";
import {actionOpenModal} from "../action";
import {connect} from "react-redux";
import {subUsers} from "../access/temporaryConstants";
import ButtonMain from "../components/shared/ButtonMain";

//Todo refactor component

class EditorModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            headerUser: subUsers[0].userName,
            params: subUsers[0].params,
            open: "",
        }
    }

    closeLincModal = () => {
        this.props.openModalFunction("");
    };

    closeOpen = () => {
        this.setState({
            ...this.state,
            open: this.state.open === "" ?
                "open" : "",
        })
    };

    changeUser = (index) => {
        this.setState({
            ...this.state,
            headerUser: subUsers[index].userName,
            params: subUsers[index].params,
            open: this.state.open === "" ?
                "open" : "",
        });
    };

    renderUser = (item, index) => {
        if (item.userName !== this.state.headerUser) {
            return (
                <div className="dropdown-info__item" key={index} onClick={() => {this.changeUser(index)}}>
                    <div className="border-line" />
                    <div className="dropdown-info__link text-16 bold uppercase">{item.userName}</div>
                </div>
            )
        }
    };

    render() {
        return (
            <div className="modal-envelope" id="modal-editor">
                <div className="modal-envelope__close" onClick={this.closeLincModal}>
                    <svg className="icon">
                        <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#close"/>
                    </svg>
                </div>
                <div className="col-12 envelope-list">
                    <p className="parameters__info-text text-16 uppercase bold">{ru.Available + '  ' + ru.Parameters}</p>
                    <div className="catalog-top__dropdown-info envelope-mode">
                        <div className="catalog-top__button-drop" onClick={this.closeOpen}>
                            <div className="catalog-top__button-text text-16 bold uppercase">{this.state.headerUser}</div>
                            <span className="catalog-top__button-icon">
                                <svg className="icon icon-arrow-small ">
                                  <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#arrow-small"/>
                                </svg>
                            </span>
                        </div>
                        <div className={"dropdown-info envelope-mode " + this.state.open}>
                            {subUsers && subUsers.map((item, index) => {
                                return this.renderUser(item, index);
                            })}
                            <div className="dropdown-info__item">
                                <div className="dropdown-info__link icon-plus"/>
                            </div>
                        </div>
                    </div>
                    <div className="parameters__tags-list">
                        <p className="parameters__info-text text-16 uppercase bold">{ru.Change + '  ' + ru.Parameters}</p>
                        <div className="tags-list-envelope">
                            <input className="tags-list__input text-18 light envelope-mode" type="number" name="growth" placeholder={ru.placeholderExampleGrowth}/>
                            <input className="tags-list__input text-18 light envelope-mode" type="number" name="shoulders" placeholder={ru.placeholderExampleShoulders}/>
                            <input className="tags-list__input text-18 light envelope-mode" type="number" name="growth" placeholder={ru.placeholderExampleChest}/>
                            <input className="tags-list__input text-18 light envelope-mode" type="number" name="waist" placeholder={ru.placeholderExampleWaist}/>
                            <input className="tags-list__input text-18 light envelope-mode" type="number" name="hips" placeholder={ru.placeholderExampleHips}/>
                        </div>
                        <ButtonMain btnClass={"button-main text-14 medium"} text={ru.Save}/>
                    </div>
                </div>
            </div>
        )
    };
}

function MapStateToProps(state) {
    return {
        modal: state.modalReducer.modal,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        openModalFunction: (modal) => {
            dispatch(actionOpenModal(modal))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(EditorModal);
