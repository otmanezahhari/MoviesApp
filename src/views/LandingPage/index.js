import { useEffect } from "react";
import {useDispatch} from "react-redux";
import { getDataFromJSON } from "services/redux/Actions"; 
import { movies$ } from "services/api/movies";
import HeaderSelect from "./HeaderSelect";
import MoviesList from "./MoviesList";
import Pagination from "./Pagination";

const LandingPage = ()=>{
  const  dispatch = useDispatch();
  
  useEffect(() => { 
    try{
      async function fetchMovies(){
        const request = await movies$.then((data) => data);  
        console.log(request)
        dispatch(getDataFromJSON(request));
      }
      fetchMovies();
    }
    catch(err){
      console.log(err);
    }
  },[]);

  return (
    <>   
        <HeaderSelect/>
        <MoviesList />
        <Pagination/>
    </>
  );

}


export default LandingPage;