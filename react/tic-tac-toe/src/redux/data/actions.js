import { createTypes, completeTypes } from 'redux-recompose';

import FetchService from '../../services/MatchesService';
import { TARGETS } from '../../constants/targets';

export const actions = createTypes(completeTypes(['GET_DATA', 'CREATE_DATA']), '@@SOCCER');

const actionsCreators = {
  getData: () => ({
    type: actions.GET_DATA,
    target: TARGETS.data,
    service: FetchService.getMatches
  }),
  createData: values => ({
    type: actions.GET_DATA,
    target: TARGETS.createData,
    payload: values,
    service: FetchService.createMatches
  })
};

export default actionsCreators;
