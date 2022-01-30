import classes from "./ButtonCreate.module.css"

export const ButtonCreate = (props) =>{
    return(
        <div className={classes.blockButton}>
            <button disabled={props.disabled} type={props.type} onClick={props.click} className={classes.buttonCreate}>{props.children}</button>
        </div>
    )
}