import Navbar from "./navbar";
import { Opening, Header, Jumbotron, Footer } from "../index";
import { Box } from "@chakra-ui/react";
import * as React from "react";

export default function User({ usernames }: { usernames: string[] }) {
  return (
    <Box>
      <Navbar usernames={usernames} />
      <Opening />
      <Header />
      <Jumbotron />
      <Footer />
    </Box>
  );
}
