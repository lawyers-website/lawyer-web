import { Button, Checkbox, Flex } from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import FormInput from '../FormikCompo/FormInput';
import {useContext} from 'react'
import { language } from "@/langContext";
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
const da={
  "en":{
    "mr":"Mr",
    "mrs":"Mrs",
    "fn":"First name",
    "ln":"Last name",
    "city":"City",
    "case-postal":"Case Postal",
    "pays":"Pays",
    "tel":"Telephone",
    "e-mail":"E-mail",
  },
  "it":{
    "mr":"Signor",
    "mrs":"Signora",
    "fn":"Nome di battesimo",
    "ln":"Cognome",
    "city":"Città",
    "case-postal":"Caso postale",
    "pays":"Paga",
    "tel":"Telefono",
    "e-mail":"E-mail",
  },
  "ger":{
    "mr":"Herr",
    "mrs":"Dame",
    "fn":"Vorname",
    "ln":"Familienname",
    "city":"Stadt",
    "case-postal":"Postalische Hülle",
    "pays":"Bezahlen",
    "tel":"Telefon",
    "e-mail":"E-mail",
  },
  "fre":{
    "mr":"Seigneur",
    "mrs":"Dame",
    "fn":"Prénom",
    "ln":"Nom de famille",
    "city":"Ville",
    "case-postal":"Enveloppe postale",
    "pays":"Payer",
    "tel":"Téléphone",
    "e-mail":"E-mail",
  },
}
const selL=useContext(language)
const sl=selL?.lang! as keyof typeof da;

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
            <Checkbox marginLeft='3'>{da[sl]['mr']}</Checkbox>
            <Checkbox marginLeft='3' defaultChecked>
            {da[sl]['mrs']}
            </Checkbox>
          </Flex>
          <FormInput margin='2' name='firstname' id='firstname' placeholder={da[sl]['fn']} />
          <FormInput margin='2' name='lastname' id='lastname' placeholder={da[sl]['ln']} />
          <FormInput margin='2' name='city' id='city' placeholder={da[sl]['ln']} />
          <FormInput margin='2' name='postalcode' id='postalcode' placeholder={da[sl]['city']} />
          <FormInput margin='2' name='pays' id='pays' placeholder={da[sl]['case-postal']} />
          <FormInput
            margin='2'
            name='telephone'
            id='telephone'
            placeholder={da[sl]['tel']}
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
