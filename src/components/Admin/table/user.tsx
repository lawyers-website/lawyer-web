import { Box, Heading, useColorModeValue } from '@chakra-ui/react';
import Tables from '.';

export default function AllUsers() {
  const Users = [
    { Username: 'John', email: 'john@gmail.com', number: 7983678376 },
    { Username: 'lynn', email: 'lynn@gmail.com', number: 6476384783 },
    { Username: 'Test', email: 'test@gmail.com', number: 8467687363 },
    { Username: 'Peter', email: 'peter@gmail.com', number: 7467673647 },
    { Username: 'Tony', email: 'tony@gmail.com', number: 9783467364 },
    { Username: 'Thor', email: 'thor@gmail.com', number: 8128673628 },
    { Username: 'John', email: 'john@gmail.com', number: 7983678376 },
  ];
  return (
    <Box
      width={{ base: '100%', lg: '90%' }}
      boxSizing='border-box'
      margin={{ sm: '5', lg: 'auto' }}
      py={{ base: '0', sm: '8' }}
      px={{ base: '2', sm: '10' }}
      bg='bg-surface'
      boxShadow={{ base: 'none', sm: useColorModeValue('md', 'dark-lg') }}
      borderRadius={{ base: 'xl', sm: '2xl' }}
    >
      <Heading fontSize='3rem' mb='2rem'>
        Users
      </Heading>
      <Tables Users={Users} />
    </Box>
  );
}
