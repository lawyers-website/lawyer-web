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
  Icon,
} from '@chakra-ui/react';
import * as React from 'react';
import { MdAccountCircle, MdOutlineMarkEmailUnread } from 'react-icons/md';
import { IoSearch } from 'react-icons/io5';
import { FiSettings } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { signOut } from 'next-auth/react';
import Search from '../Searchbar';
import { useRouter } from 'next/router';

export default function Navbar({ usernames }: { usernames: string[] }) {
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
                <Search usernames={usernames} />
                <HStack spacing='4'>
                  <HiOutlineMail
                    onClick={() => router.push('/inbox')}
                    size={25}
                    style={{
                      cursor: 'pointer',
                    }}
                  />
                  <FiSettings
                    size={22}
                    style={{
                      cursor: 'pointer',
                    }}
                  />

                  <Menu>
                    <MenuButton>
                      <MdAccountCircle size={33} />
                    </MenuButton>
                    <MenuList>
                      <MenuGroup title='Profile'>
                        <MenuItem onClick={() => router.push('/user/profile')}>
                          My Account
                        </MenuItem>
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
                              callbackUrl: '/',
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
                      <MenuItem onClick={() => router.push('/user/profile')}>
                        My Account
                      </MenuItem>
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
                            callbackUrl: '/',
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
