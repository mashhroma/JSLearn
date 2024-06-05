import React from 'react';
import ReactDOM from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import rootReducer from '.rootReducer';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import muSaga from './sagas';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import asyncMiddlewareEx3 from './asyncMiddlewareEx3'
import App from './App';
import './index.css';
import dataReducer from './dataReducer';
import persistReducer from 'redux-persist/es/persistReducer';


//EX1
const middleware = store => next => action => {
  console.log('Effect');

  setTimeout(() => {
    console.log('time-outs');
  }, 1000);

  return next(action);
};

// EX2
// logger
const loggerMiddleware = store => next => action => {
  console.log('dispatching', action);
  return next(action);
};

//EX Saga//
const sagaMiddleware = createSagaMiddleware();

//
const persistConfig = {
  key: 'root',
  storage,
};

//
const persistReducer = persistReducer(persistConfig, rootReducer);

//
const store = configureStore({
  reducer: persistReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoreActions: ['persist/PERSIST'],
      //
    },
  }).concat(middleware, loggerMiddleware, asyncMiddlewareEx3, thunk, sagaMiddleware),
});

// const store = configureStore({
//   reducer: {
//     ...rootReducer,
//     data: dataReducer,
//   },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware, loggerMiddleware, asyncMiddlewareEx3, thunk, sagaMiddleware),
// });


// // Запускаем нашу сагу
sagaMiddleware.run(mySaga);

let persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

//Preslist

// ReactDOM.render(
//   <Provider>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );





// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
