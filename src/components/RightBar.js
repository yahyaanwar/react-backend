import React from 'react';

import './RightBar.css';

// TODO: Change structure to UL > LI based

function RightBar() {
    return (
        <div className="RightBar">
            <ul>
                <li>
                    <i className="material-icons md-light">account_circle</i>
                </li>
                <li className="active">
                    <i className="material-icons md-light">shopping_cart</i>
                </li>
                <li>
                    <i className="material-icons md-light">commute</i>
                </li>
                <li>
                    <i className="material-icons md-light">build</i>
                </li>
            </ul>
            <div className="footer">
                <i className="material-icons md-light">apps</i>
            </div>
        </div>
    );
}

export default RightBar;