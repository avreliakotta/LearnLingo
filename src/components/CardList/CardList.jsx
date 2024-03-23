import { nanoid } from 'nanoid';
import css from "./card-list.module.css";
import CardItem from "../CardItem/CardItem";
// const CardList=({data})=>{
//     const dataWithIds = data.map(teacher => ({
//         ...teacher,
//         id: nanoid()
//       }));
    
//     return(
//         <ul className={css.cardList}>
//             <li key={teacher.id}>
//             {dataWithIds.map((teacher)=>( <CardItem  teacher={teacher}/>))}
//             </li>
//         </ul>

//     )
// }
const CardList = ({ data }) => {
    const dataWithIds = data.map((teacher) => ({
      ...teacher,
      id: nanoid(),
    }));
  
    return (
      <ul className={css.cardList}>
        {dataWithIds.map((teacher) => (
          <li key={teacher.id}>
            <CardItem teacher={teacher} />
          </li>
        ))}
      </ul>
    );
  };
  
export default CardList;