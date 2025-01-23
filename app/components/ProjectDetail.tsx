import Image from "next/image"; // Import Image component

type ProjectProps = {
  projectNumber: string;
  project: {
    title: string;
    mobileImage: string;
    image: string;
    overview: string;
    tech: string[];
    role: string;
  };
};

const ProjectDetail = ({ projectNumber, project }: ProjectProps) => {
  return (
    <div className="max-w-3xl mx-auto px-6 flex flex-col gap-5 md:gap-7">
      {/* Project Number */}
      <div>
        <h1 className="mb-4 text-3xl font-semibold ">
          Project {projectNumber}
        </h1>
      </div>

      {/* Project Title */}
      <div>
        <h2 className="text-xl font-medium ">Title</h2>
        <p className="text-2xl font-semibold">{project.title}</p>
      </div>

      {/* Images Section */}
      <div>
        {/* Mobile Image */}
        <div className="sm:hidden">
          <Image
            src={project.mobileImage}
            alt={`Mobile view of ${project.title}`}
            width={150}
            height={200}
            className="mask-gradient mx-auto"
            priority
          />
        </div>

        {/* Desktop Image Preview */}
        <div className="hidden sm:block">
          <h3 className="text-sm font-semibold dark:text-neutral-400 text-neutral-700 mb-2">
            Large Screen Preview
          </h3>
          <Image
            src={project.image}
            alt={`Desktop view of ${project.title}`}
            width={500}
            height={283}
            className=" rounded-lg shadow-lg "
          />
        </div>
      </div>

      {/* Overview Section */}
      <div>
        <h2 className="mb-4 text-xl font-medium ">Overview</h2>
        <p className="text-base text-neutral-700 dark:text-neutral-400">
          {project.overview}
        </p>
      </div>

      {/* Tech Stack Section */}
      <div>
        <h2 className="mb-4 text-xl font-medium ">Tech Stack</h2>
        <ul className="list-disc pl-5">
          {project.tech.map((tech, index) => (
            <li
              key={index}
              className="text-base text-neutral-700 dark:text-neutral-400"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>

      {/* Role Section */}
      <div>
        <h2 className=" mb-4 text-xl font-medium ">Role</h2>
        <p className="text-base text-neutral-700 dark:text-neutral-400">
          {project.role}
        </p>
      </div>
    </div>
  );
};

export default ProjectDetail;
