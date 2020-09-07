import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

/** components */
import FlashError from '../FlashError/FlashError';

/** styles */
import styles from './Auth.module.css';

/** actions */
import { handleAuthenticateUser } from './actions';
import { handleFlashErrorMessage } from '../FlashError/actions';

/** selectors */
import { getUserId } from './authReducer'
import {
    getFullLoginUrl,
    getFullRegisterUrl,
} from '../Config/configReducer';

/** helpers */
import {
    authChangeHelper,
    authClickHelper,
    initialState,
} from './helpers';

export const Auth = ({
    handleAuthenticateUser,
    handleFlashErrorMessage,
    loginUrl,
    registerUrl,
    userId,
}) => {
    const [user, setUser] = useState(initialState)
    const [alreadyMember, setAlreadyMember] = useState(false);
    const url = useMemo(() => alreadyMember ? loginUrl : registerUrl, [alreadyMember]);
    const title = useMemo(() => alreadyMember ? 'Login' : 'Register', [alreadyMember]);

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
                name='userName'
                onChange={e => authChangeHelper(e, user, setUser)}
                placeholder='User Name'
                value={user.userName}
            />
            <input
                className={`${styles['input-section']} ${styles.password}`}
                name='password'
                onChange={e => authChangeHelper(e, user, setUser)}
                placeholder='Password'
                type='password'
                value={user.password}
            />
            <div className={`${styles['input-section']} ${styles['checkbox-container']}`}>
                <input
                    checked={alreadyMember}
                    className={styles.checkbox}
                    onChange={() => setAlreadyMember(!alreadyMember)}
                    type="checkbox"
                />
                <label>Already a member?</label>
            </div>
            <div className={styles['input-section']}>
                <button
                    className={styles['auth-button']}
                    onClick={() => authClickHelper(handleAuthenticateUser, user, url, setUser, handleFlashErrorMessage)}
                >
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
    handleFlashErrorMessage,
};

const mapStateToProps = state => ({
    loginUrl: getFullLoginUrl(state),
    registerUrl: getFullRegisterUrl(state),
    userId: getUserId(state),
})

export default connect(mapStateToProps, mapDispatchToProps)(Auth);