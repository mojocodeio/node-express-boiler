const initialConfig = {
    baseUrl: 'http://localhost:3000',
    loginApi: '/login',
    logoutApi: '/logout',
    dashboardApi: '/dashboard',
};

export const configReducer = (state = initialConfig, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default configReducer;