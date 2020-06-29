import React from 'react';

class BtnUp extends React.Component {
    render() {
        return (
            <a className="btn-up" href="#page">
                <div className="btn-up__env">
                    <svg className="icon icon-arrow-up ">
                        <use xlinkHref="static/img/svg-sprites/symbol/sprite.svg#arrow-up"/>
                    </svg>
                </div>
            </a>
        )
    }
}

export default BtnUp;
