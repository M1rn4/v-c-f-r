import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,
  Textarea,
 
} from '@chakra-ui/react'

import { Field, Formik, Form } from 'formik';

function VerifyText() {

  function validateName(value: any) {
    let error
    if (!value) {
      error = 'Is required'
    } else if (value.toLowerCase() !== 'naruto') {
      error = "verify!! text 😱"
    }
    return error
  }


  return (
    <div>
     <Formik
      initialValues={{ name: 'Text' }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          actions.setSubmitting(false)
        }, 1000)
      }}
    >
      {(props) => (
        <Form>
          <Field name='name' validate={validateName}>
            {({ field, form }: any) => (
              <FormControl isInvalid={form.errors.name && form.touched.name}>
                <FormLabel 
                fontWeight={600}
                fontSize={20}
                >Send text</FormLabel>
                <br />
                <Textarea
                 width="500px"
                 borderRadius={10}
                padding={10}
                 color={'#464F41'}
                 height="140px"
                 fontSize={16}
                 {...field} placeholder='Text' />
                <FormErrorMessage color={'#D0C9C0'}>{form.errors.name}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Button
            mt={8}
            colorScheme='teal'
            isLoading={props.isSubmitting}
            type='submit'
            width="150px"
            borderRadius={20}
            border={'none'}
            color={'#367E18'}
            height="40px"
            fontSize={16}
            backgroundColor="#A8E890"
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
    </div>
  );
}

export default VerifyText;
