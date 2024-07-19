import { redirect } from "next/navigation";
import { Blog, createBlogType } from "./types";
import { revalidatePath } from "next/cache";

export async function getAllBlogs() {
  let blogs = [];
  try {
    const res = await fetch(
      "https://blogs-clone-5eedb-default-rtdb.firebaseio.com/blogs.json"
    );
    const data = await res.json();

    if (!res.ok) {
      throw Error("An error occured");
    }
    for (const key in data) {
      const element = data[key];
      blogs.push({
        id: key,
        ...element,
      });
    }

    return blogs;
  } catch (error) {
    console.log(error);
  }
}

export async function getSingleBlog(id: string) {
  try {
    const response = await fetch(
      `https://blogs-clone-5eedb-default-rtdb.firebaseio.com/blogs/${id}.json`
    );
    const data = await response.json();

    if (!response.ok) {
      throw Error("An error occured");
    }
    console.log("data", data);

    return data;
  } catch (error) {
    console.log(error);
  }
}

export default async function createBlog(blog: createBlogType) {
  const response = await fetch(
    "https://blogs-clone-5eedb-default-rtdb.firebaseio.com/blogs.json",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog),
    }
  );

  if (!response.ok) {
    throw new Error("An error occured");
  }
}

export async function editBlog(id: string, blog: createBlogType) {
  try {
    const response = await fetch(
      `https://blogs-clone-5eedb-default-rtdb.firebaseio.com/blogs/${id}.json`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blog),
      }
    );

    if (!response.ok) throw Error("An error Occured");
  } catch (error) {
    console.log(error);
  }
}
