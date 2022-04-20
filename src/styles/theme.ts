import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      '900': '#47585B',
      '800': '#999999',
      '100': '#DADADA',
      '50': '#F5F8FA',
    },
    orange: {
      '300': '#FFBA08',
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.900',
      }
    }
  }
})