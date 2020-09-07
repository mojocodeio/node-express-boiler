import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/** components */

/** styles */
import styles from './FlashError.module.css';

/** actions */
import { handleClearErrorMessage } from './actions';

/** selectors */
import { getErrorMessage } from './errorReducer';

/** hooks */
import { useFlashError } from './hooks';

export const FlashError = ({
    errorMessage,
    handleClearErrorMessage,
}) => {
    useFlashError(errorMessage, handleClearErrorMessage)

    if (!errorMessage) {
        return null;
    }

    return (
        <div className={styles.error}>
            { errorMessage }
        </div>
    );
};

FlashError.propTypes = {
    errorMessage: PropTypes.string,
    handleClearErrorMessage: PropTypes.func,
};

const mapStateToProps = state => ({
    errorMessage: getErrorMessage(state),
});

const mapDispatchToProps = {
    handleClearErrorMessage
};

export default connect(mapStateToProps, mapDispatchToProps)(FlashError);
