import Blogs from "@/components/Blogs";
import { Suspense } from "react";
import Loader from "./loading";

export default function Home() {
  return (
    <main>
      <h1 className="text-[#404040] text-center uppercase text-lg">Stories</h1>
      <Suspense fallback={<Loader />}>
        <Blogs />
      </Suspense>
    </main>
  );
}
