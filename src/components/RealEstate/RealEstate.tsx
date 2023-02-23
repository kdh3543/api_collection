import { Box } from '@chakra-ui/react'
import Content from './_fragments/Content'
import Footer from '@/element/Footer'
import Head from '../../element/Header/Header'
import Layout from '@/element/Layout'
import Header from '@/element/Header'

function RealEstate() {
  return (
    <Layout header={<Header />} content={<Content />} footer={<Footer />} />
  )
}

export default RealEstate
