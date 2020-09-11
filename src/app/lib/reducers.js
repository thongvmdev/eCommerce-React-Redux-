import { actions } from './actions';

const initiaState = {
  items:
    JSON.parse(localStorage.getItem('items')) !== null
      ? JSON.parse(localStorage.getItem('items'))
      : [],
};

const saveToLocalStorage = (object) => {
  localStorage.setItem('items', JSON.stringify(object));
};

export default function onlineStoreApp(state = initiaState, action) {
  switch (action.type) {
    case actions.ADD_TO_CART:
      return { ...state, items: [...state.items, action.payload] }; // ...state copy all state prev, ...state.items copy all state.items, action.payload update state.items - Do co nhieu cap nen phai ... nhieu lan de copy is deep copy, ko lam thay doi initiaState
    case actions.UPDATE_CART:
      return {
        ...state,
        items: state.items.map((item) => {
          return item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item;
        }),
      }; // map, filter will return a new arr and initiaState is not change
    case actions.REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      }; // // map, filter will return a new arr and initiaState is not change
    case actions.SAVE_CART:
      saveToLocalStorage(action.payload.items);
      return state;
    case actions.RESET_CART:
      saveToLocalStorage([]); // Clear LocalStorage
      return { ...state, items: [] }; // Clear State
    default:
      return state;
  }
} // Purpose of ...state, ...state.items -> cap nhat lai state va ko lam thay doi initiaState de thoa man dieu kien pure function
