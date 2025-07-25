import type { IDeliveryOptionGroup } from './delivery-option-group.interface.js';
import type { IDeliveryProductGroup } from './delivery-product-group.interface.js';
import type { IDeliveryShop } from './delivery-shop.interface.js';
import type { ShopStatus } from './order.enum.js';

export interface IDeliveryProduct {
  id: string;
  name: string;
  imgUrl: string;
  description: string;
  price: number;
  cost: number;
  createdAt: Date;
  createdBy: string;
  updatedAt: Date;
  updatedBy: string;
  status: ShopStatus;
  deliveryShop: IDeliveryShop;
  deliveryProductGroup: IDeliveryProductGroup;
  deliveryOptionGroups: IDeliveryOptionGroup[];
}

export interface ICreateDeliveryProduct {
  name: string;
  imgUrl: string;
  description: string;
  price: number;
  cost: number;
  status: ShopStatus;
  productGroupId?: string;
  shopId: string;
}

export interface IUpdateDeliveryProduct {
  name?: string;
  imgUrl?: string;
  description?: string;
  price?: number;
  cost?: number;
  status?: ShopStatus;
  productGroupId?: string;
  shopId: string;
}
