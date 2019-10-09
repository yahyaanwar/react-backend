import React from 'react';

import './Header.css';

function Header() {
    // PENDING: This component for render sub menu
    return (
        <div className="Header">
            <ul>
                <li className="active">
                    <i className="material-icons">mail</i>
                    Mail
                    <i className="material-icons right">close</i>
                </li>
                <li>
                    <i className="material-icons">people</i>
                    Customer Caterogies
                    <i className="material-icons right">close</i>
                </li>
                <li>
                    <i className="material-icons">shopping_cart</i>
                    Orders
                    <i className="material-icons right">close</i>
                </li>
            </ul>
            <input type="text" placeholder="Search..." />
        </div >
    );
}

export default Header;