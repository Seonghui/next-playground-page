"use client";
import React, { ReactElement } from "react";
import { useTodos } from "@/hooks/api/useTodos";

interface PageProps {}

function Page(): ReactElement {
  const { data, isError, isLoading } = useTodos();

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
