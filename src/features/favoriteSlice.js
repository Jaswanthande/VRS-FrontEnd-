import { createSlice } from "@reduxjs/toolkit";

// Get saved favorites from localStorage
const savedFavorites = JSON.parse(
  localStorage.getItem("favorites") || "[]"
);

const favoriteSlice = createSlice({
  name: "favorites",

  initialState: {
    favorites: savedFavorites,
  },

  reducers: {
    addFavorite: (state, action) => {
      const vehicle = action.payload;

      const alreadyExists = state.favorites.some(
        (item) => item.id === vehicle.id
      );

      if (!alreadyExists) {
        state.favorites.push(vehicle);

        // Save updated favorites
        localStorage.setItem(
          "favorites",
          JSON.stringify(state.favorites)
        );
      }
    },

    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        (item) => item.id !== action.payload
      );

      // Save updated favorites
      localStorage.setItem(
        "favorites",
        JSON.stringify(state.favorites)
      );
    },
  },
});

export const {
  addFavorite,
  removeFavorite,
} = favoriteSlice.actions;

export default favoriteSlice.reducer;