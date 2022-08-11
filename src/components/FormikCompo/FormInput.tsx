import { useField } from 'formik';
import type { InputProps, FormLabelProps } from '@chakra-ui/react';
import { FormControl, FormLabel, Input, FormErrorMessage } from '@chakra-ui/react';

interface Props extends InputProps {
  name: string;
  formLabelProps?: FormLabelProps;
  label?: string;
}

function FormInput({ name, formLabelProps, label, ...props }: Props) {
  const [field, meta] = useField(name);
  const isError = Boolean(meta.touched && meta.error);

  return (
    <FormControl isInvalid={isError}>
      {label && <FormLabel {...formLabelProps}>{label}</FormLabel>}
      <Input {...field} {...props} />
      {isError && <FormErrorMessage>{meta.error}</FormErrorMessage>}
    </FormControl>
  );
}

export default FormInput;
