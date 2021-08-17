import {useSelector, useDispatch} from "react-redux";
import { Container,Pagination } from "react-bootstrap";
import { setCurrentPage, setMaxPageNumberLimit,setMinPageNumberLimit } from "services/redux/Actions";


const PaginationPage = () =>{
  const dispatch = useDispatch();
  const statePagination = useSelector(state => state.Pagination);
  const {CurrentPage, MaxPageNumberLimit, MinPageNumberLimit, Pages} = statePagination;

  const pageNumberLimit = 2;


  const handleNextbtn = () => {
    dispatch(setCurrentPage(CurrentPage + 1));

    if (CurrentPage + 1 > MaxPageNumberLimit) {
      dispatch(setMaxPageNumberLimit(MaxPageNumberLimit + pageNumberLimit));
      dispatch(setMinPageNumberLimit(MinPageNumberLimit + pageNumberLimit));
    }
  };
 

  const handlePrevbtn = () => {
    dispatch(setCurrentPage(CurrentPage  - 1));

    if ((CurrentPage - 1) % pageNumberLimit === 0) {
      dispatch(setMaxPageNumberLimit(MaxPageNumberLimit - pageNumberLimit));
      dispatch(setMinPageNumberLimit(MinPageNumberLimit - pageNumberLimit));
    }
  };

  const handleClick = (event) => {
    dispatch(setCurrentPage(Number(event.target.id)));
  };

  const renderPageNumbers = Pages.map((number) => {
    if (number < MaxPageNumberLimit + 1 && number > MinPageNumberLimit) {
      return (
       
        <Pagination.Item key={number}
          id={number}
          onClick={handleClick}
          className={CurrentPage === number ? "active" : null}>{number}
        </Pagination.Item>
      );
    } else {
      return null;
    }
  });


  return(
    <Container className="pagination-movie">
      <div className="div-pagination">
          <Pagination >
            {Pages.length>0? <Pagination.Prev  onClick={handlePrevbtn} disabled={CurrentPage === Pages[0] ? true : false}/>:''}
              
              {renderPageNumbers}
              
            {Pages.length>0?<Pagination.Next  onClick={handleNextbtn} disabled={CurrentPage === Pages[Pages.length - 1] ? true : false}/>:''}
          </Pagination>
      </div>
    </Container>
  )
}

export default PaginationPage;