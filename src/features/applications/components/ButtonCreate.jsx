import classes from "./Applications.module.css"

export const ButtonCreate = (props) =>{
    return(
        <div className={classes.blockButton}>
            <button className={classes.buttonCreate}>Создать заявку</button>
        </div>
    )
}