import { combineEpics, Epic, ofType } from 'redux-observable';
import { Action } from 'redux';
import { CoreActions, fetchODataSuccess } from '../actions';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

export const fetchODataEffect:Epic<Action, Action> = (action$) =>
  action$.pipe(
    ofType(CoreActions.FetchOData),
    switchMap(() =>
        of(fetchODataSuccess('test'))
    )
  );

export const effects = combineEpics(
    fetchODataEffect
  );
  