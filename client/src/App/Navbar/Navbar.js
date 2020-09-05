import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/** components */
import { NavLink } from 'react-router-dom';

/** styles */
import styles from './Navbar.module.css';

/** actions */
import { handleUserLogout } from '../Auth/actions';

/** selectors */
import { getUserId } from '../Auth/authReducer';

/** helpers */
import {
    authenticatedLinks,
    unauthenticatedLinks,
} from './helpers';

export const Navbar = ({
    userId,
    handleUserLogout,
}) => {
    if (userId) {
        return (
            <nav className={styles.nav}>
                {authenticatedLinks.map((navLink, index) => {
                    return (
                        <NavLink
                            to={navLink.path}
                            key={index}
                            className={styles.navLink}
                        >
                            {navLink.name}
                        </NavLink>
                    );
                })}
                <button onClick={handleUserLogout}>
                    Logout
                </button>
            </nav>
        );
    };

    return (
        <nav className={styles.nav}>
                {unauthenticatedLinks.map((navLink, index) => {
                    return (
                        <NavLink
                            to={navLink.path}
                            key={index}
                            className={styles.navLink}
                        >
                            {navLink.name}
                        </NavLink>
                    );
                })}
        </nav>
    );
};

Navbar.propTypes = {
    userId: PropTypes.string,
    handleUserLogout: PropTypes.func,
};

const mapStateToProps = state => ({
    userId: getUserId(state),
});

const mapDispatchToProps = {
    handleUserLogout,
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);