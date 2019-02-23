import { createSelector } from "reselect";
import { IAppState } from "../../../state";

const getAppState = (state:IAppState) => state;

export const getEmptyString = createSelector(
    [getAppState],
    (state) => state.emptyString
  );