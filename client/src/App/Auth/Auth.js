import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

/** styles */
import styles from './Auth.module.css';

/** actions */
import {
    // handleUserLogin,
    handleAuthenticateUser,
} from './actions';

/** selectors */
import { getUserId } from './authReducer'
import { getFullLoginUrl, getFullRegisterUrl } from '../Config/configReducer';

export const Auth = ({
    // handleUserLogin,
    handleAuthenticateUser,
    loginUrl,
    registerUrl,
    userId,
}) => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [alreadyMember, setAlreadyMember] = useState(false);
    const url = alreadyMember ? loginUrl : registerUrl;

    if (userId) {
        return (
            <Redirect to={{ path: '/dashboard' }}/>
        )
    }

    return (
        <form
            className={styles.auth}
            onSubmit={e => e.preventDefault()}
        >
            <input
                value={userName}
                onChange={e => setUserName(e.target.value)}
            />
            <input
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <input
                type="checkbox"
                checked={alreadyMember}
                onChange={() => setAlreadyMember(!alreadyMember)}
            />
            <label>Already a member?</label>
            <button
                className={styles['auth-button']}
                onClick={() => {
                    handleAuthenticateUser({ userName, password }, url)
                    setUserName('')
                    setPassword('')
                }
            }>Submit</button>
        </form>
    );
};

Auth.propTypes = {
    // handleUserLogin: PropTypes.func,
    handleAuthenticateUser: PropTypes.func,
    loginUrl: PropTypes.string,
    registerUrl: PropTypes.string,
    userId: PropTypes.string,
};

const mapDispatchToProps = {
    // handleUserLogin,
    handleAuthenticateUser,
};

const mapStateToProps = state => ({
    loginUrl: getFullLoginUrl(state),
    registerUrl: getFullRegisterUrl(state),
    userId: getUserId(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(Auth);