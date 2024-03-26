
import css from "./card-list.module.css";
import CardItem from "../CardItem/CardItem";

const CardList = ({ data }) => {
   
  
    return (
      <ul className={css.cardList}>
        {data.map((teacher) => (
          <li key={teacher.id}>
            <CardItem teacher={teacher} />
          </li>
        ))}
      </ul>
    );
  };
  
export default CardList;