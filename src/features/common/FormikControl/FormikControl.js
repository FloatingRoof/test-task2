import React from 'react'
import Textarea from './Controls/Textarea'
import Select from './Controls/Select'

function FormikControl (props) {
  const { control, ...rest } = props
  switch (control) {
   
    case 'textarea':
      return <Textarea {...rest} />
    case 'select':
      return <Select {...rest} />
    default:
      return null
  }
}

export default FormikControl
