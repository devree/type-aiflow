export enum PackageType {
  BUSINESS = 'BUSINESS',
  COMPANY = 'COMPANY',
}

export const PackageTypeConfig = {
  BUSINESS: 'BUSINESS',
  COMPANY: 'COMPANY',
};

/**
 * Name of the package
 * @description
 * - STANDARD: Standard package
 * - PRO: Pro package
 * - ENTERPRISE: Enterprise package
 * @example
 * STANDARD
 * - [Feature Group]: LINE
 *  - [Feature]: LINE_CONNECT
 *    - [Limit Type]: NUMBER_OF_CHANNEL
 *    - [Limit]: 1
 */
export type TPackage = 'STANDARD' | 'PRO' | 'ENTERPRISE';
export enum Package {
  STANDARD = 'STANDARD',
  PRO = 'PRO',
  ENTERPRISE = 'ENTERPRISE',
}

/**
 * Name of the feature group
 * @example
 * LINE
 */
export type TFeatureGroup = 'LINE' | 'BUSINESS' | 'MEDIA' | 'CHAT' | 'API';
export enum FeatureGroup {
  LINE = 'LINE',
  BUSINESS = 'BUSINESS',
  MEDIA = 'MEDIA',
  CHAT = 'CHAT',
  API = 'API',
}

// ============================================================================
//SECTION LINE
// ============================================================================
// #region LINE
/**
 * Name of the feature in LINE
 * @example
 * LINE_CONNECT -> LINE (Feature Group)
 */
export type TFeatureLINE =
  | 'LINE_CONNECT'
  | 'BROADCAST'
  | 'LINE_LOGIN'
  | 'REPLY_TEMPLATE'
  | 'CHATBOT'
  | 'FRIENDS'
  | 'AGENT';
export enum FeatureLINE {
  LINE_CONNECT = 'LINE_CONNECT',
  BROADCAST = 'BROADCAST',
  LINE_LOGIN = 'LINE_LOGIN',
  REPLY_TEMPLATE = 'REPLY_TEMPLATE',
  CHATBOT = 'CHATBOT',
  FRIENDS = 'FRIENDS',
  AGENT = 'AGENT',
}

/**
 * Limit type name of LINE CONNECT
 */
export type TLimitTypeLINEConnect = 'NUMBER_OF_CHANNEL';
export enum LimitTypeLINEConnect {
  NUMBER_OF_CHANNEL = 'NUMBER_OF_CHANNEL',
}

/**
 * Limit of LINE CONNECT
 */
export interface ILimitLINEConnect {
  [LimitTypeLINEConnect.NUMBER_OF_CHANNEL]: number;
}

/**
 * Limit type name of AGENT
 */
export type TLimitTypeAgent = 'NUMBER_OF_SEGMENT_TAG';
export enum LimitTypeAgent {
  NUMBER_OF_SEGMENT_TAGS = 'NUMBER_OF_SEGMENT_TAG',
}
/**
 * Limit of AGENT
 */
export interface ILimitAgent {
  [LimitTypeAgent.NUMBER_OF_SEGMENT_TAGS]: number;
}
// #endregion LINE

// ============================================================================
//SECTION CHAT
// ============================================================================
// #region CHAT
export type TFeatureChat = 'LINE';
export enum FeatureChat {
  LINE = 'LINE',
}

// #endregion CHAT

// ============================================================================
//SECTION BUSINESS
// ============================================================================
// #region BUSINESS
export type TFeatureBusiness = 'COMPANY';
export enum FeatureBusiness {
  COMPANY = 'COMPANY',
}

export type TLimitTypeCompany = 'NUMBER_OF_COMPANY';
export enum LimitTypeCompany {
  NUMBER_OF_COMPANY = 'NUMBER_OF_COMPANY',
}
export interface ILimitCompany {
  [LimitTypeCompany.NUMBER_OF_COMPANY]: number;
}
// #endregion BUSINESS

// ============================================================================
//SECTION MEDIA
// ============================================================================
// #region MEDIA
export type TFeatureMedia = 'FILE_MANAGER';
export enum FeatureMedia {
  FILE_MANAGER = 'FILE_MANAGER',
}

export type TLimitTypeFileManager = 'FILE_STORAGE_SIZE';
export enum LimitTypeFileManager {
  FILE_STORAGE_SIZE_GB = 'FILE_STORAGE_SIZE_GB',
}
export interface ILimitFileManager {
  [LimitTypeFileManager.FILE_STORAGE_SIZE_GB]: number;
}
// #endregion MEDIA

// ============================================================================
//SECTION API
// ============================================================================
// #region API
export type TFeatureAPI = 'ADD_BLOCK_FRIEND' | 'TAG_SEGMENT';
export enum FeatureAPI {
  ADD_BLOCK_FRIEND = 'ADD_BLOCK_FRIEND',
  TAG_SEGMENT = 'TAG_SEGMENT',
}

// #endregion API
