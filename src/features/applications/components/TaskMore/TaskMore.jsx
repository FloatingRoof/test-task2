import classes from "./TaskMore.module.css"
import React from "react";
import close from "../../../../assets/images/close.png"
import TextError from "../../../common/TextError/TextError";
import FormikControl from "../../../common/FormikControl/FormikControl";
import {Form, Formik} from "formik";
import * as Yup from "yup";
import Preloader from "../../../common/Preloader/Preloader";

export const TaskMore = (props) => {


    const initialValues = {
        title: "",
        description:"",
    };

    const onSubmit = async (values, {setStatus, setSubmitting}) => {
        setStatus("");
        await props.onSubmit(values, setStatus);
        setSubmitting(false);
    };


    const validationSchema = Yup.object(
        {
            title: Yup.string().required('Required'),
            description: Yup.string().required("Required"),
        }
    )



    return (
        <>
            <div className={classes.taskMore}>
                <div className={classes.taskHeader}>
                    <div className={classes.taskHeaderText}>
                        <div className={classes.taskNumber}></div>
                        <div className={classes.taskName}>{props.name || "Новая заявка"}</div>
                    </div>

                    <div className={classes.taskClose}>
                        <button onClick={() => props.setTaskMore(false)}>
                            <img src={close}/>
                        </button>
                    </div>
                </div>



                <div>

                    {/*<Formik initialValues={initialValues}*/}
                    {/*        validationSchema={validationSchema}*/}
                    {/*        onSubmit={onSubmit} enableReinitialize>*/}

                    {/*    {formik => {*/}

                    {/*        return (*/}
                    {/*            <Form>*/}



                    {/*                <div className={classes.block}>*/}
                    {/*                    <FormikControl control="textarea" name="title"*/}
                    {/*                                   label="My professional skills"/>*/}
                    {/*                </div>*/}
                    {/*                <div className={classes.block}>*/}
                    {/*                    <FormikControl control="textarea" name="description"*/}
                    {/*                                   label="About me"/>*/}
                    {/*                </div>*/}



                    {/*                <div className={classes.blockButton}>*/}
                    {/*                    <button className={classes.button} type='submit'*/}
                    {/*                            disabled={!formik.isValid || formik.isSubmitting}>*/}
                    {/*                        {formik.isSubmitting ?*/}
                    {/*                            <Preloader w="45px" h="45px"/>*/}
                    {/*                            : "Save profile"*/}
                    {/*                        }*/}

                    {/*                    </button>*/}
                    {/*                </div>*/}

                    {/*                <div className={classes.blockError}>*/}
                    {/*                    {*/}
                    {/*                        formik.status !== "Profile data updated" ?*/}
                    {/*                            <TextError>{formik.status}</TextError>*/}
                    {/*                            :*/}
                    {/*                            <div className={classes.goodMessage}>{formik.status}</div>*/}
                    {/*                    }*/}

                    {/*                </div>*/}

                    {/*            </Form>*/}
                    {/*        )*/}
                    {/*    }}*/}
                    {/*</Formik>*/}
                </div>


            </div>
        </>
    )
}

