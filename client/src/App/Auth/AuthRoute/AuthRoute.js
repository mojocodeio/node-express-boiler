import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

/** components */

/** styles */

/** actions */

/** selectors */

export const AuthRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => {
                if (localStorage.getItem('access-token')) {
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

//const mapStateToProps = state => ({
//});

//const mapDispatchToProps = {
//};

export default connect()(AuthRoute);
