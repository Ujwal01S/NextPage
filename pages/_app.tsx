import NavBar from "@/components/nav/navbar";
import QueryProvider from "@/lib/reactQueryProvider";

import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryProvider>
      <NavBar>
        <Component {...pageProps} />
      </NavBar>
    </QueryProvider>
  );
}
