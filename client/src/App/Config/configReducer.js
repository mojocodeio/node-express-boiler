import deep from 'deep-get-set';

const initialConfig = {
    baseUrl: 'http://localhost:3000',
    gatewayUrl: 'http://localhost:3000/api',
    authApi: '/auth',
    loginApi: '/login',
    logoutApi: '/logout',
    dashboardApi: '/dashboard',
    userApi: '/user',
};

export const configReducer = (state = initialConfig, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default configReducer;

/** selectors */
export const getConfigReducer = state => {
    return deep(state, 'config');
}

export const getBaseUrl = state => {
    const config = getConfigReducer(state);
    return deep(config, 'baseUrl');
}

export const getAuthApi = state => {
    const config = getConfigReducer(state);
    return deep(config, 'authApi');
}

export const getLoginApi = state => {
    const config = getConfigReducer(state);
    return deep(config, 'loginApi');
}

export const getFullLoginUrl = state => {
    const baseUrl = getBaseUrl(state);
    const authApi = getAuthApi(state);
    const loginApi = getLoginApi(state);
    return `${baseUrl}${authApi}${loginApi}`
}


