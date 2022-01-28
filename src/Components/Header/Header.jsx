import React from 'react';
import logo from "../../assets/images/logo.png"
import book from "../../assets/images/Book.png"
import classes from "./Header.module.css"
import {NavLink} from "react-router-dom";

export const Header = (props) => {
    return (
        <div className={classes.headerWrapper}>
            <div className={classes.logo}>
                <img src={logo}/>
            </div>
            <div className={classes.menu}>
                <ul>
                    <li className={classes.item}>
                            <div>
                                <img src={book}/>
                            </div>
                            База знаний
                    </li>
                </ul>
            </div>
        </div>
    )
}