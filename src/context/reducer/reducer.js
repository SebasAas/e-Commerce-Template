/* eslint-disable linebreak-style */
export const initialState = {
  cart: [],
  user: null,
};

export function reducer(state, action) {
  // console.log(action)
  switch (action.type) {
    case 'GET_ITEM_CART':
      return {
        ...state
      }
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };
    case 'ADD_ITEM_CART':
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
    case 'REMOVE_ITEM_CART':
      return {
        ...state,
        cart: state.cart.filter((item) => (item.id !== action.id)),
      };

    default:
      return {
        ...state,
      };
  }
}