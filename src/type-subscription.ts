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

/**
 * Name of the feature group
 * @example
 * LINE
 */
export type TFeatureGroup = 'LINE' | 'BUSINESS';

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
// #endregion LINE

// ============================================================================
//SECTION BUSINESS
// ============================================================================
// #region BUSINESS
export type TFeatureBusiness = 'COMPANY';

export type TLimitTypeCompany = 'NUMBER_OF_COMPANY';
export enum LimitTypeCompany {
  NUMBER_OF_COMPANY = 'NUMBER_OF_COMPANY',
}
export interface ILimitCompany {
  [LimitTypeCompany.NUMBER_OF_COMPANY]: number;
}
// #endregion BUSINESS
