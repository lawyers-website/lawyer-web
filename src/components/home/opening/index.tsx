import { Box, Heading, useBreakpointValue, useColorModeValue, Flex } from '@chakra-ui/react';
import { useState } from 'react';
import Forms from '../../Forms';
import ProgressBar from '../../Progressbar';

export default function Opening() {
  const [position, setPosition] = useState(0);
  return (
    <>
      <Heading
        margin='10'
        marginTop='0'
        fontWeight='bold'
        marginBottom='8'
        textAlign='center'
        size={useBreakpointValue({ base: 'xs', md: 'sm' })}
      >
        Find the best lawyer for you
      </Heading>
      <Box
        boxSizing='border-box'
        maxW='3xl'
        margin={{ sm: '5', lg: 'auto' }}
        py={{ base: '0', sm: '8' }}
        px={{ base: '4', sm: '10' }}
        bg={useBreakpointValue({ base: 'bg-surface', sm: 'bg-surface' })}
        boxShadow={{ base: 'none', sm: useColorModeValue('md', 'dark-lg') }}
        borderRadius={{ base: 'xl', sm: '2xl' }}
      >
        <Forms index={position} setIndex={setPosition} />
        <Flex display='inline-flex' margin='40px' direction='row' />
        <ProgressBar
          w='4rem'
          currentPage={position}
          items={[
            { title: 'Start' },
            { title: 'What I Need' },
            { title: 'Location' },
            { title: 'Comments', fontW: 'fit-content', textAlign: 'center' },
          ]}
        />
      </Box>
    </>
  );
}
