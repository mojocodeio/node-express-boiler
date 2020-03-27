export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';

export const handleUserLogin = (userName, loginUrl) => dispatch => {
    const body = JSON.stringify({ userName });

    fetch(loginUrl, {
        method: 'POST',
        body,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })
        .then(res => res.json())
        .then(user => dispatch({
            type: USER_LOGIN_SUCCESS,
            userId: user.userId,
            userName: user.userName,
        }))
        .catch(error => dispatch({
            type: USER_LOGIN_FAILURE,
            error
        }))
};
