import React, { Fragment, ReactElement } from "react";
import Link from "next/link";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { API_ENDPOINT_POST } from "@/constants";
import Head from "next/head";
import { IPost, IPostResponse } from "@/types";
import { Button, Col, List, Row, Typography } from "antd";

const { Paragraph } = Typography;

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`${API_ENDPOINT_POST}`);
  const data: IPostResponse = await res.json();
  return { props: { data } };
};

function Page({
  data: fetchedData,
}: InferGetServerSidePropsType<typeof getServerSideProps>): ReactElement {
  const data: IPost[] = fetchedData.sort((a: IPost, b: IPost) => b.id - a.id);
  return (
    <Fragment>
      <Head>
        <title>Post Page</title>
      </Head>
      <Row justify="end">
        <Col>
          <Button type="primary" href="/posts/new">
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
          <List.Item actions={[]}>
            <List.Item.Meta
              title={<Link href={`/posts/${item.id}`}>{item.title}</Link>}
              description={
                <Paragraph style={{ maxWidth: "90%" }} ellipsis={true}>
                  {item.body}
                </Paragraph>
              }
            />
          </List.Item>
        )}
      />
    </Fragment>
  );
}

export default Page;
