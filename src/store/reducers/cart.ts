import { CartAction, CartState, CART_ACTION_TYPES } from '../../types/cart';

const initialState: CartState = {
  currentCart: [],
  cartTotal: 0,
  cartQuantity: 0,
  isCartActive: false,
  cartStatus: false,
};

export const cartReducer = (
  state: CartState = initialState,
  action: CartAction
) => {
  switch (action.type) {
    case CART_ACTION_TYPES.CHANGE_ITEM_QUANTITY:
      return {
        ...state,
        currentCart: state.currentCart.map((prevItem) => {
          if (
            prevItem.id === action.payload.clickedItem.id &&
            prevItem.size === action.payload.clickedItem.size &&
            prevItem.quantity + action.payload.positiveOrNegativeOne > 0
          ) {
            return {
              ...prevItem,
              quantity:
                prevItem.quantity + action.payload.positiveOrNegativeOne,
            };
          }
          return { ...prevItem };
        }),
      };
    case CART_ACTION_TYPES.DELETE_FROM_CART:
      return {
        ...state,
        currentCart: state.currentCart.filter(
          (curItem) =>
            curItem.id !== action.payload.id ||
            curItem.size !== action.payload.size
        ),
      };
    case CART_ACTION_TYPES.ADD_TO_CART:
      let sameIdAndSize = false;
      const allItems = state.currentCart.map((prevItem) => {
        if (
          prevItem.id === action.payload.clickedItem.id &&
          prevItem.size === action.payload.size
        ) {
          sameIdAndSize = true;
          return { ...prevItem, quantity: prevItem.quantity + 1 };
        }
        return { ...prevItem };
      });

      if (sameIdAndSize) {
        return {
          ...state,
          currentCart: allItems,
        };
      }
      return {
        ...state,
        currentCart: [
          ...state.currentCart,
          {
            ...action.payload.clickedItem,
            size: action.payload.size,
          },
        ],
      };
    case CART_ACTION_TYPES.CART_TO_INITIAL_STATE:
      return initialState;
    case CART_ACTION_TYPES.TOGGLE_CART:
      return {
        ...state,
        isCartActive: action.payload,
      };
    case CART_ACTION_TYPES.SET_CART_TOTAL:
      return {
        ...state,
        cartTotal: action.payload,
      };
    case CART_ACTION_TYPES.SET_CART_QUANTITY:
      return {
        ...state,
        cartQuantity: action.payload,
      };
    case CART_ACTION_TYPES.TOGGLE_CART_STATUS:
      return {
        ...state,
        cartStatus: action.payload,
      };
    default:
      return state;
  }
};
