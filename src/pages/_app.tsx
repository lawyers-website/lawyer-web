import { withTRPC } from "@trpc/next";
import type { AppRouter } from "../server/router";
import type { AppType } from "next/dist/shared/lib/utils";
import superjson from "superjson";
import { SessionProvider } from "next-auth/react";
import NProgress from "nprogress";
import { Box, ChakraProvider, extendTheme, Spinner } from "@chakra-ui/react";
import { theme } from "../../pro-theme";
import Router, { useRouter } from "next/router";
import { useState } from "react";
import Head from "next/head";
import Navbar from "@/components/NavBar";
import LawyerNav from "@/components/Lawyer/navbar";
import LangContext from "@/langContext";

const MyApp: AppType = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const [loading, setLoading] = useState(false);
  Router.events.on("routeChangeStart", () => {
    setLoading(true);
    NProgress.start();
  });
  Router.events.on("routeChangeComplete", () => {
    setLoading(false);
    NProgress.done();
  });
  NProgress.configure({ showSpinner: false });

  const { pathname } = useRouter();

  return (
    <SessionProvider session={session}>
      <ChakraProvider theme={extendTheme(theme)}>
        <LangContext>
          <Head>
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
              integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
              crossOrigin="anonymous"
              referrerPolicy="no-referrer"
            />
          </Head>
          {loading ? (
            <Box
              width="100%"
              minHeight="100vh"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
              />
            </Box>
          ) : (
            <>
              {(pathname.includes("/inbox") || pathname === "/orders") && (
                <LawyerNav />
              )}
              {!(
                pathname === "/signup" ||
                pathname === "/signin" ||
                pathname === "/inbox" ||
                pathname === "/orders" ||
                pathname.includes("/inbox/") ||
                pathname === "/admin"
              ) && <Navbar />}
              <Component {...pageProps} />
            </>
          )}
        </LangContext>
      </ChakraProvider>
    </SessionProvider>
  );
};

const getBaseUrl = () => {
  if (typeof window !== "undefined") {
    return "";
  }
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url

  return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
};

export default withTRPC<AppRouter>({
  config({ ctx }) {
    /**
     * If you want to use SSR, you need to use the server's full URL
     * @link https://trpc.io/docs/ssr
     */
    const url = `${getBaseUrl()}/api/trpc`;

    return {
      url,
      transformer: superjson,
      /**
       * @link https://react-query.tanstack.com/reference/QueryClient
       */
      // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
    };
  },
  /**
   * @link https://trpc.io/docs/ssr
   */
  ssr: false,
})(MyApp);
