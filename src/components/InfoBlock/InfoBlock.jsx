import {info} from "./info";
import css from "./info-block.module.css";
const InfoBlock =()=>{
    
    return(
        <div className={css.container}>
            <ul className={css.infoList}>
             {info.map(({number,text,id})=>
    <li className={css.item} key={id}>
        <p className={css.numberItem}>{number}</p>
        <p className={css.textItem}>{text}</p>
    </li>)}   
            </ul>

        </div>

    )
}
export default InfoBlock;