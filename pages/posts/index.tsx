import React, { Fragment, ReactElement } from "react";
import Link from "next/link";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { API_ENDPOINT_POST } from "@/constants";
import Head from "next/head";
import { useRouter } from "next/router";
import { IPostResponse } from "@/types";

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`${API_ENDPOINT_POST}`);
  const data: IPostResponse = await res.json();
  return { props: { data } };
};

function Page({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>): ReactElement {
  const router = useRouter();
  const handleClickDelete = async (id) => {
    await fetch(`${API_ENDPOINT_POST}/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        router.reload();
      });
  };
  return (
    <Fragment>
      <Head>
        <title>Post Page</title>
      </Head>
      <Link href="/posts/new">글 작성하기</Link>
      <ul>
        {data.map((post) => {
          return (
            <li key={post.id}>
              <Link href={`/posts/${post.id}`}>{post.title}</Link>
              <Link href={`/posts/${post.id}/edit`}>수정</Link>
              <button onClick={() => handleClickDelete(post.id)}>삭제</button>
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
}

export default Page;
