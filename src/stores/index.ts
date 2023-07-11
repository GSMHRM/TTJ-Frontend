import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({});

const makeStore = () => {
  return configureStore({
    reducer: rootReducer
  });
};

export const store = makeStore();
