import axios from 'axios'
export const FETCH_LOCKERS_LOADING = 'FETCH_LOCKERS_LOADING'
export const FETCH_LOCKERS_SUCCESS = 'FETCH_LOCKERS_SUCCESS'
export const FETCH_LOCKERS_FAILURE = 'FETCH_LOCKERS_FAILURE'

export const fetchLockers = () => dispatch => {
    dispatch({ type: FETCH_LOCKERS_LOADING })

    axios.get('/lockers?page=0&limit=2').then(({ data }) => {
        console.log(data)
        return dispatch({
            type: FETCH_LOCKERS_SUCCESS,
            lockerData: data,
        })
    }).catch(error => {
        return dispatch({
            type: FETCH_LOCKERS_FAILURE,
            error,
        })
    })
}
