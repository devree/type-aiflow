import type { IDeliveryProduct } from './delivery-product.interface.js';
import type { IDeliveryShop } from './delivery-shop.interface.js';
import type { ShopStatus } from './order.enum.js';

export interface IDeliveryProductGroup {
  id: string;
  name: string;
  description: string;
  imgUrl: string;
  isDefault: boolean;
  createdAt: Date;
  createdBy: string;
  updatedAt: Date;
  updatedBy: string;
  status: ShopStatus;
  deliveryShop: IDeliveryShop;
  deliveryProducts: IDeliveryProduct[];
}

export interface ICreateDeliveryProductGroup {
  name: string;
  description: string;
  imgUrl: string;
  status: ShopStatus;
  isDefault: boolean;
  shopId: string;
}

export interface IUpdateDeliveryProductGroup {
  name?: string;
  description?: string;
  imgUrl?: string;
  status?: ShopStatus;
  isDefault?: boolean;
  shopId: string;
}
