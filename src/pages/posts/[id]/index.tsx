import React, { ReactElement } from "react";
import { IPost } from "@/types";
import { API_ENDPOINT_POST } from "@/constants";
import PostHead from "@/components/PostHead";
import { Button, Col, Divider, Row, Space, Typography } from "antd";
import { GetServerSideProps, InferGetStaticPropsType } from "next";
import { getStaticProps } from "@/pages/posts/[id]/edit";
import Link from "next/link";
import { useRouter } from "next/router";
import { useModal } from "@ebay/nice-modal-react";
import Confirm from "@/components/organisms/Confirm";
import SanitizeHtml from "@/components/commons/SanitizeHtml";

const { Title, Text } = Typography;

export const getServerSideProps = (async (context) => {
  const { params } = context;
  const res = await fetch(`${API_ENDPOINT_POST}/${params?.id}`);
  const post = await res.json();
  return { props: { post } };
}) satisfies GetServerSideProps<{
  post: IPost;
}>;

function Page({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>): ReactElement {
  const confirmModal = useModal(Confirm);
  const router = useRouter();

  const handleClickDelete = async () => {
    await fetch(`${API_ENDPOINT_POST}/${post.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then(() => {
        router.back();
      });
  };

  const handlerUseConfirm = async () => {
    const result = await confirmModal.show({
      title: "알람",
      message: "정말 삭제하시겠습니까?",
      onConfirm: () => {
        console.log("confirmed!!");
      },
    });

    if (result) {
      // TODO notification 달기
      await handleClickDelete();
    }
  };

  return (
    <>
      <PostHead title={post.title} />
      <div>
        <Title level={2}>{post.title}</Title>
        <Row justify="end">
          <Col>
            <Space split={<span>&#183;</span>}>
              <Space>
                <Link href={`/posts/${post.id}/edit`} key="list-loadmore-edit">
                  수정
                </Link>
              </Space>
              <Button
                key={post.id}
                type="link"
                style={{ padding: 0 }}
                // onClick={() => handleClickDelete(post.id)}
                onClick={() => handlerUseConfirm()}
              >
                삭제
              </Button>
              <Text>{post.userName ?? "noname"}</Text>
            </Space>
          </Col>
        </Row>
        <Divider />
        <SanitizeHtml dirty={post.body} />
        {/* <Text>{post.body}</Text> */}
      </div>
      {/*    TODO 삭제 모달 구현*/}
    </>
  );
}

export default Page;
