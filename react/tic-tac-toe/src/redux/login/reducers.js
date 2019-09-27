import { actions } from './actions';

const initialState = {
  isUserLoggedIn: false,
  loading: false,
  isUserError: false
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGIN_REQUEST:
      return {
        ...state,
        loading: true
      };
    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isUserLoggedIn: action.hasToken
      };
    case actions.LOGIN_FAILURE:
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
