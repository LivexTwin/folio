import { BlogPosts } from "app/components/posts";

export const metadata = {
  title: "Blog",
  description: "Read my blog.",
};

export default function Page() {
  return (
    <section className="my-p my-container mx-auto">
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        Welcome to my Blog
      </h1>
      <p className="mb-2 text-neutral-700 dark:text-neutral-400 italic text-sm">
        <strong>Note:</strong> this part of my site is still a work in progress
      </p>
      <p className="mb-8 ">
        I plan to write about recent projects, share more about my personal
        life, and reflect on recent thoughts.
      </p>

      <BlogPosts />
    </section>
  );
}
