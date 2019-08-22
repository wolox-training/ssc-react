import dataFetch from '../../services/MatchesService';

export const actions = {
  GET_DATA_REQUEST: '@@DATA/GET_DATA_REQUEST',
  GET_DATA_SUCCESS: '@@DATA/GET_DATA_SUCCESS',
  GET_DATA_FAILURE: '@@DATA/GET_DATA_FAILURE',
  CREATE_DATA_REQUEST: '@@CREATE_DATA_REQUEST',
  CREATE_DATA_SUCCESS: '@@CREATE_DATA_SUCCESS'
};

const actionsCreators = {
  getData: () => async dispatch => {
    dispatch({ type: actions.GET_DATA_REQUEST });
    try {
      const response = await dataFetch.getMatches();
      console.log(response.data);
      const { data } = response;
      dispatch({ type: actions.GET_DATA_SUCCESS, data });
    } catch (error) {
      dispatch({ type: actions.GET_DATA_FAILURE, error });
    }
  },
  createData: (values) => async dispatch => {
    dispatch({ type: actions.CREATE_DATA_REQUEST });
    try {
      const token = localStorage.getItem('token');
      await dataFetch.createMatches(values, token);
      const response = await dataFetch.getMatches();
      const { data } = response;
    } catch (error) {
      return error;
    }
  }
};

export default actionsCreators;
