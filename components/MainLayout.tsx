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
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <MainMenu />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
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
