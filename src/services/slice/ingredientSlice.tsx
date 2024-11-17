import { TIngredient } from '@utils-types';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getIngredientsApi } from '@api';

export const getIngredientsList = createAsyncThunk(
  'ingredients/getIngredients',
  getIngredientsApi
);

<<<<<<< HEAD
export type ingredientsState = {
=======
export type TBurgerIngredientsState = {
>>>>>>> review
  ingredients: TIngredient[];
  loading: boolean;
  error: string | null | undefined;
};

<<<<<<< HEAD
export const initialState: ingredientsState = {
=======
export const initialState: TBurgerIngredientsState = {
>>>>>>> review
  ingredients: [],
  loading: false,
  error: null
};

<<<<<<< HEAD
export const ingredientsSlice = createSlice({
=======
export const burgerIngredientsSlice = createSlice({
>>>>>>> review
  name: 'burgerIngredients',
  initialState,
  reducers: {},
  selectors: {
    getIngredientsSelector: (state) => state.ingredients,
    getIngredientsLoadingSelector: (state) => state.loading,
    getIngredientsStateSelector: (state) => state
  },
  extraReducers: (builder) => {
    builder
      .addCase(getIngredientsList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getIngredientsList.fulfilled, (state, action) => {
        state.ingredients = action.payload;
        state.loading = false;
      })
      .addCase(getIngredientsList.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  }
});

export const {
  getIngredientsSelector,
  getIngredientsLoadingSelector,
  getIngredientsStateSelector
<<<<<<< HEAD
} = ingredientsSlice.selectors;

export const ingredientReducer = ingredientsSlice.reducer;
=======
} = burgerIngredientsSlice.selectors;

export const ingredientsSliceReducer = burgerIngredientsSlice.reducer;
>>>>>>> review
