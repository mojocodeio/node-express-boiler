export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case 'USER':
            return action.user;
        default:
            return state;
    }
}

export default authReducer;