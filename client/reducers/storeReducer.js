import * as types from '../constants/actionTypes';

const initialState = {
  itemName: 'Tote Bag',
  description: 'Designed for anything from grocery shopping to running every day errands, totes are simply a staple of the modern world.',
  price: 14.77,
  quantity: 0,
};

const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_QUANTITY:
      console.log('REDUCER HAS BEEN CLICKED');
      // increment quanity
      const quantity = state.quantity + action.payload;

      console.log('NEW QUANTITY FROM REDUCER:', quantity);
      console.log('PAYLOAD', action.payload);
      // return updated state
      return {
        ...state,
        quantity,
      };

    default:
      return state;
  }
};

export default storeReducer;
