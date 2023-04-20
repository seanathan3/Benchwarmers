import jwtFetch from "./jwt";
import { receiveSessionErrors } from "./session";

const RECEIVE_USER = 'users/RECEIVE_USER'
const REMOVE_USER = 'users/REMOVE_USER'

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const removeUser = userId => ({
  type: REMOVE_USER,
  userId
})

export const getUser = (userId) => state => {
  return state?.users ? state.users[userId] : null 
};

export const fetchUser = userId => async dispatch => {
  const res = await jwtFetch(`/api/users/${userId}`)
  const data = await res.json();
  dispatch(receiveUser(data))
};

export const updateUser = (user) => async dispatch => {
  try {
    const res = await jwtFetch(`/api/users/${user._id}`, {
      method: "PATCH",
      body: JSON.stringify(user),
      headers: {"Content-Type": "application/json"}
    })
    const data = await res.json();
    dispatch(receiveUser(data))
  }
  catch(err) {
    const res = await err.json();
    if (res.statusCode === 400) {
      return dispatch(receiveSessionErrors(res.errors));
    }  
  }
}

export const deleteUser = userId => async dispatch => {
  const res = await jwtFetch(`/api/users/${userId}`, {
    method: 'DELETE'
  })
  if (res.ok) {
    dispatch(removeUser(userId))
  }
}

const userReducer = (state={}, action) => {
  let nextState = {...state}
  switch (action.type) {
    case RECEIVE_USER:
      nextState[action.user._id] = action.user
      return nextState;
    case REMOVE_USER:
      delete nextState[action.userId]
      return nextState
    default:
        return state
  }
};

export default userReducer;