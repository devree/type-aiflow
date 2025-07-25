import type { IDeliveryOptionGroup } from "./delivery-option-group.interface.js";
import type { ShopStatus } from "./order.enum.js";


export interface IDeliveryOption {
  id: string;
  name: string;
  description: string;
  imgUrl: string;
  cost: number;
  price: number;
  createdAt: Date;
  createdBy: string;
  updatedAt: Date;
  updatedBy: string;
  status: ShopStatus;
  deliveryOptionGroup: IDeliveryOptionGroup;
}

export interface ICreateDeliveryOption {
  name: string;
  description: string;
  imgUrl: string;
  cost: number;
  price: number;
  status: ShopStatus;
  shopId: string;
  optionGroupId: string;
}

export interface IUpdateDeliveryOption {
  name?: string;
  description?: string;
  imgUrl?: string;
  cost?: number;
  price?: number;
  status?: ShopStatus;
  shopId: string;
  optionGroupId: string;
}
