import { actions } from './actions';

const initialState = {
  isUserLoggedIn: false,
  isUserError: false
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_AUTH:
      return {
        ...state,
        isUserLoggedIn: action.hasToken,
        isUserError: action.isError
      };
    default:
      return state;
  }
};

export default login;
