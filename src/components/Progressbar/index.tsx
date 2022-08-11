import { Stack, Divider, Box, Text, useColorModeValue } from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

interface props {
  currentPage: number;
  items: {
    title: string;
    fontSize?: string;
    fontW?: string;
    textAlign?: 'center';
  }[];
  w: string;
}

interface Items {
  value: {
    title: string;
    fontSize?: string;
    fontW?: string;
    textAlign?: 'center';
  };
  index: number;
  currentPage: number;
}

function CheckMark() {
  return (
    <Box
      display='flex'
      alignItems='center'
      justifyContent='center'
      w='8'
      h='8'
      background='blue.200'
      borderRadius='9999px'
      m='0 !important'
    >
      <CheckIcon display='inline-block' lineHeight='1em' color='gray.800' />
    </Box>
  );
}

function ProgressMark({ color }: { color: 'glow' | 'mute' }) {
  const colorSwitch = useColorModeValue('gray.200', 'gray.700');
  return (
    <Box
      display='flex'
      alignItems='center'
      justifyContent='center'
      w='8'
      h='8'
      borderColor={color === 'glow' ? 'blue.200' : 'inherit'}
      borderRadius='9999px'
      borderWidth='2px'
      margin='0 !important'
    >
      <Box
        margin='0 !important'
        w='3'
        h='3'
        background={color === 'glow' ? 'blue.200' : colorSwitch}
        borderRadius='9999px'
      />
    </Box>
  );
}

export default function ProgressBar({ currentPage, items, w }: props) {
  return (
    <Stack direction='row' spacing='0'>
      {items.map((value, index) => (
        <Stack direction='column' alignItems='center' key={value.title} overflow='hidden'>
          <Stack direction='row' alignItems='center'>
            <Divider
              w={w}
              backgroundColor={
                index !== 0 ? (index <= currentPage ? 'blue.200' : 'inherit') : 'transparent'
              }
              borderColor={
                index !== 0 ? (index <= currentPage ? 'blue.200' : 'inherit') : 'transparent'
              }
              borderWidth='1px'
            />
            {index < currentPage || items.length - 1 < currentPage ? (
              <CheckMark />
            ) : (
              <ProgressMark color={index === currentPage ? 'glow' : 'mute'} />
            )}

            <Divider
              w={w}
              backgroundColor={
                index === items.length - 1
                  ? 'transparent'
                  : index < currentPage
                  ? 'blue.200'
                  : 'inherit'
              }
              borderColor={
                index === items.length - 1
                  ? 'transparent'
                  : index < currentPage
                  ? 'blue.200'
                  : 'inherit'
              }
              borderWidth='1px'
              margin='0 !important'
            />
          </Stack>
          <Stack direction='column'>
            <Text
              maxW={value.fontW}
              textAlign={value.textAlign}
              fontWeight='medium'
              color={index <= currentPage ? 'inherit' : 'gray.200'}
            >
              {value.title}
            </Text>
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
}
