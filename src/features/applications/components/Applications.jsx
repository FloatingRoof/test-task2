import {ButtonCreate} from "./ButtonCreate";
import classes from "./Applications.module.css"
import React, {useState} from "react";
import {Task} from "./Task";
import {TaskMore} from "./TaskMore/TaskMore";

export const Applications = (props) => {

    let [taskMore, setTaskMore] = useState(false);
    const openTaskMore = () => {setTaskMore(true)}


    return (
        <div className={classes.main}>
            {taskMore && <TaskMore setTaskMore={setTaskMore}/>}
            <div>
                <ButtonCreate click={openTaskMore}/>
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
                    {

                        props.tasks.map(
                            t => <Task id={t.id} executor={t.executorName} statusRgb={t.statusRgb} status={t.statusName}
                                       title={t.name}
                                       key={t.id} priorityColor={props.priorities.filter(p => {
                                return p.id == t.priorityId
                            })[0].rgb}/>)
                    }


                    {

                        props.tasks.map(
                            t => <Task id={t.id} executor={t.executorName} statusRgb={t.statusRgb} status={t.statusName}
                                       title={t.name}
                                       key={t.id} priorityColor={props.priorities.filter(p => {
                                return p.id == t.priorityId
                            })[0].rgb}/>)
                    }
                    </tbody>
                </table>
            </div>

        </div>
    )
}

