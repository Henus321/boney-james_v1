import { CART_ACTION_TYPES } from '../../types/cart';
import { Item } from '../../types/item';

export const addToCart = (clickedItem: Item, size: string) => ({
  type: CART_ACTION_TYPES.ADD_TO_CART,
  payload: { clickedItem, size },
});

export const deleteFromCart = (clickedItem: Item) => ({
  type: CART_ACTION_TYPES.DELETE_FROM_CART,
  payload: clickedItem,
});

export const cartToInitialState = () => ({
  type: CART_ACTION_TYPES.CART_TO_INITIAL_STATE,
});

export const changeItemQuantity = (
  clickedItem: Item,
  positiveOrNegativeOne: number
) => ({
  type: CART_ACTION_TYPES.CHANGE_ITEM_QUANTITY,
  payload: { clickedItem, positiveOrNegativeOne },
});

export const toggleCart = (isCartActive: boolean) => ({
  type: CART_ACTION_TYPES.TOGGLE_CART,
  payload: isCartActive,
});

export const setCartTotal = (cartTotal: number) => ({
  type: CART_ACTION_TYPES.SET_CART_TOTAL,
  payload: cartTotal,
});

export const setCartQuantity = (cartQuantity: number) => ({
  type: CART_ACTION_TYPES.SET_CART_QUANTITY,
  payload: cartQuantity,
});

export const toggleCartStatus = (cartStatus: boolean) => ({
  type: CART_ACTION_TYPES.TOGGLE_CART_STATUS,
  payload: cartStatus,
});
