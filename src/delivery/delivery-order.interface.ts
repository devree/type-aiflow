import type {
  OrderType,
  StatusOrder,
  StatusOrderCustomer,
  StatusOrderOfPayment,
  StatusOrderOfShipment,
  StatusOrderOfStock,
  StatusOrderSeller,
  StatusRefundOrder,
  StatusReturnOrder,
} from './order.enum.js';

import type { IDeliveryCustomer } from './delivery-customer.interface.js';
import type { IDeliveryShopOrder } from './delivery-shop-order.interface.js';

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
  orderPlacedAt: Date;
  orderPackedAt: Date;
  orderShippedAt: Date;
  orderCanceledAt: Date;
  orderCompletedAt: Date;
}

export interface PaymentTiming {
  awaitingPaymentAt: Date;
  toConfirmAt: Date;
  completedPaymentAt: Date;
  toRefundAt: Date;
  refundingAt: Date;
  completedRefundAt: Date;
}

export interface ShipmentTiming {
  awaitingShipmentAt: Date;
  awaitingPickupAt: Date;
  shippedAt: Date;
  completedShipmentAt: Date;
  toReturnAt: Date;
  awaitingReturnAt: Date;
  returningAt: Date;
  completedReturnAt: Date;
}

export interface Location {
  lat: number;
  lng: number;
  distanceInM: number;
}

export interface IDeliveryOrder {
  id: string;
  orderNo: string;
  noteAdmin?: string;
  noteUser?: string;
  statusOrder: StatusOrder;
  statusOrderOnSeller: StatusOrderSeller;
  statusOrderOnBuyer: StatusOrderCustomer;
  statusOrderOfPayment: StatusOrderOfPayment;
  statusOrderOfShipment?: StatusOrderOfShipment;
  statusOrderOfStock?: StatusOrderOfStock;
  statusReturnOrder?: StatusReturnOrder;
  statusRefundOrder?: StatusRefundOrder;
  orderType: OrderType;
  createdAt: Date;
  createdBy: string;
  updatedAt: Date;
  updatedBy: string;
  shippingCost: number;
  orderAmount: number;
  totalAmount: number;
  address?: OrderAddress | null;
  paymentAttachmentData?: PaymentAttachmentData | null;
  orderTiming?: OrderTiming | null;
  paymentTiming?: PaymentTiming | null;
  shipmentTiming?: ShipmentTiming | null;
  deliveryData?: Location | null;
  moduleConfig?: any;
  deliveryCustomer?: IDeliveryCustomer;
  deliveryShopOrders?: IDeliveryShopOrder[];
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
  orderNo: string;
  noteAdmin?: string;
  noteUser?: string;
  statusOrder?: StatusOrder;
  statusOrderOnSeller?: StatusOrderSeller;
  statusOrderOnBuyer?: StatusOrderCustomer;
  statusOrderOfPayment?: StatusOrderOfPayment;
  statusOrderOfShipment?: StatusOrderOfShipment;
  statusOrderOfStock?: StatusOrderOfStock;
  statusReturnOrder?: StatusReturnOrder;
  statusRefundOrder?: StatusRefundOrder;
  orderType: OrderType;
  createdBy: string;
  updatedBy: string;
  shippingCost?: number;
  orderAmount?: number;
  totalAmount?: number;
  address?: OrderAddress;
  paymentAttachmentData?: PaymentAttachmentData;
  orderTiming?: OrderTiming;
  paymentTiming?: PaymentTiming;
  shipmentTiming?: ShipmentTiming;
  deliveryData?: Location;
  deliveryShopOrders?: DeliveryShopOrderData[];
  customerId: string;
  moduleConfigId: string;
}

export interface IUpdateDeliveryOrder {
  orderNo?: string;
  noteAdmin?: string;
  noteUser?: string;
  statusOrder?: StatusOrder;
  statusOrderOnSeller?: StatusOrderSeller;
  statusOrderOnBuyer?: StatusOrderCustomer;
  statusOrderOfPayment?: StatusOrderOfPayment;
  statusOrderOfShipment?: StatusOrderOfShipment;
  statusOrderOfStock?: StatusOrderOfStock;
  statusReturnOrder?: StatusReturnOrder;
  statusRefundOrder?: StatusRefundOrder;
  orderType?: OrderType;
  updatedBy: string;
  shippingCost?: number;
  orderAmount?: number;
  totalAmount?: number;
  address?: OrderAddress;
  paymentAttachmentData?: PaymentAttachmentData;
  orderTiming?: OrderTiming;
  paymentTiming?: PaymentTiming;
  shipmentTiming?: ShipmentTiming;
  deliveryData?: Location;
  deliveryShopOrders?: DeliveryShopOrderData[];
  customerId?: string;
  moduleConfigId?: string;
}
