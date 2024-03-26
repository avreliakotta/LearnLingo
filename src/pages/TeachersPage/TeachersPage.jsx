import css from "./teachers-page.module.css";
import { useDispatch,useSelector } from 'react-redux';
import { useEffect,useState } from 'react';
import {fetchAll} from "../../redux/teachers/teachers-operations";
import {selectTeachers} from "../../redux/teachers/teachers-selectors";
import CardList from "../../components/CardList/CardList";
import Container from "../../components/Container/Container";
const TeachersPage=()=>{
    const [currentPage, setCurrentPage] = useState(1); 
    const dispatch = useDispatch();
    const data = useSelector(selectTeachers);
   const limit=4;
    useEffect(() => {
        dispatch(fetchAll());
    
      }, [dispatch]);
      const loadMoreTeachers = () => {
        dispatch(fetchAll(currentPage + 1)); 
        setCurrentPage(currentPage + 1); 
      };

    return(
        <main>
            <section>
            <Container backgroundColor="#eee">
                <CardList data={data}/>
                <button onClick={loadMoreTeachers} className={css.loadMoreBtn}>Load more</button>
                </Container>
            </section>

        </main>
    )
}
export default TeachersPage;