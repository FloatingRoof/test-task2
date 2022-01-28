import classes from "./Header.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

export const MenuItem = (props) => {
    return (
        <li className={classes.item}>
            <NavLink className={(navData) => navData.isActive ? classes.active : classes.deactivat}
                     to={props.to}>
                <div>
                    <img src={props.icon}/>
                </div>
                <span className={classes.textMenu}>
                    {props.text}
                </span>
            </NavLink>
        </li>
    )
}