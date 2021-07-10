import React from 'react';

import './home-app.scss';

export const HomeApp = props => {
    props.setTheme('mainTheme');
    
    return (
        <div className="app-route">
            <h1>Main App</h1>
        </div>
    );
};

export default HomeApp;