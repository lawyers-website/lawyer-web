import {
  Avatar,
  Button,
  Flex,
  FormControl,
  HStack,
  Input,
  Text,
} from "@chakra-ui/react";

const Topbar = () => {
  return (
    <Flex
      alignItems="center"
      borderBottom="1px solid"
      borderColor="gray.200"
      pl="2rem"
      h="60px"
      w="100%"
    >
      <Avatar src="" />
      <Text fontWeight="700" fontSize="1.5rem" ml={5}>
        User 2
      </Text>
    </Flex>
  );
};

const Bottombar = () => {
  return (
    <Flex p={3}>
      <FormControl>
        <Input autoComplete="off" placeholder="Type a Message..." />
        <Button type="submit" hidden>
          ok
        </Button>
      </FormControl>
    </Flex>
  );
};

export default function Chat() {
  return (
    <Flex
      flex={1}
      direction="column"
      h="85vh"
      width={{ base: "100%", md: "60%", lg: "70%" }}
    >
      <Topbar />
      <Flex
        flex={1}
        direction="column"
        overflowY="scroll"
        sx={{ scrollbarWidth: "none" }}
      >
        <Flex
          bg="blue.100"
          p={2}
          mx={3}
          my={2}
          w="fit-content"
          minW="7rem"
          borderRadius="lg"
          maxW="40%"
        >
          <Text>
            This is dummy message Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Dolores iure, totam, aspernatur rerum laudantium
            magni aut error, animi deleniti eum consectetur. Perferendis laborum
            ea, nulla enim molestias qui expedita praesentium.
          </Text>
        </Flex>
        <Flex
          bg="blue.100"
          p={2}
          mx={3}
          my={2}
          w="fit-content"
          minW="7rem"
          borderRadius="lg"
          maxW="40%"
        >
          <Text>This</Text>
        </Flex>
        <Flex
          bg="green.100"
          p={2}
          mx={3}
          my={2}
          w="fit-content"
          minW="7rem"
          borderRadius="lg"
          maxW="40%"
          alignSelf="flex-end"
        >
          <Text>This is dummy message</Text>
        </Flex>
        <Flex
          bg="blue.100"
          p={2}
          mx={3}
          my={2}
          w="fit-content"
          minW="7rem"
          borderRadius="lg"
          maxW="40%"
        >
          <Text>This is dummy message</Text>
        </Flex>
        <Flex
          bg="blue.100"
          p={2}
          mx={3}
          my={2}
          w="fit-content"
          minW="7rem"
          borderRadius="lg"
          maxW="40%"
        >
          <Text>This</Text>
        </Flex>
        <Flex
          bg="green.100"
          p={2}
          mx={3}
          my={2}
          w="fit-content"
          minW="7rem"
          borderRadius="lg"
          maxW="40%"
          alignSelf="flex-end"
        >
          <Text>This is dummy message</Text>
        </Flex>
        <Flex
          bg="blue.100"
          p={2}
          mx={3}
          my={2}
          w="fit-content"
          minW="7rem"
          borderRadius="lg"
          maxW="40%"
        >
          <Text>This is dummy message</Text>
        </Flex>
        <Flex
          bg="blue.100"
          p={2}
          mx={3}
          my={2}
          w="fit-content"
          minW="7rem"
          borderRadius="lg"
          maxW="40%"
        >
          <Text>This</Text>
        </Flex>
        <Flex
          bg="green.100"
          p={2}
          mx={3}
          my={2}
          w="fit-content"
          minW="7rem"
          borderRadius="lg"
          maxW="40%"
          alignSelf="flex-end"
        >
          <Text>This is dummy message</Text>
        </Flex>
        <Flex
          bg="blue.100"
          p={2}
          mx={3}
          my={2}
          w="fit-content"
          minW="7rem"
          borderRadius="lg"
          maxW="40%"
        >
          <Text>This is dummy message</Text>
        </Flex>
        <Flex
          bg="blue.100"
          p={2}
          mx={3}
          my={2}
          w="fit-content"
          minW="7rem"
          borderRadius="lg"
          maxW="40%"
        >
          <Text>This</Text>
        </Flex>
        <Flex
          bg="green.100"
          p={2}
          mx={3}
          my={2}
          w="fit-content"
          minW="7rem"
          borderRadius="lg"
          maxW="40%"
          alignSelf="flex-end"
        >
          <Text>This is dummy message</Text>
        </Flex>
        <Flex
          bg="blue.100"
          p={2}
          mx={3}
          my={2}
          w="fit-content"
          minW="7rem"
          borderRadius="lg"
          maxW="40%"
        >
          <Text>This is dummy message</Text>
        </Flex>
        <Flex
          bg="blue.100"
          p={2}
          mx={3}
          my={2}
          w="fit-content"
          minW="7rem"
          borderRadius="lg"
          maxW="40%"
        >
          <Text>This</Text>
        </Flex>
        <Flex
          bg="green.100"
          p={2}
          mx={3}
          my={2}
          w="fit-content"
          minW="7rem"
          borderRadius="lg"
          maxW="40%"
          alignSelf="flex-end"
        >
          <Text>This is dummy message</Text>
        </Flex>
        <Flex
          bg="blue.100"
          p={2}
          mx={3}
          my={2}
          w="fit-content"
          minW="7rem"
          borderRadius="lg"
          maxW="40%"
        >
          <Text>This is dummy message</Text>
        </Flex>
        <Flex
          bg="blue.100"
          p={2}
          mx={3}
          my={2}
          w="fit-content"
          minW="7rem"
          borderRadius="lg"
          maxW="40%"
        >
          <Text>This</Text>
        </Flex>
        <Flex
          bg="green.100"
          p={2}
          mx={3}
          my={2}
          w="fit-content"
          minW="7rem"
          borderRadius="lg"
          maxW="40%"
          alignSelf="flex-end"
        >
          <Text>This is dummy message</Text>
        </Flex>
      </Flex>
      <Bottombar />
    </Flex>
  );
}
