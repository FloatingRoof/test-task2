import React from 'react'
import {Field, ErrorMessage} from 'formik'
import TextError from "../../TextError/TextError";

function Textarea(props) {
    const {label, name, error, classField,classLabel, classBlock, ...rest} = props
    return (
        <div className={classBlock}>
            <label className={classLabel} htmlFor={name}>{label}</label>
            <Field className={classField} as='textarea' id={name} name={name} {...rest} />
            <ErrorMessage component={TextError} name={name}/>
        </div>
    )
}

export default Textarea
