import axios from 'axios';

export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';
export const USER_LOGIN_LOADING = 'USER_LOGIN_LOADING';
export const USER_FETCH_SUCCESS = 'USER_FETCH_SUCCESS';
export const USER_FETCH_FAILURE = 'USER_FETCH_FAILURE';
export const USER_FETCH_LOADING = 'USER_FETCH_LOADING';
export const USER_LOGOUT = 'USER_LOGOUT';

export const handleAuthenticateUser = (user, loginUrl) => dispatch => {

    dispatch({
        type: USER_LOGIN_LOADING,
    })

    axios.post(loginUrl, { user }).then(({ data }) => {
        const { accessToken, user } = data;
        if (accessToken) {
            window.localStorage.setItem('access-token', data.accessToken)
            return dispatch({
                type: USER_LOGIN_SUCCESS,
                ...user,
            })
        }
    }).catch(error => {
        const { message } = error.response.data

        return dispatch({
            type: USER_LOGIN_FAILURE,
            message,
        })
    })
}


export const handleFetchUser = userUrl => dispatch => {
    const token = window.localStorage.getItem('access-token');

    if (!token) {
        return dispatch({
            type: USER_FETCH_FAILURE,
        })
    } else {
        dispatch({
            type: USER_FETCH_LOADING,
        });

        axios.get(userUrl, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }).then(({ data }) => {
            const { user } = data;

            return dispatch({
                type: USER_FETCH_SUCCESS,
                ...user,
            })
        }).catch(error => dispatch({
            type: USER_FETCH_FAILURE,
        }))
    }
}

export const handleUserLogout = () => {
    window.localStorage.removeItem('access-token');
    return {
        type: USER_LOGOUT,
    }
}
