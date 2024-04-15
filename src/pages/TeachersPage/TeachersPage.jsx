import css from './teachers-page.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchAll } from '../../redux/teachers/teachers-operations';
import { selectTeachers } from '../../redux/teachers/teachers-selectors';
import CardList from '../../components/CardList/CardList';
import Container from '../../components/Container/Container';


const TeachersPage = () => {
 
  const [visibleTeachers, setVisibleTeachers] = useState(4);
  const dispatch = useDispatch();
  const data = useSelector(selectTeachers);


  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);
  if (typeof data !== 'object' || data === null) {
    return <div>Loading...</div>;
  }
  
  const loadMoreTeachers = () => {
    setVisibleTeachers(prevVisibleTeachers => prevVisibleTeachers + 4);
  };
  if (!Array.isArray(data) || data.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <section>
        <Container backgroundColor="#eee">
          <CardList data={data.slice(0, visibleTeachers)} />
          {visibleTeachers < data.length && (
            <button className={css.loadMoreBtn} onClick={loadMoreTeachers}>
              Load more
            </button>
          )}
        </Container>
      </section>
    </main>
  );
};
export default TeachersPage;
