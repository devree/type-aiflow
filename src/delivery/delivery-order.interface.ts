import type { IDeliveryCustomer } from "./delivery-customer.interface.js";
import type { IDeliveryShopOrder } from "./delivery-shop-order.interface.js";
import type { OrderType, StatusOrder, StatusOrderCustomer, StatusOrderOfPayment, StatusOrderOfShipment, StatusOrderOfStock, StatusOrderSeller, StatusRefundOrder, StatusReturnOrder } from "./order.enum.js";


export interface OrderAddress {
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
}

export interface PaymentAttachmentData {
  paymentImageUrl: string;
  paymentTime: string;
  paymentDate: string;
  paymentPrice: number;
  shippingCost: number;
  note: string;
}

export interface OrderTiming {
  orderTime: string;
  orderDate: string;
}

export interface IDeliveryOrder {
  id: string;
  orderNo: string;
  note: string;
  address: OrderAddress;
  createdAt: Date;
  createdBy: string;
  updatedAt: Date;
  updatedBy: string;
  orderType: OrderType;
  status: StatusOrder;
  statusSeller: StatusOrderSeller;
  statusCustomer: StatusOrderCustomer;
  statusOfPayment: StatusOrderOfPayment;
  statusOfShipment: StatusOrderOfShipment;
  statusOfStock: StatusOrderOfStock;
  statusRefundOrder: StatusRefundOrder;
  statusReturnOrder: StatusReturnOrder;
  totalAmount: number;
  totalQuantity: number;
  totalShippingCost: number;
  totalProductCost: number;
  totalWithoutShipping: number;
  paymentAttachmentData: PaymentAttachmentData;
  orderTiming: OrderTiming;
  deliveryCustomer: IDeliveryCustomer;
  deliveryShopOrders: IDeliveryShopOrder[];
  moduleConfig: any;
}

// Product Option Interfaces based on DTO structure
export interface SelectedValue {
  optionId: string;
  optionName: string;
  optionDescription?: string;
  optionPrice?: number;
  optionImgUrl?: string;
}

export interface ProductOption {
  optionGroupId: string;
  optionGroupName: string;
  optionGroupDescription?: string;
  selectedValues: SelectedValue[];
  isMultiSelect?: boolean;
}

export interface OrderItem {
  qty: number;
  productId: string;
  productName: string;
  productImgUrl?: string;
  productUnitPrice: number;
  options?: ProductOption[];
  note?: string;
}

export interface DeliveryShopOrderData {
  shopId: string;
  totalAmount?: number;
  orderItems: OrderItem[];
}

export interface ICreateDeliveryOrder {
  deliveryShopOrders: DeliveryShopOrderData[];
  shippingCost: number;
  orderAmount?: number;
  totalAmount?: number;
  customerId: string;
  moduleConfigId: string;
  address?: OrderAddress;
  noteAdmin?: string;
  noteUser?: string;
}

export interface IUpdateDeliveryOrder {
  deliveryShopOrders?: DeliveryShopOrderData[];
  shippingCost?: number;
  orderAmount?: number;
  totalAmount?: number;
  customerId?: string;
  moduleConfigId?: string;
  address?: OrderAddress;
  noteAdmin?: string;
  noteUser?: string;
}
