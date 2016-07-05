import { createStore, applyMiddleware, compose } from 'redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk';
import DevTools from './containers/devTools'
import rootReducer from './reducers'
export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
       applyMiddleware(thunk, createLogger()),
      DevTools.instrument()
    )
  )
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers')
      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}