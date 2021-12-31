import React from 'react';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Register from './Pages/Register/Register';

import NotFound from './Pages/NotFound/NotFound';

const Routes = (props) => (
	<Router {...props}>
		<Switch>
			<Route path="/">
				<Register />
			</Route>

			<Route path="*">
				<NotFound />
			</Route>
		</Switch>
	</Router>
);

export default Routes;
