import css from "./card-list.module.css";
import CardItem from "../CardItem/CardItem";
const CardList=({data})=>{
    console.log("data",data);
    return(
        <ul className={css.cardList}>
            {data.map((item,index)=>(<CardItem key={index}/>))}
        </ul>

    )
}
export default CardList;