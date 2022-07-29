import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SideBar } from "src/components";
import { items } from "src/global/ItemsSideBar";
import { createTheme } from "@material-ui/core/styles";
import { GlobalStyle } from "src/styles/global";
import theme from "src/styles/theme";
import { ThemeProvider } from "styled-components";
export const primary = createTheme({});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SideBar data={items}>
        <Component {...pageProps} />
      </SideBar>
    </ThemeProvider>
  );
}

export default MyApp;
