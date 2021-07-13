import React, { useState, useEffect } from 'react';

import './custom-app.scss';

const setCustomValues = (theme, dark) => {
    let themeProvider = document.getElementById("theme-provider");
    themeProvider.style = '';
    theme.normal.forEach(value => {
        themeProvider.style.setProperty(value.key, value.value);
    });
    if(dark) {
        theme.dark.forEach(value => {
            themeProvider.style.setProperty(value.key, value.value);
        });
    }
} 

const getCustomTheme = async update => {
    const theme = await fetch('/CustomThemes.json')
        .then(res => res.json())
        .then(json => json.values)
        .catch(err => {
            console.log(`Failed to get custom theme values; ${err}`)
            return [];
        });
    update({
        hasLoaded: true,
        theme: theme
    });
}

export const HomeApp = props => {
    const browserDarkTheme = window.matchMedia('(prefers-color-scheme: dark)');
    const [darkMode, setDarkMode] = useState(browserDarkTheme);

    const [themeState, setThemeState] = useState({
        hasLoaded: false, 
        theme: { normal: [], dark: [] }
    });
    props.setTheme('mainTheme');
    if(!themeState.hasLoaded)
        getCustomTheme(setThemeState);
    
    useEffect(() => {
        setCustomValues(themeState.theme, darkMode);
        return () => document.getElementById("theme-provider").style = "";
    });

    return (
        <div className="app-route">
            <h1 onClick={() => setDarkMode(!darkMode)}>Custom App</h1>
        </div>
    );
};

export default HomeApp;