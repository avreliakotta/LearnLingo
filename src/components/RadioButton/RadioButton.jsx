import css from "./radio-button.module.css";
const RadioButton=({name,label,id,value,checked,onChange})=>{
    return(
        <>
         <label htmlFor={id} className={css.radioLabel}>
        
            <input
              type="radio"
              id={id}
              name={name}
              value={value}
              checked={checked}
              onChange={onChange}
              className={css.visuallyHidden}
            />
            <span className={css.label}></span>
            {label}
            </label>
        </>
    )
}
export default RadioButton;