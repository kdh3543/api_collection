import { Box, Button, Container, Flex, Input, Text } from "@chakra-ui/react";
import Content from "./_fragments/Content";
import Footer from "./_fragments/Footer";
import Head from "./_fragments/Head";

function Home() {
  return (
    <>
      <Box w={"100%"} h={"100%"} minH={"800px"}>
        <Head />
        <Content />
        <Footer />
      </Box>
    </>
  );
}

export default Home;
