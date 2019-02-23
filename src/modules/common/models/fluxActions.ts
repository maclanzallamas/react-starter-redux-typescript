import { Action } from 'redux';

export interface IFluxAction<TAction extends string> extends Action {
  type:TAction;
  error?:boolean;
}

export interface IFluxPayloadAction<TAction extends string, TPayload> extends IFluxAction<TAction> {
  payload:TPayload;
}

export interface IFluxErrorAction<TAction extends string, TPayload = void>
  extends IFluxPayloadAction<TAction, TPayload> {
  error:true;
}
