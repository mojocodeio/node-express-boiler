import React, { useEffect, Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/** actions */
import { handleFetchUser } from '../actions';

/** selectors */
import { getIsLoadingUser } from '../authReducer';

export const User = ({ children, handleFetchUser, isLoadingUser }) => {
    useEffect(() => {
        handleFetchUser()
    }, [])

    if (isLoadingUser) {
        return null;
    }

    return (
        <Fragment>
            { children }
        </Fragment>
    );
};

User.defaultProps = {
    isLoadingUser: true,
};

User.propTypes = {
    handleFetchUser: PropTypes.func,
    isLoadingUser: PropTypes.bool,
}

const mapStateToProps = state => ({
    isLoadingUser: getIsLoadingUser(state),
});

const mapDispatchToProps = {
    handleFetchUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
