import React from 'react';
import { actionOpenModal} from "../action";
import {connect} from "react-redux";
import DoubleButton from "./adminPanel/DoubleButton";
import {placeholderData, placeholderStoreData, whomParams} from "../access/temporaryConstants";
import ru from "../access/lang/LangConstants";
import ButtonMain from "./shared/ButtonMain";

class StoreDescription extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            params: {},
            isChange: false,
            activeBtn: 0,
        };
        this.isActive = this.isActive.bind(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.selected !== this.props.selected && this.props.UsersParameters.length > 0 ||
            prevProps.HeaderUser !== this.props.HeaderUser) {
            if (this.props.selected !== -1 && this.props.selected < this.props.UsersParameters.length) {
                let params = {};
                this.props.UsersParameters[this.props.selected].Parameters.map((item) => {
                    params = {
                        ...params,
                        [item.title]: item.size,
                    };
                    return params;
                });
             
            }
        }
        if (prevState.isChange !== this.state.isChange && this.state.isChange) {
            this.isChanged();
            this.updateParams();
        }
    }

    isChanged() {
        this.setState({
            isChange: !this.state.isChange,
        });
        this.props.updateDate();
    }

    isActive(res) {
        if (res) {
            this.saveUpdate();
        }
    }

    saveUpdate() {
        const index = this.props.selected;

        this.isChanged();
    }

    onChange = (e, item) => {
        this.setState({
            ...this.state,
            params: {
                ...this.state.params,
                [item.title]: e.target.value <= 0 ? 0 : e.target.value >= 500 ? 500 : e.target.value,
            },
        });
    };

    renderInputBtn(item, index) {
        return (
            <DoubleButton placeholderData={item}
                          item={this.state.UserName}
                          changeValue={this.nameChange}
                          toggle={this.isActive}/>
        )
    }

    render() {
        if (this.props.selected === -1) {
            return null;
        }
        return (
            <div>
                {placeholderStoreData.map((item, index) => {
                    return this.renderInputBtn(item, index);
                })}
                <div className="tags-list-envelope">

                </div>
                <div className="partners-env-btn">
                    <ButtonMain btnClass="button-main text-16 little-btn" text={ru.Save} onClick={() => {this.isActive(true)}}/>
                </div>
            </div>
        )
    }
}

function MapStateToProps(state) {
    return {
        UserID: state.userReducer.UserID,
        UserStore: state.userReducer.UserStore,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        openModalFunction: (modal) => {
            dispatch(actionOpenModal(modal))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(StoreDescription);
