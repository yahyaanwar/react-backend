import React from 'react';

import './ActionBar.css';

function ActionBar() {
    // PENDING: This component for render sub menu
    return (
        <div className="ActionBar">
            <ul>
                <li className="active">
                    Order by
                    <i className="material-icons right">chevron_right</i>
                </li>
                <li>
                    Filter by
                    <i className="material-icons right">chevron_right</i>
                </li>
                <li>
                    Group by
                    <i className="material-icons right">chevron_right</i>
                </li>
            </ul>

        </div >
    );
}

export default ActionBar;