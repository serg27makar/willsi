import React from 'react';
import "../../access/css/shared.css"
import ru from "../../access/lang/LangConstants";

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

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(event) {
        let scrollTop = event.target.scrollingElement.scrollTop;
        if (scrollTop > 100) {
            this.setState({
                itemStyle: "link-fixed btn-show"
            })
        } else {
            this.setState({
                itemStyle: "link-fixed"
            })
        }
    }

    render() {
        if (window.location.pathname === "/admin-panel") {
            return null;
        }
        return (
            <div className={this.state.itemStyle}>
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

export default LinkBtn;
