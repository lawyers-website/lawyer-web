import { SearchIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  ScaleFade,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  useCollection,
  useCollectionData,
} from "react-firebase-hooks/firestore";
import { collection, query, orderBy, limit } from "@firebase/firestore";
import { db } from "firebaseconfig";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { GoPrimitiveDot } from "react-icons/go";

const getUser = (users: string[], currentUser: any) =>
  users?.filter((user) => user !== currentUser);

const Chat = ({ chat }: { chat: any }) => {
  const router = useRouter();
  const { data: session } = useSession();
  const hoverBg = useColorModeValue("gray.100", "gray.700");
  const bg = useColorModeValue("gray.200", "gray.500");
  const q = query(
    collection(db, `chats/${chat.id}/messages`),
    orderBy("timestamp", "desc"),
    limit(1)
  );
  const [messages] = useCollectionData(q);

  return (
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
      position="relative"
    >
      <Avatar marginEnd="1rem" src="" />
      <VStack spacing={0} alignItems="flex-start">
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Text fontWeight="700" fontSize={20} mr="5px">
            {getUser(chat.users, session?.user?.name)}
          </Text>
          {chat.receiverhasread ||
          (messages && messages[0]?.sender === session?.user?.name) ? null : (
            <GoPrimitiveDot color="black" />
          )}
        </Box>
        {messages &&
          (messages[0]?.sender === session?.user?.name ? (
            <Text fontSize={15} opacity={"0.7"}>
              Me : {messages[0]?.text.slice(0, 40)}
            </Text>
          ) : (
            <Text
              fontSize={chat.receiverhasread ? 15 : 17}
              opacity={chat.receiverhasread ? "0.7" : "1"}
            >
              {messages[0]?.text.slice(0, 40)}
            </Text>
          ))}
      </VStack>
    </Flex>
  );
};

export default function SideBar() {
  const [searchActive, setSearchActive] = useState(false);
  const { data: session } = useSession();
  const [snapshot] = useCollection(collection(db, "chats"));
  const chats: any = snapshot?.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

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
            <Chat chat={chat} key={chat.id} />
          ))}
      </Flex>
    </Flex>
  );
}
