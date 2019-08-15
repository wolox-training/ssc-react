import dataFetch from '../../services/MatchesService';

export const actions = {
  SET_AUTH: '@@DATA/SET_AUTH',
  LOGIN_REQUEST: '@@DATA/LOGIN_REQUEST',
  LOGIN_SUCCESS: '@@DATA/GLOGIN_SUCCESS',
  LOGIN_FAILURE: '@@DATA/LOGIN_FAILURE'
};

const actionsCreators = {
  onLogin: values => async dispatch => {
    dispatch({ type: actions.LOGIN_REQUEST });
    try {
      const res = await dataFetch.onLogin(values);
      if (res.status === 200) {
        localStorage.setItem('token', res.data.token);
        return dispatch({ type: actions.SET_AUTH, hasToken: true, isError: false });
      }
      return dispatch({ type: actions.SET_AUTH, hasToken: false, isError: true });
    } catch (error) {
      return error;
    }
  },
  setLogin: () => dispatch => {
    const hasToken = !!localStorage.getItem('token');
    dispatch({ type: actions.SET_AUTH, hasToken });
  }
};

export default actionsCreators;
