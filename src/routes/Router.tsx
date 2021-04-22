import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import AuthPage from '../pages/Auth';
import NotFound from '../pages/NotFound';

const Router: React.FunctionComponent = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path='/'>
				<AuthPage isLogin={true} />
			</Route>
			<Route exact path='/login'>
				<Redirect to='/' />
			</Route>
			<Route exact path='/register'>
				<AuthPage isLogin={false} />
			</Route>
			<Route exact path='/dashboard'>
				{/* Dashboard */}
			</Route>
			<Route path="*" exact={true}>
				<NotFound />
			</Route>
		</Switch>
	</BrowserRouter>
);

export default Router;