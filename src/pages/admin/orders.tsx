import Navbar from "@/components/Admin/navbar";
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
import { Order } from "@prisma/client";
import { useRouter } from "next/router";
import { RiDeleteBin6Line } from "react-icons/ri";
import { prisma } from "src/server/db/client";
import { useState } from "react";

export default function Tables({ orders }: { orders: Order[] }) {
  const router = useRouter();
  const [categories, setCategories] = useState("");

  return (
    <>
      <Navbar categories={categories} setCategories={setCategories} />
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
          Orders
        </Heading>

        <TableContainer>
          <Table size="md">
            <Thead>
              <Tr>
                {["User", "Lawyer", "Price", "CreatedAt", "Status"].map(
                  (label) => (
                    <Th key={label}>{label}</Th>
                  )
                )}
                <Th> </Th>
              </Tr>
            </Thead>
            <Tbody>
              {orders.map((order) => (
                <Tr key={order.clientId}>
                  <Td>{order.lawyerId}</Td>
                  <Td>{order.price}</Td>
                  <Td>{order.createdAt.toString()}</Td>
                  <Td>{order.orderStatus}</Td>
                  <Td>
                    <HStack>
                      <RiDeleteBin6Line size="1.3rem" cursor="pointer" />
                    </HStack>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}

export const getServerSideProps = async () => {
  const orders = await prisma.order.findMany();
  return {
    props: {
      orders,
    },
  };
};
