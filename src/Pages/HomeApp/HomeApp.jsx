import React, { useState } from 'react';

import './home-app.scss';

export const HomeApp = props => {
    const browserDarkmode = window.matchMedia('(prefers-color-scheme: dark)');
    
    const [darkTheme, setDarkTheme] = useState(browserDarkmode);
    props.setTheme(darkTheme? 'mainTheme dark' : 'mainTheme');
    
    return (
        <div className="app-route">
            <h1 onClick={() => setDarkTheme(!darkTheme)}>Main App</h1>
        </div>
    );
};

export default HomeApp;