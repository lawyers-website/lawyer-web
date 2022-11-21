import {
  Button,
  ButtonGroup,
  Container,
  Divider,
  Heading,
  IconButton,
  Input,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useContext } from "react";
import { language } from "@/langContext";
export default function Footer() {
  const da = {
    en: {
      areLaw: "Are You a Lawyer?",
      btn: "Fill your details",
      FBL: "Find the best Lawyers for you",
      support: {
        title: "Support",
        btn1: "Help Center",
        btn2: "Safety Center",
        btn3: "Community guidelines",
      },
      legal: {
        title: "Legal",
        btn1: "Privacy",
        btn2: "Terms",
        btn3: "License",
      },
      SUD: " Stay up to date",
      copyright: "Lawyers, Inc. All rights reserved.",
    },
    it: {
      areLaw: "Sei un avvocato?",
      btn: "Compila i tuoi dati",
      FBL: "Trova i migliori avvocati per te",
      support: {
        title: "Supporto",
        btn1: "Centro assistenza",
        btn2: "Centro sicurezza",
        btn3: "Linee guida comunitarie",
      },
      legal: {
        title: "Legale",
        btn1: "Riservatezza",
        btn2: "Termini",
        btn3: "Licenza",
      },
      SUD: "Rimani aggiornato",
      copyright: "Avvocati, Inc. Tutti i diritti riservati.",
    },
    ger: {
      areLaw: "Bist du ein Anwalt?",
      btn: "Geben Sie Ihre Daten ein",
      FBL: "Finden Sie die besten Anwälte für Sie",
      support: {
        title: "Die Unterstützung",
        btn1: "Hilfezentrum",
        btn2: "Sicherheitszentrum",
        btn3: "Community-Richtlinien",
      },
      legal: {
        title: "Gesetzlich",
        btn1: "Vertraulichkeit",
        btn2: "Bedingungen",
        btn3: "Lizenz",
      },
      SUD: "Auf dem Laufenden bleiben",
      copyright: "Rechtsanwälte, Inc. Alle Rechte vorbehalten.",
    },
    fre: {
      areLaw: "êtes vous avocat",
      btn: "Entrez vos données",
      FBL: "Trouvez les meilleurs avocats pour vous",
      support: {
        title: "Soutien",
        btn1: "centre d'aide",
        btn2: "centre de sécurité",
        btn3: "Règles de la communauté",
      },
      legal: {
        title: "juridique",
        btn1: "confidentialité",
        btn2: "les conditions",
        btn3: "Licence",
      },
      SUD: "Pour rester à jour",
      copyright: "Lawyers, Inc. Tous droits réservés.",
    },
  };

  const router = useRouter();
  const { data: session } = useSession();
  const isUser = !!session?.user;
  const selL = useContext(language);
  const sl = selL?.lang as keyof typeof da;
  return (
    <Container as="footer" role="contentinfo">
      <Stack
        spacing="8"
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        py={{ base: "12", md: "16" }}
      >
        <Stack spacing={{ base: "6", md: "8" }} align="start">
          <Heading
            marginLeft="4"
            size={useBreakpointValue({ base: "xs", md: "sm" })}
          >
            Lawyers
          </Heading>
          {isUser ? (
            <Text color="muted">
              {da[sl]["areLaw"]}
              <Button
                variant="link"
                onClick={() => router.push("/user/user-in/details")}
              >
                {da[sl]["btn"]}
              </Button>
            </Text>
          ) : (
            <Text color="muted">{da[sl]["FBL"]}</Text>
          )}
        </Stack>
        <Stack
          direction={{ base: "column-reverse", md: "column", lg: "row" }}
          spacing={{ base: "12", md: "8" }}
        >
          <Stack direction="row" spacing="10">
            <Stack spacing="4" minW="36" flex="1">
              <Text fontSize="sm" fontWeight="semibold" color="subtle">
                {da[sl]["support"]["title"]}
              </Text>
              <Stack spacing="3" shouldWrapChildren>
                <Button variant="link"> {da[sl]["support"]["btn1"]}</Button>
                <Button variant="link"> {da[sl]["support"]["btn2"]}</Button>
                <Button variant="link"> {da[sl]["support"]["btn3"]}</Button>
              </Stack>
            </Stack>
            <Stack spacing="4" minW="36" flex="1">
              <Text fontSize="sm" fontWeight="semibold" color="subtle">
                {da[sl]["legal"]["title"]}
              </Text>
              <Stack spacing="3" shouldWrapChildren>
                <Button variant="link"> {da[sl]["legal"]["btn1"]}</Button>
                <Button variant="link"> {da[sl]["legal"]["btn2"]}</Button>
                <Button variant="link"> {da[sl]["legal"]["btn3"]}</Button>
              </Stack>
            </Stack>
          </Stack>
          <Stack spacing="4">
            <Text fontSize="sm" fontWeight="semibold" color="subtle">
              {da[sl]["SUD"]}
            </Text>
            <Stack
              spacing="4"
              direction={{ base: "column", sm: "row" }}
              maxW={{ lg: "360px" }}
            >
              <Input placeholder="Enter your email" type="email" required />
              <Button variant="primary" type="submit" flexShrink={0}>
                Subscribe
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Divider />
      <Stack
        pt="8"
        pb="12"
        justify="space-between"
        direction={{ base: "column-reverse", md: "row" }}
        align="center"
      >
        <Text fontSize="sm" color="subtle">
          &copy; {new Date().getFullYear()} Lawyers, Inc. All rights reserved.
        </Text>
        <ButtonGroup variant="ghost">
          <IconButton
            as="a"
            href="#"
            aria-label="LinkedIn"
            icon={<FaLinkedin fontSize="1.25rem" />}
          />
          <IconButton
            as="a"
            href="#"
            aria-label="GitHub"
            icon={<FaGithub fontSize="1.25rem" />}
          />
          <IconButton
            as="a"
            href="#"
            aria-label="Twitter"
            icon={<FaTwitter fontSize="1.25rem" />}
          />
        </ButtonGroup>
      </Stack>
    </Container>
  );
}
