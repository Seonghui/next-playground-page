import React, { ReactElement } from "react";
import { API_ENDPOINT_POST } from "@/constants";
import { useRouter } from "next/router";
import { IPostForm } from "@/types";
import { Button, Form, Input } from "antd";
const { TextArea } = Input;

function Page(): ReactElement {
  const router = useRouter();
  const onFinish = async (data: IPostForm) => {
    await fetch(`${API_ENDPOINT_POST}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: data.title,
        body: data.body,
      }),
    })
      .then((res) => res.json())
      .then(() => {
        router.push("/posts");
      });
  };

  return (
    <Form name="post-new" onFinish={onFinish} layout="vertical">
      <Form.Item
        label="제목"
        name="title"
        rules={[{ required: true, message: "제목을 입력해 주세요." }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="내용"
        name="body"
        rules={[{ required: true, message: "내용을 입력해 주세요." }]}
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
