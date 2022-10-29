import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
} from "@chakra-ui/react";
import { CheckIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { AnyARecord } from "dns";

interface FormSelectProps {
  items: {
    value: number | string;
    label: string;
  }[];
  value: any;
  placeholder: string;
  onChange: (newValue: any) => void;
}

export default function Filter(props: FormSelectProps) {
  return (
    <>
      <Menu>
        <MenuButton width={60} as={Button} rightIcon={<ChevronDownIcon />}>
          {props.items.find((x) => x.value === props.value)?.label ||
            props.placeholder}
        </MenuButton>
        <MenuList float="right">
          {props.items.map((item, key) => (
            <MenuItem
              icon={<CheckIcon />}
              key={key}
              onClick={() => props.onChange(item.value)}
            >
              {item.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
}
