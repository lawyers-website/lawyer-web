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

interface props {
  categories: string;
  setCategories: React.Dispatch<React.SetStateAction<string>>;
}

export default function Navbar({ categories, setCategories }: props) {
  const router = useRouter();
  const isDesktop = useBreakpointValue({ base: false, md: false, lg: true });
  const color = useColorModeValue("gray.700", "RGBA(0, 0, 0, 0.48)");
  const color1 = useColorModeValue("gray.700", "gray.300");
  const { pathname } = useRouter();
  const arr1 = ["Overview", "Users", "Lawyers", "Admins"];
  const arr2 = ["Users", "Lawyers", "Admins"];

  return (
    <Box m="0" as="section" pb={{ base: "7", md: "12" }}>
      <Box
        as="nav"
        bg="bg-surface"
        boxShadow={useColorModeValue("sm", "sm-dark")}
      >
        <Container maxWidth="100%" py={{ base: "4", lg: "5" }}>
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
                  <Button onClick={() => router.push("/admin")}>Home</Button>
                  <Button onClick={() => router.push("/admin/dashboard")}>
                    Dashboard
                  </Button>
                  <Button onClick={() => router.push("/admin/accounts")}>
                    Accounts
                  </Button>
                  <Button onClick={() => router.push("/admin/orders")}>
                    Orders
                  </Button>
                </ButtonGroup>
                <HStack spacing="3">
                  <Menu>
                    <MenuButton>
                      <MdAccountCircle size={33} />
                    </MenuButton>
                    <MenuList>
                      <MenuItem onClick={() => router.push("/admin/dashboard")}>
                        Dashboard
                      </MenuItem>
                      <MenuItem onClick={() => router.push("/admin/accounts")}>
                        Accounts
                      </MenuItem>
                      <MenuItem onClick={() => router.push("/admin/orders")}>
                        Orders{" "}
                      </MenuItem>
                      <MenuDivider />
                      <Button onClick={() => router.push("/")} variant="ghost">
                        Sign out
                      </Button>
                    </MenuList>
                  </Menu>
                </HStack>
              </Flex>
            ) : (
              <HStack spacing="3">
                <Menu>
                  <MenuButton>
                    <MdAccountCircle size={33} />
                  </MenuButton>
                  <MenuList>
                    <MenuItem onClick={() => router.push("/admin/dashboard")}>
                      Dashboard
                    </MenuItem>
                    <MenuItem onClick={() => router.push("/admin/accounts")}>
                      Accounts
                    </MenuItem>
                    <MenuItem onClick={() => router.push("/admin/orders")}>
                      Orders{" "}
                    </MenuItem>
                    <MenuDivider />
                    <Button onClick={() => router.push("/")} variant="ghost">
                      Sign out
                    </Button>
                  </MenuList>
                </Menu>
              </HStack>
            )}
          </HStack>
        </Container>
        <Divider />
        {(pathname === "/admin/accounts" || pathname === "/admin") && (
          <Container py={{ base: "1", lg: "2" }}>
            <HStack spacing="10" justify="space-between">
              <Flex justify="space-between" flex="1">
                {pathname === "/admin/accounts" ? (
                  <ButtonGroup variant="link" spacing="8">
                    {arr2.map((item) => (
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
                ) : (
                  <ButtonGroup variant="link" spacing="8">
                    {arr1.map((item) => (
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
                )}
              </Flex>
            </HStack>
          </Container>
        )}
      </Box>
    </Box>
  );
}
