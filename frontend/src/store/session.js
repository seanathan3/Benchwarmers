import jwtFetch from './jwt';

export const RECEIVE_CURRENT_USER = 'session/RECEIVE_CURRENT_USER';
export const REMOVE_CURRENT_USER = 'session/REMOVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'session/RECEIVE_SESSION_ERRORS';
export const REMOVE_SESSION_ERRORS = 'session/REMOVE_SESSION_ERRORS';

export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});


export const removeCurrentUser = () => ({
    type: REMOVE_CURRENT_USER
});


export const receiveSessionErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});


export const removeSessionErrors = () => ({
    type: REMOVE_SESSION_ERRORS
});


export const signup = user => startSession(user, '/api/users/register')
export const login = user => startSession(user, '/api/users/login')

const startSession = (userInfo, route) => async dispatch => {
    try{
        const res = await jwtFetch(route, {
            method: 'POST',
            body: JSON.stringify(userInfo)
        });
        const {user, token} = await res.json();
        localStorage.setItem('jwtToken', token);
        return dispatch(receiveCurrentUser(user));
    } catch(err){
        const res = await err.json();
        if (res.statusCode === 400) {
            return dispatch(receiveSessionErrors(res.errors));
        }
    }
};

export const logout = () => dispatch => {
    localStorage.removeItem('jwtToken');
    dispatch(removeCurrentUser());
};

export const getCurrentUser = () => async dispatch => {
    const res = await jwtFetch('/api/users/current');
    const user = await res.json();
    return dispatch(receiveCurrentUser(user));
};

const nullErrors = null;

export const sessionErrorsReducer = (state = nullErrors, action) => {
    switch(action.type){
        case RECEIVE_SESSION_ERRORS:
            return action.errors
        // case RECEIVE_CURRENT_USER:
        //     return { ...state, user: action.currentUser};
        case REMOVE_SESSION_ERRORS:
            return nullErrors;
        default:
            return state;
    }
}

const initialState = {
    user: undefined
};

export const sessionReducer = (state = initialState, action) => {
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return {user: action.currentUser}
        case REMOVE_CURRENT_USER:
            return initialState;
        default:
            return state;
    }
};

export default sessionReducer