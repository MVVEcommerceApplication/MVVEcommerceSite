import * as types from '../constants/actionTypes';

const initialState = {
  itemName: 'Tote Bag',
  description: 'Designed for anything from grocery shopping to running every day errands, totes are simply a staple of the modern world.',
  price: 14.77,
  quantity: 0,
  products: [],
  userShoppingCart: [],
};

const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_QUANTITY:
      console.log('REDUCER HAS BEEN CLICKED');
      // increment quanity
      const quantity = state.quantity + action.payload;
     
      // return updated state
      return {
        ...state,
        quantity,
      };

      // hydrate store reduce
    case types.HYDRATE_STORE:

      // combine current products with products incoming
      const products = [...action.payload];

      return {
        ...state,
        products,
      };

    default:
      return state;
  }
};

export default storeReducer;
