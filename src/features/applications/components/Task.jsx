import classes from "./Applications.module.css"
import React from "react";
import cn from "classnames"
import preloader from "../../../assets/images/preloader.svg";


export const Task = (props) => {
    return (
        <tr>
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
                <span className={classes.statusBlock} style={{backgroundColor: props.statusRgb}}>
                    {props.status}
                </span>
            </td>
            <td>
                <span>
                    {props.executor}
                </span>
            </td>
        </tr>
    )
}