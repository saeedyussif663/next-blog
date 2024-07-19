import Actions from "@/components/Actions";
import { getSingleBlog } from "@/lib";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
  const blog = await getSingleBlog(params.id);

  if (!blog) {
    notFound();
  }

  return (
    <div className="w-[90%] mx-auto mb-24 flex flex-col">
      <div>
        <img
          src={`https://mdbcdn.b-cdn.net/img/new/slides/044.jpg`}
          alt={blog.title}
          className="w-full h-[200px] md:h-[400px] mx-auto rounded-md"
        />
      </div>
      <div className="flex flex-col md:flex-row justify-between items-start gap-y-2  mt-4">
        <div className="flex justify-between items-center">
          <img
            src={`https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(26).jpg`}
            alt={blog.author}
            className="w-[25px] md:w-[50px] h-[25px] md:h-[50px] rounded-full"
          />
          <span className="font-extralight text-sm md:text-base m-1 mr-1">
            published on:
          </span>
          <span className="font-extralight m-1 mr-1 underline text-sm md:text-base">
            {blog.dateCreated}
          </span>
          <span className="font-extralight m-1 mr-1 text-sm md:text-base">
            by
          </span>
          <span className="font-extralight m-1 mr-1 text-sm md:text-base">
            {blog.author}
          </span>
        </div>
        <Actions id={params.id} />
      </div>
      <div className="mt-4">
        <h2 className="font-semibold uppercase text-lg">{blog.title}</h2>
        <p className="mt-2">{blog.content}</p>
      </div>
    </div>
  );
}
