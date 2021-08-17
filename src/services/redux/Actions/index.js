import {ActionTypes} from "../Constants";

export const getDataFromJSON = (data) =>{

  return{
    type :ActionTypes.GET_DATA_FROM_JSON,
    payload:data,
  }
}

export const setCategoryList = (data) =>{

  return{
    type :ActionTypes.SET_CATEGORY_LIST,
    payload:data,
  }
}

export const setSelectedCategory = (data) =>{

  return{
    type :ActionTypes.SET_SELECTED_CATEGORY,
    payload:data,
  }
}

export const deletSpecificMovie = (data) =>{

  return{
    type :ActionTypes.DELET_SPECIFIC_MOVIE,
    payload:data,
  }
}


/*---- Pagination action ---*/

export const setCurrentPage = (data) =>{

  return{
    type :ActionTypes.SET_CURRENT_PAGE,
    payload:data,
  }
}

export const setItemPerPage = (data) =>{

  return{
    type :ActionTypes.SET_ITEM_PER_PAGE,
    payload:data,
  }
}

export const setMaxPageNumberLimit = (data) =>{

  return{
    type :ActionTypes.SET_MAX_PAGE_NUMBER_LIMIT,
    payload:data,
  }
}

export const setMinPageNumberLimit = (data) =>{

  return{
    type :ActionTypes.SET_MIN_PAGE_NUMBER_LIMIT,
    payload:data,
  }
}




export const setPages = (data) =>{

  return{
    type :ActionTypes.SET_PAGES,
    payload:data,
  }
}

export const setMovieLike = (data)=>{
  return{
    type :ActionTypes.SET_MOVIE_LIKE,
    payload:data,
  } 
}

export const cancelMovieLike = (data)=>{
  return{
    type :ActionTypes.CANCEL_MOVIE_LIKE,
    payload:data,
  } 
}

export const setMovieDesLike = (data)=>{
  return{
    type :ActionTypes.SET_MOVIE_DESLIKE,
    payload:data,
  } 
}

export const cancelMovieDeslike = (data)=>{
  return{
    type :ActionTypes.CANCEL_MOVIE_DESLIKE,
    payload:data,
  } 
}


