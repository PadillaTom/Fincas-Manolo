import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
} from '../actions';

const products_reducer = (state, action) => {
  // :: Sidebar ::
  if (action.type === SIDEBAR_OPEN) {
    return { ...state, isSidebarOpen: true };
  }
  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, isSidebarOpen: false };
  }
  if (action.type === GET_PRODUCTS_BEGIN) {
    return { ...state, products_loading: true };
  }
  if (action.type === GET_PRODUCTS_SUCCESS) {
    // Filter Featured:
    const featured_products = action.payload.filter(
      (prod) => prod.featured === true
    );
    return {
      ...state,
      products_loading: false,
      all_products: action.payload,
      featured_products,
    };
  }
  if (action.type === GET_PRODUCTS_ERROR) {
    return { ...state, products_loading: false, products_error: true };
  }

  //   DEFAULT
  return state;
};

export default products_reducer;
