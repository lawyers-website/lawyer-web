import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  Heading,
  HStack,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";
import MenuBar from "./menubar";
import { useRouter } from "next/router";

export default function App() {
  const router = useRouter();
  const isDesktop = useBreakpointValue({ base: false, md: false, lg: true });
  return (
    <Box as="section" pb={{ base: "12", md: "24" }}>
      <Box
        as="nav"
        bg="bg-surface"
        boxShadow={useColorModeValue("sm", "sm-dark")}
      >
        <Container py={{ base: "4", lg: "5" }}>
          <HStack spacing="10" justify="space-between">
            {isDesktop ? null : <MenuBar />}
            <Heading
              marginLeft="4"
              size={useBreakpointValue({ base: "xs", md: "sm" })}
            >
              Lawyers
            </Heading>
            {isDesktop ? (
              <Flex justify="space-between" flex="1">
                <ButtonGroup variant="link" spacing="8">
                  {["Home", "About", "Laws", "Contact us"].map((item) => (
                    <Button key={item}>{item}</Button>
                  ))}
                </ButtonGroup>
                <HStack spacing="3">
                  <Button
                    onClick={() => router.push("/signin")}
                    variant="ghost"
                  >
                    Sign in
                  </Button>
                  <Button
                    onClick={() => router.push("/signup")}
                    variant="primary"
                  >
                    Sign up
                  </Button>
                </HStack>
              </Flex>
            ) : (
              <HStack spacing="3">
                <Button
                  onClick={() => router.push("/signup")}
                  variant="primary"
                >
                  Sign up
                </Button>
              </HStack>
            )}
          </HStack>
        </Container>
      </Box>
    </Box>
  );
}
