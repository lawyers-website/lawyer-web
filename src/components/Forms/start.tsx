import { Heading, Box, useBreakpointValue, Text, SimpleGrid, Flex } from '@chakra-ui/react';
import { FaHome } from 'react-icons/fa';
import { BsBuilding } from 'react-icons/bs';
import React from 'react'
import {useContext} from 'react'
import { language } from "@/langContext";

interface props {
  setPosition: React.Dispatch<React.SetStateAction<number>>;
}

export default function Start({ setPosition }: props) {
  const da={
    "en":{
      "box_title":"  Is your request private or for business?",
      "pvt":"  PRIVATE",
      "business":"BUSINESS"
    },
    "it":{
      "box_title":"La tua richiesta è privata o per lavoro?",
      "pvt":"PRIVATA",
      "business":"ATTIVITÀ COMMERCIALE"
    },
    "ger":{
      "box_title":"Ist Ihre Anfrage privat oder geschäftlich?",
      "pvt":"PRIVATGELÄNDE",
      "business":"GESCHÄFT"
    },
    "fre":{
      "box_title":"Votre demande est-elle privée ou professionnelle ?",
      "pvt":"PRIVÉE",
      "business":"ENTREPRISE"
    },
  }
  const selL=useContext(language)
  const sl=selL?.lang! as keyof typeof da;
  
  return (
    <>
      <Text margin='5' fontSize='2xl' textAlign='center'>
        {da[sl]['box_title']}
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
              {/* PRIVATE */}
              {da[sl]['pvt']}
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
            {da[sl]['business']}
            </Heading>
          </Flex>
        </Box>
      </SimpleGrid>
    </>
  );
}
