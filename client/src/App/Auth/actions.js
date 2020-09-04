export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';
export const USER_FETCH_SUCCESS = 'USER_FETCH_SUCCESS';
export const USER_FETCH_FAILURE = 'USER_FETCH_FAILURE';
export const USER_FETCH_LOADING = 'USER_FETCH_LOADING';

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
            if (data.accessToken) {
                window.localStorage.setItem('access-token', data.accessToken)
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

export const handleFetchUser = () => dispatch => {
    const token = window.localStorage.getItem('access-token');
    if (!token) {
        return dispatch({
            type: USER_FETCH_FAILURE,
            message: 'fail'
        })
    } else {
        dispatch({
            type: USER_FETCH_LOADING,
        })
        fetch('http://localhost:3000/api/user', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
        .then(res => res.json())
        .then(({ userId, userName }) => {
            return dispatch({
                type: USER_FETCH_SUCCESS,
                userId,
                userName
            })
        })
        .catch(error => dispatch({
            type: USER_FETCH_FAILURE,
            error
        }))
    }

}
