import SideBar from "@/components/chats/sidebar";
import { AttachmentIcon } from "@chakra-ui/icons";
import { Flex, HStack, Text, useBreakpointValue } from "@chakra-ui/react";
import { GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";

export default function Sidebar() {
  return (
    <>
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

export const getServerSideProps = async (ctx: any) => {
  const session = await getSession(ctx);
  const isUser = !!session?.user;

  if (!isUser) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return { props: {} };
};
