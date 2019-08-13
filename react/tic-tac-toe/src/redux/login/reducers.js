import { actions } from './actions';

const initialState = {
  isUserLoggedIn: false
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_STATE:
      return {
        ...state,
        isUserLoggedIn: action.token
      };
    default:
      return state;
  }
};

export default login;
