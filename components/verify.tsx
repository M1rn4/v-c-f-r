import { Formik, Form, Field, FieldProps } from 'formik';
import FormButton from './FormButton';
import styles from '../styles/Home.module.css';

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
        <Form className={styles.form}>
          <label htmlFor='title' className={styles.label}>Título</label>
          <Field name='title'>
            {({ field }: FieldProps<string>) => (
              <input {...field} id='title' placeholder='Título' className={styles.input} />
            )}
          </Field>

          <label htmlFor='message' className={styles.label}>Mensaje</label>
          <Field name='message'>
            {({ field }: FieldProps<string>) => (
              <textarea {...field} id='message' placeholder='Escribe tu mensaje aquí' className={styles.textarea} />
            )}
          </Field>
          <FormButton
            buttonText={props.values.buttonText}
            isLoading={props.isSubmitting}
            className={styles.button}
          />
        </Form>
      )}
    </Formik>
  );
}

export default VerifyText;
