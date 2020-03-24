import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/** components */
import { NavLink } from 'react-router-dom';

/** styles */
import styles from './Navbar.module.css';

/** selectors */
import { getUserId } from '../Auth/authReducer';

/** helpers */
import {
    authenticatedLinks,
    unauthenticatedLinks,
} from './helpers';

export const Navbar = ({
    userId,
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
                            activeClassName={styles.activeNavlink}
                        >
                            {navLink.name}
                        </NavLink>
                    );
                })}
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
                            activeClassName={styles.activeNavlink}
                        >
                            {navLink.name}
                        </NavLink>
                    );
                })}
        </nav>
    );
};

Navbar.propTypes = {
    userId: PropTypes.string
};

const mapStateToProps = state => ({
    userId: getUserId(state),
});

export default connect(mapStateToProps)(Navbar);