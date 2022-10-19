import Chat from "@/components/chats/chat";
import SideBar from "@/components/chats/sidebar";
import Navbar from "@/components/Lawyer/navbar";
import { AttachmentIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Flex,
  HStack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function Sidebar() {
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
