type ActionReducer<TState, TPayload> = (state:TState, payload:TPayload) => TState;

type CreateActionReducerFunction<TState, TPayload> =
  | (string)
  | (string[])
  | ([string, ActionReducer<TState, TPayload>])
  | ([string, string, ActionReducer<TState, TPayload>])
  | ([string, string, string, ActionReducer<TState, TPayload>])
  | ([string, string, string, string, ActionReducer<TState, TPayload>])
  | ([string, string, string, string, string, ActionReducer<TState, TPayload>])
  | ([string, string, string, string, string, string, ActionReducer<TState, TPayload>])
  | ([string, string, string, string, string, string, string, ActionReducer<TState, TPayload>])
  | ([string, string, string, string, string, string, string, string, ActionReducer<TState, TPayload>]);

declare module 'redux-action-reducer' {
  import { Reducer } from 'redux';

  export default function createReducer<TState, TPayload = any>(
    ...reducers:Array<CreateActionReducerFunction<TState, TPayload>>
  ):((initialState:TState) => Reducer<TState>);
}
