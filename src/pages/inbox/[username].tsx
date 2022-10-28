import Chat from "@/components/chats/chat";
import SideBar from "@/components/chats/sidebar";
import Navbar from "@/components/Lawyer/navbar";
import { HStack, useBreakpointValue } from "@chakra-ui/react";
import {
  collection,
  doc,
  limit,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";
import { db } from "firebaseconfig";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useCollectionData } from "react-firebase-hooks/firestore";

export default function Sidebar() {
  const router = useRouter();
  const { data: session } = useSession();
  const id = router.query.username;
  const q = query(
    collection(db, `chats/${id}/messages`),
    orderBy("timestamp", "desc"),
    limit(1)
  );
  const [messages] = useCollectionData(q);
  if (messages && messages[0]?.sender !== session?.user?.name) {
    try {
      const docRef = doc(db, "chats", id as string);
      updateDoc(docRef, { receiverhasread: true })
        .then(() => {
          return;
        })
        .catch((error) => console.log(error));
    } catch (err) {}
  }
  return (
    <>
      <Navbar />
      {useBreakpointValue({
        base: <Chat />,
        md: (
          <HStack alignItems="flex-start" spacing={0}>
            <SideBar />
            <Chat />
          </HStack>
        ),
      })}
    </>
  );
}
