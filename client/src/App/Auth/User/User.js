import React, { useEffect, Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/** actions */
import { handleFetchUser } from '../actions';

/** selectors */
import { getIsLoadingUser } from '../authReducer';
import { getFullUserUrl } from '../../Config/configReducer';

export const User = ({
    children,
    handleFetchUser,
    isLoadingUser,
    userUrl,
}) => {
    useEffect(() => {
        handleFetchUser(userUrl)
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
    userUrl: PropTypes.string,
}

const mapStateToProps = state => ({
    isLoadingUser: getIsLoadingUser(state),
    userUrl: getFullUserUrl(state),
});

const mapDispatchToProps = {
    handleFetchUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
