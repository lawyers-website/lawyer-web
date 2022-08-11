import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  HStack,
  SimpleGrid,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';
import Boxes from './box';
// import MyChart from './myChart';
import MyChart1 from './myChart1';

export default function Dashboard() {
  const items = [
    { title: 'ORDERS', value: '30', change: '3.78', profit: true },
    { title: 'ORDERS IN JUL', value: '13', change: '2.43', profit: false },
    { title: 'TRANSCATIONS', value: '13', change: '1.48', profit: false },
    { title: 'REVENUE', value: '20,870', change: '5.96', profit: true },
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
      <Box
        width={useBreakpointValue({ base: '100%', lg: '90%' })}
        boxSizing='border-box'
        margin={{ sm: '5', lg: 'auto' }}
        py={{ base: '0', sm: '8' }}
        px={{ base: '2', sm: '10' }}
        bg={useColorModeValue('bg-surface', '#EDF2F7')}
        boxShadow={{ base: 'none', sm: useColorModeValue('md', 'dark-lg') }}
        borderRadius={{ base: 'xl', sm: '2xl' }}
      >
        <HStack justifyContent='space-between' marginBottom='1.5rem'>
          <Text fontSize='1rem' color='gray.300'>
            OVERVIEW
          </Text>
          <ButtonGroup>
            <Button variant='primary' size={useBreakpointValue({ base: 'sm', md: 'sm', lg: 'md' })}>
              Month
            </Button>
            <Button
              variant='primary'
              color='gray.700'
              bg={useColorModeValue('bg-surface', '#EDF2F7')}
              boxShadow='md'
              rounded='md'
              size={useBreakpointValue({ base: 'sm', md: 'sm', lg: 'md' })}
              _hover={{
                bg: '#EDF2F7',
              }}
            >
              Week
            </Button>
          </ButtonGroup>
        </HStack>
        <Divider marginBottom='1.5rem' />
        <MyChart1 />
      </Box>
      <Divider my='1rem' />
    </>
  );
}
