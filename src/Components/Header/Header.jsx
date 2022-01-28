import React from 'react';
import logo from "../../assets/images/logo.png"
import book from "../../assets/images/Book.png"
import classes from "./Header.module.css"

export const Header = (props) => {
    return (
        <div className={classes.headerWrapper}>
            <div className={classes.logo}>
                <img src={logo}/>
            </div>
            <div>
                <ul>
                    <li>
                        <img src={book}/>
                        База знаний
                    </li>
                </ul>
            </div>
        </div>
    )
}