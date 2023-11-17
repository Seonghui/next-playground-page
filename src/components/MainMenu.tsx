import React, { ReactElement } from "react";
import { Menu } from "antd";
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
          label: "Home",
          onClick: () => {
            route.push("/");
          },
        },
        {
          key: "2",
          label: "sandbox",
          onClick: () => {
            route.push("/sandbox");
          },
        },
        {
          key: "3",
          label: "Posts",
          onClick: () => {
            route.push("/posts");
          },
        },
        {
          key: "4",
          label: "Todos",
          onClick: () => {
            route.push("/todos");
          },
        },
        {
          key: "5",
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
