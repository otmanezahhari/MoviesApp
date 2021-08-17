import { useEffect } from "react";
import {useSelector,useDispatch} from "react-redux";
import { Col, Row,Container,Form,Dropdown} from "react-bootstrap";
import {  faThList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { setCategoryList, setItemPerPage, setMaxPageNumberLimit,setSelectedCategory ,setCurrentPage} from "services/redux/Actions"; 
import "./style.css";

const HeaderSelect = ()=>{
  const  dispatch = useDispatch();
  const MoviesLites = useSelector(state => state.Movies);
  
  
  const {Movies, CategoryList} = MoviesLites
  console.log(CategoryList)
  
  
  useEffect(() => { 
    let list = [];
    MoviesLites.Movies.forEach(element => {
      list.push(element.category);
    });
    list = [...new Set(list)];
    dispatch(setCategoryList(list));

  },[Movies]);


  const handleSelect = (ev) =>{
    dispatch(setItemPerPage(ev))
    dispatch(setMaxPageNumberLimit(ev));
    dispatch(setCurrentPage(1));
  }

  const handleSelectCategory= (ev)=>{
    dispatch(setSelectedCategory(ev.target.value))
    dispatch(setCurrentPage(1));
  }


  return(
    <Container className="header-movies">
      <Row>
        <Col lg={6} md={6} sm={12} xs={0} className="movie-text">
          <h2>Les Films du mois</h2>
          <p>Lorem Ipsum is simply dummy text of the printing</p> 
        </Col>

        <Col lg={6} md={6} sm={12} xs={12}>
          <Row className="select-category">
            <Col  xs={9} >
                <Form.Control onChange={handleSelectCategory} as="select">
                  <option value="all">Tous les catégories</option>
                      {CategoryList?CategoryList.map((cat, index) => {
                          return (<option key={index} value={cat}>{cat}</option>)
                        }) : "<option key={index} value={cat}>Tous les catégories</option>"}
                  </Form.Control> 
            </Col>
            <Col  xs={2}>
              <Dropdown onSelect={handleSelect}>
                <Dropdown.Toggle className="affichage" menuAlign="right" drop="right" >
                  <FontAwesomeIcon icon={faThList} /> 
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {[4,8,12].map(elem=>(
                    <Dropdown.Item eventKey={elem}>{elem}</Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
        </Col> 
     </Row>
    </Container>

  )
}

export default HeaderSelect;