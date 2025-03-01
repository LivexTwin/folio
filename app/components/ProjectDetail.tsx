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
    githubUrl?: string;
    liveSiteUrl?: string;
  };
};

const ProjectDetail = ({ projectNumber, project }: ProjectProps) => {
  return (
    <section className="pb-8 md:pb-16  flex flex-col gap-5 md:gap-7 ">
      {/* Project Number */}
      <div className=" lg:custom-h-screen md:my-container md:mx-auto lg:grid grid-cols-[1fr_2fr] lg lg:items-center  pt-8 lg:pt-0">
        <div>
          <h1 className="mb-4 text-3xl lg:text-4xl font-semibold tracking-wide  uppercase">
            Project {projectNumber}
          </h1>
          {/* Project Title */}
          <div className="lg:flex gap-10">
            <p className="text-xl font-medium mb-4">Title</p>
            <p className="text-lg font-semibold uppercase">{project.title}</p>
          </div>
        </div>

        {/* Images Section */}
        <div className="lg:pb-16 pt-8 pb-8 ">
          {/* Mobile Image */}
          <div className="sm:hidden">
            <Image
              src={project.mobileImage}
              alt={`Mobile view of ${project.title}`}
              width={180}
              height={230}
              className="mask-gradient mx-auto "
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
              className=" rounded-2xl shadow-lg mx-auto"
            />
          </div>
        </div>
      </div>

      {/* Overview Section */}

      <div className="my-container mx-auto">
        <h2 className="mb-4 lg:mb-8 text-2xl lg:text-3xl tracking-wide  font-semibold uppercase">
          Project Info:
        </h2>
        {/* Grid layout: 2 columns on large screens */}
        <div className="lg:grid lg:grid-cols-3 lg:gap-10 space-y-10 lg:space-y-0">
          {/* Overview Section: Span 2 columns on large screens */}
          <div className="lg:col-span-2">
            <h3 className="mb-4 text-xl font-medium">Overview</h3>
            <p className="mb-8 ml-2 text-neutral-700 dark:text-neutral-400 text-balance">
              {project.overview}
            </p>
          </div>

          {/* Technical Section: Place in right column */}
          <div>
            <h3 className="mb-4 text-xl font-medium">Technical</h3>
            <ul>
              {project.tech.map((tech, index) => (
                <li
                  key={index}
                  className="ml-2 text-neutral-700 dark:text-neutral-400"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          {/* Design Overview Section: Span 2 columns on large screens */}
          {project.designOverview && (
            <div className="lg:col-span-2">
              <h3 className="mb-4 text-xl font-medium">Design Overview</h3>
              <p className="ml-2 text-neutral-700 dark:text-neutral-400 text-balance">
                {project.designOverview}
              </p>
            </div>
          )}

          {/* Design Tools Section: Place in right column */}
          {project.designTools && (
            <div>
              <h3 className="mb-4 text-xl font-medium">Design Tools</h3>
              <ul>
                {project.designTools.map((tool, index) => (
                  <li
                    key={index}
                    className="ml-2 text-neutral-700 dark:text-neutral-400"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Role Section: Center below the others */}
          <div className="lg:col-span-3 lg:pt-16 text-center">
            <h3 className="mb-4 text-xl font-medium">Role</h3>
            <p className="text-neutral-700 dark:text-neutral-400">
              {project.role}
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-4 lg:gap-10 justify-center pt-8 md:pt-12 lg:pt-16 pb-8 lg:text-lg">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-2 border"
          aria-label="Visit GitHub profile"
        >
          See Code
        </a>
        <a
          href={project.liveSiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
          aria-label="Visit live site"
        >
          Visit Site
        </a>
      </div>
    </section>
  );
};

export default ProjectDetail;
