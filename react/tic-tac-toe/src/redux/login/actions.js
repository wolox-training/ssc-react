import dataFetch from '../../services/MatchesService';

export const actions = {
  SET_STATE: '@@DATA/SET_STATE',

  LOGIN_REQUEST: '@@DATA/LOGIN_REQUEST',
  LOGIN_SUCCESS: '@@DATA/GLOGIN_SUCCESS',
  LOGIN_FAILURE: '@@DATA/LOGIN_FAILURE'
};

const actionsCreators = {
  onLogin: values => dispatch => {
    dispatch({ type: actions.LOGIN_REQUEST });
    dataFetch.onLogin(values).then(response => {
      const { data } = response;
      localStorage.setItem('token', data.token);
      dispatch({ type: actions.SET_STATE, token: true });
    });
  },
  setLogin: () => dispatch => {
    const token = !!localStorage.getItem('token');
    dispatch({ type: actions.SET_STATE, token });
  }
};

export default actionsCreators;
