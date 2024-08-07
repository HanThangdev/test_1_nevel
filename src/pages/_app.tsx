import '../styles/global.css';
import 'swiper/css';
import 'swiper/css/pagination';

import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default MyApp;
