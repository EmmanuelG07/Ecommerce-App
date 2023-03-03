import {
  ADD_TO_CART,
  ADD_TO_WISHLIST,
  REMOVE_FROM_CART,
  REMOVE_FROM_WISHLIST,
} from '../ActionTpyes';

const Reducers2 = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      return [...state, action.payload];

    case REMOVE_FROM_WISHLIST:
      const deletetdArray1 = state.filter((item, index) => {
        return index !== action.payload;
      });
      return deletetdArray1;

    default:
      return state;
  }
};

export default Reducers2;
