import { SearchIcon } from "@chakra-ui/icons";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  HStack,
  Box,
  useColorModeValue,
  Heading,
  Text,
  FormControl,
  InputGroup,
  Input,
  InputLeftElement,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function Tables() {
  const router = useRouter();

  const getbgColor = (label: string) => {
    switch (label) {
      case "completed":
        return "#68D391";
        break;
      case "pending":
        return "#F6AD55";
        break;
      case "rejected":
        return "#FC8181";
        break;

      default:
        break;
    }
  };

  const Users = [
    { lawyer: "Name1", price: "20$", date: "07/09/2002", status: "completed" },
    { lawyer: "Name2", price: "40$", date: "04/03/2022", status: "pending" },
    { lawyer: "Name1", price: "20$", date: "17/09/2021", status: "rejected" },
    { lawyer: "Name1", price: "20$", date: "23/09/2002", status: "pending" },
    { lawyer: "Name1", price: "20$", date: "07/09/2023", status: "completed" },
    { lawyer: "Name1", price: "20$", date: "07/09/2002", status: "completed" },
    { lawyer: "Name1", price: "20$", date: "07/09/2002", status: "completed" },
    { lawyer: "Name1", price: "20$", date: "07/09/2002", status: "completed" },
    { lawyer: "Name1", price: "20$", date: "07/09/2002", status: "completed" },
  ];
  return (
    <Box
      width={{ base: "100%", lg: "90%" }}
      boxSizing="border-box"
      margin={{ sm: "5", lg: "auto" }}
      py={{ base: "0", sm: "2" }}
      px={{ base: "2", sm: "10" }}
      bg="bg-surface"
      boxShadow={{ base: "none", sm: useColorModeValue("md", "dark-lg") }}
      borderRadius={{ base: "xl", sm: "2xl" }}
    >
      <Heading fontSize="1rem" mb="1rem">
        Order Details
      </Heading>
      <FormControl mb={2}>
        <InputGroup w="50%">
          <Input
            placeholder="Search "
            // variant="flushed"

            autoComplete="off"
          />
          <InputLeftElement width="3rem">
            <SearchIcon w={4} h={4} />
          </InputLeftElement>
        </InputGroup>
        {/* <Button type="submit">search</Button> */}
      </FormControl>

      <TableContainer>
        <Table size="md">
          <Thead>
            <Tr>
              {["S.No", "Lawyer", "Price", "Date", "Status"].map((label) => (
                <Th key={label}>{label}</Th>
              ))}
              <Th> </Th>
            </Tr>
          </Thead>
          <Tbody>
            {Users.map((user, index) => (
              <Tr cursor="pointer" key={index}>
                <Td>{index + 1}</Td>
                <Td>{user.lawyer}</Td>
                <Td>{user.price}</Td>
                <Td>{user.date}</Td>
                <Td>
                  <Text
                    w="fit-content"
                    py={1}
                    px={2}
                    borderRadius="10px"
                    bgColor={getbgColor(user.status)}
                  >
                    {user.status}
                  </Text>
                </Td>
                <Td>
                  <HStack>
                    <RiDeleteBin6Line />
                  </HStack>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
