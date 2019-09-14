import React from 'react';

import './ListContent.css';

// TODO: Change structure to UL > LI based

function ListContent() {
    return (
        <div className="ListContent">
            <ul>
                <li>
                    lorem
                    <br />
                    lorem
                </li>
                <li className="active">
                    ipsum
                </li>
                <li>
                    doolor
                </li>
                <li>
                    sit amet
                </li>
            </ul>
            <div className="footer">
            </div>
        </div>
    );
}

export default ListContent;