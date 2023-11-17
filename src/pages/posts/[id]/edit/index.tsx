import React, { ReactElement } from "react";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { API_ENDPOINT_POST } from "@/constants";
import { IPost, IPostForm } from "@/types";
import { useRouter } from "next/router";
import { Button, Form, Input } from "antd";
const { TextArea } = Input;

export const getStaticPaths = (async () => {
  const res = await fetch(`${API_ENDPOINT_POST}`);
  const posts = await res.json();
  const paths = posts.map((post: IPost) => ({
    params: { id: post.id.toString() },
  }));
  return {
    paths: paths,
    fallback: true,
  };
}) satisfies GetStaticPaths;
export const getStaticProps = (async (context) => {
  const { params } = context;
  const res = await fetch(`${API_ENDPOINT_POST}/${params?.id}`);
  const post = await res.json();
  return { props: { post } };
}) satisfies GetStaticProps<{
  post: IPost;
}>;

function Page({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>): ReactElement {
  const router = useRouter();
  const { id } = router.query;

  const onFinish = async (data: IPostForm) => {
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
  };

  return (
    <Form name="post-new" onFinish={onFinish} layout="vertical">
      <Form.Item
        label="제목"
        name="title"
        rules={[{ required: true, message: "제목을 입력해 주세요." }]}
        initialValue={post.title}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="내용"
        name="body"
        rules={[{ required: true, message: "내용을 입력해 주세요." }]}
        initialValue={post.body}
      >
        <TextArea rows={4} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          등록
        </Button>
      </Form.Item>
    </Form>
  );
}

export default Page;
