import React, { ReactElement } from "react";
import { IPost } from "@/pages/types";
import { API_ENDPOINT_POST } from "@/constants";
import PostHead from "@/components/PostHead";

export const getServerSideProps: ({
  params,
}: {
  params: any;
}) => Promise<{ notFound: boolean } | { props: { post: IPost } }> = async ({
  params,
}) => {
  const res = await fetch(`${API_ENDPOINT_POST}/${params.id}`);

  const post = await res.json();
  console.log(res.status);

  if (res.status === 404) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
};

function Page({ post }): ReactElement {
  return (
    <>
      <PostHead title={post.title} />
      <div>
        <div>{post.title}</div>
        <div>{post.body}</div>
      </div>
    </>
  );
}

export default Page;
