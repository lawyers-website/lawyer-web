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
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
} from "@chakra-ui/react";
import * as React from "react";
import { useRouter } from "next/router";
import { MdAccountCircle } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { FiSettings } from "react-icons/fi";
import { RiQuestionLine } from "react-icons/ri";
import { signOut } from "next-auth/react";

export default function Navbar() {
  const router = useRouter();
  const isDesktop = useBreakpointValue({ base: false, md: false, lg: true });
  return (
    <Box mb="0" as="section" pb={{ base: "0", md: "4" }}>
      <Box
        as="nav"
        bg="bg-surface"
        boxShadow={useColorModeValue("sm", "sm-dark")}
      >
        <Container py={{ base: "4", lg: "5" }}>
          <HStack spacing="10" justify="space-between">
            <Heading
              marginLeft="0"
              size={useBreakpointValue({ base: "xs", md: "sm" })}
            >
              Lawyers
            </Heading>
            {isDesktop ? (
              <Flex justify="space-between" flex="1">
                <ButtonGroup variant="link" spacing="8">
                  <Button onClick={() => router.push("/user/user-in")}>
                    Home
                  </Button>
                  <Button onClick={() => router.push("/user/inbox")}>
                    Messages
                  </Button>
                  <Button onClick={() => router.push("/user/orders")}>
                    Orders
                  </Button>
                  <Button>Bookmarks</Button>
                  <Button>Transcations</Button>
                </ButtonGroup>
                <HStack spacing="3">
                  <IoSearch size={22} />
                  <FiSettings size={22} />
                  <RiQuestionLine size={20} />
                  <Menu>
                    <MenuButton>
                      <MdAccountCircle size={33} />
                    </MenuButton>
                    <MenuList>
                      <MenuGroup title="Profile">
                        <MenuItem>My Account</MenuItem>
                        <MenuItem>Payments </MenuItem>
                      </MenuGroup>
                      <MenuDivider />
                      <MenuGroup title="Help">
                        <MenuItem>Docs</MenuItem>
                        <MenuItem>FAQ</MenuItem>
                        <Button
                          onClick={() => signOut({ callbackUrl: "/" })}
                          variant="ghost"
                        >
                          Sign out
                        </Button>
                      </MenuGroup>
                    </MenuList>
                  </Menu>
                </HStack>
              </Flex>
            ) : (
              <HStack spacing="3">
                <IoSearch size={22} />

                <Menu>
                  <MenuButton>
                    <MdAccountCircle size={33} />
                  </MenuButton>
                  <MenuList>
                    <MenuGroup title="Profile">
                      <MenuItem>My Account</MenuItem>
                      <MenuItem>Payments </MenuItem>
                    </MenuGroup>
                    <MenuDivider />
                    <MenuGroup title="Help">
                      <MenuItem>Docs</MenuItem>
                      <MenuItem>FAQ</MenuItem>
                      <Button
                        onClick={() => signOut({ callbackUrl: "/" })}
                        variant="ghost"
                      >
                        Sign out
                      </Button>
                    </MenuGroup>
                  </MenuList>
                </Menu>
              </HStack>
            )}
          </HStack>
        </Container>
      </Box>
    </Box>
  );
}
