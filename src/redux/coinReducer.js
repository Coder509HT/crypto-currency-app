import { createSlice } from "@reduxjs/toolkit";

const coinSlice = createSlice({
  name: "coins",
  initialState: { coins: [], coinIsLoading: false, coinToSearch: "" },
  reducers: {
    lodingCoins: (state) => {
      state.coinIsLoading = true;
    },
    setCoinsLoaded: (state, action) => {
      state.coins = action.payload;
      state.coinIsLoading = false;
    },
    setCoinToSearch: (state, action) => {
      state.coinToSearch = action.payload;
    },
  },
});

export const { lodingCoins, setCoinsLoaded, setCoinToSearch } =
  coinSlice.actions;

export default coinSlice.reducer;
