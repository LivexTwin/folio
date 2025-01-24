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
    designTools?: string[]; // Optional if not all projects have design tools
    designOverview?: string; // Optional if not all projects have a design overview
  };
};

const ProjectDetail = ({ projectNumber, project }: ProjectProps) => {
  return (
    <section className="px-2 pb-4 flex flex-col gap-5 md:gap-7">
      {/* Project Number */}
      <div className=" lg:h-[50dvh] lg:grid place-items-center">
        <div>
          <h1 className="mb-4 text-2xl lg:text-3xl font-semibold uppercase">
            Project {projectNumber}
          </h1>
        </div>

        {/* Project Title */}
        <div className="lg:flex gap-10">
          <h2 className="text-xl font-medium mb-4">Title</h2>
          <p className="text-lg font-semibold uppercase">{project.title}</p>
        </div>
      </div>

      {/* Images Section */}
      <div className="lg:pb-16 ">
        {/* Mobile Image */}
        <div className="sm:hidden">
          <Image
            src={project.mobileImage}
            alt={`Mobile view of ${project.title}`}
            width={180}
            height={230}
            className="mask-gradient mx-auto"
            priority
          />
        </div>

        {/* Desktop Image Preview */}
        <div className="hidden sm:block ">
          <Image
            src={project.image}
            alt={`Desktop view of ${project.title}`}
            width={800}
            height={386}
            className=" rounded-lg shadow-lg mx-auto"
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

      <div className="lg:grid lg:grid-cols-2 lg:gap-10 space-y-10 lg:space-y-0">
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

        {/* Design Tools Section (new) */}
        {project.designTools && (
          <div>
            <h2 className="mb-4 text-xl font-medium ">Design Tools</h2>
            <ul className="list-disc pl-5">
              {project.designTools.map((tool, index) => (
                <li
                  key={index}
                  className="text-base text-neutral-700 dark:text-neutral-400"
                >
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Design Overview Section (new) */}
        {project.designOverview && (
          <div>
            <h2 className="mb-4 text-xl font-medium ">Design Overview</h2>
            <p className="text-base text-neutral-700 dark:text-neutral-400">
              {project.designOverview}
            </p>
          </div>
        )}

        {/* Role Section */}
        <div>
          <h2 className="mb-4 text-xl font-medium ">Role</h2>
          <p className="text-base text-neutral-700 dark:text-neutral-400">
            {project.role}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
