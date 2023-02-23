import { Box, Flex, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <Box bottom={0} pos={"absolute"} bgColor={"gray.100"} w={"100%"}>
      <Text fontSize={"15px"} mt={2} pl={2} mb={"100px"}>
        {"REAL_ESTATE"}
      </Text>
    </Box>
  );
}

export default Footer;
