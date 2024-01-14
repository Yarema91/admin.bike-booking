import { createAsyncThunk } from "@reduxjs/toolkit";
import * as bikesAPI from "../../services/bikes-api";
import { Bike } from '../../types/models';

export const getBikes = createAsyncThunk(
  "bikes/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const bikes = await bikesAPI.getBikes();
      return bikes as Bike[];
    } catch (error) {
      console.log("Error getBikes actions");
      return rejectWithValue(error);
    }
  }
);

export const addBike = createAsyncThunk(
  "bikes/add",
  async (bike: Bike, { rejectWithValue }) => {
    try {
      const bikes = await bikesAPI.addBike(bike);
      return bikes;
    } catch (error) {
      if (error instanceof Error) {
        // Handle specific error type (e.g., network error, validation error)
        return rejectWithValue(error.message);
      } else {
        // Handle other types of errors
        return rejectWithValue("An unknown error occurred");
      }
    }
  }
);

export const deleteBike = createAsyncThunk(
  "bikes/deleteById",
  async (id: Bike['id'], { rejectWithValue }) => {
    try {
      const bikes = await bikesAPI.deleteBike(id);
      return bikes;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateBikeStatus = createAsyncThunk(
  "bikes/updateBikeStatus",
  async ({ id, status }: { id: string; status: "available" | "busy" | "unavailable" }, { rejectWithValue }) => {
    try {
      const bikes = await bikesAPI.updateBikeStatus({ id, status });
      return bikes;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);