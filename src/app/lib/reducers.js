import { actions } from './actions'

const initiaState = {
    items: []
}

export default function onlineStoreApp(state = initiaState, action) {
    switch (action.type) {
        case actions.ADD_TO_CART:
            console.log(action)     
            return Object.assign({}, state, {items: [...state.items, action.payload]});
        case actions.UPDATE_CART: 
            console.log(action)
            return Object.assign({}, state, {
                items: state.items.map(item => {
                    return item.id === action.payload.item.id
                    ? Object.assign({}, item, { quantity: action.payload.quantity })
                    : item;
                })
            });
        case actions.REMOVE_FROM_CART: return Object.assign({}, state, {
            items: state.items.filter(item => { return item.id !== action.payload.id })
        })
        default: return state
    }
}


// import { actions } from './actions'
// const { ADD_TO_CART, SAVE_CART, UPDATE_CART, REMOVE_FROM_CART } = actions
 
// const saveToLocalstorage = object => {
//    localStorage.setItem("items", JSON.stringify(object));
// }
// const initialState = {
//   items:
//     JSON.parse(localStorage.getItem("items")) != null
//       ? JSON.parse(localStorage.getItem("items"))
//       : [], 
//   total: 0
// };
// export default function onlineStoreApp(state = initialState, action) {
//     switch (action.type) {
//       case ADD_TO_CART: 
//       return Object.assign({}, state, {items: [...state.items, action.payload]});
//       case UPDATE_CART:
//         return Object.assign({}, state, {
//           items: state.items.map(item => {
//             return item.id === action.payload.item.id
//               ? Object.assign({}, item, {
//                   quantity: action.payload.quantity
//                 })
//               : item;
//           })
//         });
//       case REMOVE_FROM_CART:
//         return Object.assign({}, state, {
//           items: state.items.filter(item => {
//             return item.id != action.payload.id;
//           })
//         });
//       case SAVE_CART:
//         saveToLocalstorage(action.payload.items);
//         return Object.assign({}, state, {items: action.payload.items});
//       default:
//         return state;
//     }
// }   