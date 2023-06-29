import { Item } from './item';

export enum CART_ACTION_TYPES {
  CHANGE_ITEM_QUANTITY = '@@cart/CHANGE_ITEM_QUANTITY',
  DELETE_FROM_CART = '@@cart/DELETE_FROM_CART',
  ADD_TO_CART = '@@cart/ADD_TO_CART',
  CART_TO_INITIAL_STATE = '@@cart/CART_TO_INITIAL_STATE',
  TOGGLE_CART = '@@cart/TOGGLE_CART',
  SET_CART_TOTAL = '@@cart/SET_CART_TOTAL',
  SET_CART_QUANTITY = '@@cart/SET_CART_QUANTITY',
  TOGGLE_CART_STATUS = '@@cart/TOGGLE_CART_STATUS',
}

export interface CartState {
  currentCart: Item[];
  cartTotal: number;
  cartQuantity: number;
  isCartActive: boolean;
  cartStatus: boolean;
}

interface changeItemQuantity {
  type: CART_ACTION_TYPES.CHANGE_ITEM_QUANTITY;
  payload: {
    clickedItem: Item;
    positiveOrNegativeOne: number;
  };
}
interface deleteFromCart {
  type: CART_ACTION_TYPES.DELETE_FROM_CART;
  payload: Item;
}
interface addToCart {
  type: CART_ACTION_TYPES.ADD_TO_CART;
  payload: {
    clickedItem: Item;
    size: string;
  };
}
interface cartToInitialState {
  type: CART_ACTION_TYPES.CART_TO_INITIAL_STATE;
}
interface toggleCart {
  type: CART_ACTION_TYPES.TOGGLE_CART;
  payload: boolean;
}
interface setCartTotal {
  type: CART_ACTION_TYPES.SET_CART_TOTAL;
  payload: number;
}
interface setCartQuantity {
  type: CART_ACTION_TYPES.SET_CART_QUANTITY;
  payload: number;
}
interface toggleCartStatus {
  type: CART_ACTION_TYPES.TOGGLE_CART_STATUS;
  payload: boolean;
}

export type CartAction =
  | changeItemQuantity
  | deleteFromCart
  | addToCart
  | cartToInitialState
  | toggleCart
  | setCartTotal
  | setCartQuantity
  | toggleCartStatus;
