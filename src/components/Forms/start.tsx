import { Heading, Box, useBreakpointValue, Text, SimpleGrid, Flex } from '@chakra-ui/react';
import { FaHome } from 'react-icons/fa';
import { BsBuilding } from 'react-icons/bs';

interface props {
  setPosition: React.Dispatch<React.SetStateAction<number>>;
}
export default function Start({ setPosition }: props) {
  return (
    <>
      <Text margin='5' fontSize='2xl' textAlign='center'>
        Is your request private or for business?
      </Text>
      <SimpleGrid spacing='auto' columns={{ sm: 1, md: 2 }}>
        <Box
          onClick={() => setPosition(1)}
          margin={{ sm: 'auto', lg: '5' }}
          py={{ base: '0', sm: '8' }}
          px={{ base: '4', sm: '10' }}
          bg={useBreakpointValue({ base: 'transparent', sm: 'bg-surface' })}
          _hover={{
            boxShadow: 'dark-lg',
            cursor: 'pointer',
          }}
          borderRadius={{ base: '2xl', sm: '2xl' }}
        >
          <Flex align='center' direction='column'>
            <FaHome size={70} />
            <Heading
              fontWeight='bold'
              margin='4'
              textAlign='center'
              size={useBreakpointValue({ base: 'xs', md: 'xs' })}
            >
              PRIVATE
            </Heading>
          </Flex>
        </Box>

        <Box
          onClick={() => setPosition(1)}
          margin={{ sm: 'auto', lg: '5' }}
          py={{ base: '0', sm: '8' }}
          px={{ base: '4', sm: '10' }}
          bg={useBreakpointValue({ base: 'transparent', sm: 'bg-surface' })}
          transition='boxShadow 2s'
          // boxShadow={{ base: "none", sm: useColorModeValue("md", "md-dark") }}
          _hover={{
            boxShadow: 'dark-lg',
            cursor: 'pointer',
          }}
          borderRadius={{ base: '2xl', sm: '2xl' }}
        >
          <Flex align='center' direction='column'>
            <BsBuilding size={70} />
            <Heading
              fontWeight='bold'
              margin='4'
              textAlign='center'
              size={useBreakpointValue({ base: 'xs', md: 'xs' })}
            >
              BUSINESS
            </Heading>
          </Flex>
        </Box>
      </SimpleGrid>
    </>
  );
}
