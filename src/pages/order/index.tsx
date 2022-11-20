import React from "react";
import {
  Flex,
  Box,
  Text,
  Input,
  Button,
  VStack,
  useColorModeValue,
  Divider,
  HStack,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import {LockIcon} from '@chakra-ui/icons'
export default function Payments() {
  return (
    <Flex justifyContent={"center"}>
      <VStack
        bg="bg-surface"
        width="530px"
        boxShadow={useColorModeValue("sm", "sm-dark")}
        justifyContent="center"
        borderRadius="10"
      >
        <Text pt="5" pl="0" pb="5" fontSize={"40"}>
          Payment Details
        </Text>
        <Divider />
        <FormControl isRequired  pl='14' py='10'>
          <FormLabel>Name on Card</FormLabel>
          <Input placeholder="Name on Card" width='80%' my='3' size='lg'/>
          <FormLabel>Card Number</FormLabel>
          <Input placeholder="Card Number" width='80%' my='3' size='lg' type='number'/>
          <FormLabel>Card Expire</FormLabel>
          <Input placeholder="Card Expire" type='date' width='80%' my='3' size='lg'/>
          <FormLabel>CVV</FormLabel>
          <Input placeholder="CVV" width='80%' my='3' size='lg' type='password'/>
          <Button width='80%' fontSize={'lg'}><LockIcon mr='1.5'/> Pay</Button>
        </FormControl>
      </VStack>
    </Flex>
  );
}
