import React from 'react';
import {actionOpenModal, actionSetStoreArr} from "../action";
import {connect} from "react-redux";
import DoubleButton from "./adminPanel/DoubleButton";
import {placeholderStoreData} from "../access/temporaryConstants";
import ButtonMain from "./shared/ButtonMain";
import {postUpdateStore} from "../utilite/axiosConnect";
import {updateResult} from "../js/sharedFunctions";
import {langCode} from "../access/lang/translaterJS";

class StoreDescription extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Store: {},
            selectedStore: -1,
        };
        this.onChange = this.onChange.bind(this);
        this.saveUpdate = this.saveUpdate.bind(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.selectedStore !== this.props.selectedStore && this.props.storeArr.length > 0 ) {
            this.setState({
                Store: this.props.selectedStore !== -1 ? this.props.storeArr[this.props.selectedStore] : {},
                selectedStore: this.props.selectedStore,
            });
        }
        if (prevState.isChange !== this.state.isChange && this.state.isChange) {
            this.isChanged();
        }
    }

    onChange = (value, item) => {
        this.setState({
            ...this.state,
            Store: {
                ...this.state.Store,
                [item.name]: value,
            },
        });
    };

    saveUpdate() {
        const storeArr = this.props.storeArr.slice();
        storeArr.splice(this.props.selectedStore, 1, this.state.Store);
        this.props.setStoreArrFunction(storeArr);
        postUpdateStore(this.state.Store, updateResult);
        this.props.updateDate();
    }

    renderInputBtn(item, index) {
        return (
            <DoubleButton key={index}
                          placeholderData={item}
                          item={this.state.Store[item.name]}
                          changeValue={(value) => {this.onChange(value, item)}}
                          toggle={updateResult}/>
        )
    }

    render() {
        if (this.props.selectedStore === -1) {
            return null;
        }
        return (
            <div>
                {placeholderStoreData.map((item, index) => {
                    return this.renderInputBtn(item, index);
                })}
                <div className="partners-env-btn">
                    <ButtonMain btnClass="button-main text-16" text={langCode(this.props.lang, "Save")} onClick={this.saveUpdate}/>
                </div>
            </div>
        )
    }
}

function MapStateToProps(state) {
    return {
        UserID: state.userReducer.UserID,
        UserStore: state.userReducer.UserStore,
        lang: state.utiliteReducer.lang,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        openModalFunction: (modal) => {
            dispatch(actionOpenModal(modal))
        },
        setStoreArrFunction: (StoreArr) => {
            dispatch(actionSetStoreArr(StoreArr))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(StoreDescription);
