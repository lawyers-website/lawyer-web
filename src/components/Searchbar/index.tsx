import {
  Box,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  List,
  ListIcon,
  ListItem,
  useBreakpointValue,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { useRouter } from "next/router";

const Search = ({ usernames }: { usernames: string[] }) => {
  const router = useRouter();
  const [query, setQuery] = useState("Search");
  const size = useBreakpointValue({ base: "sm", md: "md" });
  const [showBoxShadow, setBoxShadow] = useState(false);
  const boxShadowValue = {
    base: "none",
    sm: useColorModeValue("md", "dark-lg"),
  };
  const listHoverbg = useColorModeValue("#CBD5E0", "#2D3748");
  const searchItems = [
    "Civil Lawyer",
    "Criminal Lawyer",
    "Divorce",
    "Immigration Lawyer",
    "Tax Lawyer",
    "Medical Lawyer",
    "Legal Advices",
  ];

  const filteredPeople =
    query === ""
      ? []
      : [...usernames, ...searchItems].filter(
          (person, index) =>
            person
              .toLowerCase()
              .replace(/\s+/g, "")
              .includes(query.toLowerCase().replace(/\s+/g, "")) && index < 7
        );

  return (
    <Box
      boxShadow={showBoxShadow ? boxShadowValue : undefined}
      borderTopRadius={10}
      zIndex={10}
    >
      <FormControl onSubmit={() => router.push(`/search/${query}`)}>
        <InputGroup size={size}>
          <Input
            width="40rem"
            placeholder="Search your Lawyer"
            variant="flushed"
            onFocus={() => setBoxShadow(true)}
            onBlur={() => {
              setTimeout(() => {
                setBoxShadow(false);
              }, 160);
            }}
            autoComplete="off"
            onChange={(e) => setQuery(e.target.value)}
          />
          <InputLeftElement width="3rem">
            <SearchIcon w={4} h={4} />
          </InputLeftElement>
        </InputGroup>
        {/* <Button type="submit">search</Button> */}
      </FormControl>
      {showBoxShadow && (
        <Box position="relative">
          <List
            spacing={3}
            bg={{ base: "transparent", sm: "bg-surface" }}
            w="100%"
            position="absolute"
            boxShadow={showBoxShadow ? boxShadowValue : undefined}
            borderBottomRadius={10}
            pt={3}
            pb={3}
          >
            {filteredPeople.length > 0 ? (
              filteredPeople.map((value, index) => (
                <ListItem
                  onClick={() => router.push(`/search/${value}`)}
                  _hover={{
                    background: listHoverbg,
                    cursor: "pointer",
                  }}
                  pr={3}
                  pl={3}
                  pb={2}
                  pt={2}
                  key={index}
                >
                  <ListIcon as={SearchIcon} color="green.500" />
                  {value}
                </ListItem>
              ))
            ) : (
              <ListItem
                onClick={() => router.push(`/search/${query}`)}
                _hover={{
                  background: listHoverbg,
                  cursor: "pointer",
                }}
                pr={3}
                pl={3}
                pb={2}
                pt={2}
              >
                <ListIcon as={SearchIcon} color="green.500" />
                {query ? query : "Search"}
              </ListItem>
            )}
          </List>
        </Box>
      )}
    </Box>
  );
};

export default Search;
