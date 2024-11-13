import { TIngredient } from '@utils-types';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getIngredientsApi } from '@api';

export const getIngredientsList = createAsyncThunk(
  'ingredients/getIngredients',
  getIngredientsApi
);

export type ingredientsState = {
  ingredients: TIngredient[];
  loading: boolean;
  error: string | null | undefined;
};

export const initialState: ingredientsState = {
  ingredients: [],
  loading: false,
  error: null
};

export const ingredientsSlice = createSlice({
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
} = ingredientsSlice.selectors;

export const ingredientReducer = ingredientsSlice.reducer;
