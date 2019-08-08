import dataFetch from '../../services/MatchesService';

export const actions = {
  GET_DATA_REQUEST: '@@DATA/GET_DATA_REQUEST',
  GET_DATA_SUCCESS: '@@DATA/GET_DATA_SUCCESS',
  GET_DATA_FAILURE: '@@DATA/GET_DATA_FAILURE'
};

const actionsCreators = {
  getData: () => dispatch => {
    dispatch({ type: actions.GET_DATA_REQUEST });
    dataFetch.getMatches().then(response => {
      const { data } = response;
      dispatch({ type: actions.GET_DATA_SUCCESS, data });
    }).catch((error) => {
      dispatch({ type: actions.GET_DATA_FAILURE, error });
    });
  }
};

export default actionsCreators;
