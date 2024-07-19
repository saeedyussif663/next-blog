import Link from "next/link";
import { Blog } from "@/types";
import Image from "next/image";

export default function BlogItem({
  id,
  category,
  title,
  author,
  dateCreated,
}: Blog) {
  let randomImage;
  let num = Math.floor(Math.random() * 99 + 1);
  if (num < 10) {
    randomImage = `00${num}`;
  } else if (num >= 10 && num < 100) {
    randomImage = `0${num}`;
  }
  return (
    <Link
      key={id}
      href={`/${id}`}
      className="w-4/5 py-1 mt-6 first:mt-0 flex flex-col md:flex-row relative justify-between items-center shadow-lg md:h-[200px] h-auto rounded-md px-3 md:px-8"
    >
      <div className="flex flex-col md:flex-row gap-2 md:gap-8 items-start md:items-center">
        <div className="w-full md:w-[13rem] mt-2">
          <Image
            src={`https://mdbcdn.b-cdn.net/img/new/slides/${randomImage}.jpg`}
            alt={title}
            width={400}
            height={140}
            priority
            className="rounded-md h-[140px]"
          />
        </div>
        <div className="flex flex-col gap-1 md:gap-4">
          <h4 className="text-[#374151] text-lg font-semibold">{title}</h4>
          <div className="space-y-1 md:space-y-2">
            <p>published by {author}</p>
            <p className="italic">{category}</p>
            <p className="underline text-sm">{dateCreated}</p>
          </div>
        </div>
      </div>

      <p className="italic text-sm">click to view</p>
    </Link>
  );
}
