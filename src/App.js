import React, { useState } from 'react';
import {
	BrowserRouter as Router,
	Link,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';

import NavBar from './Components/NavBar';

import HomeApp from './Pages/HomeApp/HomeApp';
import OtherApp from './Pages/OtherApp/OtherApp';
import CustomApp from './Pages/CustomApp/CustomApp';

export const App = () => {
	const [theme, setTheme] = useState("mainTheme");
	return (
		<Router>
			<div 
				id="theme-provider" 
				className={theme}
			>
				<NavBar>
					<Link to="/home">Home</Link>
					<Link to="/other">Other</Link>
					<Link to="/custom">Custom</Link>
				</NavBar>
				<div className="content">
					<Switch>
						<Route exact path="/">
							<Redirect to="/home" />
						</Route>
						<Route path="/home">
							<HomeApp 
								setTheme={setTheme}
							/>
						</Route>
						<Route path="/other">
							<OtherApp 
								setTheme={setTheme}
							/>
						</Route>
						<Route path="/custom">
							<CustomApp 
								setTheme={setTheme}
							/>
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
};

export default App;
