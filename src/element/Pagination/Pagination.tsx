import { Button, Flex } from "@chakra-ui/react";

function Pagination({ totalPages, page, setPage }: any) {
  return (
    <Flex mt={10} w={"100%"} justify={"center"} align={"center"}>
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
          fontSize={"16px"}
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
        isDisabled={page === totalPages}
      >
        &gt;
      </Button>
    </Flex>
  );
}

export default Pagination;
