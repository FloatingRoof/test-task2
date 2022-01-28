import React from 'react';
import logo from "../../../assets/images/logo.png"
import book from "../../../assets/images/Book.png"
import applications from "../../../assets/images/applications.png"
import employees from "../../../assets/images/employees.png"
import clients from "../../../assets/images/clients.png"
import assets from "../../../assets/images/assets.png"
import settings from "../../../assets/images/settings.png"

import classes from "./Header.module.css"
import {NavLink} from "react-router-dom";
import {MenuItem} from "./MenuItem";

export const Header = (props) => {
    return (
        <div className={classes.headerWrapper}>
            <div className={classes.logo}>
                <NavLink to="/">
                    <img src={logo}/>
                </NavLink>
            </div>
            <div className={classes.menu}>
                <ul>
                    <MenuItem to="/knowledge-base" icon={book} text="База знаний"/>
                    <MenuItem to="/applications" icon={applications} text="Заявки"/>
                    <MenuItem to="/employees" icon={employees} text="Сотрудники"/>
                    <MenuItem to="/clients" icon={clients} text="Клиенты"/>
                    <MenuItem to="/assets" icon={assets} text="Активы"/>
                    <MenuItem to="/settings" icon={settings} text="Настройки"/>
                </ul>
                <span className={classes.copyright}>IntraService<br/>5.0.0</span>

            </div>
        </div>
    )
}