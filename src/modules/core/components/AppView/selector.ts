import { createSelector } from 'reselect';

import { IAppState } from '../../../../state';

export const getCoreState = (state:IAppState) => state;

export const getSearchText = createSelector(
  getCoreState,
  (state) => state.searchText
);

export const getEmptyString = createSelector(
  getCoreState,
  (state) => state.emptyString
);

export default createSelector(
  (state:IAppState) => state, 
  (state) => {
    return {
      searchText: state.searchText,
      emptyString: state.emptyString
    };
  }
);
