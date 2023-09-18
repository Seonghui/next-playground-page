import React, { Fragment, ReactElement } from "react";
import { Alert, Button, Form, Input } from "antd";
import { useRouter } from "next/router";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ILoginVariables } from "@/types/users";
import api from "@/apis";
import { setAccessToken } from "@/utilities/tokenHelper";
import { useUserMe } from "@/hooks/api/useUserMe";

type FieldType = {
  username?: string;
  password?: string;
};

function Page(): ReactElement {
  const router = useRouter();

  const queryClient = useQueryClient();
  {
    /*TODO: 에러 처리*/
  }
  const { refetch } = useUserMe({ enabled: false });

  // TODO: 로딩 처리
  const { mutate, isError, isLoading } = useMutation({
    mutationFn: (user: ILoginVariables) => {
      return api.post(`/api/v1/users/login`, user);
    },
    onSuccess: async ({ data }) => {
      setAccessToken(data.token);
      await refetch();
      await router.push("/");
    },
  });

  const onFinish = async (values: any) => {
    mutate({
      email: values.email,
      password: values.password,
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
          label="이메일"
          name="email"
          initialValue="test10@gmail.com"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="비밀번호"
          name="password"
          initialValue="12345678"
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
      {/*TODO: 에러 처리*/}
      {isError && <Alert message="Error Text" type="error" />}
    </Fragment>
  );
}

export default Page;
