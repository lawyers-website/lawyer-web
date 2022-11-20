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
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { trpc } from "@/utils/trpc";
import {useContext} from 'react'
import { language } from "@/langContext";

const Search = () => {
  const [usernames, setUsernames] = useState<string[]>([]);
  const lawyersMutation = trpc.useMutation("util.getLawyers");
  const router = useRouter();
  const [query, setQuery] = useState("");
  const size = useBreakpointValue({ base: "md", md: "md" }, { ssr: false });
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

  const da={
    "en":"Search your Lawyer",
    "it":"Cerca il tuo avvocato",
    "fre":"Fouillez votre avocat",
    "ger":"Suche deinen Anwalt",
  }
  async function getLawyersName(i: string) {
    const username = (await lawyersMutation.mutateAsync(i)).usernames;
    setUsernames(username);
  }
  useEffect(() => {
    getLawyersName(query);
  }, [query]);
  const selL=useContext(language)
  const sl=selL?.lang! as keyof typeof da;
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
      width="100%"
    >
      <FormControl onSubmit={() => router.push(`/search/${query}`)}>
        <InputGroup size={size} w="100%">
          <Input
            placeholder={da[sl]}
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
      {query !== "" && showBoxShadow && (
        <Box position="relative">
          <List
            spacing={3}
            bg="bg-surface"
            w="100%"
            position="absolute"
            boxShadow={showBoxShadow ? boxShadowValue : undefined}
            borderBottomRadius={10}
            pt={3}
            pb={3}
          >
            {filteredPeople.map((value, index) => (
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
            ))}
          </List>
        </Box>
      )}
    </Box>
  );
};

export default Search;
