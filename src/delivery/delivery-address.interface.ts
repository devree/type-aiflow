import type { IDeliveryCustomer } from './delivery-customer.interface.js';

export interface IDeliveryAddress {
  id: string;
  name: string;
  addrFull: string;
  addrNumber: string;
  province: string;
  amphoe: string;
  tambon: string;
  postcode: string;
  lat: string;
  lng: string;
  createdAt: Date;
  createdBy: string;
  updatedAt: Date;
  updatedBy: string;
  isDefault: boolean;
  deliveryCustomer: IDeliveryCustomer;
}

export interface ICreateDeliveryAddress {
  name: string;
  description: string;
  addrFull: string;
  addrNumber: string;
  province: string;
  amphoe: string;
  tambon: string;
  postcode: string;
  lat: string;
  lng: string;
  isDefault: boolean;
  customerId: string;
}

export interface IUpdateDeliveryAddress {
  name?: string;
  addrFull?: string;
  addrNumber?: string;
  province?: string;
  amphoe?: string;
  tambon?: string;
  postcode?: string;
  lat?: string;
  lng?: string;
  isDefault?: boolean;
  customerId: string;
}
