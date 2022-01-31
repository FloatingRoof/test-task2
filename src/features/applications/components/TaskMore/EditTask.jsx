import classes from "./EditTask.module.css"
import React from "react";
import {Form, Formik} from "formik";
import FormikControl from "../../../common/FormikControl/FormikControl";
import {ButtonCreate} from "../ButtonCreate";
import TextError from "../../../common/TextError/TextError";
import * as Yup from "yup";

export const EditTask = (props) => {

    const initialValues = {

        description: props.task.description
    };
    const onSubmit = async (values, {setStatus, setSubmitting}) => {
        setStatus("");
        let idCreatedTask = await props.createNewTask(values.title, setStatus);
        setSubmitting(false);
        props.setEditId(idCreatedTask);
        props.setEditMode(true);
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


                            <div >
                                <FormikControl placeholder="Чтобы добавить описание нажмите на этот текст и начните вводить символы" classField={classes.formEditTextareaDescription}
                                               classLabel={classes.formAddLabel} classBlock={classes.formAddBlock}
                                               control="textarea" name="description"
                                               label="Описание" />
                            </div>


                            <div className={classes.blockButton}>
                                <ButtonCreate disabled={formik.isSubmitting} type='submit'>Сохранить</ButtonCreate>


                            </div>

                        </div>
                        <div className={classes.rightInformation}>
                        </div>
                    </Form>
                )
            }}
        </Formik>
    )
}

