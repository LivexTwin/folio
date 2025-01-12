import { BlogPosts } from "app/components/posts";
import HireMeButton from "./components/HireMeButton";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">⭑Folio</h1>
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
