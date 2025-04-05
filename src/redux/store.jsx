import { createStore , combineReducers, applyMiddleware} from "redux";
import CounterReducer from "./CounterReducer";
import EmployeeReducer from "./EmployeeReducer";
import Counter from "../Counter";
import { thunk } from "redux-thunk";
import { loadState , saveState } from '../utils/localstorage'

let allData = loadState();

let store = createStore(combineReducers({
    // Counter:CounterReducer,
    empData: EmployeeReducer,
   }), 
   allData,
   applyMiddleware(thunk)
) ; 

store.subscribe(() => {
    saveState(store.getState());
})

export default store ;