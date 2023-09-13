import React, { ReactElement } from "react";
import { IPost } from "@/types";
import { API_ENDPOINT_POST } from "@/constants";
import PostHead from "@/components/PostHead";
import { Col, Divider, Row, Space, Typography } from "antd";
import { LikeOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

export const getServerSideProps: ({
  params,
}: {
  params: any;
}) => Promise<{ notFound: boolean } | { props: { post: IPost } }> = async ({
  params,
}) => {
  const res = await fetch(`${API_ENDPOINT_POST}/${params.id}`);

  const post = await res.json();

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
        <Title level={2}>{post.title}</Title>
        <Row justify="end">
          <Col>
            <Space split={<span>&#183;</span>}>
              <Space>
                <LikeOutlined />
                {post.reactions}
              </Space>
              <Text>{post.userName}</Text>
            </Space>
          </Col>
        </Row>
        <Divider />
        <Text>{post.body}</Text>
      </div>
    </>
  );
}

export default Page;
