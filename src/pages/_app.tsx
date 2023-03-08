import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "@/components/layout/Layout/Layout";
import Head from "next/head";
import { Manrope } from "next/font/google";
import classNames from "classnames";

const fontManrope = Manrope({
    subsets: ["cyrillic", "latin", "cyrillic-ext", "latin-ext"],
    variable: "--font-manrope",
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <div
                className={classNames(
                    fontManrope.className,
                    fontManrope.variable,
                )}
            >
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </div>
        </>
    );
}
