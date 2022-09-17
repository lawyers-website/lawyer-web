import {
  Box,
  Button,
  Divider,
  Grid,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { MdLocationOn } from "react-icons/md";
import { StarIcon } from "@chakra-ui/icons";
import { FaUserCircle } from "react-icons/fa";
import { LawyerDetails, Reviews } from "@prisma/client";
import { useRouter } from "next/router";

export default function LawyerDetail({
  lawyer,
  isReviewed,
  reviews,
}: {
  lawyer: LawyerDetails | null;
  isReviewed: Boolean;
  reviews: Reviews[];
}) {
  const router = useRouter();
  const reviews1 = [
    { name: "Client1", time: "1 month ago" },
    { name: "Client2", time: "4 weeks ago" },
    { name: "Client3", time: "2 weeeks ago" },
    { name: "Client4", time: "1 week ago" },
    { name: "Client5", time: "2 months ago" },
    { name: "Client6", time: "3 months ago" },
    { name: "Client7", time: "1 week ago" },
    { name: "Client7", time: "2 days ago" },
    { name: "Client7", time: "5 days ago" },
    { name: "Client7", time: "1 month ago" },
  ];
  const boxShadow = useColorModeValue("md", "md-dark");

  return (
    <>
      {lawyer ? (
        <Box
          mt={{ base: "2rem", lg: "6rem" }}
          width={{ md: "90%", lg: "80%" }}
          mx="auto"
        >
          <Grid
            templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
            gap={5}
          >
            <Box mb="2rem" display="flex">
              <VStack
                width="100%"
                mb="2rem"
                py={{ base: "3", sm: "8" }}
                bg={{ base: "transparent", sm: "bg-surface" }}
                boxShadow={{
                  base: "none",
                  sm: boxShadow,
                }}
                borderRadius={{ base: "none", sm: "xl" }}
              >
                <Image
                  borderRadius="full"
                  boxSize="8rem"
                  src={lawyer.image as string}
                  alt="Lawyer image"
                  objectFit="cover"
                />
                <Text fontSize="1.5rem" fontWeight="bold">
                  {lawyer.fullName}
                </Text>
                <Text>{lawyer.expertise}</Text>
                <HStack>
                  <MdLocationOn />
                  <Text>
                    {lawyer.state} ,{lawyer.country}
                  </Text>
                </HStack>
                <Button variant="outline">Message</Button>
              </VStack>
            </Box>
            <Box>
              <VStack
                spacing={2}
                alignItems="flex-start"
                px={{ base: "4", sm: "10" }}
                py={{ base: "3", sm: "8" }}
                bg={{ base: "transparent", sm: "bg-surface" }}
                boxShadow={{
                  base: "none",
                  sm: boxShadow,
                }}
                borderRadius={{ base: "none", sm: "xl" }}
              >
                <VStack alignItems="flex-start">
                  <Text fontWeight="bold" width="13rem">
                    Description
                  </Text>
                  <Text fontWeight="400">{lawyer.description}</Text>
                </VStack>
                <Divider />
                <HStack>
                  <Text fontWeight="bold" width="13rem">
                    Educational Institute
                  </Text>
                  <Text>{lawyer.institution}</Text>
                </HStack>
                <Divider />
                <HStack>
                  <Text fontWeight="bold" width="13rem">
                    Degree
                  </Text>
                  <Text>{lawyer.course}</Text>
                </HStack>
                <Divider />
                <HStack>
                  <Text fontWeight="bold" width="13rem">
                    Services
                  </Text>
                  <Text>{lawyer.services}</Text>
                </HStack>
                <Divider />
                <HStack>
                  <Text fontWeight="bold" width="13rem">
                    Expertise
                  </Text>
                  <Text>{lawyer.expertise}</Text>
                </HStack>
                <Divider />
                <HStack>
                  <Text fontWeight="bold" width="13rem">
                    Experience
                  </Text>
                  <Text>{lawyer.experience} years</Text>
                </HStack>
                <Divider />
              </VStack>
            </Box>
          </Grid>
          <Box
            mb="2rem"
            mx="2rem"
            py={{ base: "3", sm: "8" }}
            px={{ base: "4", sm: "10" }}
            bg={{ base: "transparent", sm: "bg-surface" }}
            boxShadow={{
              base: "none",
              sm: boxShadow,
            }}
            borderRadius={{ base: "none", sm: "xl" }}
          >
            <HStack justifyContent="space-between">
              <HStack mb="1rem" spacing={5}>
                <Text fontWeight="bold" fontSize="2rem">
                  {lawyer.numofreviews} Reviews
                </Text>
                <HStack spacing={1}>
                  {[1, 2, 3, 4, 5].map((value) => (
                    <StarIcon
                      key={value}
                      color={
                        value <= (lawyer.rating as number)
                          ? "orange.300"
                          : "gray.600"
                      }
                    />
                  ))}
                  <Text>{lawyer.rating}</Text>
                </HStack>
              </HStack>
              {isReviewed ? (
                <Button>Edit your review</Button>
              ) : (
                <Button
                  onClick={() => router.push(`/review/${lawyer.lawyerId}`)}
                >
                  Add Review
                </Button>
              )}
            </HStack>
            <Divider />
            <VStack mt="1rem" alignItems="flex-start">
              <Text fontWeight="bold">Reviews</Text>
              <VStack alignItems="flex-start">
                {reviews ? (
                  reviews.map((review, index) => (
                    <VStack mb="1rem" spacing={7} key={index}>
                      <Box mb="3rem">
                        <HStack spacing={13}>
                          <FaUserCircle size="2.5rem" />
                          <Text fontWeight="700">{review.userName}</Text>
                          <HStack spacing={1}>
                            {[1, 2, 3, 4, 5].map((value) => (
                              <StarIcon
                                key={value}
                                color={
                                  value <= (review.rating as number)
                                    ? "orange.300"
                                    : "gray.600"
                                }
                              />
                            ))}
                            <Text>{review.rating}</Text>
                          </HStack>
                        </HStack>
                        <VStack alignItems="flex-start" width="90%" mx="2rem">
                          <Text fontWeight="500">{review.review}</Text>
                          <Text fontWeight="600" color="gray.500">
                            {`Published on ${review.createdAt}`}
                          </Text>
                        </VStack>
                      </Box>
                      <Divider />
                    </VStack>
                  ))
                ) : (
                  <Text textAlign="center">No Reviews</Text>
                )}
              </VStack>
            </VStack>
          </Box>
        </Box>
      ) : (
        <Heading>Lawyer not found with given id</Heading>
      )}
    </>
  );
}
