export enum USER_ROLE {
  'OWNER' = 'owner',
  'SUPER_ADMIN' = 'super-admin',
  'ADMIN' = 'admin',
  'STAFF' = 'staff',
  'AGENT' = 'agent',
}

export enum TemplateReplyPermission {
  'MANAGE' = 'template-reply-manage',
}

export enum ContactPermission {
  'MANAGE' = 'contact-manage',
}

export enum ChatBotPermission {
  'MANAGE' = 'chatbot-manage',
}

export enum ChatPermission {
  'MANAGE' = 'chat-manage',
  'MANAGE_ME' = 'chat-manage-me',
  'MANAGE_TEAM' = 'chat-manage-team',
  'MANAGE_NOT_ASSIGNED' = 'chat-manage-not-assigned',
  'MANAGE_ALL' = 'chat-manage-all',
  'MANAGE_SPAM' = 'chat-manage-spam',
  'MANAGE_BTN_CHAT_BOT' = 'ai-chatbot-manage',
}

export enum BroadcastPermission {
  'MANAGE' = 'broadcast-manage',
}

export enum ManagementPermission {
  'MANAGE' = 'management-manage',
}

export enum SystemPermission {
  'MANAGE' = 'system-manage',
}

export enum FilePermission {
  'MANAGE' = 'file-manage',
}

export enum AgentPermission {
  'MANAGE' = 'agent-manage',
}

export enum TeamPermission {
  'MANAGE' = 'team-manage',
}

export enum DeliveryPermission {
  'MANAGE' = 'delivery-manage',
}

export enum CommercePermission {
  'MANAGE' = 'commerce-manage',
}

export enum DashboardPermission {
  'MANAGE' = 'dashboard-manage',
  // Commerce
  'MANAGE_COMMERCE_METRIC_SALE_PERFORMANCE' = 'dashboard-manage-commerce-metric-sale-performance',
  'MANAGE_COMMERCE_METRIC_TOTAL_ORDER' = 'dashboard-manage-commerce-metric-total-order',
  'MANAGE_COMMERCE_METRIC_AVG_REVENUE' = 'dashboard-manage-commerce-metric-avg-revenue',
  'MANAGE_COMMERCE_METRIC_AVG_ITEM_ORDER' = 'dashboard-manage-commerce-metric-avg-order-qty',
  'MANAGE_COMMERCE_CHART_TOTAL_REVENUE' = 'dashboard-manage-commerce-chart-total-revenue',
  'MANAGE_COMMERCE_CHART_POPULAR_PRODUCT' = 'dashboard-manage-commerce-chart-popular-product',
  'MANAGE_COMMERCE_CHART_AVG_ORDER_VALUE' = 'dashboard-manage-commerce-chart-avg-order-value',
  'MANAGE_COMMERCE_CHART_AVG_SALE' = 'dashboard-manage-commerce-chart-avg-sale',
  // Delivery
  'MANAGE_DELIVERY_METRIC_SALE_PERFORMANCE' = 'dashboard-manage-delivery-metric-sale-performance',
  'MANAGE_DELIVERY_METRIC_TOTAL_ORDER' = 'dashboard-manage-delivery-metric-total-order',
  'MANAGE_DELIVERY_METRIC_AVG_REVENUE' = 'dashboard-manage-delivery-metric-avg-revenue',
  'MANAGE_DELIVERY_CHART_TOTAL_REVENUE' = 'dashboard-manage-delivery-chart-total-revenue',
  'MANAGE_DELIVERY_CHART_AVG_ORDER_VALUE' = 'dashboard-manage-delivery-chart-avg-order-value',
  'MANAGE_DELIVERY_CHART_AVG_SALE' = 'dashboard-manage-delivery-chart-avg-sale',
}

export enum IAMPermission {
  'MANAGE' = 'iam-manage',
  'CREATE_STAFF' = 'iam-create-staff',
  'ACCESS_COMPANY' = 'iam-access-company',
}

export enum SettingPermission {
  'MANAGE' = 'setting-manage', // Menu Setting
}

export type permissions =
  | ChatPermission
  | BroadcastPermission
  | ManagementPermission
  | SystemPermission
  | IAMPermission
  | ChatBotPermission
  | ContactPermission
  | FilePermission
  | AgentPermission
  | TeamPermission
  | DeliveryPermission
  | TemplateReplyPermission
  | SettingPermission
  | CommercePermission;
