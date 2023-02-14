import { Box, Button, Container, Flex, Input, Text } from '@chakra-ui/react'
import Head from './_fragments/Head'

function Home() {
  return (
    <>
      <Head />
      <Box mb={'10px'} mt={'80px'}>
        <Container maxW={'700px'}>
          <Box
            maxH={'1600px'}
            minH={'600px'}
            borderRadius={'10px'}
            border={'1px solid gray'}
          >
            부동산 컨테이너
          </Box>
        </Container>
      </Box>
      <Box bgColor={'gray.100'} pos={'relative'} w={'100%'} h={'100px'}>
        footer
      </Box>
    </>
  )
}

export default Home
