import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SideBar } from "src/components";
import { items } from "src/global/ItemsSideBar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SideBar data={items}>
      <Component {...pageProps} />
    </SideBar>
  );
}

export default MyApp;
