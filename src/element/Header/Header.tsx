import { IMAGES } from "@/generated/path/images";
import { Button, Flex, Input, Text, Image, Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { HEADER } from "./_fragments/header.data";

function Head() {
  const router = useRouter();

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
          <Image
            w={"50px"}
            // w={'13%'}
            ml={2}
            src={IMAGES.ICON.API_LOGO}
            alt={"real_estate"}
          />
        </Flex>
        <Flex ml={"auto"} mr={5}>
          {HEADER.map((item) => (
            <Text
              key={item.id}
              ml={2}
              cursor={"pointer"}
              onClick={() => router.push(item.link)}
              fontWeight={"bold"}
            >
              {item.name}
            </Text>
          ))}
        </Flex>
      </Flex>
    </>
  );
}

export default Head;
