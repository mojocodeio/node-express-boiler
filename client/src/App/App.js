import React from 'react';
import { Route, Switch } from 'react-router-dom';

/** components */
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Auth from './Auth/Auth';
import AuthRoute from './Auth/AuthRoute/AuthRoute';
import Dashboard from './Dashboard/Dashboard';
import User from './Auth/User/User';

/** styles */
import styles from './App.module.css';

export const App = () => {
	return (
		<div className={styles.app}>
			<User>
				<div className={styles.header}>
					<Navbar />
				</div>
				<div className={styles.content}>
					<Switch>
						<Route exact path={'/'} component={Home} />
						<Route path={'/login'} component={Auth} />
						<AuthRoute path={'/dashboard'} component={Dashboard} />
					</Switch>
				</div>
				<div className={styles.footer}>
					Footer
				</div>
			</User>
		</div>
	);
}

export default App;
