"use server";

import moment from "moment";
import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import createBlog, { editBlog } from "./lib";

export async function createPost(formData: FormData) {
  const blog = {
    title: formData.get("title"),
    content: formData.get("content"),
    category: formData.get("category"),
    author: formData.get("author"),
    dateCreated: moment().format().slice(0, 10),
  };

  if (
    !blog.title ||
    !blog.category ||
    !blog.content ||
    !blog.author ||
    !blog.dateCreated
  ) {
    throw Error("Missing required fields");
  }

  await createBlog(blog);

  revalidatePath("/");
  redirect("/");
}

export async function deleteBlog(id: string) {
  try {
    const response = await fetch(
      `https://blogs-clone-5eedb-default-rtdb.firebaseio.com/blogs/${id}.json`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw Error("something happened");
    }

    revalidatePath("/", "layout");
  } catch (error) {
    console.log(error);
  }
}

export async function editPost(id: string, formData: FormData) {
  const blog = {
    title: formData.get("title"),
    content: formData.get("content"),
    category: formData.get("category"),
    author: formData.get("author"),
    dateCreated: moment().format().slice(0, 10),
  };

  if (
    !blog.title ||
    !blog.category ||
    !blog.content ||
    !blog.author ||
    !blog.dateCreated
  ) {
    throw Error("Missing required fields");
  }

  await editBlog(id, blog);

  revalidatePath("/");
  redirect("/");
}
