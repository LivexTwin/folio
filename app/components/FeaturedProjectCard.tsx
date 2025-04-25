import { Project } from "data/projects";
import Badge from "./Badge";
import Link from "next/link";
import Image from "next/image";
import RightArrowIcon from "./RightArrowIcon";

const FeaturedProjectCard = ({ project }: { project: Project }) => {
  return (
    <Link href={project.url}>
      <div className="flex flex-col lg:flex-row gap-4 project-card">
        <div className="flex-1 order-2 lg:order-1 p-4 lg:p-8">
          {" "}
          {/* The content part */}
          <div className="md:flex flex-row items-center justify-between mb-6">
            <h2 className="text-2xl lg:text-3xl mb-4 md:mb-0 uppercase font-bold ">
              {project.title}
            </h2>
            <Badge label="Featured" />
          </div>
          <p className="mb-5 lg:text-base text-neutral-700 dark:text-neutral-400 mask-gradient text-balance">
            {project.description}
          </p>
          <div className="flex items-center gap-2 hover:underline">
            <p className="font-medium uppercase">Explore Project</p>
            <RightArrowIcon />
          </div>
        </div>

        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={500}
          className="w-full lg:w-[40%] rounded-tl-lg rounded-bl-none rounded-tr-lg lg:rounded-tl-none lg:rounded-br-lg object-cover order-1 lg:order-2"
          priority={true}
        />
      </div>
    </Link>
  );
};

export default FeaturedProjectCard;
