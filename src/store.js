import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { removeFromArray } from "./helpers";

export const useRecipes = create(
  persist(
    (set) => ({
      recipes: [],
      page: 1,
      addRecipes: (newRecipes) =>
        set((state) => {
          return { recipes: [...state.recipes, ...newRecipes] };
        }),
      refreshRecipes: () =>
        set(() => {
          return { recipes: [] };
        }),
      deleteRecipes: (recipesForDeleting) =>
        set((state) => {
          return {
            recipes: removeFromArray(state.recipes, recipesForDeleting),
          };
        }),
      updatePage: (newPage = 1) =>
        set(() => {
          return { page: newPage };
        }),
    }),
    { name: "recipes", storage: createJSONStorage(() => localStorage) }
  )
);
