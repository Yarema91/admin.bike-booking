export interface Bike {
  _id: string;
  name: string;
  type: string;
  color: string;
  wheelSize: number;
  price: number;
  id: string;
  description: string;
  status: 'available' | 'busy' | 'unavailable';
  bikeId: string
}
