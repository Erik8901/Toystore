import {
  combineReducers
} from 'redux';

const reducer = (state = 0 , action) => {
    switch (action.type) {
        case "ADD":
            return state + 1

        case "REMOVE":
            return state - 1
        
        default:
            return state
    }
}

const adminLoginReducer = (state = {}, action) => {
    console.log(state.adminName)
    console.log(action.type)
    switch(action.type) {
        case "ADMIN_LOGIN":
            return state
        default:
            return state
    }
    
}

const productReducer = (state = [], action) => {
  console.log("productReducer: ", action);
 // console.log(action.type)

  switch (action.type) {
    case "BUY_PRODUCTS":

    return state.map( x => x.key === action.key ? {...x, amount: x.amount + action.oneLess} : x)

    default:
      return state;
  }
}
    


const addReducer = (state = {},action) => {
   // console.log(action)
    console.log(state)
    switch (action.type) {
        case "ADD_TO_STORE":
            return state
            
        default:
            return state
    }
}


const listOfAddedProductsReducer = (state = {}, action) => {
    console.log(state.listInCart)
    // {...x, b: [...x.b] }
    // [...state, {name: action.name, price: action.price, key:action.key}]
    switch (action.type) {
      case "ADD_TO_CART":

          return  [...state, {name: action.name, price: action.price, key:action.key}]

        break;
      default:
        return state

    }

}

let rootReducer = combineReducers({
  admin: adminLoginReducer,
  // items: reducer,
  products: productReducer,
  listOfAddedProducts: listOfAddedProductsReducer,
  
  //    value: counterReducer,
      
  //    numberOfClicks: clicksReducer
});


export default rootReducer;
