import { Col,Image,Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp,faThumbsDown,faStar } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp as farThumbsUp, faThumbsDown as farThumbsDown,faTrashAlt  } from '@fortawesome/free-regular-svg-icons';

import { deletSpecificMovie,setMovieLike, cancelMovieLike, setMovieDesLike, cancelMovieDeslike } from 'services/redux/Actions';

import "./style.css";


function MovieCard({movie}) {
    
    const dispatch= useDispatch();
    const stateMovies = useSelector(state => state.Movies);
    const {Movies ,MoviesLikes,MoviesDisLikes} = stateMovies;


   const convert = (value)=>
    {
        let number = value / 1000;
        return number.toFixed(0) + 'k';
    }

    return ( 
     <>

        <Col lg={3} md={4} sm={6} xs={12} className="box">
            <Row>
                <Image className="gradient" src={"/images/"+movie.title.split(' ').join('')+".png"} fluid />
               
                <div className="movie-item-content">
                    <div className="movie-item-content-top">
                        <div className="movie-delete">
                            <span onClick={()=>{ dispatch(deletSpecificMovie(movie.id))}}  className="movie-count-time hover-left">
                            <FontAwesomeIcon icon={faTrashAlt}  />
                            </span>
                        </div>
                        
                        <div className="movie-ratting">
                            <span><FontAwesomeIcon icon={faStar} color="#ff1744" />{ (movie.likes / (movie.likes + movie.dislikes)).toFixed(1)*10 }/10</span>
                        </div>
                        
                    </div>
                    
                    <div className="movie-item-content-buttom">
                        <div className="movie-item-title">
                            <span>{movie.title}</span>
                    </div>
                    <div className="item-cat">
                            <a href="#category">{movie.category}</a>
                    </div>
                    <div className="movie-item-beta">
                        
                    <div className="view-movie">
                        <div className="blck-bg">

                            <span> 
                                {MoviesLikes.indexOf(movie.id) > -1 ? 
                                    (<FontAwesomeIcon className="icon-like" icon={faThumbsUp}  onClick={()=>{ dispatch(cancelMovieLike(movie.id))}} />):
                                    (<FontAwesomeIcon className="icon-like" icon={farThumbsUp} onClick={()=>{ if (MoviesDisLikes.indexOf(movie.id) > -1 )
                                        {dispatch(cancelMovieDeslike(movie.id)); }
                                            dispatch(setMovieLike(movie.id));}} />)
                                } 
                                { movie.likes >=1000 ? (convert(movie.likes)):(movie.likes)}
                            </span>
                            <span>
                       
                                {MoviesDisLikes.indexOf(movie.id) > -1 ? 
                                        (<FontAwesomeIcon className="icon-like"  icon={faThumbsDown} onClick={()=>{ dispatch(cancelMovieDeslike(movie.id))}} />):
                                        (<FontAwesomeIcon className="icon-like" icon={farThumbsDown} onClick={()=>{if (MoviesLikes.indexOf(movie.id) > -1 ){
                                            dispatch(cancelMovieLike(movie.id));} 
                                            dispatch(setMovieDesLike(movie.id));}} />)
                                }
                                {movie.dislikes >=1000 ? (convert(movie.dislikes)):(movie.dislikes)}
                            </span>
                        </div>
                    </div>
                
                </div>
            </div>
            
            
            
            </div>
           
           
            </Row>
        </Col>
    
    </>)
}


export default MovieCard;

