import {
  configureStore,
  ThunkAction,
  Action,
  EnhancedStore,
} from '@reduxjs/toolkit';

import counterReducer from './slices/counterSlice';

export function makeStore(): EnhancedStore {
  return configureStore({
    reducer: { counter: counterReducer },
  });
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export default store;
