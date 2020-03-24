import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/** styles */
import styles from './Auth.module.css';

/** action */
import { handleUserLogin } from './actions';


export const Auth = ({
    handleUserLogin,
}) => {
    const [userName, setUserName] = useState('');
    return (
        <form className={styles.auth}>
            <input
                value={userName}
                onChange={e => setUserName(e.target.value)}
            />
            <button onClick={() => handleUserLogin(userName)}>Submit</button>
        </form>
    );
};

Auth.propTypes = {
    handleUserLogin: PropTypes.func,
};

const mapDispatchToProps = {
    handleUserLogin,
};

export default connect(null, mapDispatchToProps)(Auth);