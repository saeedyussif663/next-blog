import { getAllBlogs } from "@/lib";
import BlogItem from "./BlogItem";

export default async function Blogs() {
  const blogs = await getAllBlogs();

  return (
    <div className="flex flex-col items-center mt-4 md:mt-8 mb-[8rem]">
      {(!blogs || blogs.length === 0) && <p>No Blogs at the moment</p>}
      {blogs?.map((blog) => {
        return <BlogItem key={blog.id} {...blog} />;
      })}
    </div>
  );
}
