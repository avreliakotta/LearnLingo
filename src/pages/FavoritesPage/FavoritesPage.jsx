import { useSelector } from 'react-redux';
import css from './favorites-page.module.css';
import Container from '../../components/Container/Container';
import { selectFavorites } from '../../redux/teachers/teachers-selectors';
import CardItem from '../../components/CardItem/CardItem';
const FavoritesPage = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <main>
      <Container backgroundColor="#eee">
        <ul className={css.fivoritesList}>
          {favorites &&
            favorites.map(item => <CardItem key={item.id} teacher={item} />)}
        </ul>
      </Container>
    </main>
  );
};
export default FavoritesPage;
