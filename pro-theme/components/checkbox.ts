import { mode } from '@chakra-ui/theme-tools';
import { StyleFunctionProps } from '@chakra-ui/react';

const baseStyle = (props: StyleFunctionProps) => ({
  label: {
    color: 'muted',
    fontWeight: 'medium',
  },
  control: {
    bg: mode('white', 'gray.800')(props),
    borderRadius: 'base',
  },
});

const sizes = {
  md: {
    label: {
      fontSize: 'sm',
    },
  },
};

const defaultProps = {
  colorScheme: 'brand',
};

export default {
  baseStyle,
  sizes,
  defaultProps,
};
