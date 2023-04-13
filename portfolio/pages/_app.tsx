import { TabInterface } from "@/interfaces/TabInterface";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Router } from "next/router";
import { RecoilRoot, useRecoilState } from "recoil";
import { StatusState } from "./../atoms/StatusStateAtom";
import { MantineProvider } from "@mantine/core";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        /** Put your mantine theme override here */
        colorScheme: "dark",
      }}
    >
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </MantineProvider>
  );
}
