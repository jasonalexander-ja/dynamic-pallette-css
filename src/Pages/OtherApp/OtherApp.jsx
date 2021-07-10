import React from 'react';

import './other-app.scss';

export const OtherApp = props => {
    props.setTheme('secondaryTheme');

    return (
        <div className="app-route">
            <h1>Other App</h1>
        </div>
    );
};

export default OtherApp;