export enum ITEM_ACTION_TYPES {
  FETCH_ITEM_START = '@@item/FETCH_ITEM_START',
  FETCH_ITEM_FAILURE = '@@item/FETCH_ITEM_FAILURE',
  FETCH_ITEM_SUCCESS = '@@item/FETCH_ITEM_SUCCESS',
  SET_COLOR_AND_ID = '@@item/SET_COLOR_AND_ID',
  CLEAR_ITEM = '@@item/CLEAR_ITEM',
}

export interface ItemState {
  currentItem: Item;
  colorId: ColorId[];
  isLoading: boolean;
  error: string | null;
}

export interface Item {
  name: string;
  price: number;
  photoUrls: string[];
  article: string;
  color: string;
  composition: string;
  lining: string;
  height: string;
  country: string;
  season: string;
  id: string;
  mainPhotoUrl: string;
  possibleColors: string[];
  sizes: string[];
  year: string;
  quantity: number;
  description: string;
  size?: string;
}

export interface ColorId {
  color: string;
  id: string;
}

export interface FetchItemStart {
  type: ITEM_ACTION_TYPES.FETCH_ITEM_START;
}

export interface FetchItemFailure {
  type: ITEM_ACTION_TYPES.FETCH_ITEM_FAILURE;
  payload: string;
}

export interface FetchItemSuccess {
  type: ITEM_ACTION_TYPES.FETCH_ITEM_SUCCESS;
  payload: Item;
}

export interface SetColorAndId {
  type: ITEM_ACTION_TYPES.SET_COLOR_AND_ID;
  payload: ColorId[];
}

export interface ClearItem {
  type: ITEM_ACTION_TYPES.CLEAR_ITEM;
}

export type ItemAction =
  | FetchItemStart
  | FetchItemFailure
  | FetchItemSuccess
  | SetColorAndId
  | ClearItem;
