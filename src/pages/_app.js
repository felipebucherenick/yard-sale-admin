import appContext from '@context/appContext';
import useAuth from '@hooks/useAuth';

import '@styles/globals.scss';

function MyApp({ Component, pageProps }) {
  const auth = useAuth();
  return (
    <appContext.Provider value={auth}>
      <Component {...pageProps} />
    </appContext.Provider>
  );
}

export default MyApp;
