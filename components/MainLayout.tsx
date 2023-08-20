import React, { ReactElement } from "react";
import { Layout, theme } from "antd";
import MainMenu from "@/components/MainMenu";
import MainFooter from "@/components/MainFooter";

const { Header, Content, Sider } = Layout;

function MainLayout({ children }): ReactElement {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

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
        <Header style={{ padding: 0, background: colorBgContainer }} />
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
