import { legacy_createStore as createStore } from 'redux';
import rootReducer from '../reducers/index';

let store;

if (typeof window !== 'undefined') {
  store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
} else {
  store = createStore(rootReducer);
}

store.subscribe(() => console.log('El estado es: ', store.getState()));

export default store;
