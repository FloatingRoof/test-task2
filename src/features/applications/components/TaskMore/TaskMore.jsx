import classes from "./TaskMore.module.css"
import React from "react";
import close from "../../../../assets/images/close.png"
import {AddTask} from "./AddTask";
import {EditTask} from "./EditTask";

export const TaskMore = (props) => {

    return (
        <>
            <div className={classes.taskMore}>
                <div className={classes.taskHeader}>
                    <div className={classes.taskHeaderText}>
                        <div className={classes.taskNumber}>{props.task.id}</div>
                        <div className={classes.taskName}>{props.task.name || "Новая заявка"}</div>
                    </div>

                    <div className={classes.taskClose}>
                        <button onClick={() => props.setTaskMore(false)}>
                            <img src={close}/>
                        </button>
                    </div>
                </div>


                <div className={classes.content}>
                    {props.editMode ? <EditTask editTask={props.editTask} users={props.users} statuses={props.statuses} task={props.task}/> :
                        <AddTask createNewTask={props.createNewTask} setEditMode={props.setEditMode}
                                 setEditId={props.setEditId}/>}


                </div>


            </div>
        </>
    )
}

