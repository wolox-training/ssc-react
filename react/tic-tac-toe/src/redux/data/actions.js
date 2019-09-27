import dataFetch from '../../services/MatchesService';

export const actions = {
  GET_DATA_REQUEST: '@@DATA/GET_DATA_REQUEST',
  GET_DATA_SUCCESS: '@@DATA/GET_DATA_SUCCESS',
  GET_DATA_FAILURE: '@@DATA/GET_DATA_FAILURE',
  CREATE_DATA_REQUEST: '@@CREATE_DATA_REQUEST',
  CREATE_DATA_SUCCESS: '@@CREATE_DATA_SUCCESS',
  CREATE_DATA_FAILURE: '@@CREATE_DATA_FAILURE'
};

const actionsCreators = {
  getData: () => async dispatch => {
    dispatch({ type: actions.GET_DATA_REQUEST });
    try {
      const response = await dataFetch.getMatches();
      if (response.status === 200) {
        const { data } = response;
        return dispatch({ type: actions.GET_DATA_SUCCESS, data });
      }
      return dispatch({ type: actions.GET_DATA_FAILURE });
    } catch (error) {
      return dispatch({ type: actions.GET_DATA_FAILURE, error });
    }
  },
  createData: values => async dispatch => {
    dispatch({ type: actions.CREATE_DATA_REQUEST });
    try {
      const res = await dataFetch.createMatches(values);
      if (res.status === 200) {
        return dispatch({ type: actions.CREATE_DATA_SUCCESS });
      }
      return dispatch({ type: actions.CREATE_DATA_FAILURE });
    } catch (error) {
      return dispatch({ type: actions.CREATE_DATA_FAILURE });
    }
  }
};

export default actionsCreators;
