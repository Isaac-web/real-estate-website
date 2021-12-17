import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Box } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <Box>
      <Header />
      <Box minHeight={"75vh"}>{children}</Box>
      <Footer />
    </Box>
  );
};

export default Layout;
