import Pagination from "@/element/Pagination/Pagination";
import {
  Box,
  Container,
  Text,
  Flex,
  Input,
  Button,
  useBreakpoint,
} from "@chakra-ui/react";
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
  const [dataState, setDataState] = useState(false);
  const [realEstateData, setRealEstateData] = useState<RealEstateType[]>([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [totalDatas, setTotalDatas] = useState(0);
  const offSet = (page - 1) * limit;

  const totalPages = Math.ceil(totalDatas / limit);

  const breakpoint = useBreakpoint();
  const inputDate = (e: any) => {
    setDate(e.target.value);
  };
  const searchResult = async () => {
    setPage(1);
    let regex = /^[0-9]*$/;
    if (!regex.test(date)) {
      setError("숫자만 입력해주세요.");
      setDate("");
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
    const resultData = JSON.parse(result?.data)?.response?.body?.items?.item;
    console.log(resultData);
    if (resultData?.length === 0) {
      setDataState(true);
      return false;
    }
    const arr = [];
    setTotalDatas(resultData?.length);
    for (let i = 0; i < resultData?.length; i++) {
      arr.push({
        id: i + 1,
        dong: resultData[i]["법정동"],
        county: resultData[i]["시군구"],
        year: resultData[i]["년"],
        width: resultData[i]["건물면적"],
        amount: resultData[i]["거래금액"],
        constructYear: resultData[i]["건축년도"],
      });
    }
    console.log(arr);
    setRealEstateData(arr);
  };
  useEffect(() => {
    console.log(realEstateData);
  }, [realEstateData]);
  return (
    <Box mb={"50px"} mt={10}>
      <Container maxW={"1000px"}>
        <Flex
          m={"auto"}
          align={"center"}
          w={{ lg: "50%", base: "100%", sm: "100%" }}
        >
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

        <Box mt={5} maxH={"1600px"} minH={"600px"}>
          <Flex
            fontFamily={"Manrope"}
            align={"center"}
            fontWeight={"bold"}
            w={"100%"}
            justify={"center"}
          >
            {CONTENT_HEAD.map((item) => (
              <Text
                textAlign={"center"}
                w={item.id === 0 ? "10%" : "15%"}
                key={item.id}
                fontSize={{ base: "12px", lg: "16px", sm: "12px" }}
              >
                {item.name}
              </Text>
            ))}
          </Flex>
          <Box
            w={"100%"}
            opacity={"50%"}
            border={"0.5px solid gray"}
            m={"auto"}
          />
          <Box w={"100%"} m={"auto"} mt={2}>
            {/* {realEstateData.map((item) => ( */}
            {realEstateData.slice(offSet, offSet + limit).map((item) => (
              <>
                <Flex
                  mt={5}
                  justify={"center"}
                  key={item?.id}
                  textAlign={"center"}
                  fontFamily={"monospace"}
                  fontSize={{ base: "12px", sm: "15px", md: "18px" }}
                  border={"0.5px solid gray"}
                  align={"center"}
                  borderRadius={"15px"}
                >
                  <Text w={"10%"}>{item?.id}</Text>
                  <Text w={"15%"}>{item.county}</Text>
                  <Text w={"15%"}>{item.dong}</Text>
                  <Text w={"15%"}>{item.amount}</Text>
                  <Text w={"15%"}>{item.width}</Text>
                  <Text w={"15%"}>
                    {item.constructYear ? item.constructYear : "N/A"}
                  </Text>
                  <Text w={"15%"}>{item.year}</Text>
                </Flex>
              </>
            ))}
          </Box>

          <Pagination
            totalDatas={totalDatas}
            totalPages={totalPages}
            page={page}
            setPage={setPage}
          />
        </Box>
      </Container>
    </Box>
  );
}
export default Content;
