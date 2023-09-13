import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { Button, Card, Space } from "antd";
import SwrProvider from "@/pages/SwrProvider";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isClient, setIsClient] = useState("");

  useEffect(() => {
    console.log(window);
  }, []);
  const side = typeof window === "undefined" ? "server" : "client";

  console.log(side);
  return (
    <main>
      <Button type="primary">Button</Button>
      <Button>Button</Button>
      <Space direction="vertical" size={16}>
        <Card
          title="Default size card"
          extra={<a href="#">More</a>}
          style={{ width: 300 }}
        >
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
        <Card
          size="small"
          title="Small size card"
          extra={<a href="#">More</a>}
          style={{ width: 300 }}
        >
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </Space>
    </main>
  );
}
