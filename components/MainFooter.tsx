import React, { ReactElement } from "react";
import { Layout } from "antd";
const { Footer } = Layout;

function MainFooter(): ReactElement {
  return (
    <Footer style={{ textAlign: "center" }}>
      Ant Design ©2023 Created by Ant UED
    </Footer>
  );
}

export default MainFooter;
