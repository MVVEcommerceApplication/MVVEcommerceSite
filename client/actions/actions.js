
// import actionType constants
import * as types from '../constants/actionTypes';

export const addQuantity = (quantity) => ({
  type: types.ADD_QUANTITY,
  payload: quantity,
});
