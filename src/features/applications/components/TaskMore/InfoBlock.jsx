import classes from "./EditTask.module.css"
import React from "react";

export const InfoBlock = (props) => {

    return (
        <div className={classes.block}>
            <div className={classes.header}>{props.header}</div>
            <div className={classes.text}>
                {props.img && <img src={props.img}/>}
                {props.text}
            </div>

        </div>
    )
}

