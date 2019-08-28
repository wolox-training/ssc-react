import { createTypes, completeTypes } from 'redux-recompose';

import FetchService from '../../services/MatchesService';

export const actions = createTypes(completeTypes(['GET_DATA', 'CREATE_DATA', 'ON_LOGIN', 'SET_AUTH']), '@@SOCCER');

const actionsCreators = {
  getData: () => ({
    type: actions.GET_DATA,
    target: 'data',
    service: FetchService.getMatches
  }),
  createData: values => ({
    type: actions.GET_DATA,
    target: 'createData',
    payload: values,
    service: FetchService.createMatches
  })
};

export default actionsCreators;
