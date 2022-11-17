import Navbar from "../NavBar/navbar";
import { Opening, Header, Jumbotron, Footer } from "../index";
import { Box } from "@chakra-ui/react";
import * as React from "react";

export default function User() {
  return (
    <Box>
      <Opening />
      <Header />
      <Jumbotron />
      <Footer />
    </Box>
  );
}
