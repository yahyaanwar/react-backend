import React from 'react';

import './IconBar.css';

// TODO: Change structure to UL > LI based

function IconBar() {
    return (
        <div className="IconBar">
            <ul>
                <li>
                    <i className="material-icons md-light ">account_circle</i>
                    Users
                </li>
                <li className="active">
                    <i className="material-icons md-light">shopping_cart</i>
                    International Stores
                </li>
                <li>
                    <i className="material-icons md-light">commute</i>
                    Transportations
                </li>
                <li>
                    <i className="material-icons md-light">build</i>
                    Settings
                </li>
            </ul>
            <div className="footer">
                <i className="material-icons md-light">apps</i>
            </div>
        </div>
    );
}

export default IconBar;