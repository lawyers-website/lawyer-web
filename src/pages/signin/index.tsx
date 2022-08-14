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
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Formik, Form, FormikErrors } from "formik";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import FormInput from "src/components/FormikCompo/FormInput";
import OAuthButtonGroup from "src/components/Oauth";
import PasswordField from "src/components/FormikCompo/PasswordField";
import { getSession, signIn } from "next-auth/react";

export const AuthError = {
  WRONG_PASSWORD: 1,
  EMAIL_DOESNT_EXIST: 2,
  NO_PASSWORD: 3,
} as const;

const setFormikErrors = (
  error: string,
  setErrors: (
    errors: FormikErrors<{
      email: string;
      password: string;
    }>
  ) => void
) => {
  switch (parseInt(error)) {
    case AuthError.EMAIL_DOESNT_EXIST:
      setErrors({
        email: "Email Address doesn't exsits",
      });
      break;
    case AuthError.NO_PASSWORD:
      setErrors({
        password: "Please Enter the password",
      });
      break;
    case AuthError.WRONG_PASSWORD:
      setErrors({
        password: "Email or Password are incorrect",
        email: "Email or Password are incorrect",
      });
      break;
  }
};

export default function App() {
  const router = useRouter();
  return (
    <Container
      maxW="lg"
      py={{ base: "12", md: "24" }}
      px={{ base: "0", sm: "8" }}
    >
      <Stack spacing="8">
        <Stack spacing="6">
          <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
            <Heading size={useBreakpointValue({ base: "xs", md: "sm" })}>
              Log in to your account
            </Heading>
            <HStack spacing="1" justify="center">
              <Text color="muted">Don&apos;t have an account?</Text>
              <Button
                onClick={() => router.push("/signup")}
                variant="link"
                colorScheme="blue"
              >
                Sign up
              </Button>
            </HStack>
          </Stack>
        </Stack>
        <Box
          py={{ base: "0", sm: "8" }}
          px={{ base: "4", sm: "10" }}
          bg={useBreakpointValue({ base: "transparent", sm: "bg-surface" })}
          boxShadow={{ base: "none", sm: useColorModeValue("md", "md-dark") }}
          borderRadius={{ base: "none", sm: "xl" }}
        >
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values, { setSubmitting, setErrors }) => {
              signIn("credentials", {
                ...values,
                redirect: false,
              }).then((value) => {
                if (value?.error) setFormikErrors(value?.error, setErrors);
                if (value?.ok) router.push("/user/user-in");
                setSubmitting(false);
              });
            }}
            validationSchema={toFormikValidationSchema(
              z.object({
                email: z.string().email("Please enter valid email"),
                password: z.string(),
              })
            )}
          >
            {() => (
              <Form style={{ width: "100%" }}>
                <Stack spacing="6">
                  <Stack spacing="5">
                    <FormInput
                      name="email"
                      id="email"
                      type="email"
                      label="Email"
                      formLabelProps={{ htmlFor: "email" }}
                    />
                    <PasswordField name="password" label="Password" />
                  </Stack>
                  <HStack justify="space-between">
                    <Checkbox defaultChecked>Remember me</Checkbox>
                    <Button variant="link" colorScheme="blue" size="sm">
                      Forgot password?
                    </Button>
                  </HStack>
                  <Stack spacing="6">
                    <Button variant="primary" type="submit">
                      Sign in
                    </Button>
                    <HStack>
                      <Divider />
                      <Text fontSize="sm" whiteSpace="nowrap" color="muted">
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

export const getServerSideProps = async (ctx: any) => {
  const session = await getSession(ctx);
  const isUser = !!session?.user;

  if (isUser) {
    return {
      redirect: {
        destination: "/user/user-in",
        permanent: false,
      },
    };
  }

  return { props: {} };
};
