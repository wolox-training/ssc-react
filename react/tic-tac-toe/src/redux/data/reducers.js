import { actions } from './actions';

const initialState = {
  loading: false,
  data: [],
  error: false
};

const game = (state = initialState, action) => {
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
        error: action.error
      };
    case action.CREATE_DATA_REQUEST:
      return {
        ...state,
        loading: true
      };
    case action.CREATE_DATA_SUCCES:
      return {
        ...state,
        loading: false
      };
    case actions.CREATE_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: true
      };
    default:
      return state;
  }
};

export default game;
