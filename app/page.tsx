import { BlogPosts } from "app/components/posts";
import HireMeButton from "./components/HireMeButton";
import Link from "next/link";

export default function Page() {
  return (
    <section className="flex flex-col items-center justify-center">
      <h1 className="text-3xl  md:text-4xl lg:text-5xl my-p font-bold tracking-tighter">
        Anthony Molina
      </h1>
      <h3 className="dark:text-neutral-400 text-lg lg:text-xl font-light mb-6 md:mb-8 lg:mb-10">
        Developer & Designer
      </h3>

      <p className="mb-8 lg:mb-10 text-center text-balance max-w-[280px] lg:max-w-md">
        Atlanta-based, I am driven by concepts to creation, crafting digital
        products that leave a lasting impact.
      </p>

      <div className="flex gap-3 mb-12 md:mb-20">
        <Link href="/projects" className="btn" aria-label="See Projects">
          Projects
        </Link>
        <button className="btn-2 border" aria-label="Download Resume">
          <a href="/resume.pdf" download>
            Resume
          </a>
        </button>
      </div>

      <h2 className="text-2xl text-center md:text-3xl lg:text-4xl font-semibold ">
        Got a project in mind?
      </h2>

      <HireMeButton />

      {/* Blog posts section */}
      <div className="my-m">
        <h2 className="mb-6 text-lg lg:text-xl font-medium">Recent posts </h2>
        <BlogPosts />
      </div>
    </section>
  );
}
