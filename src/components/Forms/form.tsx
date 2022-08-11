import { Button, Checkbox, Flex } from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import FormInput from '../FormikCompo/FormInput';

interface props {
  setPosition: React.Dispatch<React.SetStateAction<number>>;
}

export default function Forms({ setPosition }: props) {
  const formSchema = z.object({
    firstname: z.string(),
    lastname: z.string(),
    city: z.string(),
    postalcode: z.string(),
    pays: z.string(),
    telephone: z.number(),
    email: z.string(),
  });

  const initialValues = {
    firstname: '',
    lastname: '',
    city: '',
    postalcode: '',
    pays: '',
    // telephone: ,
    email: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { setSubmitting }) => {
        setPosition(3);
        setSubmitting(false);
      }}
      validationSchema={toFormikValidationSchema(formSchema)}
    >
      {({ values, isSubmitting }) => (
        <Form style={{ width: '100%' }}>
          <Flex direction='column'>
            <Checkbox marginLeft='3'>Mr</Checkbox>
            <Checkbox marginLeft='3' defaultChecked>
              Mrs
            </Checkbox>
          </Flex>
          <FormInput margin='2' name='firstname' id='firstname' placeholder='First name' />
          <FormInput margin='2' name='lastname' id='lastname' placeholder='Last name' />
          <FormInput margin='2' name='city' id='city' placeholder='City' />
          <FormInput margin='2' name='postalcode' id='postalcode' placeholder='Case Postal' />
          <FormInput margin='2' name='pays' id='pays' placeholder='Pays' />
          <FormInput
            margin='2'
            name='telephone'
            id='telephone'
            placeholder='Telephone'
            type='number'
          />
          <FormInput margin='2' name='email' id='email' placeholder='E-mail' />
          <Button marginBottom='3' float='right' variant='primary' type='submit'>
            Next
          </Button>
        </Form>
      )}
    </Formik>
  );
}
