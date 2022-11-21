import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  useColorModeValue,
  Divider,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import { useContext } from "react";
import { language } from "@/langContext";

const da = {
  en: {
    story: "Our Story",
    Title: "Find Your Perfect Lawyer",
    para: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore",
  },
  it: {
    story: "la nostra storia",
    Title: "Trova il tuo avvocato perfetto",
    para: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore",
  },
  ger: {
    story: "unsere Geschichte",
    Title: "Finden Sie Ihren perfekten Anwalt",
    para: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore",
  },
  fre: {
    story: "notre histoire",
    Title: "Trouvez votre avocat idéal",
    para: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore",
  },
};

export default function Header() {
  const [isDesktop] = useMediaQuery("( min-width: 1000px)");
  const selL = useContext(language);
  const sl = selL?.lang as keyof typeof da;
  return (
    <>
      <Container maxW="5xl" py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Text
              textTransform="uppercase"
              color="blue.400"
              fontWeight={600}
              fontSize="sm"
              bg={useColorModeValue("blue.50", "blue.900")}
              p={2}
              alignSelf="flex-start"
              rounded="md"
            >
              {/* Our Story */}
              {da[sl]["story"]}
            </Text>
            <Heading>{da[sl]["Title"]}</Heading>
            <Text color="gray.500" fontSize="lg">
              {da[sl]["para"]}
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.100", "gray.700")}
                />
              }
            />
          </Stack>
          {isDesktop ? (
            <Flex>
              <Image
                rounded="md"
                alt="feature image"
                src="/lawyer.jpg"
                objectFit="cover"
              />
            </Flex>
          ) : null}
        </SimpleGrid>
      </Container>
      <Divider />
    </>
  );
}
