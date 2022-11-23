import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import Boxes from "./box";
export default function Dashboard() {
  const items = [
    { title: "ORDERS", value: "30", change: "3.78", profit: true },
    { title: "ORDERS IN JUL", value: "13", change: "2.43", profit: false },
    { title: "TRANSCATIONS", value: "13", change: "1.48", profit: false },
    { title: "REVENUE", value: "20,870", change: "5.96", profit: true },
  ];
  return (
    <>
      <Box>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }}>
          {items.map((item) => (
            <Boxes key={item.title} item={item} />
          ))}
        </SimpleGrid>
      </Box>

      <Box>
        <Box
          margin={{ base: "1rem auto", md: "1.5rem" }}
          py={{ base: "0", sm: "3" }}
          px={{ base: "3", sm: "7" }}
        >
          <Heading size="md">Your Earnings</Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }}>
            <Box
              margin={{ base: "1rem auto", md: "1.5rem" }}
              py={{ base: "0", sm: "3" }}
              px={{ base: "3", sm: "7" }}
              bg="bg-surface"
              boxShadow={useColorModeValue("md", "md-dark")}
              borderRadius={{ base: "xl", sm: "2xl" }}
              display="flex"
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              width={{ base: "16rem", md: "18rem", lg: "18rem" }}
            >
              <VStack>
                <Text fontSize="1rem" fontWeight="bold">
                  Total Earnings
                </Text>
                <Text fontSize="2rem">1432$</Text>
              </VStack>
            </Box>
            <Box
              margin={{ base: "1rem auto", md: "1.5rem" }}
              py={{ base: "0", sm: "3" }}
              px={{ base: "3", sm: "7" }}
              bg="bg-surface"
              boxShadow={useColorModeValue("md", "md-dark")}
              borderRadius={{ base: "xl", sm: "2xl" }}
              display="flex"
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              width={{ base: "16rem", md: "18rem", lg: "18rem" }}
            >
              <VStack>
                <Text fontSize="1rem" fontWeight="bold">
                  Earnings in November
                </Text>
                <Text fontSize="2rem">1432$</Text>
              </VStack>
            </Box>
            <Box
              margin={{ base: "1rem auto", md: "1.5rem" }}
              py={{ base: "0", sm: "3" }}
              px={{ base: "3", sm: "7" }}
              bg="bg-surface"
              boxShadow={useColorModeValue("md", "md-dark")}
              borderRadius={{ base: "xl", sm: "2xl" }}
              display="flex"
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              width={{ base: "16rem", md: "18rem", lg: "18rem" }}
            >
              <VStack>
                <Text fontSize="1rem" fontWeight="bold">
                  Total Balance
                </Text>
                <Text fontSize="2rem">1432$</Text>
              </VStack>
            </Box>
            <Box
              margin={{ base: "1rem auto", md: "1.5rem" }}
              py={{ base: "0", sm: "3" }}
              px={{ base: "3", sm: "7" }}
              bg="bg-surface"
              boxShadow={useColorModeValue("md", "md-dark")}
              borderRadius={{ base: "xl", sm: "2xl" }}
              display="flex"
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              width={{ base: "16rem", md: "18rem", lg: "18rem" }}
            >
              <VStack>
                <Text fontSize="1rem" fontWeight="bold">
                  Total Earnings
                </Text>
                <Text fontSize="2rem">1432$</Text>
              </VStack>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
}
