import { CURRENT_USER, FETCH_USERS, SET_USERS } from "redux/constants/GetUsers";

const defaultState = {
  users: [],
  currentUser: {},
  loading: true
}

export default function userReducer(state = defaultState, action) {
  switch(action.type) {
    case SET_USERS:
      return {
        ...state, 
        users: action.payload,
        loading: false
      }
    case CURRENT_USER:
      return{
        ...state,
        currentUser: action.payload
      }
    default:
      return state
  }
}

export const setUsers = payload => ({type: SET_USERS, payload});
export const fetchUsers = () => ({type: FETCH_USERS});
export const setCurrentUser = payload => ({type: CURRENT_USER, payload});