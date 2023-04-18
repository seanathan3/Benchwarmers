import jwtFetch from "./jwt";

const RECEIVE_USER = 'users/RECEIVE_USER'

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const getUser = (userId) => state => {
  return state?.users ? state.users[userId] : null 
};

export const fetchUser = userId => async dispatch => {
  const res = await jwtFetch(`/api/users/${userId}`)
  const data = await res.json();
  dispatch(receiveUser(data))
};

export const updateUser = (user) => async dispatch => {
  const res = await jwtFetch(`/api/users/${user.id}`, {
    method: "PATCH",
    body: JSON.stringify(user),
    headers: {"Content-Type": "application/json"}
  })
  const data = await res.json();
  dispatch(receiveUser(data))
}

const userReducer = (state={}, action) => {
  let nextState = {...state}
  switch (action.type) {
    case RECEIVE_USER:
      nextState[action.user._id] = action.user
      return nextState;
    default:
        return state
  }
};

export default userReducer;