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
        base: <SideBar />,
        md: (
          <HStack alignItems="flex-start" spacing={0}>
            <SideBar />

            <Flex
              direction="column"
              w={{ md: "60%", lg: "70%" }}
              h="85vh"
              justify="center"
              align="center"
            >
              <AttachmentIcon boxSize={20} />
              <Text fontSize={40}>Select a Conversation</Text>
            </Flex>
          </HStack>
        ),
      })}
    </>
  );
}
