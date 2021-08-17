import {ActionTypes} from "../Constants";

const initialState ={
  Movies:[],
  CategoryList : [],
  SelectedCategory : 'all',
  MoviesLikes:[],
  MoviesDisLikes:[],
  CurrentPage : 1,
  ItemPerPage : 4,
  MaxPageNumberLimit : 4,
  MinPageNumberLimit : 0,
  Pages : [],

}

export const MoviesReducer = (state=initialState, {type, payload})=>{
  
  switch(type){
    case ActionTypes.GET_DATA_FROM_JSON :

      return({
        ...state,
        Movies : payload
      });
    
    case ActionTypes.SET_CATEGORY_LIST :
      return({
        ...state,
        CategoryList : payload
      })
    case ActionTypes.SET_SELECTED_CATEGORY : 
      return({
        ...state,
        SelectedCategory : payload
      })
    case ActionTypes.DELET_SPECIFIC_MOVIE :

      const {Movies} = state;
      const NewMoviesList = Movies.filter(Movie=>Movie.id!==payload)
    
      return({
        ...state,
        Movies : NewMoviesList
      })
    case ActionTypes.SET_MOVIE_LIKE :
      console.log(payload);
      return({
        ...state,
        MoviesLikes : [...state.MoviesLikes,payload ],
        Movies : state.Movies.map(m => (m.id !== payload ? m : { ...m, likes: m.likes + 1 })),
      })
    case ActionTypes.CANCEL_MOVIE_LIKE :
      return({
        ...state,
        MoviesLikes : state.Movies.filter(movie => movie !== payload),
        Movies : state.Movies.map(m => (m.id !== payload ? m : { ...m, likes: m.likes - 1 })),
      })

    case ActionTypes.SET_MOVIE_DESLIKE :
      return({
        ...state,
        MoviesDisLikes : [...state.MoviesDisLikes,payload ],
        Movies : state.Movies.map(m => (m.id !== payload ? m : { ...m, dislikes: m.dislikes + 1 })),
      })
    case ActionTypes.CANCEL_MOVIE_DESLIKE :
      return({
        ...state,
        MoviesDisLikes : state.Movies.filter(movie => movie !== payload),
        Movies : state.Movies.map(m => (m.id !== payload ? m : { ...m, dislikes: m.dislikes - 1 })),
      })

    default :
        return state;
  }
}


export const PaginationReducer = (state=initialState, {type, payload})=>{
  switch(type){
    case ActionTypes.SET_CURRENT_PAGE : 
      return({
        ...state,
        CurrentPage : payload
      })
    case ActionTypes.SET_ITEM_PER_PAGE :
      return({
        ...state,
        ItemPerPage : payload
      })
    case ActionTypes.SET_MAX_PAGE_NUMBER_LIMIT :
      return({
        ...state,
        MaxPageNumberLimit : payload
      })
    case ActionTypes.SET_MIN_PAGE_NUMBER_LIMIT :
      return({
        ...state,
        MinPageNumberLimit : payload
      })
    case ActionTypes.SET_PAGES:
      return({
        ...state,
        Pages : payload
      })
    default :
      return state;
  }
}