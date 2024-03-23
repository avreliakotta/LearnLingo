import { nanoid } from 'nanoid';
import css from "./card-list.module.css";
import CardItem from "../CardItem/CardItem";
const CardList=({data})=>{
    const dataWithIds = data.map(teacher => ({
        ...teacher,
        id: nanoid()
      }));
    
    return(
        <ul className={css.cardList}>
            {dataWithIds.map((teacher)=>(<CardItem key={teacher.id} teacher={(teacher)}/>))}
        </ul>

    )
}
export default CardList;