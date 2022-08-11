import {
  Box,
  Grid,
  useBreakpointValue,
  useColorModeValue,
  Image,
  Heading,
  Text,
  useMediaQuery,
  Divider,
} from '@chakra-ui/react';

export default function Jumbotron() {
  const [isDesktop] = useMediaQuery('(min-width:1000px');
  return (
    <>
      <Heading
        fontWeight='bold'
        marginBottom='8'
        textAlign='center'
        size={useBreakpointValue({ base: 'xs', md: 'sm' })}
      >
        Basic Laws
      </Heading>
      <Grid templateColumns={{ sm: 'repeat(1, 1fr)', lg: 'repeat(3, 1fr)' }} gap={20}>
        <Box
          margin={{ sm: 'auto', lg: '5' }}
          py={{ base: '0', sm: '8' }}
          px={{ base: '4', sm: '10' }}
          bg={useBreakpointValue({ base: 'transparent', sm: 'bg-surface' })}
          boxShadow={{ base: 'none', sm: useColorModeValue('md', 'md-dark') }}
          borderRadius={{ base: 'none', sm: 'xl' }}
        >
          <Image
            margin='auto'
            boxSize='70px'
            rounded='md'
            alt='feature image'
            src='/civil.png'
            objectFit='cover'
          />
          <Text textAlign='center' fontSize='25' fontWeight='semibold'>
            Civil Law
          </Text>
          <Text>
            Civil law is the part of a country&#39;s set of laws which is concerned with the private
            affairs of citizens
          </Text>
        </Box>
        <Box
          margin='5'
          py={{ base: '0', sm: '8' }}
          px={{ base: '4', sm: '10' }}
          bg={useBreakpointValue({ base: 'transparent', sm: 'bg-surface' })}
          boxShadow={{ base: 'none', sm: useColorModeValue('md', 'md-dark') }}
          borderRadius={{ base: 'none', sm: 'xl' }}
        >
          <Image
            margin='auto'
            boxSize='70px'
            rounded='md'
            alt='feature image'
            src='/criminal.png'
            objectFit='cover'
          />
          <Text textAlign='center' fontSize='25' fontWeight='semibold'>
            Criminal Law
          </Text>
          <Text>
            The body of law that defines criminal offenses, regulates the apprehension, charging,
            and trial of suspected persons, and fixes penalties.
          </Text>
        </Box>
        <Box
          margin='5'
          py={{ base: '0', sm: '8' }}
          px={{ base: '4', sm: '10' }}
          bg={useBreakpointValue({ base: 'transparent', sm: 'bg-surface' })}
          boxShadow={{ base: 'none', sm: useColorModeValue('md', 'md-dark') }}
          borderRadius={{ base: 'none', sm: 'xl' }}
        >
          <Image
            margin='auto'
            boxSize='70px'
            rounded='md'
            alt='feature image'
            src='/divorce.png'
            objectFit='cover'
          />
          <Text textAlign='center' fontSize='25' fontWeight='semibold'>
            Divorce
          </Text>
          <Text>
            A divorce is a legal action leading to the break-up of a civil wedding pronounced by a
            court at the request of one or both spouses
          </Text>
        </Box>
        <Box
          margin='5'
          py={{ base: '0', sm: '8' }}
          px={{ base: '4', sm: '10' }}
          bg={useBreakpointValue({ base: 'transparent', sm: 'bg-surface' })}
          boxShadow={{ base: 'none', sm: useColorModeValue('md', 'md-dark') }}
          borderRadius={{ base: 'none', sm: 'xl' }}
        >
          <Image
            margin='auto'
            boxSize='70px'
            rounded='md'
            alt='feature image'
            src='/immigration.png'
            objectFit='cover'
          />
          <Text textAlign='center' fontSize='25' fontWeight='semibold'>
            Immigration Law
          </Text>
          <Text>
            Immigration law refers to the national statutes, regulations, and legal precedents
            governing immigration into and deportation from a country.
          </Text>
        </Box>
        <Box
          margin='5'
          py={{ base: '0', sm: '8' }}
          px={{ base: '4', sm: '10' }}
          bg={useBreakpointValue({ base: 'transparent', sm: 'bg-surface' })}
          boxShadow={{ base: 'none', sm: useColorModeValue('md', 'md-dark') }}
          borderRadius={{ base: 'none', sm: 'xl' }}
        >
          <Image
            margin='auto'
            boxSize='70px'
            rounded='md'
            alt='feature image'
            src='/tax.png'
            objectFit='cover'
          />
          <Text textAlign='center' fontSize='25' fontWeight='semibold'>
            Tax Law
          </Text>
          <Text>
            tax law, body of rules under which a public authority has a claim on taxpayers,
            requiring them to transfer to the authority part of their income or property
          </Text>
        </Box>
        <Box
          margin='5'
          py={{ base: '0', sm: '8' }}
          px={{ base: '4', sm: '10' }}
          bg={useBreakpointValue({ base: 'transparent', sm: 'bg-surface' })}
          boxShadow={{ base: 'none', sm: useColorModeValue('md', 'md-dark') }}
          borderRadius={{ base: 'none', sm: 'xl' }}
        >
          <Image
            margin='auto'
            boxSize='70px'
            rounded='md'
            alt='feature image'
            src='/medical.png'
            objectFit='cover'
          />
          <Text textAlign='center' fontSize='25' fontWeight='semibold'>
            Medical Law
          </Text>
          <Text>
            Medical law is the branch of law which concerns the prerogatives and responsibilities of
            medical professionals and the rights of the patient
          </Text>
        </Box>
      </Grid>
      <Divider />
    </>
  );
}
