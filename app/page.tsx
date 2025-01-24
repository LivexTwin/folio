import { BlogPosts } from "app/components/posts";
import HireMeButton from "./components/HireMeButton";

export default function Page() {
  return (
    <section className="flex flex-col items-center justify-center pt-8">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
        Anthony Molina
      </h1>
      <h3 className="dark:text-neutral-400 text-lg lg:text-xl font-light mb-6 md:mb-8 lg:mb-10">
        Developer & Designer
      </h3>

      <p className="mb-12 lg:mb-20 text-center max-w-[280px] lg:max-w-md">
        Based in Atlanta, GA, I create and ship digital products that bridge
        design and technology, transforming ideas into dynamic and memorable
        user experiences.
      </p>

      <h2 className="text-2xl text-center md:text-3xl lg:text-4xl font-semibold ">
        Got a project in mind?
      </h2>

      <HireMeButton />

      {/* Blog posts section */}
      <div className="mt-8">
        <h2 className="mb-8 text-lg lg:text-xl font-medium">Recent posts </h2>
        <BlogPosts />
      </div>
    </section>
  );
}
