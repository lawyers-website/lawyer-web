import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  IconButton,
  ButtonGroup,
  VStack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";

export default function MenuBar() {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        width="2rem"
        onClick={onOpen}
        variant="ghost"
        icon={
          !isOpen ? (
            <HamburgerIcon fontSize="1.25rem" />
          ) : (
            <CloseIcon fontSize="1.20rem" />
          )
        }
        aria-label="Open Menu"
      />
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            <Button onClick={() => router.push("/signup")} variant="primary">
              Sign up
            </Button>
          </DrawerHeader>
          <DrawerBody>
            <ButtonGroup variant="link" spacing="8">
              <VStack>
                {["Home", "About", "Laws", "Contact us"].map((item) => (
                  <Button key={item}>{item}</Button>
                ))}
              </VStack>
            </ButtonGroup>
          </DrawerBody>
          <DrawerFooter />
        </DrawerContent>
      </Drawer>
    </>
  );
}
