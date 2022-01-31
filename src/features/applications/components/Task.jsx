import classes from "./Applications.module.css"
import React from "react";


export const Task = (props) => {
    return (
        <tr className={classes.itemTask} onClick={() => {
            props.setEditMode(true);
            props.setTaskMore(true);
            props.setEditId(props.id);
        }}>
            <td>

                <div className={classes.priority} style={{backgroundColor: props.priorityColor}}>

                </div>
            </td>
            <td>
                <span>
                    {props.id}
                </span>
            </td>
            <td>
                <span>
                    {props.title}
                </span>
            </td>
            <td>
                <div className={classes.statusBlock} style={{backgroundColor: props.statusRgb}}>
                    {props.status}
                </div>
            </td>
            <td>
                <span>
                    {props.executor}
                </span>
            </td>
        </tr>
    )
}