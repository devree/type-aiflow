import type { IDeliveryOption } from "./delivery-option.interface.js";
import type { IDeliveryProduct } from "./delivery-product.interface.js";
import type { IDeliveryShop } from "./delivery-shop.interface.js";
import type { ShopStatus } from "./order.enum.js";


export interface IDeliveryOptionGroup {
  id: string;
  name: string;
  description: string;
  imgUrl: string;
  isMultiSelect: boolean;
  isDefault: boolean;
  isOptional: boolean;
  maxOptions: number;
  minOptions: number;
  createdAt: Date;
  createdBy: string;
  updatedAt: Date;
  updatedBy: string;
  status: ShopStatus;
  deliveryShop: IDeliveryShop;
  deliveryOptions: IDeliveryOption[];
  deliveryProducts: IDeliveryProduct[];
}

export interface ICreateDeliveryOptionGroup {
  name: string;
  description: string;
  imgUrl: string;
  isMultiSelect: boolean;
  isDefault: boolean;
  isOptional: boolean;
  maxOptions: number;
  minOptions: number;
  status: ShopStatus;
  shopId: string;
  productId: string;
}

export interface IUpdateDeliveryOptionGroup {
  name?: string;
  description?: string;
  imgUrl?: string;
  isMultiSelect?: boolean;
  isDefault?: boolean;
  isOptional?: boolean;
  maxOptions?: number;
  minOptions?: number;
  status?: ShopStatus;
  shopId: string;
  productId: string;
}
