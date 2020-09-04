import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

/** selectors */
import { getUserId } from '../authReducer';

export const AuthRoute = ({
    userId,
    component: Component,
    ...rest
}) => {
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

AuthRoute.propTypes = {
    userId: PropTypes.string,
}

const mapStateToProps = state => ({
    userId: getUserId(state),
});

export default connect(mapStateToProps)(AuthRoute);
