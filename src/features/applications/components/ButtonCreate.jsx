import classes from "./ButtonCreate.module.css"

export const ButtonCreate = (props) =>{
    return(
        <div className={classes.blockButton}>
            <button className={classes.buttonCreate}>Создать заявку</button>
        </div>
    )
}