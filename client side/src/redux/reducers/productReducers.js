import * as ActionTypes from '../constants/prodConstants';

export const getProductReducer = (state = {products: []} , action) => {
    switch(action.type){
        case ActionTypes.GET_PRODUCTS_REQUEST:{
            return {
                loading: true,
                products: [],
            };
        }

        case ActionTypes.GET_PRODUCTS_SUCCESS:
            return {
                loading: false,
                products: action.payload
            };

        case ActionTypes.GET_PRODUCTS_FAIL:
            return {
                loading: false,
                error: action.payload
            };

        default :
            return state;
    }
}



export const getProductDetailsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case ActionTypes.GET_PRODUCTS_DETAILS_REQUEST:
      return {
        loading: true,
      };
    case ActionTypes.GET_PRODUCTS_DETAILS_SUCCESS:
      return {
        loading: false,
        product: action.payload,
      };
    case ActionTypes.GET_PRODUCT_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case ActionTypes.GET_PRODUCTS_DETAILS_RESET:
      return {
        product: {},
      };
    default:
      return state;
  }
};