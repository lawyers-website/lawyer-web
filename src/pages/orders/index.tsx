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
  FormControl,
  InputGroup,
  Input,
  InputLeftElement,
} from "@chakra-ui/react";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";
import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { prisma } from "@/server/db/client";

type Order = {
  lawyer: string;
  price: number;
  createdAt: string;
};

type KeysFunc = <T, K extends keyof T>(object: T) => K[];

const keys = (object: any) => {
  return Object.keys(object);
};

function filterData(data: Order[], search: string) {
  const query = search.toLowerCase().trim();
  return data.filter((item) =>
    (keys as unknown as KeysFunc)(item).some((key) => {
      if (key in item) {
        const value = item[key];
        if (typeof value === "string") {
          return value.toLowerCase().includes(query);
        } else {
          value.toString().toLowerCase().includes(query);
        }
      }
    })
  );
}

function sortData(
  data: Order[],
  payload: {
    sortBy: keyof Order | null;
    reversed: boolean;
    search: string;
  }
) {
  const { sortBy } = payload;

  if (!sortBy) {
    return filterData(data, payload.search);
  }

  return filterData(
    [...data].sort((a, b) => {
      const valuea = a[sortBy];
      const valueb = b[sortBy];
      if (payload.reversed) {
        if (typeof valuea === "string" && typeof valueb === "string") {
          return valueb.localeCompare(valuea);
        } else if (typeof valuea === "number" && typeof valueb === "number") {
          return valueb.toString().localeCompare(valuea.toString());
        }
      }
      if (typeof valuea === "string" && typeof valueb === "string") {
        return valuea.localeCompare(valueb);
      } else {
        return valuea.toString().localeCompare(valueb.toString());
      }
    }),
    payload.search
  );
}

export default function Tables({ Orders }: { Orders: Order[] }) {
  const [search, setSearch] = useState("");
  const [sortedData, setSortedData] = useState(Orders);

  const [sortBy, setSortBy] = useState<keyof Order | null>(null);
  const [reverseSortDirection, setReverseSortDirection] = useState(false);
  console.log(Orders);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setSearch(value);

    setSortedData(
      sortData(Orders, {
        sortBy,
        reversed: reverseSortDirection,
        search: value,
      })
    );
  };

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
            autoComplete="off"
            onChange={handleSearchChange}
            value={search}
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
              {["S.No", "Lawyer", "Price", "Date"].map((label) => (
                <Th key={label}>{label}</Th>
              ))}
              <Th> </Th>
            </Tr>
          </Thead>
          <Tbody>
            {sortedData?.map((Order, index) => (
              <Tr cursor="pointer" key={index}>
                <Td>{index + 1}</Td>
                <Td>{Order.lawyer}</Td>
                <Td>{Order.price}</Td>
                <Td>{Order.createdAt}</Td>
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

export const getServerSideProps: GetServerSideProps<
  { Orders: Order[] | undefined },
  { id: string }
> = async (ctx: GetServerSidePropsContext) => {
  const session = await getSession(ctx);
  const isOrder = !!session?.Order;

  if (isOrder) {
    return {
      redirect: {
        destination: "/Order/Order-in",
        permanent: false,
      },
    };
  }

  const Data = await prisma.order.findMany({
    include: {
      lawyer: {
        select: {
          fullName: true,
        },
      },
    },
  });

  return {
    props: {
      Orders: Data.map((value) => {
        return {
          ...value,
          lawyer: value.lawyer.fullName,
          createdAt: value.createdAt.toDateString(),
        };
      }),
    },
  };
};
