import classes from "./AddTask.module.css"
import React from "react";
import {Form, Formik} from "formik";
import FormikControl from "../../../common/FormikControl/FormikControl";
import {ButtonCreate} from "../ButtonCreate";
import TextError from "../../../common/TextError/TextError";
import * as Yup from "yup";

export const AddTask = (props) => {

    const initialValues = {
        title: "",
        description: "",
    };

    const onSubmit = async (values, {setStatus, setSubmitting}) => {
        setStatus("");
        await props.onSubmit(values, setStatus);
        setSubmitting(false);
    };


    const validationSchema = Yup.object(
        {
            title: Yup.string().required('Это поле обязательно для заполнения!'),
            description: Yup.string().required("Это поле обязательно для заполнения!"),
        }
    )

    return (
        <Formik initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit} enableReinitialize>

            {formik => {

                return (
                    <Form className={classes.formAdd}>
                        <div>
                            <FormikControl classField={classes.formAddTextareaTitle} classLabel={classes.formAddLabel}
                                           classBlock={classes.formAddBlock} control="textarea" name="title"
                                           label="Название"/>
                        </div>
                        <div>
                            <FormikControl classField={classes.formAddTextareaDescription}
                                           classLabel={classes.formAddLabel} classBlock={classes.formAddBlock}
                                           control="textarea" name="description"
                                           label="Описание"/>
                        </div>


                        <div className={classes.blockButton}>
                            <ButtonCreate type='submit'
                                          disabled={!formik.isValid || formik.isSubmitting}>Сохранить</ButtonCreate>


                        </div>

                        <div className={classes.blockError}>
                            {
                                formik.status !== "Profile data updated" ?
                                    <TextError>{formik.status}</TextError>
                                    :
                                    <div className={classes.goodMessage}>{formik.status}</div>
                            }

                        </div>

                    </Form>
                )
            }}
        </Formik>
    )
}

