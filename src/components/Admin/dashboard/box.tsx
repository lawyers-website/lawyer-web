import { ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons';
import { Box, HStack, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import { FaChartPie } from 'react-icons/fa';
import { GiNetworkBars } from 'react-icons/gi';
import { IoBarChart } from 'react-icons/io5';
import { VscGraphLine } from 'react-icons/vsc';

interface props {
  item: {
    title: string;
    value: string;
    change: string;
    profit: boolean;
  };
}

export default function Boxes({ item }: props) {
  return (
    <Box
      key={item.title}
      margin={{ base: '1rem auto', md: '1.5rem' }}
      py={{ base: '0', sm: '3' }}
      px={{ base: '3', sm: '0' }}
      bg='bg-surface'
      boxShadow={useColorModeValue('md', 'md-dark')}
      borderRadius={{ base: 'xl', sm: '2xl' }}
      display='flex'
      flexDirection='row'
      width={{ base: '20rem', md: '18rem' }}
      justifyContent='center'
    >
      <VStack>
        <HStack justifyContent='space-between' width='100%'>
          <VStack>
            <Text color='grey.400'>{item.title}</Text>
            <Text fontWeight='bold' fontSize='2rem'>
              {item.value}
            </Text>
          </VStack>
          <Box
            borderRadius='100%'
            backgroundColor={
              {
                'NEW USERS': '#FC8181',
                'NEW LAWYERS': '#4299E1',
                TRANSCATIONS: '#F6AD55',
                REVENUE: '#F6E05E',
              }[item.title]
            }
            height='3.5rem'
            width='3.5rem'
            display='flex'
            justifyContent='center'
            alignItems='center'
          >
            {
              {
                'NEW USERS': <IoBarChart color='white' fontSize='1.7rem' />,
                'NEW LAWYERS': <VscGraphLine color='white' fontSize='1.7rem' />,
                TRANSCATIONS: <FaChartPie color='white' fontSize='1.7rem' />,
                REVENUE: <GiNetworkBars color='white' fontSize='1.7rem' />,
              }[item.title]
            }
            {/* <VscGraphLine color='white' fontSize='1.7rem' /> */}
          </Box>
        </HStack>
        <HStack justifyContent='space-between' width='14rem'>
          <HStack color={item.profit ? 'green.400' : 'red.500'} spacing='0'>
            {item.profit ? <ArrowUpIcon /> : <ArrowDownIcon />}
            <Text>{item.change}</Text>
          </HStack>
          <Text color='gray.500'>Since Last Month</Text>
        </HStack>
      </VStack>
    </Box>
  );
}
