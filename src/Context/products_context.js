import React, { useContext, useReducer, useEffect, useState } from 'react';
import reducer from '../Reducers/products_reducer';
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
} from '../actions';
// Data:
import { products } from '../Utils/constants';

// STATE:
const initialState = {
  isSidebarOpen: false,
  products_loading: false,
  products_error: false,
  all_products: [],
  featured_products: [],
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  //  ----> REDUCERS <----
  const [state, dispatch] = useReducer(reducer, initialState);
  const [myProducts, setMyProducts] = useState([]);
  // :: Sidebar ::
  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };
  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };
  // :: All Products ::  --> Normally we would use AXIOS and an API
  const fetchProducts = (products) => {
    dispatch({ type: GET_PRODUCTS_BEGIN });
    try {
      setMyProducts(products);
      const products_list = myProducts;
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products_list });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };

  useEffect(() => {
    fetchProducts(products);
  }, []);

  // ---------------> PROVIDER
  return (
    <ProductsContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
