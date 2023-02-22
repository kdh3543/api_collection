import { Box, Button, Container, Flex, Input, Text } from "@chakra-ui/react";
import Content from "./_fragments/Content";
import Footer from "./_fragments/Footer";
import Head from "./_fragments/Head";

function Home() {
  return (
    <>
      <Box pos={"relative"} w={"100%"} h={"100%"} minH={"950px"}>
        <Head />
        <Content />
        <Footer />
      </Box>
    </>
  );
}

export default Home;
