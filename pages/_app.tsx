import type { AppProps } from "next/app";
import MainLayout from "@/components/MainLayout";
import "antd/dist/reset.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}
