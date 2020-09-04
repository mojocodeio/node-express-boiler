import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/** styles */
import styles from './Auth.module.css';

/** actions */
import { handleUserLogin } from './actions';

/** selectors */
import { getFullLoginUrl } from '../Config/configReducer';

export const Auth = ({
    handleUserLogin,
    loginUrl,
}) => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
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
};

const mapDispatchToProps = {
    handleUserLogin,
};

const mapStateToProps = state => ({
    loginUrl: getFullLoginUrl(state),
})

export default connect(mapStateToProps, mapDispatchToProps)(Auth);