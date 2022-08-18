import Filter from "./filter";
import Navbar from "../navbar";
import Footer from "@/components/home/footer";
import { useState } from "react";
import {
  Box,
  Button,
  Divider,
  Grid,
  Heading,
  HStack,
  Image,
  Text,
  useBreakpointValue,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { BsFillStarFill } from "react-icons/bs";
import { useRouter } from "next/router";

export default function SearchResult() {
  const router = useRouter();
  const items = [
    { label: "Criminal law", value: "criminal law" },
    { label: "Divorce Law", value: "divorce law" },
    { label: "Civil Law", value: "civil law" },
    { label: "Medical Law", value: "medical law" },
    { label: "Tax Law", value: "tax law" },
  ];

  const years = [
    { label: "5 years", value: "5 years" },
    { label: "10 years", value: "10 years" },
    { label: "15 years", value: "15 years" },
    { label: "20 years", value: "20 years" },
    { label: "5 years", value: "25 years" },
    { label: "30 years", value: "30 years" },
  ];
  const boxShadow = useColorModeValue("md", "md-dark");

  const [value, setValue] = useState("Category");
  const [value1, setValue1] = useState("Experience");
  const results = [
    { id: 1, src: "/lawyer1.jpg", name: "Lawyer1", rating: 4.5, reviews: 10 },
    { id: 2, src: "/lawyer2.jpg", name: "Lawyer2", rating: 5, reviews: 5 },
    { id: 3, src: "/lawyer3.png", name: "Lawyer3", rating: 4.8, reviews: 12 },
    { id: 4, src: "/lawyer1.jpg", name: "Lawyer4", rating: 5, reviews: 10 },
    { id: 5, src: "/lawyer2.jpg", name: "Lawyer5", rating: 4.7, reviews: 5 },
    { id: 6, src: "/lawyer3.png", name: "Lawyer6", rating: 5, reviews: 7 },
  ];
  return (
    <>
      <Navbar />
      <HStack alignItems="flex-start" spacing={4}>
        <VStack spacing={4} m="1rem" width="25rem">
          <Heading size={useBreakpointValue({ base: "xs", md: "sm" })}>
            Filter By
          </Heading>
          <Filter
            items={items}
            onChange={(newValue) => setValue(newValue)}
            value={value}
            placeholder={value}
          />
          <Filter
            items={years}
            onChange={(newValue) => setValue1(newValue)}
            value={value1}
            placeholder={value1}
          />
          <Button
            variant="link"
            onClick={() => {
              setValue("Category");
              setValue1("Experience");
            }}
          >
            Clear filters
          </Button>
        </VStack>
        <Divider orientation="vertical" height="30rem" />
        <Box
          width="100%"
          border="1px"
          borderColor="gray.200"
          borderRadius={{ base: "none", sm: "xl" }}
          mx="10rem"
        >
          <VStack width="100%">
            <Grid width="100%" templateColumns="repeat(1, 1fr)">
              {results.map((result) => (
                <Box key={result.id}>
                  <Box
                    my={3}
                    mx={7}
                    // bg={{ base: "transparent", sm: "bg-surface" }}
                    bg="bg-surface"
                    boxShadow={boxShadow}
                    borderRadius={{ base: "none", sm: "xl" }}
                    display="flex"
                    flexDirection="row"
                  >
                    <Image
                      rounded="md"
                      maxHeight="10em"
                      alt="feature image"
                      src={result.src}
                      objectFit="fill"
                    />
                    <Box
                      pb={{ base: "3", sm: "8" }}
                      px={{ base: "4", sm: "5" }}
                    >
                      <Text fontSize="1.5rem" fontWeight="bold">
                        {result.name}
                      </Text>
                      <Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quaerat enim, inventore officiis debitis mollitia fuga
                        distinctio ex!
                      </Text>
                      <HStack m="3px" spacing={5}>
                        <HStack spacing={2}>
                          <BsFillStarFill color="yellow" />
                          <Text>{result.rating}</Text>
                        </HStack>
                        <Text>{`${result.reviews} reviews`}</Text>
                      </HStack>
                      <Button
                        float="right"
                        variant="link"
                        onClick={() => router.push(`/lawyer/${result.id}`)}
                      >
                        See full Details
                      </Button>
                    </Box>
                  </Box>
                  <Divider />
                </Box>
              ))}
            </Grid>
            <Text>No more Results</Text>
          </VStack>
        </Box>
      </HStack>
      <Footer />
    </>
  );
}
