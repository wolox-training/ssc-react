import { actions } from './actions';

const initialState = {
  loading: false,
  data: []
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_DATA_REQUEST:
      return {
        ...state,
        loading: true
      };
    case actions.GET_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data
      };
    case actions.GET_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        data: []
      };
    default:
      return state;
  }
};

export default data;
