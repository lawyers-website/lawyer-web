import { Box, SimpleGrid } from "@chakra-ui/react";
import Boxes from "./box";

export default function Dashboard() {
  const items = [
    { title: "NEW USERS", value: "2,670", change: "3.78", profit: true },
    { title: "NEW LAWYERS", value: "1,900", change: "2.43", profit: false },
    { title: "TRANSCATIONS", value: "14,640", change: "1.48", profit: false },
    { title: "REVENUE", value: "20,870", change: "5.96", profit: true },
  ];
  return (
    <>
      <Box>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }}>
          {items.map((item) => (
            <Boxes key={item.title} item={item} />
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
}
