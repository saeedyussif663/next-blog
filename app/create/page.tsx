import { createPost } from "@/actions";
import SubmitButton from "@/components/SubmitButton";

export default function Create() {
  return (
    <form
      action={createPost}
      className="flex flex-col gap-4 w-[90%] md:w-3/5 mx-auto my-[100px] mt-[20px]"
    >
      <div className="w-full">
        <label htmlFor="title" className="block">
          Title:
        </label>
        <input
          type="text"
          id="title"
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
          rows={5}
          className="mt-1 w-full  bg-[#d0edf0] border-none px-6 rounded-md outline-[#26c0ab]"
          name="content"
        />
      </div>
      <div className="flex w-full">
        <SubmitButton action="submit" />
      </div>
    </form>
  );
}
