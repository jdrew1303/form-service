import React            from 'react'
import JsonSchemaEditor from '../JsonSchemaEditor'
import styles           from './Form.css'

const Form = ({schema, formSchema, onSubmit}) => {
  const model = {}

  return (
    <div className={styles.Form}>
      <h2>{schema.title || "Form"}</h2>
      <JsonSchemaEditor
        schema={schema}
        form={formSchema}
        onSubmit={onSubmit}
        model={model}
      />
    </div>
  )
};

Form.propTypes = {
  schema: React.PropTypes.object.isRequired,
  formSchema: React.PropTypes.array,
  onSubmit: React.PropTypes.func.isRequired,
}

export default Form;
