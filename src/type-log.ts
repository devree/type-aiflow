// Base interface for common log properties
interface IBaseLog {
  status: string;
  statusCode: number;
  statusMessage: string;
  timestamp: number;
  ttl: number;
}

// ChatBot log interface
interface ILogChatBot extends IBaseLog {
  businessId: string;
  chatBotId: string;
  chatbotName: string;
  compId: string;
  displayName: string;
  keyword: string;
  messages: any[]; // Consider using a more specific type instead of any[]
  pictureUrl: string;
  replyToken: string;
  userId: string;
  webhookId: string;
  createdAt: string;
}

// Broadcast log interface
interface ILogBroadcast extends IBaseLog {
  broadcastId: string;
  channelId: string;
  isError: boolean;
  isScheduled: boolean;
  requestBody: string;
  responseBody: string;
}

// Push message log interface
interface ILogPushMessage extends IBaseLog {
  broadcastId: string;
  channelId: string;
  isError: boolean;
  isScheduled: boolean;
}

// Export types for ChatBot logs
export type CreateLogChatBot = ILogChatBot;
export type LogChatBot = ILogChatBot;

// Export types for Broadcast logs
export type CreateLogBroadcast = ILogBroadcast;
export type LogBroadcast = ILogBroadcast;

// Export types for Push Message logs
export type CreateLogPushMessage = ILogPushMessage;
export type LogPushMessage = ILogPushMessage;
