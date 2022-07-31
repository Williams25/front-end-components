import type { AppProps } from "next/app";
import { SideBar } from "src/components";
import { items } from "src/global/ItemsSideBar";
import { GlobalStyle } from "src/styles/global";
import theme from "src/styles/theme";
import { ThemeProvider } from "styled-components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <SideBar data={items}>
          <Component {...pageProps} />
        </SideBar>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
