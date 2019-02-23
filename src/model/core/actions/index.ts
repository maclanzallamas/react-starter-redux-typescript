import { IAppState } from '../../../state';
import { IFluxPayloadAction, IFluxAction } from '../../../modules/common/models/fluxActions';

export enum CoreActions {
    InitApp = 'core/INIT_APP',
    FetchOData = 'core/FETCH_ODATA',
    FetchODataSuccess = 'core/FETCH_ODATA_SUCCESS'
}

export type ActionTypes =
    | IFluxPayloadAction<CoreActions.InitApp, IAppState>
    | IFluxAction<CoreActions.FetchOData>
    | IFluxPayloadAction<CoreActions.FetchODataSuccess, string>

export const initApp = (payload:IAppState):ActionTypes => ({
    type: CoreActions.InitApp,
    payload
});

export const fetchOData = ():ActionTypes => ({
    type: CoreActions.FetchOData
});

export const fetchODataSuccess = (payload:string):ActionTypes => ({
    type: CoreActions.FetchODataSuccess,
    payload
});

