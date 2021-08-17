import { combineReducers } from "redux";
import {MoviesReducer,PaginationReducer} from "./Movies";



const reducers = combineReducers({
  Movies: MoviesReducer,
  Pagination : PaginationReducer
});

export default reducers;