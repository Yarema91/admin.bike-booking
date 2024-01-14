import { RootState } from '../store';
import { Bike } from '../../types/models';
import { createSelector } from '@reduxjs/toolkit'; // new

export function convertToInternalStatus(uiStatus: string): Bike['status'] | undefined {
  const lowercaseStatus = uiStatus.toLowerCase();
  if (lowercaseStatus === 'available' || lowercaseStatus === 'busy' || lowercaseStatus === 'unavailable') {
    return lowercaseStatus as Bike['status'];
  }
  return undefined; // or handle invalid status
}

export const getAll = (state: RootState) => state.bikes.items;

export const getTotalLength = (state: RootState) => state.bikes.items.length;

export const getAllAvailable = (state: RootState) => {
  const filtered = state.bikes.items.filter(
    (bike) => convertToInternalStatus(bike.status) === "available"
  );
  return filtered.length;
};

export const getAllBooked = (state: RootState) => {
  const filtered = state.bikes.items.filter((bike) =>
    convertToInternalStatus(bike.status) === "busy");
  return filtered.length;
};

// export const getAveragePrice = (state: RootState) => {
//   const prices = state.bikes.items.map(({ price }) => price);
//   const totalPrice = prices.reduce((acc, number) => acc + number, 0);
//   const totalLength = prices.length;

//   return Math.round(totalPrice / totalLength);
// };

export const getAveragePrice = createSelector(
  [getAll],
  (bikes) => {
    const prices = bikes.map(({ price }) => price);
    const totalPrice = prices.reduce((acc, number) => acc + number, 0);
    const totalLength = prices.length;

    return Math.round(totalPrice / totalLength);
  }
);

