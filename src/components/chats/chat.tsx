import {
  Avatar,
  Button,
  Flex,
  FormControl,
  HStack,
  Input,
  Text,
  useColorModeValue,
  useFocusEffect,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "firebaseconfig";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import {
  useCollection,
  useCollectionData,
  useDocumentData,
} from "react-firebase-hooks/firestore";
import { timeStamp } from "console";

const Topbar = ({ name }: { name: any }) => {
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
        {name}
      </Text>
    </Flex>
  );
};

const Bottombar = ({ id }: { id: string | undefined | string[] }) => {
  const { data: session } = useSession();
  const [input, setInput] = useState("");
  const sendMessage = async (e: any) => {
    e.preventDefault();
    await addDoc(collection(db, `chats/${id}/messages`), {
      text: input,
      sender: session?.user?.name,
      timestamp: serverTimestamp(),
    });
    setInput("");
  };
  return (
    <Flex p={3}>
      <FormControl onSubmit={sendMessage} as="form" display="flex">
        <Input
          autoComplete="off"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a Message..."
        />
        <Button ml={3} type="submit" onClick={sendMessage}>
          Send
        </Button>
      </FormControl>
    </Flex>
  );
};

export default function Chat() {
  const router = useRouter();
  const id = router.query.username;
  const [data, setData] = useState<any>();
  const { data: session } = useSession();
  const q = query(collection(db, `chats/${id}/messages`), orderBy("timestamp"));
  const [messages] = useCollectionData(q);
  // const [chat] = useDocumentData(doc(db, "chats", id ));
  // console.log(chat);
  useEffect(() => {
    const docRef = doc(db, "chats", id as string);
    getDoc(docRef).then((doc) => {
      setData(doc.data());
    });
  }, [id]);
  const bg1 = useColorModeValue("blue.100", "blue.500");
  const bg2 = useColorModeValue("green.100", "green.500");
  const getUser = (users: string[], currentUser: any) =>
    users?.filter((user) => user !== currentUser);
  return (
    <Flex
      flex={1}
      direction="column"
      h="85vh"
      width={{ base: "100%", md: "60%", lg: "70%" }}
    >
      <Topbar name={getUser(data?.users as string[], session?.user?.name)} />
      <Flex
        flex={1}
        direction="column"
        overflowY="scroll"
        sx={{ scrollbarWidth: "none" }}
      >
        {messages?.map((message, index) => (
          <Flex
            key={index}
            bg={message.sender === session?.user?.name ? bg2 : bg1}
            p={2}
            mx={3}
            my="2px"
            w="fit-content"
            minW="7rem"
            borderRadius="lg"
            maxW="40%"
            alignSelf={
              message.sender === session?.user?.name ? "flex-end" : "flex-start"
            }
          >
            <Text>{message.text}</Text>
          </Flex>
        ))}
      </Flex>
      <Bottombar id={id} />
    </Flex>
  );
}
