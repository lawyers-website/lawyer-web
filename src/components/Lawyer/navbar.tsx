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
  Select,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
} from "@chakra-ui/react";
import * as React from "react";
import { useRouter } from "next/router";
import { MdAccountCircle } from "react-icons/md";
import { signOut } from "next-auth/react";
import { language } from "@/langContext";
import { SearchIcon } from "@chakra-ui/icons";
import Search from "../Searchbar";

export default function Navbar() {
  const router = useRouter();
  const isDesktop = useBreakpointValue({ base: false, md: false, lg: true });
  const [isSearchOpen, setSearchOpen] = React.useState(false);

  const onClickSearchBtn = () => setSearchOpen((val) => !val);
  const Lang = React.useContext(language);
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
                  <Button onClick={() => router.push("/inbox")}>
                    Messages
                  </Button>
                  <Button onClick={() => router.push("/orders")}>Orders</Button>
                </ButtonGroup>
                <HStack spacing="3">
                  <IconButton
                    aria-label="Search btn"
                    icon={<SearchIcon />}
                    onClick={() => onClickSearchBtn()}
                  />
                  <Menu>
                    <MenuButton>
                      <MdAccountCircle size={33} />
                    </MenuButton>
                    <MenuList>
                      <MenuGroup title="Profile">
                        <MenuItem onClick={() => router.push("/user/profile")}>
                          My Account
                        </MenuItem>
                        <MenuItem onClick={() => router.push("/orders")}>
                          Your orders{" "}
                        </MenuItem>
                      </MenuGroup>
                      <MenuDivider />
                      <MenuGroup title="Help">
                        <MenuItem onClick={() => router.push("/inbox")}>
                          Messages
                        </MenuItem>
                        <MenuItem>FAQ</MenuItem>
                        <Button
                          variant="ghost"
                          onClick={() =>
                            signOut({
                              callbackUrl: "/",
                            })
                          }
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
                <IconButton
                  aria-label="Search btn"
                  icon={<SearchIcon />}
                  onClick={() => onClickSearchBtn()}
                />

                <Menu>
                  <MenuButton>
                    <MdAccountCircle size={33} />
                  </MenuButton>
                  <MenuList>
                    <MenuGroup title="Profile">
                      <MenuItem onClick={() => router.push("/user/profile")}>
                        My Account
                      </MenuItem>
                      <MenuItem onClick={() => router.push("/orders")}>
                        Your orders{" "}
                      </MenuItem>
                    </MenuGroup>
                    <MenuDivider />
                    <MenuGroup title="Help">
                      <MenuItem onClick={() => router.push("/inbox")}>
                        Messages
                      </MenuItem>
                      <MenuItem>FAQ</MenuItem>
                      <Button
                        variant="ghost"
                        onClick={() =>
                          signOut({
                            callbackUrl: "/",
                          })
                        }
                      >
                        Sign out
                      </Button>
                    </MenuGroup>
                  </MenuList>
                </Menu>
              </HStack>
            )}
            <Select
              value={Lang?.lang}
              onChange={(e) => Lang?.setLang(e.target.value)}
              width="25"
            >
              <option value="en">English</option>
              <option value="it">Italian</option>
              <option value="fre">French</option>
              <option value="ger">German</option>
            </Select>
          </HStack>
        </Container>
      </Box>
      <Modal isOpen={isSearchOpen} onClose={() => setSearchOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <Search />
        </ModalContent>
      </Modal>
    </Box>
  );
}
