import {
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Select,
  Stack,
  Textarea,
  useBreakpointValue,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { trpc } from '../../utils/trpc';
import FormInput from '../FormikCompo/FormInput';

export default function Details() {
  const lawyerFormMutation = trpc.useMutation(['user.lawyerForm']);
  const items = [
    'CONTRACTS',
    'COMPANY LAW',
    'CRIMINAL LAW',
    'FAMILY / DIVORCE',
    'INSURANCE',
    'FINANCE / TAXES',
    'LABOR LAW',
    'RENT / REAL ESTATE',
    'GOVERNMENT ADMINISTRATION',
    'OTHERS',
  ];

  const formSchema = z.object({
    education: z.object({
      institution: z.string(),
      course: z.string(),
    }),
    exyears: z.number(),
    languages: z.string(),
  });

  const initialValues: z.infer<typeof formSchema> = {
    education: {
      institution: '',
      course: '',
    },
    exyears: 0,
    languages: '',
  };

  return (
    <Container
      maxW={{ base: 'lg', md: 'xl', lg: '50rem' }}
      py={{ base: '12', md: '24' }}
      px={{ base: '0', sm: '8' }}
    >
      <Stack spacing='6'>
        <Heading
          textAlign='center'
          size={useBreakpointValue({ base: 'xs', md: 'sm' })}
        >
          Fill Your Details
        </Heading>
        <Box
          py={{ base: '0', sm: '8' }}
          px={{ base: '4', sm: '10' }}
          bg={useBreakpointValue({ base: 'transparent', sm: 'bg-surface' })}
          boxShadow={{ base: 'none', sm: useColorModeValue('md', 'md-dark') }}
          borderRadius={{ base: 'none', sm: 'xl' }}
        >
          <Formik
            initialValues={initialValues}
            onSubmit={(values, { setSubmitting }) => {
              console.log('called');
              lawyerFormMutation
                .mutateAsync({
                  course: values.education.course,
                  experience: values.exyears,
                  institution: values.education.institution,
                })
                .then((res) => {
                  console.log(res.message);
                  setSubmitting(false);
                });
            }}
            validationSchema={toFormikValidationSchema(formSchema)}
          >
            {({ errors }) => {
              return (
                <Form style={{ width: '100%' }}>
                  <VStack alignItems='flex-start' spacing='6'>
                    <Heading size='xs'>Education :</Heading>
                    <VStack alignItems='flex-start' pl='1.5rem' spacing='4'>
                      <FormInput
                        name='education.institution'
                        id='institution'
                        label='Educational Institution'
                        width={{ base: '20rem', md: '25rem', lg: '33rem' }}
                      />
                      <FormInput
                        name='education.course'
                        id='course'
                        label='Course'
                        width={{ base: '20rem', md: '25rem', lg: '33rem' }}
                      />
                    </VStack>
                    <FormInput
                      name='exyears'
                      type='number'
                      label='Year of Experience'
                      width={{ base: '23rem', md: '28rem', lg: '35rem' }}
                    />
                    <FormInput
                      name='languages'
                      id='languages'
                      label='Languages'
                      width={{ base: '23rem', md: '28rem', lg: '35rem' }}
                    />
                  </VStack>
                  <Button
                    mt='16px'
                    float='left'
                    type='submit'
                    variant='primary'
                  >
                    Submit
                  </Button>
                </Form>
              );
            }}
          </Formik>
        </Box>
      </Stack>
    </Container>
  );
}
