import classes from "./TaskMore.module.css"
import React from "react";
import close from "../../../../assets/images/close.png"
import {AddTask} from "./AddTask";

export const TaskMore = (props) => {

    return (
        <>
            <div className={classes.taskMore}>
                <div className={classes.taskHeader}>
                    <div className={classes.taskHeaderText}>
                        <div className={classes.taskNumber}></div>
                        <div className={classes.taskName}>{props.name || "Новая заявка"}</div>
                    </div>

                    <div className={classes.taskClose}>
                        <button onClick={() => props.setTaskMore(false)}>
                            <img src={close}/>
                        </button>
                    </div>
                </div>


                <div>
                    <AddTask/>

                </div>


            </div>
        </>
    )
}

