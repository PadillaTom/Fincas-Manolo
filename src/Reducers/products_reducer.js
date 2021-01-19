import { SIDEBAR_OPEN, SIDEBAR_CLOSE } from '../actions';

const products_reducer = (state, action) => {
  // :: Sidebar ::
  if (action.type === SIDEBAR_OPEN) {
    return { ...state, isSidebarOpen: true };
  }
  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, isSidebarOpen: false };
  }

  //   DEFAULT
  return state;
};

export default products_reducer;
