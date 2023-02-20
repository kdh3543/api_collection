import { Box, Container, Text, Flex, Input, Button } from "@chakra-ui/react";
import axios from "axios";
import { use, useEffect, useState } from "react";
import { CONTENT_HEAD } from "./info.data";

interface RealEstateType {
  id?: number;
  county?: string | null;
  dong?: string | null;
  amount?: string | null;
  width?: number | null;
  constructYear?: number | null;
  year?: number | null;
}

function Content() {
  const [date, setDate] = useState("");
  const [error, setError] = useState("");
  const [realEstateData, setRealEstateData] = useState<RealEstateType[]>([]);

  const inputDate = (e: any) => {
    setDate(e.target.value);
  };
  const searchResult = async () => {
    console.log(date.length);
    let regex = /[0-9]/g;
    if (!regex.test(date)) {
      setError("숫자만 입력해주세요.");
      setDate("");
      console.log(error);
      return false;
    } else if (date.length !== 6) {
      setDate("");
      setError("6글자만 입력할 수 있습니다.");
      return false;
    }
    setError("");
    setDate("");
    const result = await axios({
      method: "GET",
      url: `https://mim2p1cj40.execute-api.ap-northeast-1.amazonaws.com/realEstate/real_estate?date=${date}`,
    });
    const resultData = JSON.parse(result.data)?.response?.body?.items?.item;
    const arr = [];
    console.log(resultData);
    for (let i = 0; i < resultData.length; i++) {
      arr.push({
        id: i,
        dong: resultData[i]["법정동"],
        county: resultData[i]["시군구"],
        year: resultData[i]["년"],
        width: resultData[i]["건물면적"],
        amount: resultData[i]["거래금액"],
        constructYear: resultData[i]["건축년도"],
      });

      // console.log(resultData[i]);
    }
    console.log(arr);
    setRealEstateData(arr);
  };
  useEffect(() => {
    console.log(realEstateData);
  }, [realEstateData]);
  return (
    <Box mb={"10px"} mt={"80px"}>
      <Container maxW={"1000px"}>
        <Flex m={"auto"} align={"center"} w={"50%"}>
          <Text w={"50%"} mx={2} fontFamily={"Manrope"} fontSize={"15px"}>
            {"부동산 매매 신고 자료"}
          </Text>
          <Box mx={2} w={"100%"}>
            <Input
              size={"sm"}
              borderRadius={"5px"}
              type={"text"}
              placeholder={"년도와 월을 입력하세요. ex)201111"}
              bgColor={"white"}
              onChange={(e) => inputDate(e)}
              value={date}
              maxLength={6}
            />
            {error ? (
              <Text ml={3} mt={1} color={"red"} fontSize={"12px"}>
                {error}
              </Text>
            ) : (
              ""
            )}
          </Box>
          <Button
            fontSize={"12px"}
            fontFamily={"Manrope"}
            fontWeight={"bold"}
            size={"sm"}
            color={"white"}
            colorScheme={"blue"}
            mx={2}
            onClick={searchResult}
          >
            {"검색"}
          </Button>
        </Flex>

        <Box
          mt={5}
          maxH={"1600px"}
          minH={"600px"}
          // borderRadius={"10px"}
          // border={"1px solid gray"}
        >
          <Flex
            fontFamily={"Manrope"}
            align={"center"}
            fontWeight={"bold"}
            w={"100%"}
            justify={"center"}
          >
            {CONTENT_HEAD.map((item) => (
              <Text textAlign={"center"} w={"15%"} key={item.id}>
                {item.name}
              </Text>
            ))}
          </Flex>
          <Box
            w={"90%"}
            opacity={"50%"}
            border={"0.5px solid gray"}
            m={"auto"}
          />
          <Box border={"1px solid black"} w={"90%"} m={"auto"}>
            {realEstateData.map((item) => (
              <>
                1<Flex key={item?.id}>{item?.amount}</Flex>
              </>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
export default Content;
