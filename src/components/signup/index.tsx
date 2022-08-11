import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  HStack,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import FormInput from '../FormikCompo/FormInput';
import OAuthButtonGroup from './OAuthButtonGroup';
import PasswordField from './PasswordField';
import { useRouter } from 'next/router';
import { prisma } from 'src/server/db/client';
import bcrypt from 'bcryptjs';

const FormSchema = z
  .object({
    name: z.string(),
    email: z.string().email('Enter valid email'),
    password: z.string(),
    confirm: z.string(),
  })
  .refine((data) => data.password === data.confirm, {
    // eslint-disable-next-line quotes
    message: "Passwords don't match",
    path: ['confirm'],
  });

const initialValues: z.infer<typeof FormSchema> = {
  name: '',
  email: '',
  password: '',
  confirm: '',
};

export default function App() {
  const router = useRouter();

  return (
    <Container
      maxW='lg'
      py={{ base: '12', md: '24' }}
      px={{ base: '0', sm: '8' }}
    >
      <Stack spacing='8'>
        <Stack spacing='6'>
          {/* <Logo /> */}
          <Stack spacing={{ base: '2', md: '3' }} textAlign='center'>
            <Heading size={useBreakpointValue({ base: 'xs', md: 'sm' })}>
              Log in to your account
            </Heading>
            <HStack spacing='1' justify='center'>
              <Text color='muted'>Already have an account?</Text>
              <Button
                onClick={() => router.push('/signin')}
                variant='link'
                colorScheme='blue'
              >
                Sign in
              </Button>
            </HStack>
          </Stack>
        </Stack>
        <Box
          py={{ base: '0', sm: '8' }}
          px={{ base: '4', sm: '10' }}
          bg={useBreakpointValue({ base: 'transparent', sm: 'bg-surface' })}
          boxShadow={{ base: 'none', sm: useColorModeValue('md', 'md-dark') }}
          borderRadius={{ base: 'none', sm: 'xl' }}
        >
          <Formik
            initialValues={initialValues}
            onSubmit={async (values, { setSubmitting }) => {
              const passwordHash = await bcrypt.hash(values.confirm, 10);
              prisma.user.create({
                data: {
                  email: values.email,
                  password: passwordHash,
                  name: values.name,
                },
              });
              setSubmitting(false);
            }}
            validationSchema={toFormikValidationSchema(FormSchema)}
          >
            {({ values, isSubmitting }) => (
              <Form style={{ width: '100%' }}>
                <Stack spacing='6'>
                  <Stack spacing='5'>
                    <FormInput name='name' label='Name' />
                    <FormInput
                      name='email'
                      id='email'
                      type='email'
                      label='Email'
                      formLabelProps={{ htmlFor: 'email' }}
                    />
                    <PasswordField name='password' label='Password' />
                    <PasswordField name='confirm' label='Confirm' />
                  </Stack>
                  <Stack spacing='6'>
                    <Button variant='primary' type='submit'>
                      Sign up
                    </Button>
                    <HStack>
                      <Divider />
                      <Text fontSize='sm' whiteSpace='nowrap' color='muted'>
                        or continue with
                      </Text>
                      <Divider />
                    </HStack>
                    <OAuthButtonGroup />
                  </Stack>
                </Stack>
              </Form>
            )}
          </Formik>
        </Box>
      </Stack>
    </Container>
  );
}
