import { Button, Flex, Input, Text } from '@chakra-ui/react'

function Head() {
  return (
    <>
      <Flex
        bgColor={'gray.400'}
        w={'100%'}
        h={'60px'}
        pos={'fixed'}
        top={0}
        align={'center'}
      >
        <Text mx={2}>부동산 이미지</Text>
        <Text mx={2} fontFamily={'Manrope'} fontSize={'13px'}>
          부동산 가격 지수
        </Text>
        <Flex>
          <Input
            size={'sm'}
            borderRadius={'5px'}
            mx={2}
            type={'text'}
            placeholder={'년도'}
            bgColor={'white'}
          />
          <Button
            fontSize={'12px'}
            fontFamily={'Manrope'}
            fontWeight={'bold'}
            size={'sm'}
            color={'white'}
            colorScheme={'blue'}
            mx={2}
          >
            검색
          </Button>
        </Flex>
      </Flex>
    </>
  )
}

export default Head
