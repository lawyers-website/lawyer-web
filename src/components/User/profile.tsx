import {
  Avatar,
  Box,
  Divider,
  HStack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { useSession } from "next-auth/react";

export default function Profile() {
  const { data: session } = useSession();
  return (
    <>
      <Box
        mt={{ base: "2rem", lg: "6rem" }}
        width={{ base: "90%", md: "60%", lg: "40%" }}
        mx="auto"
      >
        <Box>
          <VStack
            spacing={3}
            alignItems="flex-start"
            px={{ base: "4", sm: "10" }}
            py={{ base: "3", sm: "8" }}
            bg={{ base: "transparent", sm: "bg-surface" }}
            boxShadow={{
              base: "none",
              sm: useColorModeValue("md", "md-dark"),
            }}
            borderRadius={{ base: "none", sm: "xl" }}
          >
            <Avatar
              size="xl"
              justifySelf="center"
              alignSelf="center"
              name={session?.user?.name ? session?.user?.name : "Name"}
              mb="2rem"
            />
            <HStack>
              <Text fontWeight="bold" width="13rem">
                Username
              </Text>
              <Text fontWeight="400">{session?.user?.name}</Text>
            </HStack>
            <Divider />
            <HStack>
              <Text fontWeight="bold" width="13rem">
                Email
              </Text>
              <Text>{session?.user?.email}</Text>
            </HStack>
            <Divider />
            <HStack>
              <Text fontWeight="bold" width="13rem">
                Phone
              </Text>
              <Text>-</Text>
            </HStack>
            <Divider />
          </VStack>
        </Box>
      </Box>
    </>
  );
}
