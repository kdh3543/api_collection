import { IMAGES } from "@/generated/path/images";
import { Button, Flex, Input, Text, Image, Box } from "@chakra-ui/react";

function Head() {
  return (
    <>
      <Flex
        bgColor={"green.400"}
        w={"100%"}
        h={"60px"}
        pos={"fixed"}
        top={0}
        align={"center"}
      >
        <Flex justify={"center"}>
          <Image w={"80px"} src={IMAGES.ICON.REAL_ESTATE} alt={"real_estate"} />
        </Flex>
      </Flex>
    </>
  );
}

export default Head;
