import Filter from "./filter";
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
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import { BsFillStarFill } from "react-icons/bs";
import { useRouter } from "next/router";
import MenuBar1 from "./menubar";
import { LawyerDetails } from "@prisma/client";
import { useSession } from "next-auth/react";
import { Home } from "..";

export default function SearchResult({
  lawyers,
}: {
  lawyers: LawyerDetails[];
}) {
  const router = useRouter();
  const { query } = router.query;
  const { data: session } = useSession();

  const bg = useBreakpointValue({ base: "transparent", sm: "bg-surface" });
  const items = [
    { label: "Criminal law", value: "criminal law" },
    { label: "Divorce Law", value: "divorce law" },
    { label: "Civil Law", value: "civil law" },
    { label: "Medical Law", value: "medical law" },
    { label: "Tax Law", value: "tax law" },
  ];

  const years = [
    { label: "5 years", value: 5 },
    { label: "10 years", value: 10 },
    { label: "15 years", value: 15 },
    { label: "20 years", value: 20 },
    { label: "25 years", value: 25 },
    { label: "30 years", value: 30 },
  ];
  const boxShadow = useColorModeValue("md", "md-dark");
  const [isMobile] = useMediaQuery("(max-width: 900px)");
  const size = useBreakpointValue({ base: "xs", md: "sm" });

  const [value, setValue] = useState("Category");
  const [value1, setValue1] = useState("Experience");

  const filteredLawyers = lawyers.filter(
    (lawyer) =>
      lawyer.fullName
        .toLowerCase()
        .replace(/\s+/g, "")
        .includes((query as string).toLowerCase().replace(/\s+/g, "")) ||
      lawyer.expertise
        .toLowerCase()
        .replace(/\s+/g, "")
        .includes((query as string).toLowerCase().replace(/\s+/g, "")) ||
      lawyer.services
        .toLowerCase()
        .replace(/\s+/g, "")
        .includes((query as string).toLowerCase().replace(/\s+/g, ""))
  );

  return (
    <>
      <Stack
        direction={{ base: "column", lg: "row" }}
        height="100%"
        spacing={4}
        mr="1rem"
        position="relative"
      >
        {isMobile ? (
          <Box>
            <MenuBar1>
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
            </MenuBar1>
          </Box>
        ) : (
          <VStack spacing={4} m="1rem" width="25rem">
            <Heading size={size}>Filter By</Heading>
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
        )}
        <Divider orientation="vertical" />
        <Box
          width="100%"
          border="1px"
          borderColor={useColorModeValue("gray.200", "gray.600")}
          borderRadius={{ base: "none", sm: "xl" }}
        >
          <VStack width="100%">
            <Grid width="100%" templateColumns="repeat(1, 1fr)">
              {filteredLawyers.map((result) => (
                <Box key={result.lawyerId}>
                  <Box
                    margin={{ base: "3", lg: "5" }}
                    py={{ base: "0", sm: "6" }}
                    px={{ base: "4", sm: "6" }}
                    bg={bg}
                    boxShadow={boxShadow}
                    borderRadius={{ base: "none", sm: "xl" }}
                    display="flex"
                    flexDirection={{ base: "column", md: "row" }}
                    justifyContent={{ base: "center", md: "flex-start" }}
                    alignItems="center"
                  >
                    <Image
                      rounded="md"
                      height="10em"
                      alt="Lawyer Image"
                      src={result.image as string}
                      w="14em"
                    />
                    <Box w="100%" px={{ base: "4", sm: "5" }}>
                      <Text fontSize="1.5rem" fontWeight="bold" mb="1rem">
                        {result.fullName}
                      </Text>
                      <Text mb="1rem">{result.description}</Text>
                      <HStack m="3px" spacing={5}>
                        <HStack spacing={2}>
                          <BsFillStarFill color="#ED8936" />
                          <Text>{result.rating}</Text>
                        </HStack>
                        <Text>{result.numofreviews} reviews</Text>
                      </HStack>
                      <Button
                        float="right"
                        variant="link"
                        onClick={() =>
                          router.push(`/lawyer/${result.lawyerId}`)
                        }
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
      </Stack>
      <Footer />
    </>
  );
}
