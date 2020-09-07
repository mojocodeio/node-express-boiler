import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

/** components */
import FlashError from '../FlashError/FlashError';

/** styles */
import styles from './Auth.module.css';

/** actions */
import { handleAuthenticateUser } from './actions';

/** selectors */
import { getUserId } from './authReducer'
import { getFullLoginUrl, getFullRegisterUrl } from '../Config/configReducer';

export const Auth = ({
    handleAuthenticateUser,
    loginUrl,
    registerUrl,
    userId,
}) => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [alreadyMember, setAlreadyMember] = useState(false);
    const url = alreadyMember ? loginUrl : registerUrl;
    const title = alreadyMember ? 'Login' : 'Register';

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
            <h3 className={styles.title}>{title}</h3>
            <FlashError />
            <input
                className={`${styles['input-section']} ${styles.username}`}
                value={userName}
                onChange={e => setUserName(e.target.value)}
                placeholder='User Name'
            />
            <input
                className={`${styles['input-section']} ${styles.password}`}
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder='Password'
            />
            <div className={`${styles['input-section']} ${styles['checkbox-container']}`}>
                <input
                    className={styles.checkbox}
                    type="checkbox"
                    checked={alreadyMember}
                    onChange={() => setAlreadyMember(!alreadyMember)}
                />
                <label>Already a member?</label>
            </div>
            <div className={styles['input-section']}>
                <button
                    className={styles['auth-button']}
                    onClick={() => {
                        handleAuthenticateUser({ userName, password }, url)
                        setUserName('')
                        setPassword('')
                    }
                }>
                    Submit
                </button>
            </div>
        </form>
    );
};

Auth.propTypes = {
    handleAuthenticateUser: PropTypes.func,
    loginUrl: PropTypes.string,
    registerUrl: PropTypes.string,
    userId: PropTypes.string,
};

const mapDispatchToProps = {
    handleAuthenticateUser,
};

const mapStateToProps = state => ({
    loginUrl: getFullLoginUrl(state),
    registerUrl: getFullRegisterUrl(state),
    userId: getUserId(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(Auth);