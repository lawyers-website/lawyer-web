import {
  Box,
  Grid,
  useBreakpointValue,
  useColorModeValue,
  Image,
  Heading,
  Text,
  useMediaQuery,
  Divider,
} from "@chakra-ui/react";
import React from "react";
import { useContext } from "react";
import { language } from "@/langContext";
import { title } from "process";

const da = {
  en: {
    "basic-laws": "Basic Laws",
    civil: {
      title: "Civil Law",
      para: "Civil law is the part of a country's set of laws which is concerned with the private affairs of citizens",
    },
    criminal_law: {
      title: "Criminal Law",
      para: "The body of law that defines criminal offenses, regulates the apprehension, charging, and trial of suspected persons, and fixes penalties.",
    },

    divorce: {
      title: "Divorce",
      para: "A divorce is a legal action leading to the break-up of a civil wedding pronounced by a court at the request of one or both spouses",
    },
    immigration_law: {
      title: "Immigration Law",
      para: "Immigration law refers to the national statutes, regulations, and legal precedents governing immigration into and deportation from a country.",
    },
    tax_law: {
      title: "Tax Law",
      para: "tax law, body of rules under which a public authority has a claim on taxpayers, requiring them to transfer to the authority part of their income or property",
    },
    medical_law: {
      title: "Medical Law",
      para: "Medical law is the branch of law which concerns the prerogatives and responsibilities of medical professionals and the rights of the patient",
    },
  },
  it: {
    "basic-laws": "Leggi fondamentali",
    civil: {
      title: "Diritto civile",
      para: "Il diritto civile è la parte dell'insieme di leggi di un paese che si occupa degli affari privati ​​dei cittadini",
    },
    criminal_law: {
      title: "Diritto Penale",
      para: "Il corpus legislativo che definisce i reati penali, regola l'arresto, l'accusa e il processo delle persone sospettate e fissa le sanzioni.",
    },

    divorce: {
      title: "Divorzio",
      para: "Il divorzio è un'azione legale che porta allo scioglimento di un matrimonio civile pronunciato da un tribunale su richiesta di uno o entrambi i coniugi",
    },
    immigration_law: {
      title: "Legge sull'immigrazione",
      para: "La legge sull'immigrazione si riferisce agli statuti nazionali, ai regolamenti e ai precedenti legali che disciplinano l'immigrazione e l'espulsione da un paese.",
    },
    tax_law: {
      title: "Diritto tributario",
      para: "diritto tributario, insieme di norme in base alle quali un'autorità pubblica ha un diritto nei confronti dei contribuenti, imponendo loro di trasferire all'autorità parte del loro reddito o patrimonio",
    },
    medical_law: {
      title: "Diritto medico",
      para: "Il diritto medico è il ramo del diritto che riguarda le prerogative e le responsabilità dei professionisti medici e i diritti del paziente",
    },
  },
  ger: {
    "basic-laws": "Grundgesetze",
    civil: {
      title: "Diritto civile",
      para: "Das Zivilrecht ist der Teil des Rechts eines Landes, der sich mit den privaten Angelegenheiten der Bürger befasst",
    },
    criminal_law: {
      title: "Strafrecht",
      para: "Das Gesetz, das Straftaten definiert, Festnahme, Verfolgung und Gerichtsverfahren von Verdächtigen regelt und Strafen festlegt.",
    },

    divorce: {
      title: "Scheidung",
      para: "Scheidung ist eine gerichtliche Handlung, die auf Antrag eines oder beider Ehegatten zur Auflösung einer standesamtlichen Ehe führt",
    },
    immigration_law: {
      title: "Einwanderungsgesetz",
      para: "Das Einwanderungsrecht bezieht sich auf nationale Gesetze, Verordnungen und Präzedenzfälle, die die Einwanderung in ein Land und die Ausweisung aus einem Land regeln.",
    },
    tax_law: {
      title: "Steuerrecht",
      para: "Steuerrecht, ein Regelwerk, nach dem eine öffentliche Stelle gegenüber Steuerzahlern ein Recht hat, einen Teil ihres Einkommens oder Vermögens an die Behörde abzuführen",
    },
    medical_law: {
      title: "Medizinrecht",
      para: "Das Medizinrecht ist das Rechtsgebiet, das die Vorrechte und Pflichten der Mediziner und die Rechte des Patienten betrifft",
    },
  },
  fre: {
    "basic-laws": "Lois fondamentales",
    civil: {
      title: "Diritto civile",
      para: "Le droit civil est la partie de la loi d'un pays qui traite des affaires privées des citoyens",
    },
    criminal_law: {
      title: "Loi criminelle",
      para: "La loi qui définit les infractions pénales, réglemente l'arrestation, la poursuite et le procès des suspects et fixe les peines.",
    },

    divorce: {
      title: "divorcer",
      para: "Le divorce est un acte judiciaire entraînant la dissolution d'un mariage civil à la demande de l'un ou des deux époux",
    },
    immigration_law: {
      title: "la loi sur l'immigration",
      para: "Le droit de l'immigration fait référence aux lois, réglementations et précédents nationaux qui régissent l'immigration et l'expulsion d'un pays.",
    },
    tax_law: {
      title: "droit fiscal",
      para: "Droit fiscal , ensemble de règles selon lesquelles un organisme public a le droit vis-à-vis des contribuables de verser une partie de leurs revenus ou de leurs actifs à l'administration",
    },
    medical_law: {
      title: "droit médical",
      para: "Le droit médical est le domaine du droit qui traite des privilèges et obligations des médecins et des droits des patients",
    },
  },
};

export default function Jumbotron() {
  const [isDesktop] = useMediaQuery("(min-width:1000px");
  const selL = useContext(language);
  const sl = selL?.lang as keyof typeof da;

  return (
    <>
      <Heading
        fontWeight="bold"
        marginBottom="8"
        textAlign="center"
        size={useBreakpointValue({ base: "xs", md: "sm" })}
        mt="6"
      >
        {da[sl]["basic-laws"]}
      </Heading>
      <Grid
        templateColumns={{ sm: "repeat(1, 1fr)", lg: "repeat(3, 1fr)" }}
        gap={20}
      >
        <Box
          margin={{ sm: "auto", lg: "5" }}
          py={{ base: "0", sm: "8" }}
          px={{ base: "4", sm: "10" }}
          bg={useBreakpointValue({ base: "transparent", sm: "bg-surface" })}
          boxShadow={{ base: "none", sm: useColorModeValue("md", "md-dark") }}
          borderRadius={{ base: "none", sm: "xl" }}
        >
          <Image
            margin="auto"
            boxSize="70px"
            rounded="md"
            alt="feature image"
            src="/civil.png"
            objectFit="cover"
          />
          <Text textAlign="center" fontSize="25" fontWeight="semibold">
            
            {da[sl]["civil"]["title"]}
          </Text>
          <Text>{da[sl]["civil"]["para"]}</Text>
        </Box>
        <Box
          margin="5"
          py={{ base: "0", sm: "8" }}
          px={{ base: "4", sm: "10" }}
          bg={useBreakpointValue({ base: "transparent", sm: "bg-surface" })}
          boxShadow={{ base: "none", sm: useColorModeValue("md", "md-dark") }}
          borderRadius={{ base: "none", sm: "xl" }}
        >
          <Image
            margin="auto"
            boxSize="70px"
            rounded="md"
            alt="feature image"
            src="/criminal.png"
            objectFit="cover"
          />
          <Text textAlign="center" fontSize="25" fontWeight="semibold">
            {da[sl]["criminal_law"]["title"]}
          </Text>
          <Text>{da[sl]["criminal_law"]["para"]}</Text>
        </Box>
        <Box
          margin="5"
          py={{ base: "0", sm: "8" }}
          px={{ base: "4", sm: "10" }}
          bg={useBreakpointValue({ base: "transparent", sm: "bg-surface" })}
          boxShadow={{ base: "none", sm: useColorModeValue("md", "md-dark") }}
          borderRadius={{ base: "none", sm: "xl" }}
        >
          <Image
            margin="auto"
            boxSize="70px"
            rounded="md"
            alt="feature image"
            src="/divorce.png"
            objectFit="cover"
          />
          <Text textAlign="center" fontSize="25" fontWeight="semibold">
            {da[sl]["divorce"]["title"]}
          </Text>
          <Text>{da[sl]["divorce"]["para"]}</Text>
        </Box>
        <Box
          margin="5"
          py={{ base: "0", sm: "8" }}
          px={{ base: "4", sm: "10" }}
          bg={useBreakpointValue({ base: "transparent", sm: "bg-surface" })}
          boxShadow={{ base: "none", sm: useColorModeValue("md", "md-dark") }}
          borderRadius={{ base: "none", sm: "xl" }}
        >
          <Image
            margin="auto"
            boxSize="70px"
            rounded="md"
            alt="feature image"
            src="/immigration.png"
            objectFit="cover"
          />
          <Text textAlign="center" fontSize="25" fontWeight="semibold">
            {da[sl]["immigration_law"]["title"]}
          </Text>
          <Text>{da[sl]["immigration_law"]["para"]}</Text>
        </Box>
        <Box
          margin="5"
          py={{ base: "0", sm: "8" }}
          px={{ base: "4", sm: "10" }}
          bg={useBreakpointValue({ base: "transparent", sm: "bg-surface" })}
          boxShadow={{ base: "none", sm: useColorModeValue("md", "md-dark") }}
          borderRadius={{ base: "none", sm: "xl" }}
        >
          <Image
            margin="auto"
            boxSize="70px"
            rounded="md"
            alt="feature image"
            src="/tax.png"
            objectFit="cover"
          />
          <Text textAlign="center" fontSize="25" fontWeight="semibold">
            {da[sl]["tax_law"]["title"]}
          </Text>
          <Text>{da[sl]["tax_law"]["para"]}</Text>
        </Box>
        <Box
          margin="5"
          py={{ base: "0", sm: "8" }}
          px={{ base: "4", sm: "10" }}
          bg={useBreakpointValue({ base: "transparent", sm: "bg-surface" })}
          boxShadow={{ base: "none", sm: useColorModeValue("md", "md-dark") }}
          borderRadius={{ base: "none", sm: "xl" }}
        >
          <Image
            margin="auto"
            boxSize="70px"
            rounded="md"
            alt="feature image"
            src="/medical.png"
            objectFit="cover"
          />
          <Text textAlign="center" fontSize="25" fontWeight="semibold">
            {da[sl]["medical_law"]["title"]}
          </Text>
          <Text>{da[sl]["medical_law"]["para"]}</Text>
        </Box>
      </Grid>
      <Divider />
    </>
  );
}
