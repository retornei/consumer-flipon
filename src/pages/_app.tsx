import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import AuthProvider from "../context/AuthContext";
import { Toaster } from "react-hot-toast";

import { store } from "../store";

import GlobalStyles from "../components/styles/GlobalStyles";
import light from "../components/styles/themes/light";
import {PageProvider} from "../context/PageContext";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={light}>
      <Provider store={store}>
        <AuthProvider>
          <GlobalStyles />
            <PageProvider>
             <Component {...pageProps} />
            </PageProvider>
          <Toaster />
        </AuthProvider>
      </Provider>
    </ThemeProvider>
  );
};

export default MyApp;
