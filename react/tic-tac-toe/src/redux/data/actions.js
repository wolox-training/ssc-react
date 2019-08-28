import { createTypes, completeTypes } from 'redux-recompose';

import FetchService from '../../services/MatchesService';

export const actions = createTypes(completeTypes(['GET_DATA']), '@@SOCCER');

const actionsCreators = {
  getData: () => ({
    type: actions.GET_DATA,
    target: 'data',
    service: FetchService.getMatches
  })
};

export default actionsCreators;
