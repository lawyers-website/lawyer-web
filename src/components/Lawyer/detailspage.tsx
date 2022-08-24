import {
  Box,
  Button,
  Divider,
  Grid,
  HStack,
  Image,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { MdLocationOn } from "react-icons/md";
import { StarIcon } from "@chakra-ui/icons";
import { FaUserCircle } from "react-icons/fa";

export default function LawyerDetails() {
  const reviews = [
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
  return (
    <>
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
                sm: useColorModeValue("md", "md-dark"),
              }}
              borderRadius={{ base: "none", sm: "xl" }}
            >
              <Image
                borderRadius="full"
                boxSize="8rem"
                src="/lawyer1.jpg"
                alt="Lawyer image"
                objectFit="cover"
              />
              <Text fontSize="1.5rem" fontWeight="bold">
                Lawyer1
              </Text>
              <Text>Criminal lawyer,Legal Advisor</Text>
              <HStack>
                <MdLocationOn />
                <Text>Geneva ,Switzerland</Text>
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
                sm: useColorModeValue("md", "md-dark"),
              }}
              borderRadius={{ base: "none", sm: "xl" }}
            >
              <VStack alignItems="flex-start">
                <Text fontWeight="bold" width="13rem">
                  Description
                </Text>
                <Text fontWeight="400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta veritatis vero excepturi tempora, fugit dolore.
                  Temporibus unde, aliquid culpa doloremque voluptas iusto
                  recusandae, nobis voluptatibus officiis, impedit maxime
                  deleniti eaque?
                </Text>
              </VStack>
              <Divider />
              <HStack>
                <Text fontWeight="bold" width="13rem">
                  Educational Institute
                </Text>
                <Text>Lawyer Educational Institute</Text>
              </HStack>
              <Divider />
              <HStack>
                <Text fontWeight="bold" width="13rem">
                  Degree
                </Text>
                <Text>Bachelor of Laws(LLB)</Text>
              </HStack>
              <Divider />
              <HStack>
                <Text fontWeight="bold" width="13rem">
                  Services
                </Text>
                <Text>Legal Advice, other...</Text>
              </HStack>
              <Divider />
              <HStack>
                <Text fontWeight="bold" width="13rem">
                  Expertise
                </Text>
                <Text>Criminal Law</Text>
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
            sm: useColorModeValue("md", "md-dark"),
          }}
          borderRadius={{ base: "none", sm: "xl" }}
        >
          <HStack mb="1rem" spacing={5}>
            <Text fontWeight="bold" fontSize="2rem">
              10 Reviews
            </Text>
            <HStack spacing={1}>
              <StarIcon color="orange.400" />
              <StarIcon color="orange.400" />
              <StarIcon color="orange.400" />
              <StarIcon color="orange.400" />
              <StarIcon color="orange.400" />
              <Text>5</Text>
            </HStack>
          </HStack>
          <Divider />
          <VStack mt="1rem" alignItems="flex-start">
            <Text fontWeight="bold">Reviews</Text>
            <VStack>
              {reviews.map((review) => (
                <VStack mb="1rem" spacing={7} key={review.name}>
                  <Box mb="3rem">
                    <HStack spacing={13}>
                      <FaUserCircle size="2.5rem" />
                      <Text fontWeight="700">{review.name}</Text>
                      <HStack spacing={1}>
                        <StarIcon color="orange.400" />
                        <StarIcon color="orange.400" />
                        <StarIcon color="orange.400" />
                        <StarIcon color="orange.400" />
                        <StarIcon color="orange.400" />
                        <Text>5</Text>
                      </HStack>
                    </HStack>
                    <VStack alignItems="flex-start" width="90%" mx="auto">
                      <Text fontWeight="500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quae eveniet quam enim? Maxime fugit illum placeat,
                        tempore rerum corporis dolor, magni suscipit consequatur
                        accusamus atque cupiditate aspernatur odio iusto nisi.
                      </Text>
                      <Text fontWeight="600" color="gray.500">
                        Published {review.time}
                      </Text>
                    </VStack>
                  </Box>
                  <Divider />
                </VStack>
              ))}
            </VStack>
          </VStack>
        </Box>
      </Box>
    </>
  );
}
