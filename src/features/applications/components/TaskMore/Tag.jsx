import classes from "./EditTask.module.css"
import React from "react";

export const Tag = (props) => {

    return (
        <div className={classes.wrapTag}>
            <div className={classes.tag}>
                {props.children}
            </div>
        </div>

    )
}

