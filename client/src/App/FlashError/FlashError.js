import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/** components */

/** styles */

/** actions */

/** selectors */
import { getErrorMessage } from './errorReducer'

export const FlashError = ({
    errorMessage
}) => {
    if (!errorMessage) {
        return null;
    }

    return (
        <div className={'style-me'}>
            { errorMessage }
        </div>
    );
};

FlashError.propTypes = {
    errorMessage: PropTypes.string,
};

const mapStateToProps = state => ({
    errorMessage: getErrorMessage(state),
});

//const mapDispatchToProps = {
//};

export default connect(mapStateToProps)(FlashError);
