"use client";
import React, { ReactElement, useEffect, useState } from "react";
import { API_ENDPOINT_TODO } from "@/constants";
import { ITodo } from "@/types";

interface PageProps {}

function Page(): ReactElement {
  const [data, setData] = useState<ITodo[]>(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_ENDPOINT_TODO}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No todos data</p>;

  return (
    <div>
      <ul>
        {data.map((item) => {
          return <li key={item.id}>{item.todo}</li>;
        })}
      </ul>
    </div>
  );
}

export default Page;
