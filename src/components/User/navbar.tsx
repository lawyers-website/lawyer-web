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
  InputRightElement,
  InputGroup,
  Input,
  InputLeftElement,
} from '@chakra-ui/react';
import * as React from 'react';
import { MdAccountCircle } from 'react-icons/md';
import { IoSearch } from 'react-icons/io5';
import { FiSettings } from 'react-icons/fi';
import { RiQuestionLine } from 'react-icons/ri';
import { useRouter } from 'next/router';
import { HiOutlineMail } from 'react-icons/hi';
import { signOut } from 'next-auth/react';
import Search from './SearchBar';

export default function Navbar() {
  const router = useRouter();
  const size = useBreakpointValue({ base: 'sm', md: 'md' });
  const isDesktop = useBreakpointValue({ base: false, md: false, lg: true });
  return (
    <Box m='0' as='section' pb={{ base: '7', md: '12' }}>
      <Box
        as='nav'
        bg='bg-surface'
        boxShadow={useColorModeValue('sm', 'sm-dark')}
      >
        <Container py={{ base: '4', lg: '5' }}>
          <HStack spacing='10' justify='space-between'>
            <Heading
              marginLeft='4'
              size={useBreakpointValue({ base: 'xs', md: 'sm' })}
            >
              Lawyers
            </Heading>
            {isDesktop ? (
              <Flex justify='space-between' flex='1'>
                <Search />
                <HStack spacing='4'>
                  <HiOutlineMail size={25} />
                  <FiSettings size={22} />
                  <RiQuestionLine size={20} />
                  <Menu>
                    <MenuButton>
                      <MdAccountCircle size={33} />
                    </MenuButton>
                    <MenuList>
                      <MenuGroup title='Profile'>
                        <MenuItem>My Account</MenuItem>
                        <MenuItem>Payments </MenuItem>
                      </MenuGroup>
                      <MenuDivider />
                      <MenuGroup title='Help'>
                        <MenuItem>Docs</MenuItem>
                        <MenuItem>FAQ</MenuItem>
                        <Button
                          variant='ghost'
                          onClick={() =>
                            signOut({
                              callbackUrl: 'http://localhost:3000',
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
              <HStack spacing='3'>
                <InputGroup size={size}>
                  <Input placeholder='search ' />
                  <InputRightElement width='3rem'>
                    <IoSearch size={22} />
                  </InputRightElement>
                </InputGroup>
                <Menu>
                  <MenuButton>
                    <MdAccountCircle size={33} />
                  </MenuButton>
                  <MenuList>
                    <MenuGroup title='Profile'>
                      <MenuItem>My Account</MenuItem>
                      <MenuItem>Payments </MenuItem>
                    </MenuGroup>
                    <MenuDivider />
                    <MenuGroup title='Help'>
                      <MenuItem>Docs</MenuItem>
                      <MenuItem>FAQ</MenuItem>
                      <Button
                        variant='ghost'
                        onClick={() =>
                          signOut({
                            callbackUrl: 'http://localhost:3000',
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
          </HStack>
        </Container>
      </Box>
    </Box>
  );
}
