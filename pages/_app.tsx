import type { AppProps } from "next/app";
import MainLayout from "@/components/MainLayout";
import "antd/dist/reset.css";

export default function App({ Component, pageProps }: AppProps) {
  if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
    import("../mocks");
  }
  return (
    <>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}
