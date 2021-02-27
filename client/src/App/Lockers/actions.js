import axios from 'axios'
export const FETCH_LOCKERS_LOADING = 'FETCH_LOCKERS_LOADING'
export const FETCH_LOCKERS_SUCCESS = 'FETCH_LOCKERS_SUCCESS'
export const FETCH_LOCKERS_FAILURE = 'FETCH_LOCKERS_FAILURE'

export const fetchLockers = () => {
    axios.get('/lockers').then(data => console.log(data))
}