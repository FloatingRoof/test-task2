import classes from "./ButtonCreate.module.css"

export const ButtonCreate = (props) =>{
    return(
        <div className={classes.blockButton}>
            <button onClick={props.click} className={classes.buttonCreate}>Создать заявку</button>
        </div>
    )
}