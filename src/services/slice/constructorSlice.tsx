import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TConstructorIngredient } from '@utils-types';
import { v4 as uuidv4 } from 'uuid';

<<<<<<< HEAD
export type BurgerConstructorState = {
=======
export type TBurgerConstructorState = {
>>>>>>> review
  bun: TConstructorIngredient | null;
  ingredients: TConstructorIngredient[];
};

<<<<<<< HEAD
export const initialState: BurgerConstructorState = {
=======
export const initialState: TBurgerConstructorState = {
>>>>>>> review
  bun: null,
  ingredients: []
};

<<<<<<< HEAD
export const constructorSlice = createSlice({
=======
export const burgerConstructorSlice = createSlice({
>>>>>>> review
  name: 'burgerConstructor',
  initialState,
  reducers: {
    addToIngredient: {
      reducer: (state, action: PayloadAction<TConstructorIngredient>) => {
        if (action.payload.type === 'bun') {
          state.bun = action.payload;
        } else {
          state.ingredients.push(action.payload);
        }
      },
      prepare: (ingredient: TConstructorIngredient) => {
        const id = uuidv4();
        return { payload: { ...ingredient, id } };
      }
    },
    removeIngredient: (
      state,
      action: PayloadAction<TConstructorIngredient>
    ) => {
      const ingredientIndex = state.ingredients.findIndex(
        (ingredient) => ingredient.id === action.payload.id
      );
      if (ingredientIndex >= 0) {
        state.ingredients.splice(ingredientIndex, 1);
      }
    },
    clearConstructor: (state) => (state = initialState),

    moveIngredientDown: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      if (index < state.ingredients.length - 1) {
        const ingredient = state.ingredients[index];
        state.ingredients[index] = state.ingredients[index + 1];
        state.ingredients[index + 1] = ingredient;
      }
    },
    moveIngredientUp: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      if (index > 0) {
        const ingredient = state.ingredients[index];
        state.ingredients[index] = state.ingredients[index - 1];
        state.ingredients[index - 1] = ingredient;
      }
    }
  },
  selectors: {
    constructorItems: (state) => state
  }
});

export const {
  addToIngredient,
  removeIngredient,
  clearConstructor,
  moveIngredientDown,
  moveIngredientUp
<<<<<<< HEAD
} = constructorSlice.actions;

export const constructorReducer = constructorSlice.reducer;
export const constructorSelector = constructorSlice.selectors;
=======
} = burgerConstructorSlice.actions;

export const burgerConstructorReducer = burgerConstructorSlice.reducer;
export const constructorBurgerSelector = burgerConstructorSlice.selectors;
>>>>>>> review
