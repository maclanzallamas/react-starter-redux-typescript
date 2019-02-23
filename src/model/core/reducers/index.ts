import { combineReducers } from 'redux';
import createReducer from 'redux-action-reducer';
import { IAppState } from '../../../state';
import { CoreActions } from '../actions';

const searchText = createReducer<string>(
    [CoreActions.InitApp, (_:any, payload:string) => payload],
)('');

const emptyString = createReducer<string>(
    [CoreActions.InitApp, (_:any, payload:string) => payload],
)('');

export const reducers = combineReducers<IAppState>({
  emptyString,
  searchText
});
