import { useDispatch,useSelector } from 'react-redux';
import { useEffect } from 'react';
import {fetchAll} from "../../redux/teachers/teachers-operations";
import {selectTeachers} from "../../redux/teachers/teachers-selectors";
import CardList from "../../components/CardList/CardList";
const TeachersPage=()=>{
    const dispatch = useDispatch();
    const data = useSelector(selectTeachers);
    useEffect(() => {
        
       dispatch(fetchAll());
    
      }, [dispatch]);
    return(
        <main>
            <section>
                <CardList data={data}/>
            </section>

        </main>
    )
}
export default TeachersPage;