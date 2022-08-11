import type { InputProps } from "@chakra-ui/react";
import {
  FormErrorMessage,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  useDisclosure,
  useMergeRefs,
} from "@chakra-ui/react";

import * as React from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { useField } from "formik";

interface Props extends InputProps {
  name: string;
  label: string;
}

const PasswordField = React.forwardRef<HTMLInputElement, Props>(
  (props, ref) => {
    const { isOpen, onToggle } = useDisclosure();
    const inputRef = React.useRef<HTMLInputElement>(null);
    const mergeRef = useMergeRefs(inputRef, ref);
    const [field, meta] = useField(props.name);
    const isError = Boolean(meta.touched && meta.error);

    const onClickReveal = () => {
      onToggle();
      if (inputRef.current) {
        inputRef.current.focus({ preventScroll: true });
      }
    };

    return (
      <FormControl isInvalid={isError}>
        <FormLabel htmlFor="password">{props.label}</FormLabel>
        <InputGroup>
          <InputRightElement>
            <IconButton
              variant="link"
              aria-label={isOpen ? "Mask password" : "Reveal password"}
              icon={isOpen ? <HiEyeOff /> : <HiEye />}
              onClick={onClickReveal}
            />
          </InputRightElement>
          <Input
            ref={mergeRef}
            type={isOpen ? "text" : "password"}
            autoComplete="current-password"
            {...props}
            onBlur={field.onBlur}
            onChange={field.onChange}
            value={field.value.password}
          />
        </InputGroup>
        {isError && <FormErrorMessage>{meta.error}</FormErrorMessage>}
      </FormControl>
    );
  }
);

PasswordField.displayName = "PasswordField";

export default PasswordField;
