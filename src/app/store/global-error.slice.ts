import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type GlobalErrorState = {
  message: string | null;
};

const initialState: GlobalErrorState = {
  message: null,
};

const globalErrorSlice = createSlice({
  name: "globalError",
  initialState,
  reducers: {
    setGlobalError(state, action: PayloadAction<string>) {
      state.message = action.payload;
    },
    clearGlobalError(state) {
      state.message = null;
    },
  },
});

export const { setGlobalError, clearGlobalError } = globalErrorSlice.actions;
export default globalErrorSlice.reducer;
