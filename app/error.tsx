"use client";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  console.log(error);
  return (
    <div className="flex justify-center">
      <h2>Something went wrong!</h2>
    </div>
  );
}
