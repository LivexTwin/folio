import Link from "next/link";
import Badge from "./Badge";
import { Project } from "data/projects"; // Import the Project type
import RightArrowIcon from "./RightArrowIcon";

const ProjectCard = ({
  project,
  isFeatured,
}: {
  project: Project;
  isFeatured?: boolean;
}) => {
  return (
    <div className="project-card p-4 flex flex-col justify-between">
      <Link href={project.url}>
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-light uppercase mb-2">{project.title}</h2>
          {/* Display the Badge if project is featured */}
          {isFeatured && <Badge label="Featured" />}
        </div>

        <p className="mb-5 lg:text-base text-neutral-700 dark:text-neutral-400 mask-gradient">
          {project.description}
        </p>
      </Link>

      {/* Container for "Made with" and "Role" sections */}
      <div className="flex flex-col gap-4 mb-6">
        <div className="flex flex-col gap-2 ">
          <span className="font-semibold uppercase text-sm max-w-fit rounded-lg ">
            Made with:
          </span>
          <span className="text-sm">{project.tech.join(", ")}</span>
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-semibold uppercase text-sm max-w-fit rounded-lg ">
            Role:
          </span>
          <span className="text-sm">{project.role}</span>
        </div>
      </div>

      <Link
        className="flex items-center gap-2 hover:underline"
        href={project.url}
      >
        <p className="font-medium uppercase">Explore Project</p>
        <RightArrowIcon />
      </Link>
    </div>
  );
};

export default ProjectCard;
