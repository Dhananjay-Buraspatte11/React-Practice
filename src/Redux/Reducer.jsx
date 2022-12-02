
// import initialStore from "./store";
import initialStore from './Store'
// import initialStore from './Store';
let Reducer = (store = initialStore, action) => {
    let newStore=store
  switch (action.type) {
    case "INCREAMENET_NUMBER":
        newStore.count += action.payload;
      break;
    case "DECREAMENET_NUMBER":
        newStore.count -= action.payload;
      break;

      case "CHECK_CHANGE":
        newStore.checked=!newStore.checked;
      break; 
      case "SET_USER_NAME":
        newStore.userName=action.payload;
        break;
  }
  return {...newStore};
};
export default Reducer;
