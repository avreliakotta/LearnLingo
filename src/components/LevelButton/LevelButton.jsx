import css from './level-button.module.css';
const LevelButton=({text})=>{
    return(
<button type="button" className={css.levelBtn}>{text}</button>
    )
}
export default LevelButton;