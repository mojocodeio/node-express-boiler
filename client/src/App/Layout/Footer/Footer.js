import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/** components */

/** styles */
import styles from './Footer.module.css';

/** actions */

/** selectors */

export const Footer = () => {
    return (
        <div className={styles.footer}>
            Node-Express/React-Redux Boilerplate
        </div>
    );
};

Footer.propTypes = {
}

//const mapStateToProps = state => ({
//});

//const mapDispatchToProps = {
//};

export default connect()(Footer);
