import { actions } from './actions';

const initialState = {
  loading: true,
  succes: false,
  data: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_DATA_REQUEST:
      return state;
    case actions.GET_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        succes: true,
        data: action.data
      };
    case actions.GET_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        succes: false,
        data: []
      };
    default:
      return state;
  }
}

export default reducer;
