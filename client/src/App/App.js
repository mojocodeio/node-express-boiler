import React from 'react';
import { Route, Switch } from 'react-router-dom';

/** components */
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Auth from './Auth/Auth';
import AuthRoute from './Auth/AuthRoute/AuthRoute';
import Dashboard from './Dashboard/Dashboard';
import User from './Auth/User/User';
import Footer from './Layout/Footer/Footer';
import Lockers from './Lockers/Lockers';

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
						<Route path={'/login'} component={Auth} />
						<Route path={'/lockers'} component={Lockers} />
						<AuthRoute path={'/dashboard'} component={Dashboard} />
						<Route exact path={'/'} component={Home} />
					</Switch>
				</div>
				<Footer />
			</User>
		</div>
	);
}

export default App;
