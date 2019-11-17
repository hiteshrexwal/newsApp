import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from '../components/Home/home'

export const RouteWithSubRoutes = route => (
    <Route
        path={route.path}
        exact={route.exact}
        render={props => (
            // pass the sub-routes down to keep nesting
            <route.component {...props} routes={route.routes}/>
        )}
    />
);


const AppRouter = () => (
    <Router>
        <div>
            {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
        </div>
    </Router>
);

const routes = [
    {
        path: '/',
        component: Home,
        exact: true
    },

]

export default AppRouter;