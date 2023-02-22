import { Button, Flex } from "@chakra-ui/react";

function Pagination({ totalDatas, totalPages, page, setPage }: any) {
  console.log("tpage: ", totalPages, page, totalDatas);
  return (
    <Flex mb={10} mt={10} w={"100%"} justify={"center"} align={"center"}>
      <Button
        fontWeight={"extrabold"}
        colorScheme={"linkedin"}
        size={"sm"}
        mx={2}
        onClick={() => setPage(page - 1)}
        isDisabled={page === 1}
      >
        &lt;
      </Button>
      {Array.from({ length: totalPages }, (_, i) => (
        <Button
          key={i + 1}
          mx={1}
          fontWeight={"extrabold"}
          fontFamily={"Manrope"}
          fontSize={page === i + 1 ? "20px" : "15px"}
          bgColor={"transparent"}
          borderRadius={"50%"}
          size={"sm"}
          _hover={{ backgroundColor: "gray.400", color: "white" }}
          _active={{ backgroundColor: "none" }}
          onClick={() => setPage(i + 1)}
        >
          {i + 1}
        </Button>
      ))}
      <Button
        fontWeight={"extrabold"}
        colorScheme={"linkedin"}
        size={"sm"}
        mx={2}
        onClick={() => setPage(page + 1)}
        isDisabled={page === totalPages || totalDatas === 0 || !totalDatas}
      >
        &gt;
      </Button>
    </Flex>
  );
}

export default Pagination;
