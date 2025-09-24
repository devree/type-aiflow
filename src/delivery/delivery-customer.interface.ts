import type { IDeliveryAddress } from './delivery-address.interface.js';
import type { IDeliveryOrder } from './delivery-order.interface.js';

export interface IDeliveryCustomer {
  id: string;
  fname: string;
  lname: string;
  nickName: string;
  imgUrl: string;
  tel: string;
  uuid: string;
  createdAt: Date;
  createdBy: string;
  updatedAt: Date;
  updatedBy: string;
  deliveryAddresses: IDeliveryAddress[];
  company: any;
  deliveryOrders: IDeliveryOrder[];
}

export interface ICreateDeliveryCustomer {
  fname: string;
  lname: string;
  nickName?: string;
  imgUrl?: string;
  tel: string;
  uuid: string;
  compId: string;
}

export interface IUpdateDeliveryCustomer {
  fname?: string;
  lname?: string;
  nickName?: string;
  imgUrl?: string;
  tel?: string;
  uuid?: string;
  compId: string;
}
