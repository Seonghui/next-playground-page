import React, { ReactElement } from "react";
import { Menu } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/router";

function MainMenu(): ReactElement {
  const route = useRouter();
  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={["1"]}
      items={[
        {
          key: "1",
          icon: <UserOutlined />,
          label: "Home",
          onClick: () => {
            route.push("/");
          },
        },
        {
          key: "2",
          icon: <VideoCameraOutlined />,
          label: "About",
          onClick: () => {
            route.push("/about");
          },
        },
        {
          key: "3",
          icon: <UploadOutlined />,
          label: "Posts",
          onClick: () => {
            route.push("/posts");
          },
        },
        {
          key: "4",
          icon: <UploadOutlined />,
          label: "Todos",
          onClick: () => {
            route.push("/todos");
          },
        },
        {
          key: "5",
          icon: <UploadOutlined />,
          label: "Modal",
          // onClick: () => {
          //   return route.push("/modals");
          // },
          children: [
            {
              key: "sub1",
              label: "popstate",
              onClick: () => {
                return route.push("/modals/popstate");
              },
            },
            {
              key: "sub2",
              label: "query",
              onClick: () => {
                return route.push("/modals/query");
              },
            },
          ],
        },
      ]}
    />
  );
}

export default MainMenu;
