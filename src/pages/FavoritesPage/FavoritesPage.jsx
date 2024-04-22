import { useSelector } from 'react-redux';
import css from './favorites-page.module.css';
import Container from '../../components/Container/Container';
import { selectFavorites } from '../../redux/teachers/teachers-selectors';
import CardItem from '../../components/CardItem/CardItem';

const FavoritesPage = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <main>
      <section>
        <Container backgroundColor="#eee">
          {favorites && favorites.length > 0 ? (
            <ul className={css.fivoritesList}>
              {favorites.map(item => (
                <CardItem key={item.id} teacher={item} />
              ))}
            </ul>
          ) : (
            <h1 className={css.favoritesTitle}>Favorites Teachers</h1>
          )}
        </Container>
      </section>
    </main>
  );
};
export default FavoritesPage;
