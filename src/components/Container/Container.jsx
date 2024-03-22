import css from "./container.module.css";
const Container=({children,backgroundColor})=>{
    return(
        <div className={css.container} style={{ backgroundColor }}>
            {children}
        </div>
    )
}
export default Container;