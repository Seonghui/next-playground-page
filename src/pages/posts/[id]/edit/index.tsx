import React, { ReactElement } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { API_ENDPOINT_POST } from "@/constants";
import { IPost, IPostForm } from "@/types";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const res = await fetch(`${API_ENDPOINT_POST}`);
  const result = await res.json();

  const paths = result.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<{ post: IPost }> = async ({
  params,
}) => {
  const res = await fetch(`${API_ENDPOINT_POST}/${params.id}`);
  const post = await res.json();
  return {
    props: {
      post,
    },
  };
};

function Page({ post }): ReactElement {
  const router = useRouter();
  const { id } = router.query;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IPostForm>();

  const onSubmit = handleSubmit(async (data) => {
    await fetch(`${API_ENDPOINT_POST}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: data.title,
        body: data.body,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        router.push("/posts");
      });
  });

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>title: </label>
        <input defaultValue={post.title} type="text" {...register("title")} />
        <label htmlFor="body">body:</label>
        <textarea defaultValue={post.body} {...register("body")} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Page;
