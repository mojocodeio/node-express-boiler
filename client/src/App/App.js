import React from 'react';
import { Route, Switch } from 'react-router-dom';

/** components */
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Auth from './Auth/Auth';

/** styles */
import styles from './App.module.css';

export const App = () => {
  return (
    <div className={styles.app}>
      <Navbar />
      <Switch>
        <Route exact path={'/'} component={Home} />
        <Route path={'/login'} component={Auth} />
      </Switch>
    </div>
  );
}

export default App;
