import { mode } from '@chakra-ui/theme-tools';
import { StyleFunctionProps } from '@chakra-ui/react';

export default {
  global: (props: StyleFunctionProps) => ({
    body: {
      color: 'default',
      bg: 'bg-canvas',
    },
    '*::placeholder': {
      opacity: 1,
      color: 'muted',
    },
    '*, *::before, &::after': {
      borderColor: mode('gray.200', 'gray.700')(props),
    },
  }),
};
