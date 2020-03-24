import React from 'react';
import { NavLink } from 'react-router-dom';

/** styles */
import styles from './Navbar.module.css';

/** helpers */
import {
    authenticatedLinks,
    unauthenticatedLinks,
} from './helpers';

export const Navbar = ({
    isAuthenticated,
}) => {
    if (isAuthenticated) {
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

export default Navbar;