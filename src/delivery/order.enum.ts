export enum ShopStatus {
  'ACTIVE',
  'INACTIVE',
}

export enum StatusOrder {
  'PLACED',
  'PACKED',
  'SHIPPED',
  'CANCELED',
  'COMPLETED',
}

export enum StatusOrderSeller {
  'NONE', // TODO: ignore?
  'AWAITING_CONFIRM',
  'AWAITING_PAYMENT',
  'TO_CONFIRM',
  'AWAITING_FULFILLMENT',
  'AWAITING_SHIPMENT',
  'AWAITING_PICKUP',
  'SHIPPED',
  'AWAITING_ACCEPTED',
  'AWAITING_DEPOSIT',
  'COMPLETED',
  'CANCELED',
}

export enum StatusOrderCustomer {
  'NONE', // TODO: ignore?
  'AWAITING_CONFIRM',
  'AWAITING_PAYMENT',
  'PAID',
  'AWAITING_FULFILLMENT',
  'AWAITING_SHIPMENT',
  'TO_PICKUP',
  'SHIPPED',
  'AWAITING_ACCEPTED',
  'ACCEPTED',
  'COMPLETED',
  'CANCELED',
}

export enum StatusOrderOfPayment {
  'AWAITING_PAYMENT',
  'TO_CONFIRM',
  'COMPLETED_PAYMENT',
  'TO_REFUND',
  'REFUNDING',
  'COMPLETED_REFUND',
}

export enum StatusOrderOfShipment {
  'AWAITING_SHIPMENT',
  'AWAITING_PICKUP',
  'SHIPPED',
  'COMPLETED_SHIPMENT',
  'TO_RETURN',
  'AWAITING_RETURN',
  'RETURNING',
  'COMPLETED_RETURN',
}

export enum StatusOrderOfStock {
  'RESERVED',
  'DEDUCTED',
  'RESTOCKED',
}

export enum StatusReturnOrder {
  'RETURN_AWAITING_RESTOCK',
  'RETURN_IN_RESTOCK',
  'RETURN_COMPLETED_RESTOCK',
}

export enum StatusRefundOrder {
  'AWAITING_REFUND',
  'IN_REFUND',
  'COMPLETED_REFUND',
}


export type OrderType = 'DELIVERY' | 'ONLINE';