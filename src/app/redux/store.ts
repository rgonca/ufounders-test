import { createStore, applyMiddleware, StoreEnhancer } from 'redux'

import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore } from 'redux-persist'
import thunk from 'redux-thunk'
import rootReducer from './root.reducer'

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION__?: () => StoreEnhancer;
    }
}

const middlewares = [thunk]

const composeEnhancers = composeWithDevTools({
    actionSanitizer: (action: any) => process.env.NODE_ENV === 'development' ? action : null,
    stateSanitizer: (state: any) => process.env.NODE_ENV === 'development' ? state : null
})

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)))

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch