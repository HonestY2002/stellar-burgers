import { configureStore, combineReducers } from '@reduxjs/toolkit';

import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook
} from 'react-redux';
import { constructorReducer } from './slice/constructorSlice';
import { ingredientReducer } from './slice/ingredientSlice';
import { userReducer } from './slice/userSlice';
import { feedReducer } from './slice/feedSlice';
import { orderReducer} from './slice/orderSlice';
import { addOrderReducer } from './slice/addOrderSlice';

export const rootReducer = combineReducers({
  burgerConstructor: constructorReducer,
  burgerIngredients: ingredientReducer,
  user: userReducer,
  feeds: feedReducer,
  orders: orderReducer,
  addOrder: addOrderReducer
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export const useDispatch: () => AppDispatch = () => dispatchHook();
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

export default store;
