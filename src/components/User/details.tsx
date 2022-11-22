import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  Select,
  Stack,
  Textarea,
  useBreakpointValue,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { trpc } from "../../utils/trpc";
import FormInput from "../FormikCompo/FormInput";

export default function Details() {
  const lawyerFormMutation = trpc.useMutation(["user.lawyerForm"]);
  const router = useRouter();
  const [image, setImage] = useState<any>();
  const [preview, setPreview] = useState<string | null>();

  const handleChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setImage(e.target.files[0]);
    } else {
      setImage(null);
    }
  };

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  }, [image]);

  const formSchema = z.object({
    education: z.object({
      institution: z.string(),
      course: z.string(),
    }),
    exyears: z.number(),
    description: z.string(),
    fullName: z.string(),
    services: z.string(),
    expertise: z.string(),
    location: z.object({
      state: z.string(),
      country: z.string(),
    }),
    price: z.number(),
  });

  const initialValues: z.infer<typeof formSchema> = {
    education: {
      institution: "",
      course: "",
    },
    exyears: 0,
    description: "",
    fullName: "",
    services: "",
    expertise: "",
    location: {
      state: "",
      country: "",
    },
    price: 0,
  };

  return (
    <Container
      maxW={{ base: "lg", md: "xl", lg: "50rem" }}
      py={{ base: "12", md: "24" }}
      px={{ base: "0", sm: "8" }}
    >
      <Stack spacing="6">
        <Heading
          textAlign="center"
          size={useBreakpointValue({ base: "xs", md: "sm" })}
        >
          Fill Your Details
        </Heading>
        <Box
          py={{ base: "0", sm: "8" }}
          px={{ base: "4", sm: "10" }}
          bg={useBreakpointValue({ base: "transparent", sm: "bg-surface" })}
          boxShadow={{ base: "none", sm: useColorModeValue("md", "md-dark") }}
          borderRadius={{ base: "none", sm: "xl" }}
        >
          <Formik
            initialValues={initialValues}
            onSubmit={(values, { setSubmitting }) => {
              lawyerFormMutation
                .mutateAsync({
                  course: values.education.course,
                  experience: values.exyears,
                  institution: values.education.institution,
                  description: values.description,
                  fullName: values.fullName,
                  image: preview as string,
                  services: values.services,
                  expertise: values.expertise,
                  state: values.location.state,
                  country: values.location.country,
                  price: values.price,
                })
                .then(() => {
                  setSubmitting(false);
                });
              router.push("/user/user-in");
            }}
            validationSchema={toFormikValidationSchema(formSchema)}
          >
            {({}) => {
              return (
                <Form style={{ width: "100%" }}>
                  <VStack alignItems="flex-start" spacing="6">
                    <Heading size="xs">Education :</Heading>
                    <VStack alignItems="flex-start" pl="1.5rem" spacing="4">
                      <FormInput
                        name="education.institution"
                        id="institution"
                        label="Educational Institution"
                        width={{ base: "20rem", md: "25rem", lg: "33rem" }}
                      />
                      <FormInput
                        name="education.course"
                        id="course"
                        label="Course"
                        width={{ base: "20rem", md: "25rem", lg: "33rem" }}
                      />
                    </VStack>
                    <FormInput
                      name="fullName"
                      label="Full Name"
                      width={{ base: "23rem", md: "28rem", lg: "35rem" }}
                    />
                    <FormInput
                      name="services"
                      label="Services"
                      width={{ base: "23rem", md: "28rem", lg: "35rem" }}
                    />
                    <FormInput
                      name="expertise"
                      label="Expertise as"
                      width={{ base: "23rem", md: "28rem", lg: "35rem" }}
                    />
                    <FormInput
                      name="exyears"
                      type="number"
                      label="Year of Experience"
                      width={{ base: "23rem", md: "28rem", lg: "35rem" }}
                    />

                    <FormInput
                      name="description"
                      id="description"
                      label="Description"
                      width={{ base: "23rem", md: "28rem", lg: "35rem" }}
                    />
                    <Heading size="xs">Location :</Heading>
                    <VStack alignItems="flex-start" pl="1.5rem" spacing="4">
                      <FormInput
                        name="location.state"
                        id="state"
                        label="State"
                        width={{ base: "20rem", md: "25rem", lg: "33rem" }}
                      />
                      <FormInput
                        name="location.country"
                        id="country"
                        label="Country"
                        width={{ base: "20rem", md: "25rem", lg: "33rem" }}
                      />
                      <FormInput
                        type="number"
                        name="price"
                        id="price"
                        label="Price"
                        width={{ base: "20rem", md: "25rem", lg: "33rem" }}
                      />
                    </VStack>
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleChange(e)}
                    />
                  </VStack>
                  <Button
                    mt="16px"
                    float="left"
                    type="submit"
                    variant="primary"
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
