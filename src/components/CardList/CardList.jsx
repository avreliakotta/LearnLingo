import css from './card-list.module.css';
import CardItem from '../CardItem/CardItem';

const CardList = ({ data }) => {
 
  return (
    <ul className={css.cardList}>
      {data.map(teacher => (
        <CardItem teacher={teacher} key={teacher.id} />
      ))}
    </ul>
  );
};

export default CardList;
