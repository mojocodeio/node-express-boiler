import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

/** components */

/** styles */

/** actions */
import { handleFetchUser } from '../actions';

/** selectors */
import { getUserId } from '../authReducer';

export const AuthRoute = ({
    handleFetchUser,
    userId,
    component: Component,
    ...rest
}) => {
    useEffect(() => {
        handleFetchUser()
    }, [])
    return (
        <Route
            {...rest}
            render={props => {
                if (userId) {
                    return (
                        <Component {...props} />
                    )
                } else {
                    return (
                        <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
                    )
                }
            }}
        />
    );
};

// AuthRoute.propTypes = {
// }

const mapStateToProps = state => ({
    userId: getUserId(state),
});

const mapDispatchToProps = {
    handleFetchUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthRoute);
