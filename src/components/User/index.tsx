import Navbar from "./navbar";
import { Opening, Header, Jumbotron, Footer } from "../index";
import { Box } from "@chakra-ui/react";
import * as React from "react";

export default function User() {
  return (
    <Box>
      <Navbar />
      <Opening />
      <Header />
      <Jumbotron />
      <Footer />
    </Box>
  );
}
