import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, HStack } from '@chakra-ui/react';
import { MdEdit } from 'react-icons/md';
import { RiDeleteBin6Line } from 'react-icons/ri';

interface props {
  Users: {
    Username: string;
    email: string;
    number: number;
  }[];
}

export default function Tables({ Users }: props) {
  return (
    <TableContainer>
      <Table size='md'>
        <Thead>
          <Tr>
            <Th>Username</Th>
            <Th>Email</Th>
            <Th isNumeric>Contact</Th>
            <Th> </Th>
          </Tr>
        </Thead>
        <Tbody>
          {Users.map((user) => (
            <Tr key={user.email}>
              <Td>{user.Username}</Td>
              <Td>{user.email}</Td>
              <Td isNumeric>{user.number}</Td>
              <Td>
                <HStack>
                  <RiDeleteBin6Line size='1.3rem' />
                  <MdEdit size='1.3rem' />
                </HStack>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
