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
  Divider,
} from "@chakra-ui/react";
import * as React from "react";
import { useRouter } from "next/router";
import { MdAccountCircle } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { FiSettings } from "react-icons/fi";
import { RiQuestionLine } from "react-icons/ri";

interface props {
  categories: string;
  setCategories: React.Dispatch<React.SetStateAction<string>>;
}

export default function Navbar({ categories, setCategories }: props) {
  const router = useRouter();
  const isDesktop = useBreakpointValue({ base: false, md: false, lg: true });
  const color = useColorModeValue("gray.700", "RGBA(0, 0, 0, 0.48)");
  const color1 = useColorModeValue("gray.700", "gray.300");

  return (
    <Box m="0" as="section" pb={{ base: "7", md: "12" }}>
      <Box
        as="nav"
        bg="bg-surface"
        boxShadow={useColorModeValue("sm", "sm-dark")}
      >
        <Container py={{ base: "4", lg: "5" }}>
          <HStack spacing="10" justify="space-between">
            <Heading
              marginLeft="4"
              size={useBreakpointValue({ base: "xs", md: "sm" })}
            >
              Lawyers
            </Heading>
            {isDesktop ? (
              <Flex justify="space-between" flex="1">
                <ButtonGroup variant="link" spacing="8">
                  {["Home", "Dashboard", "Bookmarks", "Tasks"].map((item) => (
                    <Button key={item}>{item}</Button>
                  ))}
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
                          onClick={() => router.push("/")}
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
                    </MenuGroup>
                  </MenuList>
                </Menu>
              </HStack>
            )}
          </HStack>
        </Container>
        <Divider />
        <Container py={{ base: "1", lg: "2" }}>
          <HStack spacing="10" justify="space-between">
            <Flex justify="space-between" flex="1">
              <ButtonGroup variant="link" spacing="8">
                {["Overview", "Users", "Lawyers", "Admins"].map((item) => (
                  <Button
                    bg={item === categories ? "gray.300" : "bg-surface"}
                    padding="2"
                    key={item}
                    color={item === categories ? color : color1}
                    onClick={() => setCategories(item)}
                  >
                    {item}
                  </Button>
                ))}
              </ButtonGroup>
            </Flex>
          </HStack>
        </Container>
      </Box>
    </Box>
  );
}
