import classes from "./EditTask.module.css"
import React, {useState} from "react";
import { Form, Formik} from "formik";
import FormikControl from "../../../common/FormikControl/FormikControl";
import {ButtonCreate} from "../ButtonCreate";
import * as Yup from "yup";
import {InfoBlock} from "./InfoBlock";
import Calendar from "../../../../assets/images/Calendar.png"
import dateFormat from "dateformat";
import {Tag} from "./Tag";

export const EditTask = (props) => {

    let [editStatus, setEditStatus] = useState(false);
    let [editExecutor, setEditExecutor] = useState(false);


    const initialValues = {
        status: props.task.statusId,
        comment: "",
        executor: props.task.executorId
    };
    const onSubmit = async (values, {setStatus, setSubmitting}) => {
        await props.editTask(props.task.id, values.status, values.executor);
        setEditStatus(false);
        setEditExecutor(false);
        setSubmitting(false);

    };


    const validationSchema = Yup.object(
        {}
    )

    return (
        <Formik initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit} enableReinitialize>

            {formik => {

                return (
                    <Form className={classes.formEdit}>

                        <div className={classes.leftInformation}>


                            <div>
                                <div className={classes.formAddBlock}>
                                    <label className={classes.formAddLabel}>Описание</label>
                                    <div className={classes.formEditTextareaDescription}>{props.task.description}</div>
                                </div>
                            </div>
                            <div>
                                <FormikControl
                                    placeholder="Чтобы добавить комментарий нажмите на этот текст и начните вводить символы"
                                    classField={classes.formEditTextareaDescription}
                                    classLabel={classes.formAddLabel} classBlock={classes.formAddBlock}
                                    control="textarea" name="comment"
                                    label="Добавление комментария"/>
                            </div>


                            <div className={classes.blockButton}>
                                <ButtonCreate disabled={formik.isSubmitting} type='submit'>Сохранить</ButtonCreate>


                            </div>

                        </div>
                        <div className={classes.rightInformation}>
                            <div className={classes.wrapStatus}>

                                {editStatus ?

                                    <FormikControl
                                        className={classes.select}
                                        control='select'
                                        label='Изменение статуса: '
                                        name='status'
                                        options={props.statuses}
                                    />
                                    :
                                    <>
                                        <div className={classes.statusBlock}>
                                            <div className={classes.statusColor}
                                                 style={{backgroundColor: props.task.statusRgb}}/>
                                            {props.task.statusName}
                                        </div>
                                        <label className={classes.buttonEdit} onClick={() => {
                                            setEditStatus(true);
                                        }}>Изменить</label>
                                    </>
                                }
                            </div>


                            <InfoBlock header="Заявитель" text={props.task.initiatorName}/>


                            {
                                editExecutor ?
                                    <div className={classes.editExecutor}>
                                        <FormikControl
                                            className={classes.select}
                                            control='select'
                                            label='Изменение исполнителя: '
                                            name='executor'
                                            options={props.users}
                                        />
                                    </div>
                                    :
                                    <>
                                        <InfoBlock header="Исполнитель" text={props.task.executorName}/>
                                        <label className={classes.buttonEdit} onClick={() => {
                                            setEditExecutor(true);
                                        }}>Изменить</label>
                                    </>
                            }


                            <InfoBlock header="Приоритет" text={props.task.priorityName}/>
                            <InfoBlock header="Срок" text={
                                dateFormat(props.task.resolutionDatePlan, 'd.m.yyyy')
                            } img={Calendar}/>

                            <div className={classes.block}>
                                <div className={classes.header}>Теги</div>
                                <div className={classes.blockTag}>
                                    {props.task.tags.map(t => <Tag key={t.id}>{t.name}</Tag>)}
                                </div>
                            </div>

                        </div>
                    </Form>
                )
            }}
        </Formik>
    )
}

