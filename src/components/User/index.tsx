import Navbar from "./navbar";
import { Opening, Header, Jumbotron } from "../index";
import Footer from "./footer";
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
