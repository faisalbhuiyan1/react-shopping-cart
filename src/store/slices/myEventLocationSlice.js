import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  defaultFormValues: null,
  showAddEditMyEventLocation: false,
  list: [],
};

export const myEventLocationSlice = createSlice({
  name: "myEventLocation",
  initialState,
  reducers: {
    setSelectedFormValuesTour: (state, action) => {
      state.defaultFormValues = action.payload;
    },
    deleteSelectedTour: (state, action) => {
      state.list = state.list.filter((item) => item.id !== action.payload);
    },
    setShowAddEditMyEventLocation: (state, action) => {
      state.showAddEditMyEventLocation = action.payload;
      state.defaultFormValues = action.payload ? state.defaultFormValues : null;
    },
    updateListAndResetValues: (state, action) => {
      const existingIndex = state.list.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingIndex > -1) {
        state.list[existingIndex] = action.payload;
      } else {
        state.list = [
          ...state.list,
          { ...action.payload, id: String(Math.random() * 1000000) },
        ];
      }
      state.showAddEditMyEventLocation = false;
      state.defaultFormValues = null;
    },
  },
});

export const {
  setSelectedFormValuesTour,
  deleteSelectedTour,
  setShowAddEditMyEventLocation,
  updateListAndResetValues,
} = myEventLocationSlice.actions;

export default myEventLocationSlice.reducer;
