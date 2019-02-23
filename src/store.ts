import { reducers } from './model/core/reducers';
import { createStore, applyMiddleware  } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';
import { effects } from './model/core/effects';

const composeEnhancers = composeWithDevTools({
  name: 'kpi-coe'
});

const epicMiddleware = createEpicMiddleware();

export default function configureStore() {
    const store = createStore(
        reducers,
        composeEnhancers(
            applyMiddleware(epicMiddleware)
        )
    );
    
    epicMiddleware.run(effects);
    
    return store;
    }