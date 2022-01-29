import {ButtonCreate} from "./ButtonCreate";
import classes from "./Applications.module.css"
import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {getApplicationData} from "../modules/reducer";

export const Applications = (props) => {
    return (
        <>
            <div>
                <ButtonCreate click={props.getApplicationData}/>
            </div>

            <div className={classes.blockTable}>
                <table>
                    <thead>
                    <tr>

                        <th className={classes.color}>
                        </th>
                        <th className={classes.id}>
                        <span>
                             ID
                        </span>
                        </th>
                        <th className={classes.title}>
                        <span>
                          Название
                        </span>
                        </th>
                        <th className={classes.status}>
                        <span>
                            Статус
                        </span>
                        </th>
                        <th className={classes.executor}>
                        <span>
                          Исполнитель
                         </span>
                        </th>
                    </tr>

                    </thead>
                    <tbody>

                    <tr>
                        <td>
                            <span>
                                 color
                            </span>
                        </td>
                        <td>
                            <span>
                                ID
                            </span>
                        </td>
                        <td>
                            <span>
                                Название
                            </span>
                        </td>
                        <td>
                            <span>
                                Статус
                            </span>
                        </td>
                        <td>
                            <span>
                               Исполнитель
                            </span>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>

        </>
    )
}

let mapStateToProps = (state) => ({})
export default compose(
    connect(mapStateToProps, {getApplicationData}),
    /* withAuthRedirect*/
)(Applications);
