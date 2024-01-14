import { createSlice } from "@reduxjs/toolkit";
import {
  getBikes, addBike, deleteBike, updateBikeStatus
} from "./actions";
import { Bike } from '../../types/models';


interface BikesState {
  items: Bike[];
  error: string | null;
}

const initialState: BikesState = {
  items: [],
  error: null,
};

const bikesSlice = createSlice({
  name: "bikes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBikes.fulfilled, (state, action) => {
      state.items = action.payload;
    })
    builder.addCase(addBike.pending, (state) => {
      state.error = null;
    })
    builder.addCase(addBike.fulfilled, (state, action) => {
      state.items.push(action.payload);
    })
    builder.addCase(deleteBike.fulfilled, (state, action) => {
      state.items = state.items.filter(({ _id }) => _id !== action.payload._id);
    })
    builder.addCase(updateBikeStatus.fulfilled, (state, action) => {
      state.items.splice(
        state.items.findIndex(({ _id }) => _id === action.payload._id),
        1,
        action.payload
      );
    })
  },
});

export const bikesReducer = bikesSlice.reducer;
