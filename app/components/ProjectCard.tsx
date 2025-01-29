import Link from "next/link";
import Badge from "./Badge";
import { Project } from "data/projects"; // Import the Project type

function RightArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      width="12"
      height="12"
    >
      <path
        fillRule="evenodd"
        d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const ProjectCard = ({
  project,
  isFeatured,
}: {
  project: Project;
  isFeatured: boolean;
}) => {
  return (
    <div className=" border dark:border-none p-4 rounded-lg shadow-md hover:shadow-lg transition duration-200 dark:hover:bg-[#0a0a0a] dark:hover:shadow-[0_1px_2px_rgba(0,0,0,0.16)] dark:transition-[background-color_0.2s,_box-shadow_0.2s] cursor-pointer">
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
        <p className="font-medium uppercase">Explore</p>
        <RightArrowIcon />
      </Link>
    </div>
  );
};

export default ProjectCard;
