import classes from "./Search.module.css"
import { Field, Form, Formik} from "formik";
import React from "react";
import search from  "../../../assets/images/Search.png"

export const Search = (props) => {


    const initialValues = {
        search: '',
    }
    return (
        <div className={classes.search}>
            <Formik initialValues={initialValues}>
                {formik => {
                    return (
                        <Form className={classes.form}>
                            <div className={classes.field}>
                                <Field id="search" name="search"  />
                                <button className={classes.buttonSearch} type='submit'><img src={search}/></button>
                            </div>
                        </Form>)
                }}
            </Formik>
        </div>
    )
}