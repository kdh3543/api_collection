import Layout from '@/element/Layout'
import { Box, Button, Container, Flex, Input, Text } from '@chakra-ui/react'
import Content from '../RealEstate/_fragments/Content'
import Footer from '../../element/Footer'
import Header from '@/element/Header'

function Home() {
  return (
    <>
      {/* <Box pos={"relative"} w={"100%"} h={"100%"} minH={"950px"}>
        <Head />
        <Content />
        <Footer />
      </Box> */}
      <Layout
        header={<Header />}
        content={<Box> homepage</Box>}
        footer={<Footer />}
      />
    </>
  )
}

export default Home
