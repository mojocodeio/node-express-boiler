export const initialState = { userName: '', password: '' };

export const authChangeHelper = (e, user, setUser) => {
    setUser({
        ...user,
        [e.target.name]: e.target.value
    });
};

export const authClickHelper = (handleAuthenticateUser, user, url, setUser, handleFlashErrorMessage) => {
    if (!user || !user.userName || user.userName.length <= 2 || user.userName.length >= 20) {
        handleFlashErrorMessage('Please enter valid username. Thank you!');
    } else if (!user.password || user.password.length <= 2 || user.password.length >= 20) {
        handleFlashErrorMessage('Please enter valid password. Thank you!');
    } else {
        handleAuthenticateUser(user, url);
        setUser({ userName: '', password: '' });
    }
};