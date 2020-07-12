import React from 'react';
import "../../access/css/shared.css"

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
                <div className="link-fixed__env text-14 medium">
                    <span>Есть ссылка<br/>на товар?</span>
                    <div className="link-fixed__item" >Примерьте его!</div>
                </div>
            </div>
        )
    }
}

export default LinkBtn;
