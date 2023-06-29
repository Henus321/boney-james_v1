export enum SIZE_ACTION_TYPES {
  SET_CURRENT_SIZE = '@@size/SET_CURRENT_SIZE',
}

export interface SizeState {
  currentSize: string;
  sizes: string[];
}

interface SetCurrentSize {
  type: SIZE_ACTION_TYPES.SET_CURRENT_SIZE;
  payload: string;
}

export type SizeAction = SetCurrentSize;
