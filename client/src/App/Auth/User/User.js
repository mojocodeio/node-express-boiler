import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/** components */

/** styles */

/** actions */

/** selectors */

export const User = () => {

    useEffect(() => {
        const token = window.localStorage.getItem('access-token')
        console.log('token: ', token)
    }, [])

    return (
        <div className={'style-me'}>
            Hello User
        </div>
    );
};

User.propTypes = {
}

//const mapStateToProps = state => ({
//});

//const mapDispatchToProps = {
//};

export default connect()(User);
