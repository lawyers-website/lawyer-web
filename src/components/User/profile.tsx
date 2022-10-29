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

export default function Profile() {
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
                UserName
              </Text>
              <HStack>
                <MdLocationOn />
                <Text>Geneva ,Switzerland</Text>
              </HStack>
            </VStack>
          </Box>
          <Box>
            <VStack
              spacing={3}
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
              <HStack>
                <Text fontWeight="bold" width="13rem">
                  User Name
                </Text>
                <Text fontWeight="400">UserName</Text>
              </HStack>
              <Divider />
              <HStack>
                <Text fontWeight="bold" width="13rem">
                  Email
                </Text>
                <Text>user@gmail.com</Text>
              </HStack>
              <Divider />
              <HStack>
                <Text fontWeight="bold" width="13rem">
                  Phone
                </Text>
                <Text>239 393 2393</Text>
              </HStack>
              <Divider />
              <Button variant="primary">Edit</Button>
            </VStack>
          </Box>
        </Grid>
      </Box>
    </>
  );
}
