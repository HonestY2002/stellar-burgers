import { configureStore, combineReducers } from '@reduxjs/toolkit';

import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook
} from 'react-redux';
import { burgerConstructorReducer } from './slice/constructorSlice';
import { ingredientsSliceReducer } from './slice/ingredientSlice';
import { userReducer } from './slice/userSlice';
import { feedsReducer } from './slice/feedSlice';
import { ordersReducer } from './slice/orderSlice';
import { addOrderReducer } from './slice/addOrderSlice';

const rootReducer = combineReducers({
  burgerConstructor: burgerConstructorReducer,
  burgerIngredients: ingredientsSliceReducer,
  user: userReducer,
  feeds: feedsReducer,
  orders: ordersReducer,
  addOrder: addOrderReducer
}); // Заменить на импорт настоящего редьюсера

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export const useDispatch: () => AppDispatch = () => dispatchHook();
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

export default store;
