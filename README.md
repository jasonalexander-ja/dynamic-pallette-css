## Dynamic palette/theming example

This is an example of dynamically changing the theme of an application using minimal JavaScript. 

Theme values are stored in variables and are scoped to a top level `div` (the 'theme provider') with the id `theme-provider`, the variables are set to this in `src\CSS\theme.scss`, this top level div will have a `value` that will correspond to the desired theme, changing this value will change the theme. 

The theme works by; in `theme.scss`, several selectors are setup targeting `#theme-provider` each targeting the value corresponding to the desired theme, themes are imported mixins from the file `src\CSS\Theme`, each mixin theme contains a set of values as raw CSS variables, once these are imported and applied to the theme providers, all the child nodes can reference these variables. 

As themes may be very large and contain many different values, some of which may be shared accross many different themes, there is a baseline theme in `src\CSS\Theme\baseline-theme.scss`, this is a mixin imported into all themes, acting as a method of creating a set of "default" and standard values, these can be overidden in the 'child' theme by simply adding desired values, for instance: 

In `Theme\baseline-theme.scss`;
```scss
@mixin baseline-theme {
    --nav-bar-height: 48px;
}
```
In `Theme\example-theme.scss`;
```scss
@import 'baseline-theme.scss';

@mixin example-theme {
    @include baseline-theme();
    
    --nav-bar-height: 60px;
}
```

## Changing the theme

In  `src\App.js`, the component `App` use the state `theme` and the setter `setTheme` to store the name of the theme, and passes `theme` to the aforementioned value of the the top level component `#theme-provider`, thus applying the desired theme, the theme is current changed by passing a function reference to `setTheme` into the lower page components where it can be called and a new theme can be set. 

In `src\App.js`;
```JSX
export const App = () => {
    const [theme, setTheme] = useState("mainTheme");
    return (
        <Router>
			<div 
				id="theme-provider" 
				value={theme}
			>
                <Link to="/home">Home</Link>
                <Link to="/other">Other</Link>
				<Switch>
    				<Route path="/home">
    					<HomeApp setTheme={setTheme} />
    				</Route>
    				<Route path="/other">
    					<OtherApp setTheme={setTheme} />
    				</Route>
    			</Switch>
			</div>
        <Router>
    );
```

In `src\Pages\HomeApp\HomeApp.jsx`;
```JSX
export const HomeApp = props => {
    props.setTheme('mainTheme');
    
    return (
        <div className="app-route">
            <h1>Main App</h1>
        </div>
    );
};
```

The amount of JavaScript being used could be reduced even further by simply using using `document.getElementById` to change the value of the `#theme-provider` component, which ever should be used is purely for your discression.
