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
                </li>
                <li>
                    <i className="material-icons">people</i>
                    Customer Caterogies
                </li>
                <li>
                    <i className="material-icons">shopping_cart</i>
                    Orders
                </li>
            </ul>
            <input type="text" placeholder="Search..." />
        </div >
    );
}

export default Header;