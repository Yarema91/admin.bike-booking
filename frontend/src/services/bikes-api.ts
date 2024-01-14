import axios from "axios";
import { Bike } from "../types/models";

axios.defaults.baseURL = "http://localhost:4000/api";

export async function getBikes(): Promise<Bike[]> {
  const { data } = await axios.get("/bikes");
  return data;
}
export async function addBike(bike: Bike) {

  const { data } = await axios.post("/bikes", bike);
  return data;
}

export async function deleteBike(id: Bike['id']) {
  const { data } = await axios.delete(`/bikes/${id}`);
  return data;
}

export async function updateBikeStatus({ id, status }: { id: Bike['id']; status: Bike['status'] }) {
  const { data } = await axios.patch(`/bikes/${id}`, { status });
  return data;
}
