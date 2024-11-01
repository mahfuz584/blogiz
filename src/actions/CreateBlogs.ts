"use server";

import { TCreateMethodResponse, TCreateUrl } from "@/types/createMethod";

type TCreateMethod = {
  url: TCreateUrl["url"];
  payloadData: TCreateMethodResponse;
};
export const createBlog = async ({ url, payloadData }: TCreateMethod) => {
  const res = await fetch(`${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payloadData),
    cache: "no-store",
  });

  const blogInfo = await res.json();
  return blogInfo;
};
