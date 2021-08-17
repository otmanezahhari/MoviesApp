import {useSelector, useDispatch} from "react-redux";
import { Container, Row } from 'react-bootstrap';
import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";
import {setPages} from "services/redux/Actions";


function MoviesList() {

  const dispatch = useDispatch()

  const stateMovies = useSelector(state => state.Movies);
  const statePagination = useSelector(state => state.Pagination);
  const {Movies ,SelectedCategory} = stateMovies;
  const {CurrentPage, ItemPerPage } = statePagination;

  const [MoviesList, setMovieList] = useState(Movies);


  
  
  useEffect(()=>{
    let ListOfMovieByCategory = [];
    if(SelectedCategory ==="all"){
      ListOfMovieByCategory =Movies;
    }else{
      ListOfMovieByCategory = Movies.filter((movie) => movie.category === SelectedCategory);
    }

    const pages = [];
    for (let i = 1; i <= Math.ceil(ListOfMovieByCategory.length / ItemPerPage); i++) {
     pages.push(i);
    }

    dispatch(setPages(pages));

    

    console.log("from useeffect", SelectedCategory, ListOfMovieByCategory);
    const indexOfLastItem = CurrentPage * ItemPerPage;
    const indexOfFirstItem = indexOfLastItem - ItemPerPage;
    setMovieList(ListOfMovieByCategory.slice(indexOfFirstItem, indexOfLastItem));

  },[ItemPerPage,Movies,CurrentPage,SelectedCategory])
  
     
    return (
      <>
      <Container className="">
        <Row className="justify-content-center ">
           {MoviesList.map((movie)=>(
            <MovieCard key={movie.id} movie={movie}  />
           ))}
        </Row>
      </Container>
      
      </>
    );
}

export default MoviesList;