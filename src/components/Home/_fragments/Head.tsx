import { IMAGES } from "@/generated/path/images";
import { Button, Flex, Input, Text, Image, Box } from "@chakra-ui/react";

function Head() {
  return (
    <>
      <Flex
        bgColor={"gray.400"}
        w={"100%"}
        h={"60px"}
        top={0}
        align={"center"}
        zIndex={3}
      >
        <Flex justify={"center"}>
          <Image w={"80px"} src={IMAGES.ICON.REAL_ESTATE} alt={"real_estate"} />
        </Flex>
        <Flex ml={"auto"} mr={5}>
          <Text fontWeight={"bold"}>{"매매 신고"}</Text>
        </Flex>
      </Flex>
    </>
  );
}

export default Head;
