import Head from "next/head";

interface IPostHead {
  title: string;
}

function PostHead({ title }: IPostHead) {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
}

export default PostHead;
