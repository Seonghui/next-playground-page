import React, { Fragment, ReactElement } from "react";
import Link from "next/link";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { API_ENDPOINT_POST } from "@/constants";
import Head from "next/head";
import { useRouter } from "next/router";
import { IPostResponse } from "@/types";
import { Button, Col, List, Row, Typography, Space } from "antd";
import { LikeOutlined } from "@ant-design/icons";

const { Paragraph } = Typography;

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`${API_ENDPOINT_POST}`);
  const data: IPostResponse = await res.json();
  return { props: { data } };
};

function Page({
  data: fetchedData,
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

  const data = fetchedData.sort((a, b) => b.id - a.id);
  return (
    <Fragment>
      <Head>
        <title>Post Page</title>
      </Head>
      <Row justify="end">
        <Col>
          <Button type="primary" htmlType="a" href="/posts/new">
            글쓰기
          </Button>
        </Col>
      </Row>

      <List
        pagination={{
          position: "bottom",
          align: "center",
          pageSize: 5,
        }}
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item
            actions={[
              <Link href={`/posts/${item.id}/edit`} key="list-loadmore-edit">
                수정
              </Link>,
              <Button
                type="link"
                style={{ padding: 0 }}
                onClick={() => handleClickDelete(item.id)}
              >
                삭제
              </Button>,
            ]}
          >
            <List.Item.Meta
              title={<Link href={`/posts/${item.id}`}>{item.title}</Link>}
              description={
                <Paragraph style={{ maxWidth: "90%" }} ellipsis={true}>
                  {item.body}
                </Paragraph>
              }
            />
            <Space>
              <LikeOutlined />
              {item.reactions}
            </Space>
          </List.Item>
        )}
      />
    </Fragment>
  );
}

export default Page;
