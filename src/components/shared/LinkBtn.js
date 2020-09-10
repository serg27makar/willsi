import React from 'react';
import "../../access/css/shared.css"
import ru from "../../access/lang/LangConstants";
import {actionOpenModal} from "../../action";
import {connect} from "react-redux";

class LinkBtn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemStyle: "link-fixed",
        };
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }

    handleScroll(event) {
        let scrollTop = event.target.scrollingElement.scrollTop;
        if (scrollTop > 200) {
            this.setState({
                itemStyle: "link-fixed btn-show"
            })
        } else {
            this.setState({
                itemStyle: "link-fixed"
            })
        }
    }

    openLincModal = () => {
        this.props.openModalFunction("linkModal");
    };

    render() {
        if (this.props.page === "AdminPanel" ||
            this.props.page === "Data" ||
            this.props.page === "Cabinet") {
            return null;
        }
        return (
            <div className={this.state.itemStyle} onClick={this.openLincModal}>
                <div className="link-fixed__env text-13 medium">
                    <span>{ru.HaveLink}
                        <br/>{ru.OnTheProduct}
                    </span>
                    <div className="link-fixed__item" >{ru.TryItOn}</div>
                </div>
            </div>
        )
    }
}

function MapStateToProps(state) {
    return {
        page: state.pageReducer.page,
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

export default connect(MapStateToProps, mapDispatchToProps)(LinkBtn);
