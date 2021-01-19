import React, { useContext, useReducer } from 'react';
import reducer from '../Reducers/products_reducer';
import { SIDEBAR_OPEN, SIDEBAR_CLOSE } from '../actions';

// STATE:
const initialState = {
  isSidebarOpen: false,
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  //  ----> REDUCERS <----
  const [state, dispatch] = useReducer(reducer, initialState);
  // :: Sidebar ::
  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };
  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  // PROVIDER
  return (
    <ProductsContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
