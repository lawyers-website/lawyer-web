import { SearchIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Fade,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  ScaleFade,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "@firebase/firestore";
import { db } from "firebaseconfig";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function SideBar() {
  const [searchActive, setSearchActive] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();
  const [snapshot, loading, error] = useCollection(collection(db, "chats"));
  const chats: any = snapshot?.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  const hoverBg = useColorModeValue("gray.100", "gray.700");
  const bg = useColorModeValue("gray.200", "gray.500");

  const getUser = (users: string[], currentUser: any) =>
    users?.filter((user) => user !== currentUser);

  return (
    <Flex
      ml={{ base: "0", md: "20px" }}
      w={{ base: "100%", md: "40%", lg: "30%" }}
      h="85vh"
      borderEnd="1px solid"
      borderColor="gray.200"
      direction="column"
      bg="bg-surface"
    >
      {searchActive ? (
        <Flex
          h="60px"
          w="100%"
          alignItems="center"
          borderBottom="1px solid"
          borderColor="gray.200"
          justify="space-between"
          px="1rem"
        >
          <ScaleFade initialScale={0} in={searchActive}>
            <InputGroup w="20rem">
              <Input pr="4.5rem" placeholder="Search a username" />
              <InputRightElement>
                <SearchIcon />
              </InputRightElement>
            </InputGroup>
          </ScaleFade>
          <Button
            variant="link"
            onClick={() => setSearchActive(false)}
            cursor="pointer"
          >
            Close
          </Button>
        </Flex>
      ) : (
        <Flex
          h="60px"
          w="100%"
          alignItems="center"
          borderBottom="1px solid"
          borderColor="gray.200"
          justify="space-between"
          px="1rem"
        >
          <Text>All Conversations</Text>
          <SearchIcon onClick={() => setSearchActive(true)} cursor="pointer" />
        </Flex>
      )}

      <Flex
        overflowX="scroll"
        direction="column"
        sx={{ scrollbarWidth: "none" }}
      >
        {chats
          ?.filter((chat: any) => chat.users.includes(session?.user?.name))
          .map((chat: any) => (
            <Flex
              alignItems="center"
              key={chat.id}
              pb={2}
              pt={2}
              mb="1px"
              px="3"
              _hover={{ bg: hoverBg }}
              cursor="pointer"
              borderBottom="1px solid"
              borderColor={bg}
              onClick={() => router.push(`/inbox/${chat.id}`)}
            >
              <Avatar marginEnd="1rem" src="" />
              <Text>{getUser(chat.users, session?.user?.name)}</Text>
            </Flex>
          ))}
      </Flex>
    </Flex>
  );
}
