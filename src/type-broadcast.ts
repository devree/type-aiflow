export enum Status_Broadcast {
  'S0_NONE',
  'S1_DRAFT',
  'S2_AWAITING',
  'S3_SUCCESS',
  'S4_FAIL',
  'S5_PROCESSING',
  'S6_ALMOST_SUCCESS',
}

export enum Receiver {
  'BY_ALL',
  'BY_TAG',
  'BY_UPLOAD_FILE',
}

export enum BroadcastType {
  'BROADCAST',
  'MULTICAST',
  'PUSH_MESSAGE',
}

export enum messageType {
  'JSON',
  'TEXT',
  'IMAGE',
  'VIDEO',
  'AUDIO',
  'LOCATION',
  'STICKER',
  'FILE',
  'FLEX',
  'FLEX_IMAGE',
}
