import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  Heading,
  HStack,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { Formik, Form } from 'formik';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import FormInput from '../FormikCompo/FormInput';
import OAuthButtonGroup from './OAuthButtonGroup';
import PasswordField from './PasswordField';
import { signIn } from 'next-auth/react';

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
              <Text color='muted'>Don&apos;t have an account?</Text>
              <Button
                onClick={() => router.push('/signup')}
                variant='link'
                colorScheme='blue'
              >
                Sign up
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
            initialValues={{ email: '', password: '' }}
            onSubmit={(values, { setSubmitting }) => {
              signIn('credentials', values).then((res) => console.log(res));
              setSubmitting(false);
            }}
            validationSchema={toFormikValidationSchema(
              z.object({
                email: z.string().email('Please enter valid email'),
                password: z.string(),
              })
            )}
          >
            {({ values, isSubmitting }) => (
              <Form style={{ width: '100%' }}>
                <Stack spacing='6'>
                  <Stack spacing='5'>
                    <FormInput
                      name='email'
                      id='email'
                      type='email'
                      label='Email'
                      formLabelProps={{ htmlFor: 'email' }}
                    />
                    <PasswordField name='password' />
                  </Stack>
                  <HStack justify='space-between'>
                    <Checkbox defaultChecked>Remember me</Checkbox>
                    <Button variant='link' colorScheme='blue' size='sm'>
                      Forgot password?
                    </Button>
                  </HStack>
                  <Stack spacing='6'>
                    <Button variant='primary' type='submit'>
                      Sign in
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
