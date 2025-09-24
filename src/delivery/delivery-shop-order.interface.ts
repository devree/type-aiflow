import type { IDeliveryOrder, OrderItem } from './delivery-order.interface.js';
import type { IDeliveryShop } from './delivery-shop.interface.js';

export interface IDeliveryShopOrder {
  id: string;
  createdAt: Date;
  createdBy: string;
  updatedAt: Date;
  updatedBy: string;
  totalAmount: number;
  orderItems: OrderItem[];
  deliveryShop: IDeliveryShop;
  deliveryOrder: IDeliveryOrder;
}

export interface ICreateDeliveryShopOrder {
  shopId: string;
  totalAmount?: number;
  orderItems: OrderItem[];
  createdBy: string;
}

export interface IUpdateDeliveryShopOrder {
  shopId: string;
  totalAmount?: number;
  orderItems?: OrderItem[];
}
