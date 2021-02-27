import { combineReducers } from 'redux';

/** reducers */
import { authReducer } from './Auth/authReducer';
import { configReducer } from './Config/configReducer';
import { errorReducer } from './FlashError/errorReducer';
import { lockerReducer } from './Lockers/lockerReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    config: configReducer,
    error: errorReducer,
    lockers: lockerReducer,
});

export default rootReducer;
