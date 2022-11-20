import { Box, SimpleGrid, Flex, Text, useBreakpointValue } from '@chakra-ui/react';
import { BsPencilSquare, BsThreeDots } from 'react-icons/bs';
import { MdNoteAlt } from 'react-icons/md';
import { GiChalkOutlineMurder } from 'react-icons/gi';
import { IoPeopleSharp, IoHomeSharp } from 'react-icons/io5';
import { TbReceiptTax } from 'react-icons/tb';
import { GrUserWorker } from 'react-icons/gr';
import { RiGovernmentFill } from 'react-icons/ri';
import {useContext} from 'react'
import { language } from "@/langContext";

interface props {
  setPosition: React.Dispatch<React.SetStateAction<number>>;
}

interface Props {
  item: { title: string };
  setPosition: React.Dispatch<React.SetStateAction<number>>;
}

const da={
  "en":"How can we help you?",
  "it":"Come possiamo aiutarti?",
  "fre":"Comment pouvons-nous vous aider?",
  "ger":"Wie können wir Ihnen helfen?",
}
function Extrabox({ item, setPosition }: Props) {

  return (
    <Box
      key={item.title}
      onClick={() => setPosition(2)}
      py={{ base: '0', sm: '5' }}
      px={{ base: '3', sm: '7' }}
      bg={useBreakpointValue({ base: 'transparent', sm: 'bg-surface' })}
      _hover={{
        boxShadow: 'dark-lg',
        cursor: 'pointer',
        zIndex: '2',
      }}
      borderRadius={{ base: '2xl', sm: '2xl' }}
    >
      <Flex align='center' direction='column'>
        {
          {
            CONTRACTS: <BsPencilSquare size={40} />,
            'CRIMINAL LAW': <GiChalkOutlineMurder size={40} />,
            'COMPANY LAW': <MdNoteAlt size={40} />,
            'FAMILY/DIVORCE': <IoPeopleSharp size={40} />,
            INSURANCE: <MdNoteAlt size={40} />,
            'FINANCE/TAXES': <TbReceiptTax size={40} />,
            'LABOR LAW': <GrUserWorker size={40} />,
            'RENT/REALESTATE': <IoHomeSharp size={40} />,
            'GOVERNMENT ADMINISTRATION': <RiGovernmentFill size={40} />,
            OTHERS: <BsThreeDots size={40} />,
          }[item.title]
        }
        <Text fontWeight='bold' margin='0' textAlign='center' fontSize='15'>
          {item.title}
        </Text>
      </Flex>
    </Box>
  );
}

export default function SecondStep({ setPosition }: props) {
  const items = [
    { title: 'CONTRACTS' },
    { title: 'COMPANY LAW' },
    { title: 'CRIMINAL LAW' },
    { title: 'FAMILY/DIVORCE' },
    { title: 'INSURANCE' },
    { title: 'FINANCE/TAXES' },
    { title: 'LABOR LAW' },
    { title: 'RENT/REALESTATE' },
    { title: 'GOVERNMENT ADMINISTRATION' },
    { title: 'OTHERS' },
  ];
  const selL=useContext(language)
  const sl=selL?.lang! as keyof typeof da;
  return (
    <>
      <Text margin='5' fontSize='2xl' textAlign='center'>
        {da[sl]}
      </Text>
      <SimpleGrid spacing='auto' columns={{ sm: 1, md: 4 }}>
        {items.map((item, index) => (
          <Extrabox item={item} key={item.title} setPosition={setPosition} />
        ))}
      </SimpleGrid>
    </>
  );
}
