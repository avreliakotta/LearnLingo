import css from './teachers-page.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchAll } from '../../redux/teachers/teachers-operations';
import { selectTeachers } from '../../redux/teachers/teachers-selectors';
import CardList from '../../components/CardList/CardList';
import Container from '../../components/Container/Container';

const TeachersPage = () => {
  const cachedVisibleTeachers = localStorage.getItem('visibleTeachers');
  const [visibleTeachers, setVisibleTeachers] = useState(
    cachedVisibleTeachers ? parseInt(cachedVisibleTeachers, 10) : 4
  );

  const dispatch = useDispatch();
  const data = useSelector(selectTeachers);

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);
  if (typeof data !== 'object' || data === null) {
    return <div>Loading...</div>;
  }
  const teachersArray = Object.values(data);
  const loadMoreTeachers = () => {
    const newVisibleTeachers = visibleTeachers + 4;
    setVisibleTeachers(newVisibleTeachers);
    localStorage.setItem('visibleTeachers', newVisibleTeachers);
  };

  return (
    <main>
      <section>
        <Container backgroundColor="#eee">
          <CardList data={teachersArray.slice(0, visibleTeachers)} />
          {visibleTeachers < teachersArray.length && (
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
