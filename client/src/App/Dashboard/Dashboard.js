import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/** components */

/** styles */

/** actions */

/** selectors */

/**
 * check todays date
 * attempt to save date into db in the user's workouts
 * if date already exists in there, Looks like you already workout text & redirect to reports page
 * if not, save the date in the db, didWorkout true, say nice job, redirect to reports page
 */
import { getUserCreatedAtDate, getUserName } from '../Auth/authReducer'

export const Dashboard = ({
    createdAt,
    userName,
}) => {

    return (
        <div className={'style-me'}>
            <h1>Currently logged in as: { userName }</h1>
            <div>Member since: { createdAt }</div>
        </div>
    );
};

Dashboard.propTypes = {
    createdAt: PropTypes.string,
    userName: PropTypes.string,
}

const mapStateToProps = state => ({
    createdAt: getUserCreatedAtDate(state),
    userName: getUserName(state),
});

//const mapDispatchToProps = {
//};

export default connect(mapStateToProps)(Dashboard);
