import { editPost } from "@/actions";
import SubmitButton from "@/components/SubmitButton";
import { getSingleBlog } from "@/lib";
import { notFound } from "next/navigation";

export default async function Edit({ params }: { params: { id: string } }) {
  const blog = await getSingleBlog(params.id);
  const editPostAction = editPost.bind(null, params.id);

  if (!blog) {
    notFound();
  }
  return (
    <form
      className="flex flex-col gap-4 w-[90%] md:w-3/5 mx-auto my-[100px] mt-[20px]"
      action={editPostAction}
    >
      <div className="w-full">
        <label htmlFor="title" className="block">
          Title:
        </label>
        <input
          type="text"
          id="title"
          defaultValue={blog.title}
          className="mt-1 w-full h-[35px] bg-[#d0edf0] border-none text-center rounded-md outline-[#26c0ab]"
          required
          maxLength={70}
          name="title"
        />
      </div>
      <div className="">
        <label htmlFor="author">Author:</label>
        <input
          type="text"
          id="author"
          defaultValue={blog.author}
          className="mt-1 w-full h-[35px] bg-[#d0edf0] border-none text-center rounded-md outline-[#26c0ab]"
          required
          name="author"
          maxLength={70}
        />
      </div>
      <div className="">
        <label htmlFor="category">Category:</label>
        <select
          id="catergory"
          defaultValue={blog.category}
          className="mt-1 w-full h-[35px] bg-[#d0edf0] border-none text-center rounded-md outline-[#26c0ab]"
          name="category"
        >
          <option value="Tech">Tech</option>
          <option value="Food">Food</option>
          <option value="Finance">Finance</option>
          <option value="Travel">Travel</option>
          <option value="Politics">Politics</option>
          <option value="Inspiration">Inspiration</option>
        </select>
      </div>
      <div className="">
        <label htmlFor="content">Content:</label>
        <textarea
          required
          id="content"
          defaultValue={blog.content}
          rows={5}
          className="mt-1 w-full  bg-[#d0edf0] border-none px-6 rounded-md outline-[#26c0ab]"
          name="content"
        />
      </div>
      <div className="flex w-full">
        <SubmitButton action="edit" />
      </div>
    </form>
  );
}
