export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';

export const handleUserLogin = (userName, password, loginUrl) => dispatch => {
    const body = JSON.stringify({ userName, password });

    fetch(loginUrl, {
        method: 'POST',
        body,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })
        .then(res => res.json())
        .then(data => {
            window.localStorage.setItem('access-token', data.accessToken)
            if (data.accessToken) {
                return dispatch({
                    type: USER_LOGIN_SUCCESS,
                    userId: data.user._id,
                    userName: data.user.userName,
                })
            }

        })
        .catch(error => dispatch({
            type: USER_LOGIN_FAILURE,
            error
        }))
};
