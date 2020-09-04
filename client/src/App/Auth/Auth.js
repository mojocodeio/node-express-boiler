import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

/** styles */
import styles from './Auth.module.css';

/** actions */
import { handleUserLogin } from './actions';

/** selectors */
import { getUserId } from './authReducer'
import { getFullLoginUrl } from '../Config/configReducer';

export const Auth = ({
    handleUserLogin,
    loginUrl,
    userId,
}) => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
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
            <button
                className={'auth-button'}
                onClick={() => {
                    handleUserLogin(userName, password, loginUrl)
                    setUserName('')
                    setPassword('')
                }
            }>Submit</button>
        </form>
    );
};

Auth.propTypes = {
    handleUserLogin: PropTypes.func,
    loginUrl: PropTypes.string,
    userId: PropTypes.string,
};

const mapDispatchToProps = {
    handleUserLogin,
};

const mapStateToProps = state => ({
    loginUrl: getFullLoginUrl(state),
    userId: getUserId(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(Auth);