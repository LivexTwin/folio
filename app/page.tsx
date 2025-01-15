import { BlogPosts } from "app/components/posts";
import HireMeButton from "./components/HireMeButton";

export default function Page() {
  return (
    <section>
      <h1 className="mb-0.5 text-4xl lg:text-6xl font-semibold tracking-tighter">
        Anthony Molina
      </h1>
      <h3 className="text-sm  dark:text-neutral-400 mb-3">
        Developer & Designer
      </h3>
      <p className="mb-4">
        {`Hey, I'm Anthony, a Designer and Developer based in Atlanta, GA. I love blending creativity and tech to create stunning, functional digital products.`}
      </p>

      <div className="my-8">
        <BlogPosts />
      </div>
      <HireMeButton />
    </section>
  );
}
