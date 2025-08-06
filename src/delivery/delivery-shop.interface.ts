import type { IDeliveryOptionGroup } from './delivery-option-group.interface.js';
import type { IDeliveryProductGroup } from './delivery-product-group.interface.js';
import type { IDeliveryProduct } from './delivery-product.interface.js';
import type { IDeliveryShopOrder } from './delivery-shop-order.interface.js';
import type { ShopStatus } from './order.enum.js';

export interface IDeliveryShop {
  id: string;
  name: string;
  compId: string;
  imgUrl: string[];
  coverUrl: string;
  address?: string;
  description?: string;
  tel: string;
  hours: string[][];
  createdAt: Date;
  createdBy: string;
  updatedAt: Date;
  updatedBy: string;
  status: ShopStatus;
  moduleConfig: any;
  deliveryProducts: IDeliveryProduct[];
  deliveryProductGroups: IDeliveryProductGroup[];
  deliveryOptionGroups: IDeliveryOptionGroup[];
  deliveryShopOrders: IDeliveryShopOrder[];
}

export interface ICreateDeliveryShop {
  name: string;
  imgUrl: string[];
  coverUrl: string;
  address?: string;
  description?: string;
  tel: string;
  hours: string[][];
  status: ShopStatus;
  compId: string;
  moduleConfigId: string;
}

export interface IUpdateDeliveryShop {
  name?: string;
  imgUrl?: string[];
  coverUrl?: string;
  address?: string;
  description?: string;
  tel?: string;
  hours?: string[][];
  status?: ShopStatus;
  compId: string;
  moduleConfigId: string;
}
