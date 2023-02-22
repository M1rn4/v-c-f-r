import { Formik, Form, Field, FieldProps } from 'formik';
import FormButton from './FormButton';

function VerifyText() {
  return (
    <Formik
      initialValues={{ title: '', message: '', verified: false, buttonText: 'Verificar' }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {(props) => (
        <Form>
          <label htmlFor='title'>Título</label>
          <Field name='title'>
            {({ field }: FieldProps<string>) => (
              <input {...field} id='title' placeholder='Título' />
            )}
          </Field>

          <label htmlFor='message'>Mensaje</label>
          <Field name='message'>
            {({ field }: FieldProps<string>) => (
              <textarea {...field} id='message' placeholder='Escribe tu mensaje aquí' />
            )}
          </Field>

          <label htmlFor='verified'>Verificado</label>
          <Field name='verified'>
            {({ field }: FieldProps<string>) => (
              <input {...field} id='verified' type='checkbox' />
            )}
          </Field>

          <FormButton
            buttonText={props.values.buttonText}
            isLoading={props.isSubmitting}
          />
        </Form>
      )}
    </Formik>
  );
}

export default VerifyText;
