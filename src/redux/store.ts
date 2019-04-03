import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

import storage from 'redux-persist/lib/storage';

import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage
};

// function logger({ getState: any }) {
//   return next => (action) => {
//     // console.log('will dispatch', action);
//     const returnValue = next(action);

//     console.log('state after dispatch', getState());
//     return returnValue;
//   };
// }

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore( persistedReducer,
  applyMiddleware(thunk)
);

export default store;
export const persistor = persistStore(store);