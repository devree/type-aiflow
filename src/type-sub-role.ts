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
  'MANAGE_METRIC_SALE_PERFORMANCE' = 'commerce-manage-metric-sale-performance',
  'MANAGE_METRIC_TOTAL_ORDER' = 'commerce-manage-metric-total-order',
  'MANAGE_METRIC_AVG_REVENUE' = 'commerce-manage-metric-avg-revenue',
  'MANAGE_METRIC_AVG_ITEM_ORDER' = 'commerce-manage-metric-avg-item-order',
  'MANAGE_CHART_TOTAL_REVENUE' = 'commerce-manage-chart-total-revenue',
  'MANAGE_CHART_POPULAR_PRODUCT' = 'commerce-manage-chart-popular-product',
  'MANAGE_CHART_AVG_ORDER_VALUE' = 'commerce-manage-chart-avg-order-value',
  'MANAGE_CHART_AVG_SALE' = 'commerce-manage-chart-avg-sale',
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
