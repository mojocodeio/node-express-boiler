import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/** actions */
import { handleFetchUser } from '../actions';

/** selectors */
import { getIsLoadingUser, getUserId } from '../authReducer';
import { getFullUserUrl } from '../../Config/configReducer';

export const User = ({
    children,
    handleFetchUser,
    isLoadingUser,
    userUrl,
    userId,
}) => {
    useEffect(() => {
        if (!userId) {
            handleFetchUser(userUrl)
        }
    }, [userId])

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
    userId: PropTypes.string,
    userUrl: PropTypes.string,
}

const mapStateToProps = state => ({
    isLoadingUser: getIsLoadingUser(state),
    userId: getUserId(state),
    userUrl: getFullUserUrl(state),
});

const mapDispatchToProps = {
    handleFetchUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
