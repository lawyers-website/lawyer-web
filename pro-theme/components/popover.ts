import { mode } from '@chakra-ui/theme-tools';
import { StyleFunctionProps } from '@chakra-ui/react';

const baseStyle = (props: StyleFunctionProps) => ({
  content: {
    borderWidth: '1px',
    boxShadow: mode('lg', 'lg-dark')(props),
    borderRadius: 'lg',
    background: 'bg-surface',
    overflow: 'hidden',
  },
});

export default {
  baseStyle,
};
