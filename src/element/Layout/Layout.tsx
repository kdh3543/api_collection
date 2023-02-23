import { Box } from '@chakra-ui/react'

interface LayoutType {
  header?: JSX.Element
  footer?: JSX.Element
  content?: JSX.Element
}

function Layout({ header, footer, content }: LayoutType) {
  return (
    <Box pos={'relative'} w={'100%'} h={'100%'} minH={'950px'}>
      {header}
      {content}
      {footer}
    </Box>
  )
}

export default Layout
