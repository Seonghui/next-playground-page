import React, { Fragment, ReactElement } from "react";
import { Button, Form, Input } from "antd";
import { useRouter } from "next/router";

type FieldType = {
  username?: string;
  password?: string;
};

function Page(): ReactElement {
  const router = useRouter();
  const onFinish = async (values: any) => {
    await fetch(`/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: values.username,
        password: values.password,
      }),
    })
      // .then((res) => res.json())
      .then((res) => {
        console.log(res);
        router.push("/");
      });
  };

  return (
    <Fragment>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="아이디"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="비밀번호"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            확인
          </Button>
          <Button type="link" htmlType="button">
            회원이 아니신가요?
          </Button>
        </Form.Item>
      </Form>
    </Fragment>
  );
}

export default Page;
