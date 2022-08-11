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
} from '@chakra-ui/react';

export default function Header() {
  const [isDesktop] = useMediaQuery('( min-width: 1000px)');

  return (
    <>
      <Container maxW='5xl' py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Text
              textTransform='uppercase'
              color='blue.400'
              fontWeight={600}
              fontSize='sm'
              bg={useColorModeValue('blue.50', 'blue.900')}
              p={2}
              alignSelf='flex-start'
              rounded='md'
            >
              Our Story
            </Text>
            <Heading>Find Your Perfect Lawyer</Heading>
            <Text color='gray.500' fontSize='lg'>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore
            </Text>
            <Stack
              spacing={4}
              divider={<StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />}
            />
          </Stack>
          {isDesktop ? (
            <Flex>
              <Image rounded='md' alt='feature image' src='/lawyer.jpg' objectFit='cover' />
            </Flex>
          ) : null}
        </SimpleGrid>
      </Container>
      <Divider />
    </>
  );
}
