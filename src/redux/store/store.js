// import { createStore, combineReducers ,applyMiddleware,compose} from 'redux';
// import createReducer from '../../redux/reducer/reducer';
// import { createLogger } from 'redux-logger'

// const middleware=[];

// middleware.push(createLogger());

// const rootReducer = combineReducers(
 
//     {userObj: createReducer }
// );
// const enhancer=[applyMiddleware(...middleware)]

// const configureStore = () => {
// return createStore(rootReducer,compose(...enhancer));
// }
// export default configureStore;

import { createStore, combineReducers,applyMiddleware,compose } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist'
import createReducer from '../../redux/reducer/reducer';
import { createLogger } from 'redux-logger'
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
  }
  const middleware=[];

  middleware.push(createLogger());
  
const rootReducer = combineReducers(
 
    {user: persistReducer(persistConfig,createReducer) }
);

// const configureStore = () => {
// return createStore(rootReducer);
// }

const enhancers=[applyMiddleware(...middleware)];
const persist = { enhancers }; 
// const store = createStore(rootReducer,undefined,compose(...enhancer));
// const persistor = persistStore(store,persist);
// const configureStore = () => {
//     return { persistor, store };
//   };
  
//   export default configureStore;
export const store = createStore(rootReducer, compose(...enhancers));
export const persistor = persistStore(store, persist, () => {
});