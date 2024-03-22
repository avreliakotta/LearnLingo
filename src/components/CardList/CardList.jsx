import css from "./card-list.module.css";
import CardItem from "../CardItem/CardItem";
const CardList=({data})=>{

    return(
        <ul className={css.cardList}>
            {data.map((item,index)=>(<CardItem key={index} teacher={item}/>))}
        </ul>

    )
}
export default CardList;