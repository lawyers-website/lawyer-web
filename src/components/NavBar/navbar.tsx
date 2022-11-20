import {
  Box,
  Button,
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
  IconButton,
  Modal,
  ModalContent,
  ModalOverlay,
  Select,
} from "@chakra-ui/react";
import * as React from "react";
import { MdAccountCircle } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { signOut, useSession } from "next-auth/react";
import Search from "../Searchbar";
import { useRouter } from "next/router";
import { SearchIcon } from "@chakra-ui/icons";
import { useContext, useState } from "react";
import { language } from "@/langContext";

const UserIn = ({ onClickSearchBtn }: Props) => {
  const router = useRouter();
  const isDesktop = useBreakpointValue({ base: false, md: false, lg: true });

  return isDesktop ? (
    <Flex justify="space-between" flex="1">
      <Search />
      <HStack spacing="4">
        <HiOutlineMail
          onClick={() => router.push("/inbox")}
          size={25}
          style={{
            cursor: "pointer",
          }}
        />
        <FiSettings
          size={22}
          style={{
            cursor: "pointer",
          }}
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
              <MenuItem>Payments </MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup title="Help">
              <MenuItem>Docs</MenuItem>
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
    <Flex justify="space-between" flex="1">
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
            <MenuItem>Payments </MenuItem>
          </MenuGroup>
          <MenuDivider />
          <MenuGroup title="Help">
            <MenuItem>Docs</MenuItem>
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
    </Flex>
  );
};

interface Props {
  onClickSearchBtn: () => void;
}

const UserNotIn = ({ onClickSearchBtn }: Props) => {
  const router = useRouter();
  const isDesktop = useBreakpointValue({ base: false, md: false, lg: true });

  return isDesktop ? (
    <Flex justify="space-between" flex="1">
      <Search />
      <HStack spacing="3">
        <Button onClick={() => router.push("/signin")} variant="ghost">
          Sign in
        </Button>
        <Button onClick={() => router.push("/signup")} variant="primary">
          Sign up
        </Button>
      </HStack>
    </Flex>
  ) : (
    <Flex justify="space-between" flex="1">
      <IconButton
        aria-label="Search btn"
        icon={<SearchIcon />}
        onClick={() => onClickSearchBtn()}
      />
      <Button onClick={() => router.push("/signup")} variant="primary">
        Sign up
      </Button>
    </Flex>
  );
};

export default function Navbar() {
  const { data: session } = useSession();
  const [isSearchOpen, setSearchOpen] = useState(false);

  const onClickSearchBtn = () => setSearchOpen((val) => !val);
  const { pathname } = useRouter();
  const Lang = useContext(language);
 
  return (
    <>
      <Box m="0" as="section" pb={{ base: "7", md: "12" }}>
        <Box
          as="nav"
          bg="bg-surface"
          boxShadow={useColorModeValue("sm", "sm-dark")}
        >
          <Container py={{ base: "4", lg: "5" }}>
            <HStack spacing={{ base: 3, md: 10 }} justify="space-between">
              <Heading
                marginLeft={{ base: 0, md: "3" }}
                size={useBreakpointValue({ base: "xs", md: "sm" })}
              >
                Lawyers
              </Heading>

              {session?.user ? (
                <UserIn onClickSearchBtn={onClickSearchBtn} />
              ) : (
                <UserNotIn onClickSearchBtn={onClickSearchBtn} />
              )}
              <Select  value={Lang?.lang} onChange={(e)=>Lang?.setLang(e.target.value)} width="25">
                <option value="en">English</option>
                <option value="it">Italian</option>
                <option value="fre">French</option>
                <option value="ger">German</option>
              </Select>
            </HStack>
          </Container>
        </Box>
      </Box>
      <Modal isOpen={isSearchOpen} onClose={() => setSearchOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <Search />
        </ModalContent>
      </Modal>
    </>
  );
}
