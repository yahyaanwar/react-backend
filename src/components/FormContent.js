import React from 'react';

import './FormContent.css';

// TODO: Change structure to UL > LI based

function FormContent() {
    return (
        <div className="FormContent">
            <form action="get">
                <table>
                    <tbody>
                        <tr>
                            <td><label htmlFor="name">Name</label></td>
                            <td><input type="text" id="name" /></td>
                            <td><label htmlFor="job">Job</label></td>
                            <td><input type="text" id="job" /></td>
                            <td><label htmlFor="phone">Phone</label></td>
                            <td><input type="text" id="phone" /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="bio">Bio</label></td>
                            <td colSpan="5"><textarea id="bio" /></td>
                        </tr>
                    </tbody>
                </table>
            </form>
            <div className="footer">
                <button type="submit">Save</button>
                <button type="submit">Cancel</button>
            </div>
        </div>
    );
}

export default FormContent;