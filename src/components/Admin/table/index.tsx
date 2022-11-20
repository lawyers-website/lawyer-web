import { trpc } from "@/utils/trpc";
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
} from "@chakra-ui/react";
import { User } from "@prisma/client";
import { useRouter } from "next/router";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function Tables({
  Users,
  heading,
  labels,
}: {
  Users: User[];
  heading: string;
  labels: string[];
}) {
  const adminMutation = trpc.useMutation(["admin.delete"]);
  const router = useRouter();
  const handleClick = async (id: string) => {
    await adminMutation.mutateAsync(id);
    router.push("/admin");
  };
  return (
    <Box
      width={{ base: "100%", lg: "90%" }}
      boxSizing="border-box"
      margin={{ sm: "5", lg: "auto" }}
      py={{ base: "0", sm: "8" }}
      px={{ base: "2", sm: "10" }}
      bg="bg-surface"
      boxShadow={{ base: "none", sm: useColorModeValue("md", "dark-lg") }}
      borderRadius={{ base: "xl", sm: "2xl" }}
    >
      <Heading fontSize="3rem" mb="2rem">
        {heading}
      </Heading>

      <TableContainer>
        <Table size="md">
          <Thead>
            <Tr>
              {labels.map((label) => (
                <Th key={label}>{label}</Th>
              ))}
              <Th> </Th>
            </Tr>
          </Thead>
          <Tbody>
            {Users.map((user) => (
              <Tr key={user.email}>
                <Td>{user.id}</Td>
                <Td>{user.name}</Td>
                <Td>{user.email}</Td>
                <Td>{user.role}</Td>
                <Td>
                  <HStack>
                    <RiDeleteBin6Line
                      size="1.3rem"
                      cursor="pointer"
                      onClick={() => handleClick(user.id)}
                    />
                    <MdEdit size="1.3rem" />
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
