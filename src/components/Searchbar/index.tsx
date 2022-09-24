import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  List,
  ListIcon,
  ListItem,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { useRouter } from 'next/router';

const Search = () => {
  const router = useRouter();
  const size = useBreakpointValue({ base: 'sm', md: 'md' });
  const [showBoxShadow, setBoxShadow] = useState(false);
  const boxShadowValue = {
    base: 'none',
    sm: useColorModeValue('md', 'dark-lg'),
  };
  const listBackground = useColorModeValue('#FFFFFF', 'gray.800');
  const listItemBackground = useColorModeValue(
    'rgba(0, 0, 0, 0.08)',
    '#2D3748'
  );
  const listHoverbg = useColorModeValue('#CBD5E0', '#2D3748');
  const searchItems = [
    'Civil Law',
    'Criminal Law',
    'Divorce',
    'Immigration Law',
    'Tax Law',
    'Medical Law',
  ];
  return (
    <Box
      boxShadow={showBoxShadow ? boxShadowValue : undefined}
      borderTopRadius={10}
      zIndex={10}
    >
      <InputGroup size={size}>
        <Input
          width='40rem'
          placeholder='Search your Lawyer'
          variant='flushed'
          onFocus={() => setBoxShadow(true)}
          onBlur={() => {
            setTimeout(() => {
              setBoxShadow(false);
            }, 160);
          }}
        />
        <InputLeftElement width='3rem'>
          <SearchIcon w={4} h={4} />
        </InputLeftElement>
      </InputGroup>
      {showBoxShadow && (
        <Box position='relative'>
          <List
            spacing={3}
            bg={{ base: 'transparent', sm: 'bg-surface' }}
            w='100%'
            position='absolute'
            boxShadow={showBoxShadow ? boxShadowValue : undefined}
            borderBottomRadius={10}
            pt={3}
            pb={3}
          >
            {searchItems.map((value, index) => (
              <ListItem
                onClick={() => router.push('/search/results')}
                _hover={{
                  background: listHoverbg,
                  cursor: 'pointer',
                }}
                pr={3}
                pl={3}
                pb={2}
                pt={2}
                key={index}
              >
                <ListIcon as={SearchIcon} color='green.500' />
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
