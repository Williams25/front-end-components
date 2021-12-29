import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SideBar } from "src/components";
import { items } from "src/global/ItemsSideBar";
import { MuiThemeProvider } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";

export const primary = createTheme({});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MuiThemeProvider theme={primary}>
      <SideBar data={items}>
        <Component {...pageProps} />
      </SideBar>
    </MuiThemeProvider>
  );
}

export default MyApp;
