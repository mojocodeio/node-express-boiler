import{
    FETCH_LOCKERS_LOADING,
    FETCH_LOCKERS_SUCCESS,
    FETCH_LOCKERS_FAILURE
} from './actions'
const initialState = {
    lockerData: {
        docs: []
    }
}

export const lockerReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_LOCKERS_LOADING:
            return {
                ...state,
                lockersFetchLoading: true,
                lockersFetchSuccess: false,
                lockersFetchFailure: false,
            }
        case FETCH_LOCKERS_SUCCESS:
            const { lockerData } = action
            const newDocs = state.lockerData.docs.concat(lockerData.docs)
            return {
                ...state,
                lockersFetchLoading: false,
                lockersFetchSuccess: true,
                lockersFetchFailure: false,
                lockerData: {
                    docs: newDocs
                },
            }
        case FETCH_LOCKERS_FAILURE:
            return {
                ...state,
                lockersFetchLoading: false,
                lockersFetchSuccess: false,
                lockersFetchFailure: true,
            }
        default:
            return state
    }
}

export default lockerReducer