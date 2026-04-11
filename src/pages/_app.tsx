import type { AppProps } from "next/app";
import { Toaster } from "@/components/ui/sonner";
import React from "react";
import "../styles/global.scss";
import Head from "next/head";
import Layout from "@/components/layout";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      <Head>
        <title> J Giridhar Constructions</title>
        <meta property="title" content={"J Giridhar Constructions"} />
        <meta property="twitter:title" content={"J Giridhar Constructions"} />
        <meta property="facebook:title" content={"J Giridhar Constructions"} />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,maximum-scale=5,user-scalable=1"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Toaster
        theme="system"
        richColors
        closeButton
        position="bottom-right"
        toastOptions={{
          classNames: {
            toast:
              "bg-white dark:bg-neutral-900 border border-border text-foreground shadow-lg rounded-lg",
            title: "font-semibold",
            description: "text-muted-foreground",
          },
        }}
      />
    </>
  )
}

export default MyApp;
