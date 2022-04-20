import { AppProps } from 'next/app';
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";

import '../styles/swiperTheme.scss';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme} >
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp
