import React from 'react';

/** styles */
import styles from './Auth.module.css';

export const Auth = () => {
    return (
        <form className={styles.auth}>
            <input />
            <button>Submit</button>
        </form>
    );
};

export default Auth;