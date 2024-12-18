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

export enum IAMPermission {
  'MANAGE' = 'iam-manage',
  'CREATE_STAFF' = 'iam-create-staff',
  'ACCESS_COMPANY' = 'iam-access-company',
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
  | TemplateReplyPermission;
