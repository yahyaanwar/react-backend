import React from 'react';

import './TextBar.css';

function TextBar() {
    // PENDING: This component for render sub menu
    return (
        <div className="TextBar">
            <h1>International Stores</h1>
            <div className="action">
                <i className="material-icons">edit</i>
                <i className="material-icons">chevron_left</i>
            </div>
            <ul>
                <li>
                    <b>Stores</b>
                    <i className="material-icons right">home</i>
                </li>
                <li className="active">
                    Manager
                    <i className="material-icons right">face</i>
                </li>
                <li>
                    Payment Gateway Configuration
                    <i className="material-icons right">credit_card</i>
                </li>
                <li>Clients</li>
                <li>Other Configuration</li>
            </ul>
            <div className="footer">
                <i className="material-icons right">search</i>
                Find all menu...
            </div>
        </div >
    );
}

export default TextBar;