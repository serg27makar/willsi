import React from 'react';

class LinkBtn extends React.Component {
    render() {
        return (
            <div className="link-fixed">
                <div className="link-fixed__env text-14 medium"><span
                    className="link-fixed__text">Есть ссылка<br/>на товар?</span><a className="link-fixed__item" href="#">Примерьте
                    ее!</a></div>
            </div>
        )
    }
}

export default LinkBtn;
