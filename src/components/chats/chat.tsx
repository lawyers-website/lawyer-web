import {
  Avatar,
  Button,
  Flex,
  FormControl,
  Input,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useState, useEffect, useRef } from 'react';
import {
  addDoc,
  collection,
  doc,
  getDoc,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from 'firebase/firestore';
import { db } from 'firebaseconfig';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const Topbar = ({ name }: { name: any }) => {
  return (
    <Flex
      alignItems='center'
      borderBottom='1px solid'
      borderColor='gray.200'
      pl='2rem'
      h='60px'
      w='100%'
    >
      <Avatar src='' />
      <Text fontWeight='700' fontSize='1.5rem' ml={5}>
        {name}
      </Text>
    </Flex>
  );
};

const Bottombar = ({ id }: { id: string | undefined | string[] }) => {
  const { data: session } = useSession();
  const [input, setInput] = useState('');
  const sendMessage = async (e: any) => {
    e.preventDefault();

    if (input) {
      await addDoc(collection(db, `chats/${id}/messages`), {
        text: input,
        sender: session?.user?.name,
        timestamp: serverTimestamp(),
      });
      setInput('');
      const docRef = doc(db, 'chats', id as string);
      updateDoc(docRef, { receiverhasread: false });
    }
  };
  return (
    <Flex p={3}>
      <FormControl onSubmit={sendMessage} as='form' display='flex'>
        <Input
          autoComplete='off'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='Type a Message...'
        />
        <Button ml={3} type='submit' onClick={sendMessage}>
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
  const bottomOfChat = useRef<HTMLDivElement>(null);
  const q = query(collection(db, `chats/${id}/messages`), orderBy('timestamp'));
  const [messages] = useCollectionData(q);
  useEffect(() => {
    try {
      const docRef = doc(db, 'chats', id as string);
      getDoc(docRef).then((doc1) => {
        setData(doc1.data());
      });
    } catch (error) {
      return;
    }
  }, [id]);

  useEffect(() => {
    setTimeout(() => {
      if (bottomOfChat.current) {
        bottomOfChat.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }, 100);
  }, [messages]);

  const bg1 = useColorModeValue('blue.100', 'blue.500');
  const bg2 = useColorModeValue('green.100', 'green.500');
  const getUser = (users: string[], currentUser: any) =>
    users?.filter((user) => user !== currentUser);
  return (
    <Flex
      flex={1}
      direction='column'
      h='85vh'
      width={{ base: '100%', md: '60%', lg: '70%' }}
    >
      <Topbar name={getUser(data?.users as string[], session?.user?.name)} />
      <Flex
        flex={1}
        direction='column'
        overflowY='scroll'
        sx={{ scrollbarWidth: 'none' }}
      >
        {messages?.map((message, index) => (
          <Flex
            key={index}
            bg={message.sender === session?.user?.name ? bg2 : bg1}
            p={2}
            mx={3}
            my='2px'
            w='fit-content'
            minW='7rem'
            borderRadius='lg'
            maxW='40%'
            alignSelf={
              message.sender === session?.user?.name ? 'flex-end' : 'flex-start'
            }
          >
            <Text>{message.text}</Text>
          </Flex>
        ))}
        <Flex ref={bottomOfChat}></Flex>
      </Flex>
      <Bottombar id={id} />
    </Flex>
  );
}
