import React from 'react';
import type { AppProps } from 'next/app';

import '../css/style.scss';

const MyApp = ({ Component, pageProps }: AppProps): React.ReactElement => (
  <Component {...pageProps} />
);

export default MyApp;
