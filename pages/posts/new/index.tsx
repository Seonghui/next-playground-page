import React, { FormEvent, ReactElement } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { IPostForm } from "@/pages/types";
import { API_ENDPOINT_POST } from "@/constants";
import { useRouter } from "next/router";

interface PageProps {}

function Page(): ReactElement {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IPostForm>();

  const onSubmit = handleSubmit(async (data) => {
    await fetch(`${API_ENDPOINT_POST}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: data.title,
        body: data.body,
        userId: data.userId,
        /* other post data */
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        router.push("/posts");
      });
  });

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>title: </label>
        <input type="text" {...register("title")} />
        <label htmlFor="body">body:</label>
        <textarea {...register("body")} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Page;
