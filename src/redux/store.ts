import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
import CombineSagas from "./root-saga";
import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";

const LendsqrConfig = {
  key: "Lendsqr",
  storage: storage,
  whitelist: [""],
  blacklist: ["alert"],
};

const pReducer = persistReducer(LendsqrConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const store =
  process.env.NODE_ENV === "production"
    ? configureStore({
        reducer: pReducer,
        middleware: [sagaMiddleware],
      })
    : configureStore({
        reducer: pReducer,
        middleware: [sagaMiddleware, logger],
      });

sagaMiddleware.run(CombineSagas);

const persistor = persistStore(store);

/*
localStorage.clear();
persistor.purge();
*/

export { persistor, store };
