import React, { ReactElement, useEffect } from "react";
import { Button, Col, Layout, Menu, Row, Space, theme } from "antd";
import MainMenu from "@/components/MainMenu";
import MainFooter from "@/components/MainFooter";
import Link from "next/link";
import { useUserMe } from "@/hooks/api/useUserMe";
import { useRouter } from "next/router";
import { useQueryClient } from "@tanstack/react-query";
import { removeAccessToken } from "@/utils/tokenHelper";

const { Header, Content, Sider } = Layout;

function MainLayout({ children }): ReactElement {
  const queryClient = useQueryClient();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  // const { data, refetch } = useUserMe({ enabled: false });
  const router = useRouter();

  // const handleClickLogout = async () => {
  //   removeAccessToken();
  //   await refetch();
  //   await router.push("/");
  // };

  // useEffect(() => {
  //   refetch();
  // }, [refetch]);

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
      hasSider
    >
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className="demo-logo-vertical" />
        <MainMenu />
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Row justify="end" style={{ marginRight: "16px" }}>
            <Col>
              <Space>
                <span>서브메뉴1</span>
                <span>서브메뉴2</span>
                {/*{data ? (*/}
                {/*  <Button type="text" onClick={handleClickLogout}>*/}
                {/*    로그아웃*/}
                {/*  </Button>*/}
                {/*) : (*/}
                {/*  <Link href="/login">로그인</Link>*/}
                {/*)}*/}
              </Space>
            </Col>
          </Row>
        </Header>
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <div
            style={{
              padding: 24,
              background: colorBgContainer,
            }}
          >
            {children}
          </div>
        </Content>
        <MainFooter />
      </Layout>
    </Layout>
  );
}

export default MainLayout;
